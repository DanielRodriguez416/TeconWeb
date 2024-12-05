// src/app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module'; // Importa el módulo de autenticaciónice';

@Module({
  imports: [
    AuthModule, // Asegúrate de incluir el AuthModule aquí
  ],
})
export class AppModule {}
