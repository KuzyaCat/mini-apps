import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { User } from '../../users/schemas/user.schema';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  city: string;

  @Prop()
  image?: string;

  @Prop()
  startAt: Date;

  @Prop()
  createdAt: Date;

  isRegistered?: Boolean;
}

interface IUser {
  name: string;
  image: string;
  age: number;
}

export const EventSchema = SchemaFactory.createForClass(Event);

