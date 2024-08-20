import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Free Palestine!{{{(>_<)}}} \n 1. Hello darkness my old friend';
  }
}
