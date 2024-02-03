import { Module } from '@nestjs/common';
import { SeedsService } from './services/seeds.service';
import { SeedsController } from './controllers/seeds.controller';
import { StatesModule } from '@States/states.module';

@Module({
  imports: [StatesModule],
  controllers: [SeedsController],
  providers: [SeedsService],
})
export class SeedsModule {}
