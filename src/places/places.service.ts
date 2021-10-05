import { Injectable } from '@nestjs/common';
import { Place, PlaceStatus } from './places.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlacesService {
  private places: Place[] = [];
  getAllPlaces(): Place[] {
    return this.places;
  }
  createPlace(
    name: string,
    site: string,
    address: string,
    image: string,
    ticket: string,
    description: string,
  ): Place {
    const place: Place = {
      id: uuid(),
      name,
      site,
      address,
      image,
      ticket,
      description,
      status: PlaceStatus.ACTIVE,
    };
    this.places.push(place);
    return place;
  }
}
