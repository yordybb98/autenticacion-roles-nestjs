import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {

    @Post('login')
    login() {
        return "login";
    }

    @Post('register')
    register(
        @Body() registerDtio: RegisterDto
    ) {
        console.log(registerDtio);
        return "register";
    }   
}
