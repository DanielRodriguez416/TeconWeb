import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Dirección de tu frontend
    methods: 'GET,POST', // Métodos permitidos
    allowedHeaders: 'Content-Type', // Cabeceras permitidas
  });

  await app.listen(3000);
}
bootstrap();
  