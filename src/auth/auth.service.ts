import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService) {}

    async register( registerDto: RegisterDto ) {
        const user = await this.userService.findByEmail( registerDto.email );

        if( user ) throw new BadRequestException("User already exists");

        const hashedPassword = await bcryptjs.hash( registerDto.password, 10 );

        return await this.userService.create( {...registerDto, password: hashedPassword} );

    }

    async login(data: LoginDto) {
        const user = await this.userService.findByEmail(data.email);

        if( !user ) throw new UnauthorizedException("User not found");

        const isPasswordValid = bcryptjs.compareSync( data.password, user.password );

        if( !isPasswordValid ) throw new UnauthorizedException("Invalid credentials");

        return user
    }
}
