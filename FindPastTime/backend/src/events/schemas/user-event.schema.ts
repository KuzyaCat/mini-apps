import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserEventDocument = UserEvent & Document;

@Schema()
export class UserEvent {
  @Prop()
  id: string;

  @Prop()
  userId: string;

  @Prop()
  eventId: string;

  @Prop()
  createdAt: Date;
}

export const UserEventSchema = SchemaFactory.createForClass(UserEvent);
