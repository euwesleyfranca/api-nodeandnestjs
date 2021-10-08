import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PlaceStatus } from '../places-status.enum';

export class GetPlacesFilterDto {
  @IsOptional()
  @IsEnum(PlaceStatus)
  status?: PlaceStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
