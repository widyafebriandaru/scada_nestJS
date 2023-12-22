/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly dbParams = {
    host: '10.14.152.25',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'skynettxqp23',
  };

  private readonly pool = new Pool(this.dbParams);

  async getAllSchemas(): Promise<string[] | null> {
    try {
      const client = await this.pool.connect();
      const result = await client.query('SELECT name FROM "GDP".users');
      return result.rows.map((row) => row.name);
    } catch (error) {
      console.error(`Error executing query: ${error}`);
      return null;
    }
  }

  async processRegistration(
    username: string,
    password: string,
    email: string,
    fullname: string,
    createdBy: string,
    req: any,
  ): Promise<boolean | null> {
    try {
      const hashedPassword = await bcrypt.hash(password, 10); // Implement password hashing here
      const client = await this.pool.connect();
      await client.query(
        'INSERT INTO "GDP".scada_users (username, password, role, email, fullname, is_active, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [username, hashedPassword, 1, email, fullname, 1, createdBy],
      );
      req.session.username = username;
      return true;
    } catch (error) {
      console.error(`Error executing query: ${error}`);
      return null;
    }
  }

  async processLogin(
    username: string,
    password: string,
    req: any,
  ): Promise<boolean | null> {
    try {
      const client = await this.pool.connect();
      const result = await client.query(
        'SELECT * FROM "GDP".scada_users WHERE username = $1',
        [username],
      );
      const user = result.rows[0];
      if (user && (await bcrypt.compare(password, user.password))) {
        req.session.username = user.username;
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Error executing query: ${error}`);
      return null;
    }
  }
}
