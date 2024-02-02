import { Controller, Get, HttpCode } from '@nestjs/common';
import { SeedsService } from './seeds.service';

@Controller('seeds')
export class SeedsController {
  constructor(private readonly seedsService: SeedsService) {}

  @HttpCode(201)
  @Get('states')
  populateStates() {
    return this.seedsService.populateStates();
  }
}
