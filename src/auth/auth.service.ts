import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  private users = [
    { username: 'David', password: bcrypt.hashSync('1234', 10) }, // Ejemplo
  ];

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find((user) => user.username === username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result; // Retorna el usuario sin la contraseña
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
