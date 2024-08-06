import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CatsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCatDto: CreateCatDto) {
    const foundbreed = await this.prisma.breed.findUnique({
      where: { id: createCatDto.breed },
    });

    if (!foundbreed) {
      throw new BadRequestException('Breed not found');
    }

    return await this.prisma.cat.create({
      data: {
        ...createCatDto,
        breed: {
          connect: { id: createCatDto.breed },
        },
      },
      include: { breed: true },
    });
  }

  async findAll() {
    return await this.prisma.cat.findMany({
      include: {
        breed: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.cat.findUnique({
      where: { id },
      include: { breed: true },
    });
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    //return await this.prisma.cat.update({ where: { id }, data: updateCatDto });
  }

  async remove(id: number) {
    return await this.prisma.cat.delete({ where: { id } });
  }
}
