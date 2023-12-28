// // auth.controller.ts
// import {
//   Controller,
//   Get,
//   Post,
//   Redirect,
//   Request,
//   Response,
//   Session,
// } from '@nestjs/common';
// import { AuthService } from './auth.service';

// @Controller()
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Get()
//   @Redirect('/home')
//   index(@Session() session: Record<string, any>) {
//     if (session.username) {
//       return { url: '/home' };
//     }
//     return { url: '/login' };
//   }

//   @Get('login')
//   loginPage(@Session() session: Record<string, any>) {
//     if (session.username) {
//       return { url: '/home' };
//     }
//   }

//   @Post('login')
//   async login(
//     @Request() req,
//     @Response() res,
//     @Session() session: Record<string, any>,
//   ) {
//     if (session.username) {
//       return res.redirect('/home');
//     }

//     const { username, password } = req.body;

//     try {
//       const allSchemas = await this.authService.prosesLogin(username, password);
//       if (allSchemas) {
//         session.username = username;
//         return res.redirect('/home');
//       } else {
//         return res.render('auth/login', { error: 'Invalid credentials' });
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       return res.render('auth/login', {
//         error: 'An error occurred during login',
//       });
//     }
//   }

//   @Get('register')
//   registerPage(@Session() session: Record<string, any>) {
//     if (session.username) {
//       return { url: '/home' };
//     }
//   }

//   @Post('register')
//   async register(
//     @Request() req,
//     @Response() res,
//     @Session() session: Record<string, any>,
//   ) {
//     if (session.username) {
//       return res.redirect('/home');
//     }

//     const { username, password, email, fullname } = req.body;

//     try {
//       const allSchemas = await this.authService.prosesRegister(
//         username,
//         password,
//         email,
//         fullname,
//         'admin',
//       );
//       if (allSchemas) {
//         session.username = username;
//         return res.redirect('/home');
//       } else {
//         return res.render('auth/register', { error: 'Invalid credentials' });
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       return res.render('auth/register', {
//         error: 'An error occurred during registration',
//       });
//     }
//   }

//   @Get('logout')
//   logout(@Session() session: Record<string, any>, @Response() res) {
//     session.username = null;
//     return res.redirect('/login');
//   }

//   @Get('home')
//   home(@Session() session: Record<string, any>) {
//     if (!session.username) {
//       return { url: '/login' };
//     }
//     getHome(): string {
//         return this.authService.getHome();
//     }
//   }
// }
