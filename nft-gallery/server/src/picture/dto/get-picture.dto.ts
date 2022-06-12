import { IsNotEmpty } from 'class-validator';

export class GetPictureParams {
  @IsNotEmpty()
  id: number;
}
