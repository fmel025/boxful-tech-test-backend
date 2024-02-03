import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<State>;

@Schema()
export class State {
  @Prop({ unique: true })
  name: string;

  @Prop({ type: [String] })
  cities: string[];

  @Prop({ type: [String] })
  collectionPoints: string[];
}

export const StateSchema = SchemaFactory.createForClass(State);
