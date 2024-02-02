import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedsService {
  populateStates() {
    return `This action populates the state collection`;
  }
}
