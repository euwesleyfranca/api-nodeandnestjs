import { Injectable } from '@nestjs/common';
import { CategoriesModel } from './categories.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CategoriesService {
  private categories: CategoriesModel[] = [];
  getCategories(): CategoriesModel[] {
    return this.categories;
  }
  /**
   * Recebe no parametro da função o que estou enviando através da rota
   * Cria uma constante com um nome de sua preferencia recebendo a model que recebe as variáveis do parâmetro
   * Depois chama no this.model.açãodesejada
   * Retorna o resultado
   * */
  createCategory(category: string): CategoriesModel {
    const teste: CategoriesModel = {
      id: uuid(),
      category,
    };
    this.categories.push(teste);
    return teste;
  }
}
