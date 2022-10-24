import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NbaSchedulesModule } from './nba-schedules/nba-schedules.module';

@Module({
  imports: [NbaSchedulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
