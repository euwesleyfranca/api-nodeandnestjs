import { Injectable, NotFoundException } from '@nestjs/common';
import { PlaceStatus } from './places-status.enum';
import { CreatePlaceDto } from './dto/create-place.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlacesRepository } from './place.repository';
import { Place } from './place.entity';
import { GetPlacesFilterDto } from './dto/get-places-filter.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(PlacesRepository)
    private placesRepository: PlacesRepository,
  ) {}

  async getPlaceById(id: string): Promise<Place> {
    const found = await this.placesRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Id ${id} não encontrado`);
    }

    return found;
  }

  async createPlace(createPlaceDto: CreatePlaceDto): Promise<Place> {
    return await this.placesRepository.createPlace(createPlaceDto);
  }

  async getPlaces(filterDto: GetPlacesFilterDto): Promise<Place[]> {
    return this.placesRepository.getPlaces(filterDto);
  }

  async updatePlaceStatus(id: string, status: PlaceStatus): Promise<Place> {
    const place = await this.getPlaceById(id);
    place.status = status;

    await this.placesRepository.save(place);

    return place;
  }

  async updateProfile(
    id: string,
    name: string,
    site: string,
    address: string,
    image: string,
    ticket: string,
    description: string,
  ): Promise<Place> {
    const profile = await this.getPlaceById(id);
    profile.name = name;
    profile.site = site;
    profile.address = address;
    profile.image = image;
    profile.ticket = ticket;
    profile.description = description;

    await this.placesRepository.save(profile);
    return profile;
  }

  async deletePlace(id: string): Promise<void> {
    const found = await this.placesRepository.delete(id);

    if (found.affected === 0) {
      throw new NotFoundException('Lugar não encontrado');
    }
  }
}
