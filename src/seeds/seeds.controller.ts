import { Controller, Get, HttpCode } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';

@Controller('seeds')
@ApiTags('Seeds')
export class SeedsController {
  constructor(private readonly seedsService: SeedsService) {}

  @HttpCode(201)
  @ApiOperation({
    description: 'This route populates the states collection',
    summary: 'Populate the states collection'
  })
  @ApiCreatedResponse({
    description: 'State collection has been populated successfully',
  })
  @Get('states')
  populateStates() {
    return this.seedsService.populateStates();
  }
}
