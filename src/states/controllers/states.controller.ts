import { Controller, Get, Param } from '@nestjs/common';
import { StatesService } from '../services/states.service';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiParam,
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

  @ApiOperation({
    description:
      'This route gets a single state with its cities and collection points',
    summary: 'Get state by id',
  })
  @ApiOkResponse({
    description: 'State has been found successfully',
  })
  @ApiParam({
    name: 'id',
    type: String,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.statesService.findOne(id);
  }
}
