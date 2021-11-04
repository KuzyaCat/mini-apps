import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

import { Event, EventSchema } from './schemas/event.schema';
import { UserEvent, UserEventSchema } from './schemas/user-event.schema';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { EventsRepository } from './events.repository';
import { UsersEventsRepository } from './users-events.repository';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Event.name, schema: EventSchema },
      { name: UserEvent.name, schema: UserEventSchema },
    ]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
    }),
    forwardRef(() => UsersModule),
  ],
  controllers: [EventsController],
  providers: [EventsService, EventsRepository, UsersEventsRepository],
  exports: [EventsService, EventsRepository, UsersEventsRepository],
})
export class EventsModule {}

