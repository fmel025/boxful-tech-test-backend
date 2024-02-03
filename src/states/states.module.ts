import { Module } from '@nestjs/common';
import { StatesService } from './services/states.service';
import { StatesController } from './controllers/states.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { State, StateSchema } from './schemas/state.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: State.name,
        schema: StateSchema,
      },
    ]),
  ],
  controllers: [StatesController],
  providers: [StatesService],
  exports: [MongooseModule],
})
export class StatesModule {}
