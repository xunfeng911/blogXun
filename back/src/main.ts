import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Blog } from './orm/blog';
import { Tag } from './orm/tag';

createConnection({
    type: 'mysql',
    host: '123.207.98.46',
    port: 3306,
    username: 'root',
    password: 'Xuncs911!',
    database: 'base',
    // entities: [__dirname + './orm/*.ts'],
    entities: [Blog, Tag],
    synchronize: true,
// logging: false,
}).then(connection => {
    bootstrap();
    // here you can start to work with your entities
    // tslint:disable-next-line:no-console
}).catch(error => console.log(error));

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
      cors: true
  });
  const options = new DocumentBuilder()
        .setTitle('xuncs‘blog')
        .setDescription('The API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api', app, document);
    await app.listen(3003);
    console.log('port: http://localhost:3003');
}
