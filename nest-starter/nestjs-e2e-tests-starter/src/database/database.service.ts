import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectible()
export class DatabaseService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  getDbHandle(): Connection {
    return this.connection;
  }
}
