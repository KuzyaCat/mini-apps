import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateEventDto } from './dto/create-event.dto';
import { CreateUserEventDto } from './dto/create-user-event.dto';
import { Event } from './schemas/event.schema';
import { UserEvent } from './schemas/user-event.schema';
import { EventsRepository } from './events.repository';
import { UsersEventsRepository } from './users-events.repository';
import { UsersService } from '../users/users.service';

@Injectable()
export class EventsService {
  constructor(
    private readonly eventsRepository: EventsRepository,
    private readonly usersEventsRepository: UsersEventsRepository,
    private usersService: UsersService,
  ) {}

  async getEventById(userId: string, id: string): Promise<Event> {
    const userEvent = await this.usersEventsRepository.findOne({ userId, eventId: id });
    const event = await this.eventsRepository.findOne({ id });
    const isRegistered = !!userEvent;
    if (!event) {
      return null;
    }
    return {
      ...event.toJSON(),
      isRegistered,
    };
  }

  async getUserEvents(userId: string): Promise<Event[]> {
    return this.eventsRepository.find({ userId });
  }

  async getEventsByCity(userId: string): Promise<Event[]> {
    const user = await this.usersService.getUserById(userId);
    return this.eventsRepository.find({
      city: user?.city.trim(),
    });
  }

  async createEvent(eventDto: CreateEventDto): Promise<Event> {
    return this.eventsRepository.create({
      ...eventDto,
      id: uuidv4(),
      createdAt: new Date(),
    });
  }

  async createUserEvent(userEventDto: CreateUserEventDto): Promise<UserEvent> {
    console.log(userEventDto);
    return this.usersEventsRepository.create({
      ...userEventDto,
      id: uuidv4(),
      createdAt: new Date(),
    });
  }
}

