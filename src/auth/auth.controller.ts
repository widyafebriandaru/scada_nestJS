import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.services';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {}

  @Post('login')
  signin() {}
}
