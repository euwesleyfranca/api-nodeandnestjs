import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { GetPlacesFilterDto } from './dto/get-places-filter.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdatePlaceStatusDto } from './dto/update-place-status.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Place } from './place.entity';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private placesServices: PlacesService) {}

  @Get('/:id')
  getPlaceById(@Param('id') id: string): Promise<Place> {
    return this.placesServices.getPlaceById(id);
  }

  @Post()
  createPlace(@Body() createPlaceDto: CreatePlaceDto): Promise<Place> {
    return this.placesServices.createPlace(createPlaceDto);
  }

  @Get()
  getPlaces(@Query() filterDto: GetPlacesFilterDto): Promise<Place[]> {
    return this.placesServices.getPlaces(filterDto);
  }

  @Patch('/:id/status')
  updatePlaceStatus(
    @Param('id') id: string,
    @Body() updatePlaceStatusDto: UpdatePlaceStatusDto,
  ): Promise<Place> {
    const { status } = updatePlaceStatusDto;
    return this.placesServices.updatePlaceStatus(id, status);
  }

  @Patch('/:id/profile')
  updateProfile(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<Place> {
    const { name, site, address, image, ticket, description } =
      updateProfileDto;
    return this.placesServices.updateProfile(
      id,
      name,
      site,
      address,
      image,
      ticket,
      description,
    );
  }

  @Delete('/:id')
  deletePlace(@Param('id') id: string): Promise<void> {
    return this.placesServices.deletePlace(id);
  }
}
