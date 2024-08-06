import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CatsModule } from './cats/cats.module';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [UsersModule, AuthModule, CatsModule, BreedsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
