import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Chat } from './schemas/chat.schema';
import { ChatsService } from './chats.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Chats')
@Controller('chats')
export class ChatsController {
  constructor(private chatsService: ChatsService) {}

  @ApiOperation({ summary: 'Get user chats' })
  @ApiResponse({ status: 200, type: [Chat] })
  @UseGuards(JwtAuthGuard)
  @Get('/')
  getUserChats(@Req() req) {
    return this.chatsService.getUserChats(req.user.id);
  }
}

