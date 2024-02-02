import { Injectable } from '@nestjs/common';

@Injectable()
export class StatesService {
  findAll() {
    return `This action returns all states`;
  }

  findOne(id: string) {
    return `This action returns a single state`;
  }
}
