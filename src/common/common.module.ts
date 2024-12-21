import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { SwaggerModule } from './swagger/swagger.module';
import { ConfigModule } from './config/config.module';
import { PrismaService } from 'src/common/database/prisma.service';

@Module({
  imports: [DatabaseModule, SwaggerModule, ConfigModule],
  providers: [PrismaService],
})
export class CommonModule { }
