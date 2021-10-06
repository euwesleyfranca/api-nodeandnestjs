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
import { Place } from './places.model';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private placesServices: PlacesService) {}
  @Get()
  getPlaces(@Query() filterDto: GetPlacesFilterDto): Place[] {
    if (Object.keys(filterDto).length) {
      return this.placesServices.getPlacesWithFilters(filterDto);
    } else {
      return this.placesServices.getAllPlaces();
    }
  }

  @Get('/:id')
  getPlaceById(@Param('id') id: string): Place {
    return this.placesServices.getPlaceById(id);
  }

  @Post()
  createPlace(@Body() createPlaceDto: CreatePlaceDto): Place {
    return this.placesServices.createPlace(createPlaceDto);
  }

  @Patch('/:id/status')
  updatePlaceStatus(
    @Param('id') id: string,
    @Body() UpdatePlaceStatusDto: UpdatePlaceStatusDto,
  ): Place {
    const { status } = UpdatePlaceStatusDto;
    return this.placesServices.updatePlaceStatus(id, status);
  }

  // @Patch('/:id/profile')
  // updatePlaceProfile()

  @Delete('/:id')
  deletePlace(@Param('id') id: string): void {
    return this.placesServices.deletePlace(id);
  }
}
