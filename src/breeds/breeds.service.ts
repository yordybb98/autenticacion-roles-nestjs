import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BreedsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBreedDto: CreateBreedDto) {
    return await this.prisma.breed.create({ data: createBreedDto });
  }

  async findAll() {
    return await this.prisma.breed.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.breed.findUnique({ where: { id } });
  }

  async update(id: number, updateBreedDto: UpdateBreedDto) {
    return await this.prisma.breed.update({
      where: { id },
      data: updateBreedDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.breed.delete({ where: { id } });
  }
}
