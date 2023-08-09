import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dtos/create-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  async createReport(@Body() report: CreateReportDto) {
    return this.reportsService.createReport(report);
  }

  @Get()
  async findAllReports() {
    return this.reportsService.findAllReports();
  }

  @Get(':id')
  async findOneReport(@Param('id') id: number) {
    return this.reportsService.findOneReport(+id);
  }
}
