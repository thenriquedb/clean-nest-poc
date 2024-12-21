import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  constructor(private readonly app: INestApplication) { }

  public configure(): void {
    const options = new DocumentBuilder()
      .setTitle('Blog example')
      .setDescription('Any description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(this.app, options);
    SwaggerModule.setup('api', this.app, document);
  }
}
