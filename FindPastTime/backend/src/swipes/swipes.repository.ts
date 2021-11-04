import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Swipe, SwipeDocument } from './schemas/swipe.schema';

@Injectable()
export class SwipesRepository {
  constructor(@InjectModel(Swipe.name) private swipeModel: Model<SwipeDocument>) {}

  async findOne(swipeFilterQuery: FilterQuery<Swipe>): Promise<Swipe> {
    return this.swipeModel.findOne(swipeFilterQuery);
  }

  async find(swipeFilterQuery: FilterQuery<Swipe>): Promise<Swipe[]> {
    return this.swipeModel.find(swipeFilterQuery)
  }

  async create(swipe: Swipe): Promise<Swipe> {
    const newSwipe = new this.swipeModel(swipe);
    return newSwipe.save()
  }

  async findOneAndUpdate(swipeFilterQuery: FilterQuery<Swipe>, swipe: Partial<Swipe>): Promise<Swipe> {
    return this.swipeModel.findOneAndUpdate(swipeFilterQuery, swipe, { new: true });
  }
}

