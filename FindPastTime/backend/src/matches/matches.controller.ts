import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateMatchDto } from '../matches/dto/create-match.dto';
import { Match } from '../matches/schemas/match.schema';
import { MatchesService } from './matches.service';

@ApiTags('Matches')
@Controller('matches')
export class MatchesController {
  constructor(private matchesService: MatchesService) {}

  @ApiOperation({ summary: 'Get user matches' })
  @ApiResponse({ status: 200, type: [Match] })
  @Get('/:id')
  getUserMatches(@Param('id') id: string) {
    return this.matchesService.getUserMatches(id);
  }
}

