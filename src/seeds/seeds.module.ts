import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { SeedsController } from './seeds.controller';
import { StatesModule } from '@States/states.module';

@Module({
  imports: [StatesModule],
  controllers: [SeedsController],
  providers: [SeedsService],
})
export class SeedsModule {}
