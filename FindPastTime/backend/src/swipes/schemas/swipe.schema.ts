import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SwipeDocument = Swipe & Document;

@Schema()
export class Swipe {
  @Prop()
  id: string;

  @Prop()
  userId: string;

  @Prop()
  opponentId: string;

  @Prop()
  isLike: boolean;

  @Prop()
  createdAt: Date;
}

export const SwipeSchema = SchemaFactory.createForClass(Swipe);

