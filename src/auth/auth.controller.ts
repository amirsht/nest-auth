import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(new ValidationPipe()) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    console.log(`Signup request for username: ${authCredentialsDto.username}`);
    return await this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  async signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<string> {
    console.log(`Signin request for username: ${authCredentialsDto.username}`);
    return await this.authService.signIn(authCredentialsDto);
  }
}
