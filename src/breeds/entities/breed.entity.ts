import { Cat } from '@prisma/client';

export class Breed {
  id: number;
  name: string;
  cats: Cat[];
}
