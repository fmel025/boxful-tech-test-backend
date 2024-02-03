import { State, StateDocument } from '@States/schemas/state.schema';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { statesData } from '@Common/data';

@Injectable()
export class SeedsService {
  constructor(
    @InjectModel(State.name) private readonly stateModel: Model<StateDocument>,
  ) {}

  async populateStates() {
    const statesDocuments = await this.stateModel.find({});
    const states = statesDocuments.map((state) => state.name);
    const areStatesDuplicated = statesData.some((state) => {
      return states.includes(state.name);
    });

    if (areStatesDuplicated)
      throw new ConflictException('The states already exists on the database');

    try {
      await this.stateModel.insertMany(statesData);
      return 'The states collection has been populated successfully';
    } catch (error) {
      throw new InternalServerErrorException('Oops, something went wrong');
    }
  }
}
