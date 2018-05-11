import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';

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
	// here you can start to work with your entities
	// tslint:disable-next-line:no-console
	}).catch(error => console.log(error));

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	const options = new DocumentBuilder()
	.setTitle('Cats example')
	.setDescription('The cats API description')
	.setVersion('1.0')
	.addTag('cats')
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/api', app, document);
	await app.listen(3003);
}
bootstrap();
