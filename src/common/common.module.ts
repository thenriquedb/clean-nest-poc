import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PrismaService } from 'src/common/database/prisma.service';

@Module({
  imports: [DatabaseModule],
  providers: [PrismaService],
})
export class CommonModule { }
