import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesModel } from './categories.model';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getCategories(): CategoriesModel[] {
    return this.categoriesService.getCategories();
  }

  @Post()
  createCategories(@Body('category') category: string) {
    return this.categoriesService.createCategory(category);
  }
}
