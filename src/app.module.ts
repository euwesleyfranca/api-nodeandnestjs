import { Module } from '@nestjs/common';
import { PlacesModule } from './places/places.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

// Decorator, é sempre identificado com um sinal de @
// dependency inject.
@Module({
  imports: [
    PlacesModule,
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'erj01',
      username: 'root',
      password: 'root',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [],
})
export class AppModule {}
