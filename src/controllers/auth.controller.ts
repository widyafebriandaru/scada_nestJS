/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('/auth')
export class AuthController  {
  constructor(private readonly authService: AuthService) {}
  @Get()
  @Redirect('/login')
  index() { }

  @Get('/login')
  @Render('auth/login')
  login() {
    return { error: '·null·' };
  }

  @Post('/login')
  async handleLogin(@Req() request, @Res() response) {
    if ('username' in request.session) {
      return response.redirect('/home');
    }
    const { username, password } = request.body;
    console.log(`LOGIN =>>username=${username}`);
    const allSchemas = await this.authService.processLogin(username, password, Req);
    console.log(allSchemas);
    if (allSchemas === true) {
      response.redirect('/home');
    } else {
      response.render('auth/login', { error: '·null·' });
    }
  }
}
