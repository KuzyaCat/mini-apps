import { Body, Controller, Req, Get, Post, Param, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateEventDto } from '../events/dto/create-event.dto';
import { CreateUserEventDto } from './dto/create-user-event.dto';
import { Event } from '../events/schemas/event.schema';
import { EventsService } from './events.service';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @ApiOperation({ summary: 'Get event by id' })
  @ApiResponse({ status: 200, type: Event })
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getUserEvents(
    @Req() req,
    @Param('id') id: string
  ) {
    return this.eventsService.getEventById(req.user.id, id);
  }

  @ApiOperation({ summary: 'Create user event' })
  @ApiResponse({ status: 200, type: Event })
  @Post('/user')
  createUserEvent(@Body() createUserEventDto: CreateUserEventDto) {
    return this.eventsService.createUserEvent(createUserEventDto);
  }

  @ApiOperation({ summary: 'Get events by city' })
  @ApiResponse({ status: 200, type: [Event] })
  @Get('/city/:id')
  getEventsByCity(@Param('id') id: string) {
    return this.eventsService.getEventsByCity(id);
  }

  @ApiOperation({ summary: 'Create event' })
  @ApiResponse({ status: 200, type: Event })
  @Post('/')
  createEvent(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.createEvent(createEventDto);
  }
}

