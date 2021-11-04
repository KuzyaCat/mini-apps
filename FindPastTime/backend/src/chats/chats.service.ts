import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Chat } from './schemas/chat.schema';
import { ChatsRepository } from './chats.repository';

@Injectable()
export class ChatsService {
  constructor(
    private readonly chatsRepository: ChatsRepository,
  ) {}

  async getUserChats(userId: string): Promise<Chat[]> {
    return this.chatsRepository.find({ 'user.id': userId });
  }
}

