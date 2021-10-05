import { Body, Controller, Get, Post } from '@nestjs/common';
import { Place } from './places.model';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private placesServices: PlacesService) {}
  @Get()
  getAllPlaces(): Place[] {
    return this.placesServices.getAllPlaces();
  }

  @Post()
  createPlace(
    @Body('name') name: string,
    @Body('site') site: string,
    @Body('address') address: string,
    @Body('image') image: string,
    @Body('ticket') ticket: string,
    @Body('description') description: string,
  ) {
    return this.placesServices.createPlace(
      name,
      site,
      address,
      image,
      ticket,
      description,
    );
  }
}
