import { State } from '@States/schemas/state.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StatesService {
  constructor(
    @InjectModel(State.name) private readonly stateModel: Model<State>,
  ) {}

  async findAll(): Promise<State[]> {
    return await this.stateModel.find({});
  }

  async findOne(id: string): Promise<State> {
    return await this.stateModel.findById(id);
  }
}
