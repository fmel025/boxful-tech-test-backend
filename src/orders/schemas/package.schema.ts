import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Package {
  @Prop()
  height: number;

  @Prop()
  length: number;

  @Prop()
  width: number;

  @Prop()
  poundsWeight: number;

  @Prop()
  content: string;
}

export const PackageSchema = SchemaFactory.createForClass(Package);
