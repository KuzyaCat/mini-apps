import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

import { Swipe, SwipeSchema } from './schemas/swipe.schema';
import { SwipesController } from './swipes.controller';
import { SwipesService } from './swipes.service';
import { SwipesRepository } from './swipes.repository';
import { MatchesModule } from '../matches/matches.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Swipe.name, schema: SwipeSchema }]),
    forwardRef(() => UsersModule),
    forwardRef(() => MatchesModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
    }),
  ],
  controllers: [SwipesController],
  providers: [SwipesService, SwipesRepository],
  exports: [SwipesService, SwipesRepository],
})
export class SwipesModule {}

