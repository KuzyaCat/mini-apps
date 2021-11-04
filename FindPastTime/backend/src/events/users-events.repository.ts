import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { UserEvent, UserEventDocument } from './schemas/user-event.schema';

@Injectable()
export class UsersEventsRepository {
  constructor(
    @InjectModel(UserEvent.name) private userEventModel: Model<UserEventDocument>,
  ) {}

  async findOne(eventFilterQuery: FilterQuery<Event>): Promise<UserEvent> {
    return this.userEventModel.findOne(eventFilterQuery);
  }

  async find(eventFilterQuery: FilterQuery<Event>): Promise<UserEvent[]> {
    return this.userEventModel.find(eventFilterQuery)
  }

  async create(event: UserEvent): Promise<UserEvent> {
    const newEvent = new this.userEventModel(event);
    return newEvent.save()
  }

  async findOneAndUpdate(
    eventFilterQuery: FilterQuery<Event>,
    userEvent: Partial<UserEvent>,
  ): Promise<UserEvent> {
    return this.userEventModel.findOneAndUpdate(eventFilterQuery, event, { new: true });
  }
}
