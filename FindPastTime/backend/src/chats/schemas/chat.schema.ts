import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { User } from '../../users/schemas/user.schema';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop()
  id: string;

  @Prop({ type: User })
  user: IUser;

  @Prop({ type: User })
  opponent: IUser;

  @Prop()
  createdAt: Date;
}

interface IUser {
  id: string;
  name: string;
  image: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);

