import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  login: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  city: string;

  @Prop()
  age: number;

  @Prop()
  gender: string;

  @Prop()
  description: string;

  @Prop()
  image?: string;

  @Prop()
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
