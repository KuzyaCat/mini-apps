import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Picture } from './picture.entity';
import { GetPictureParams } from './dto/get-picture.dto';

@Injectable()
export class PicturesService {
  constructor(
    @InjectRepository(Picture) private pictureRepository: Repository<Picture>,
  ) {}

  public async getAll(): Promise<Picture[]> {
    return this.pictureRepository.find({});
  }

  public getById(getPictureParams: GetPictureParams): Promise<Picture> {
    return this.pictureRepository.findOne({
      where: {
        id: getPictureParams.id,
      },
    });
  }
}
