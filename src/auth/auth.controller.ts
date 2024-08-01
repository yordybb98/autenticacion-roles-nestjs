import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login() {
        return "login";
    }

    @Post('register')
    register(
        @Body() registerDto: RegisterDto
    ) {
        const user = this.authService.register(registerDto);
        return user;
    }   
}
