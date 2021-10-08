import { EntityRepository, Repository } from 'typeorm';
import { CreatePlaceDto } from './dto/create-place.dto';
import { GetPlacesFilterDto } from './dto/get-places-filter.dto';
import { Place } from './place.entity';
import { PlaceStatus } from './places-status.enum';

@EntityRepository(Place)
export class PlacesRepository extends Repository<Place> {
  async showPlaces(): Promise<Place> {
    return this.showPlaces();
  }

  async getPlaces(filterDto: GetPlacesFilterDto): Promise<Place[]> {
    const { status, search } = filterDto;

    const query = this.createQueryBuilder('place');

    if (status) {
      query.andWhere('place.status = :status', { status });
    }
    if (search) {
      query.andWhere(
        'LOWER(place.name) LIKE LOWER(:search) OR LOWER(place.description) LIKE LOWER(:search) OR LOWER(place.address) LIKE LOWER(:search) LIKE LOWER(:search)',
        { search: `%${search}%` },
      );
    }

    const places = await query.getMany();

    return places;
  }

  async createPlace(createPlaceDto: CreatePlaceDto): Promise<Place> {
    const { name, site, address, image, ticket, description } = createPlaceDto;

    const place = this.create({
      name,
      site,
      address,
      image,
      ticket,
      description,
      status: PlaceStatus.ACTIVE,
    });

    await this.save(place);
    return place;
  }
}
