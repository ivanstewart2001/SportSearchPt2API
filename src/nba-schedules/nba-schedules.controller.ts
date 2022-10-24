import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NbaSchedulesService } from './nba-schedules.service'
import { NbaScheduleParams } from './types'

@ApiTags('NBA Schedules')
@Controller('nba-schedules')
export class NbaSchedulesController {
    constructor(private nbaSchedulesService: NbaSchedulesService) {}

    @Post('fetchNbaSchedules')
    @ApiOperation({
        summary: 'Fetch NBA schedules'
    })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                team: {
                    type: 'string',
                    example: 'GSW',
                    description: 'Team Tri Code (LAL, GSW, LAC, etc)'
                },
                date: {
                    type: 'string',
                    example: '18-10-2022',
                    description: 'Date of game in DD-MM-YYYY format'
                }
            }
        }
    })
    @ApiResponse({
        status: 201,
        description: 'NBA Schedule fetched successfully'
    })
    @ApiResponse({
        status: 417,
        description: 'Body missing fields'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error'
    })
    async fetchNbaSchedules(
        @Body() body: NbaScheduleParams
    ) {
        const fetchedSchedule = await this.nbaSchedulesService.fetchNbaSchedules(body)
        return fetchedSchedule
    }
}