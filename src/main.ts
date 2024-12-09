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

 // await app.listen(3000);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`Application is running on port ${PORT}`);

}
bootstrap();
  