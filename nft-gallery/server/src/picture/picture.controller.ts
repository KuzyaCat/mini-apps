import { Param, Controller, Get } from '@nestjs/common';

import { PicturesService } from './picture.service';
import { GetPictureParams } from './dto/get-picture.dto';

@Controller('pictures')
export class PicturesController {
  constructor(private picturesService: PicturesService) {}

  @Get()
  getAll() {
    return this.picturesService.getAll();
  }

  @Get('/:id')
  getById(@Param() dto: GetPictureParams) {
    return this.picturesService.getById(dto);
  }
}
