import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
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
    description: 'It creates a new order',
    summary: 'Create a new order',
  })
  @ApiCreatedResponse({
    description: 'Order created successfully',
  })
  @ApiBadRequestResponse({
    description: 'Invalid body data',
  })
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @ApiOperation({
    description: 'It retrieves all the orders',
    summary: 'Get all the orders',
  })
  @ApiOkResponse({
    description: 'Orders retrieved successfully',
  })
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }
}
