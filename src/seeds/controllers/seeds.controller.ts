import { Controller, Get, HttpCode } from '@nestjs/common';
import { SeedsService } from '../services/seeds.service';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

@Controller('seeds')
@ApiTags('Seeds')
export class SeedsController {
  constructor(private readonly seedsService: SeedsService) {}

  @HttpCode(201)
  @ApiOperation({
    description: 'This route populates the states collection',
    summary: 'Populate the states collection',
  })
  @ApiCreatedResponse({
    description: 'State collection has been populated successfully',
  })
  @ApiConflictResponse({
    description: 'State collection data already exists',
  })
  @ApiInternalServerErrorResponse({
    description: 'Something went wrong',
  })
  @Get('states')
  populateStates() {
    return this.seedsService.populateStates();
  }
}
