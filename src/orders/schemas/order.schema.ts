import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Package, PackageSchema } from './package.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  collectingAddress: string;

  @Prop({ type: Date })
  date: Date;

  @Prop()
  names: string;

  @Prop({ type: [PackageSchema] })
  packages: Package[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
