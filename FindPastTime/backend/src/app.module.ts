import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SwipesModule } from './swipes/swipes.module';
import { EventsModule } from './events/events.module';
import { ChatsModule } from './chats/chats.module';

require('dotenv').config();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '.', 'public'),
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@findpasttime.kcuol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
    UsersModule,
    AuthModule,
    SwipesModule,
    EventsModule,
    ChatsModule,
  ],
  controllers: [],
  providers: [],
  exports: [JwtModule],
})
export class AppModule {}
