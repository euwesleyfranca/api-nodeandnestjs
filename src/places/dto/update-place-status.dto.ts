import { IsEnum } from 'class-validator';
import { PlaceStatus } from '../places.model';

export class UpdatePlaceStatusDto {
  @IsEnum(PlaceStatus)
  status: PlaceStatus;
}
