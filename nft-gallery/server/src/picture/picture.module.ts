import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Picture } from './picture.entity';
import { PicturesService } from './picture.service';
import { PicturesController } from './picture.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Picture])],
  controllers: [],
  providers: [PicturesService, PicturesController],
  exports: [],
})
export class PicturesModule {}
