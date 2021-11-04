import { Body, Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateSwipeDto } from '../swipes/dto/create-swipe.dto';
import { Swipe } from '../swipes/schemas/swipe.schema';
import { Match } from '../matches/schemas/match.schema';
import { SwipesService } from './swipes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Swipes')
@Controller('swipes')
export class SwipesController {

  constructor(private swipesService: SwipesService) {}

  @ApiOperation({ summary: 'Get user swipes' })
  @ApiResponse({ status: 200, type: [Swipe] })
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getUserSwipes(@Param('id') id: string) {
    return this.swipesService.getUserSwipes(id);
  }

  @ApiOperation({ summary: 'Create user swipe' })
  @ApiResponse({ status: 200, type: Swipe })
  @UseGuards(JwtAuthGuard)
  @Post('/')
  createSwipe(@Body() swipeDto: CreateSwipeDto) {
    return this.swipesService.createSwipe(swipeDto);
  }

  @ApiOperation({ summary: 'Check if users have a match' })
  @ApiResponse({ status: 200, type: [Match] })
  @UseGuards(JwtAuthGuard)
  @Post('/check')
  checkMatch(@Body() swipeDto: Pick<CreateSwipeDto, 'userId' | 'opponentId'>) {
    return this.swipesService.checkMatch(swipeDto.userId, swipeDto.opponentId);
  }
}

