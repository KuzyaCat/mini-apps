import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Event, EventDocument } from './schemas/event.schema';

@Injectable()
export class EventsRepository {
  constructor(@InjectModel(Event.name) private eventModel: Model<EventDocument>) {}

  async findOne(eventFilterQuery: FilterQuery<Event>): Promise<EventDocument> {
    return this.eventModel.findOne(eventFilterQuery);
  }

  async find(eventFilterQuery: FilterQuery<Event>): Promise<EventDocument[]> {
    return this.eventModel.find(eventFilterQuery)
  }

  async create(event: Event): Promise<EventDocument> {
    const newEvent = new this.eventModel(event);
    return newEvent.save()
  }

  async findOneAndUpdate(eventFilterQuery: FilterQuery<Event>, event: Partial<Event>): Promise<EventDocument> {
    return this.eventModel.findOneAndUpdate(eventFilterQuery, event, { new: true });
  }
}


