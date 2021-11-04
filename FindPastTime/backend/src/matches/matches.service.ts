import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateMatchDto } from './dto/create-match.dto';
import { Match } from './schemas/match.schema';
import { MatchesRepository } from './matches.repository';

@Injectable()
export class MatchesService {
  constructor(private readonly matchesRepository: MatchesRepository) {}

  async getUserMatches(userId: string): Promise<Match[]> {
    return this.matchesRepository.find({ userId });
  }

  async createMatch(matchDto: CreateMatchDto): Promise<Match[]> {
    const promises = [
      this.matchesRepository.create({
        ...matchDto,
        id: uuidv4(),
        createdAt: new Date(),
      }),
      this.matchesRepository.create({
        ...matchDto,
        user: matchDto.opponent,
        opponent: matchDto.user,
        id: uuidv4(),
        createdAt: new Date(),
      }),
    ];

    return Promise.all(promises);
  }
}


