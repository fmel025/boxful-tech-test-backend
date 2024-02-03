import { Controller, Get } from '@nestjs/common';
import { StatesService } from '../services/states.service';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
} from '@nestjs/swagger';

@ApiTags('States')
@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @ApiOperation({
    description:
      'This route gets all the states, including their cities and collection points',
    summary: 'Get all the states',
  })
  @ApiOkResponse({
    description: 'All states have been found',
  })
  @Get()
  async findAll() {
    return await this.statesService.findAll();
  }
}
