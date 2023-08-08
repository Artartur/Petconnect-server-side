import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';

global.reports = [];

@Injectable()
export class ReportsService {
  findAllReports(): any[] {
    return global.reports;
  }

  createReport(report: CreateReportDto) {
    global.reports.push(report);
  }
}
