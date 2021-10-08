import { IsEnum } from 'class-validator';
import { PlaceStatus } from '../places-status.enum';

export class UpdatePlaceStatusDto {
  @IsEnum(PlaceStatus)
  status: PlaceStatus;
}
