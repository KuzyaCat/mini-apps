import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { User } from '../../users/schemas/user.schema';

export type MatchDocument = Match & Document;

@Schema()
export class Match {
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
  name: string;
  image: string;
  age: number;
}

export const MatchSchema = SchemaFactory.createForClass(Match);

