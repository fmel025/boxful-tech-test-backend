import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { CreateOrderDto } from '../dto/create-order.dto';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

@Controller('orders')
@ApiTags('Orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({
    description: 'This endpoint creates a new order',
    summary: 'Create a new order',
  })
  @ApiCreatedResponse({
    description: 'Order created successfully',
  })
  @ApiBadRequestResponse({
    description: 'Invalid body data',
  })
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    // Boxful API requirement
    console.log(createOrderDto);
    return await this.ordersService.create(createOrderDto);
  }

  @ApiOperation({
    description: 'This endpoint retrieves all the orders. Used for test purposes',
    summary: 'Get all the orders',
  })
  @ApiOkResponse({
    description: 'Orders retrieved successfully',
  })
  @Get()
  async findAll() {
    return await this.ordersService.findAll();
  }
}
