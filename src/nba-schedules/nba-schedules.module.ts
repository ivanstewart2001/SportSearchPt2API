import { Module } from '@nestjs/common';
import { NbaSchedulesController } from './nba-schedules.controller';
import { NbaSchedulesService } from './nba-schedules.service';
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  providers: [NbaSchedulesService],
  controllers: [NbaSchedulesController]
})
export class NbaSchedulesModule {}
