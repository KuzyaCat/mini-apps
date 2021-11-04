import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserFilters } from './dto/user-filters.dto';
import { User } from './schemas/user.schema';
import { Swipe } from '../swipes/schemas/swipe.schema';
import { UserEvent } from '../events/schemas/user-event.schema';
import { UsersRepository } from './users.repository';
import { UsersEventsRepository } from '../events/users-events.repository';
import { SwipesService } from '../swipes/swipes.service';
import { EventsRepository } from '../events/events.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly usersEventsRepository: UsersEventsRepository,
    private swipesService: SwipesService,
  ) {}

  async getUserById(id: string): Promise<User> {
    return this.usersRepository.findOne({ id });
  }

  async getUserByLogin(login: string): Promise<User> {
    return this.usersRepository.findOne({ login });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async getEventOpponents(userId: string, filters: UserFilters): Promise<User[]> {
    const userSwipes: Swipe[] = await this.swipesService.getUserSwipes(userId);
    const swipesUserIds: string[] = userSwipes.map((swipe: Swipe) => swipe.opponentId);

    const userEvents: UserEvent[] = await this.usersEventsRepository.find({ eventId: filters.eventId });
    const eventUserIds: string[] = userEvents.map((event: UserEvent) => event.userId);

    const userIdsNotSwiped: string[] = eventUserIds.filter((id: string) => !swipesUserIds.includes(id) && id !== userId);

    return this.usersRepository.find({
      id: { $in: userIdsNotSwiped },
      ...(filters.gender) && { gender: filters.gender },
    });
  }

  async createUser(userDto: CreateUserDto): Promise<User> {
    return this.usersRepository.create({
      ...userDto,
      id: uuidv4(),
      createdAt: new Date(),
    });
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }
}
