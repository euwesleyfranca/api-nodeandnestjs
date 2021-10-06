import { IsFQDN, IsNotEmpty } from 'class-validator';

/* eslint-disable prettier/prettier*/
export class CreatePlaceDto {
  @IsNotEmpty({ message: 'Campo nome é obrigatório!' })
  name: string;

  @IsNotEmpty({ message: 'Campo site é obrigatório!'})
  @IsFQDN()
  site: string;
  
  @IsNotEmpty({ message: 'Campo nome é obrigatório!' })
  address: string;
  
  @IsNotEmpty({ message: 'Campo imagem é obrigatório!' })
  image: string;

  @IsNotEmpty({ message: 'Campo ticket é obrigatório!' })
  ticket: string;
  
  @IsNotEmpty({ message: 'Campo descrição é obrigatório!'})
  description: string;
}