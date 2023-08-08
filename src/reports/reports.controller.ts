import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dtos/create-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  findAllReports(): any[] {
    return this.reportsService.findAllReports();
  }

  @Post()
  createReport(@Body() report: CreateReportDto) {
    return this.reportsService.createReport(report);
  }
}
