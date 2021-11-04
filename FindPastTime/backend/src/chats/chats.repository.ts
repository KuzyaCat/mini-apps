import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Chat, ChatDocument } from './schemas/chat.schema';

@Injectable()
export class ChatsRepository {
  constructor(@InjectModel(Chat.name) private chatModel: Model<ChatDocument>) {}

  async findOne(chatFilterQuery: FilterQuery<Chat>): Promise<Chat> {
    return this.chatModel.findOne(chatFilterQuery);
  }

  async find(chatFilterQuery: FilterQuery<Event>): Promise<Chat[]> {
    return this.chatModel.find(chatFilterQuery)
  }

  async create(chat: Chat): Promise<Chat> {
    const newChat = new this.chatModel(event);
    return newChat.save()
  }

  async findOneAndUpdate(chatFilterQuery: FilterQuery<Chat>, chat: Partial<Event>): Promise<Chat> {
    return this.chatModel.findOneAndUpdate(chatFilterQuery, chat, { new: true });
  }
}

