import { Module } from '@nestjs/common';
import { PlacesModule } from './places/places.module';
import { CategoriesModule } from './categories/categories.module';

// Decorator, é sempre identificado com um sinal de @
// dependency inject.
@Module({
  imports: [PlacesModule, CategoriesModule],
  controllers: [],
})
export class AppModule {}
