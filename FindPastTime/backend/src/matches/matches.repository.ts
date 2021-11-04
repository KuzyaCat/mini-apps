import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Match, MatchDocument } from './schemas/match.schema';

@Injectable()
export class MatchesRepository {
  constructor(@InjectModel(Match.name) private matchModel: Model<MatchDocument>) {}

  async findOne(matchFilterQuery: FilterQuery<Match>): Promise<Match> {
    return this.matchModel.findOne(matchFilterQuery);
  }

  async find(matchFilterQuery: FilterQuery<Match>): Promise<Match[]> {
    return this.matchModel.find(matchFilterQuery)
  }

  async create(match: Match): Promise<Match> {
    const newMatch = new this.matchModel(match);
    return newMatch.save()
  }

  async findOneAndUpdate(matchFilterQuery: FilterQuery<Match>, match: Partial<Match>): Promise<Match> {
    return this.matchModel.findOneAndUpdate(matchFilterQuery, match, { new: true });
  }
}

