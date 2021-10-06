import { Injectable } from '@nestjs/common';
import { Place, PlaceStatus } from './places.model';
import { v4 as uuid } from 'uuid';
import { CreatePlaceDto } from './dto/create-place.dto';
import { GetPlacesFilterDto } from './dto/get-places-filter.dto';

@Injectable()
export class PlacesService {
  private places: Place[] = [];
  getAllPlaces(): Place[] {
    return this.places;
  }

  getPlacesWithFilters(filterDto: GetPlacesFilterDto): Place[] {
    const { status, search } = filterDto;
    let places = this.getAllPlaces();

    if (status) {
      places = places.filter((place) => place.status === status);
    }

    if (search) {
      places = places.filter((place) => {
        const s: string = search.toLocaleLowerCase();
        if (
          place.name.toLowerCase().includes(s) ||
          place.description.toLowerCase().includes(s) ||
          place.address.toLowerCase().includes(s) ||
          place.site.toLowerCase().includes(s)
        ) {
          return true;
        }
        return false;
      });
    }

    return places;
  }

  getPlaceById(id: string): Place {
    return this.places.find((place) => place.id === id);
  }

  createPlace(createPlaceDto: CreatePlaceDto): Place {
    const { name, site, address, image, ticket, description } = createPlaceDto;

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

  deletePlace(id: string): void {
    const found = this.getPlaceById(id);
    this.places = this.places.filter((place) => place.id !== found.id);
  }

  updatePlaceStatus(id: string, status: PlaceStatus): Place {
    const place = this.getPlaceById(id);
    place.status = status;
    return place;
  }

  /* updatePlace(): Place {} */
}
