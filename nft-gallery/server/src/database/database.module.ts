import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configService } from '../config/config.service';

@Module({
  controllers: [],
  providers: [],
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  exports: [],
})
export class DatabaseModule {}
