import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './types/state.type';
import { UpdateStateDto } from './types/update-state.dto';

@Injectable()
export class StatesService {
  create(createStateDto: CreateStateDto) {
    return 'This action adds a new state';
  }

  findAll() {
    return `This action returns all states`;
  }

  findOne(id: number) {
    return `This action returns a #${id} state`;
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return `This action updates a #${id} state`;
  }

  remove(id: number) {
    return `This action removes a #${id} state`;
  }
}
