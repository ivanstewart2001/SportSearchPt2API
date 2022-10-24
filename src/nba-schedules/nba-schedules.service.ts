import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { NbaScheduleParams } from './types'
import { API_KEY } from 'src/utils/apiKey';
import { map } from 'rxjs';

@Injectable()
export class NbaSchedulesService {
    constructor(private http: HttpService) {}

    async fetchNbaSchedules(params: NbaScheduleParams) {
        if (!params.date && !params.team) {
            throw new HttpException({
                status: HttpStatus.EXPECTATION_FAILED,
                error: 'Please include team AND/OR date'
            }, HttpStatus.EXPECTATION_FAILED)
        }

        const options = {
            method: 'GET',
            url: 'https://nba-schedule.p.rapidapi.com/schedule',
            params,
            headers: {
              'X-RapidAPI-Host': 'nba-schedule.p.rapidapi.com',
              'X-RapidAPI-Key': API_KEY
            }
        }

        return this.http
            .get('https://nba-schedule.p.rapidapi.com/schedule', options)
            .pipe(
                map((res) => res.data)
            )
    }
}
