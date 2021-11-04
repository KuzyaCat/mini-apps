import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateSwipeDto } from './dto/create-swipe.dto';
import { Swipe } from './schemas/swipe.schema';
import { Match } from '../matches/schemas/match.schema';
import { SwipesRepository } from './swipes.repository';
import { MatchesService } from '../matches/matches.service';
import { UsersService } from '../users/users.service';
import { ValidationException } from '../exceptions/validation.exception';

@Injectable()
export class SwipesService {
  constructor(
    private readonly swipesRepository: SwipesRepository,
    private matchesService: MatchesService,
    @Inject(forwardRef(() => UsersService)) private usersService: UsersService,
  ) {}

  async getUserSwipes(userId: string): Promise<Swipe[]> {
    return this.swipesRepository.find({ userId });
  }

  async checkMatch(userId: string, opponentId: string): Promise<Partial<Match>[] | null> {
    const userOpponentSwipe = await this.swipesRepository.findOne({ userId: opponentId, opponentId: userId });
    if (userOpponentSwipe?.isLike) {
      const user = await this.usersService.getUserById(userId);
      const opponent = await this.usersService.getUserById(userId);

      if (!user || !opponent) {
        throw new ValidationException({ message: 'User not found' });
      }
  
      return this.matchesService.createMatch({
        user: { image: user.image, name: user.name, age: user.age },
        opponent: { image: opponent.image, name: opponent.name, age: opponent.age },
      });
    }
  }

  async createSwipe(swipeDto: CreateSwipeDto): Promise<Swipe> {
    return this.swipesRepository.create({
      ...swipeDto,
      id: uuidv4(),
      createdAt: new Date(),
    });
  }
}

