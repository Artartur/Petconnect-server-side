import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async createReport(report: CreateReportDto) {
    const {
      Animal,
      City,
      Description,
      Email,
      Name,
      Phone,
      Picture,
      Road,
      Suburb,
    } = report;

    const createdReport = await this.prisma.report.create({
      data: {
        Animal,
        City,
        Description,
        Email,
        Name,
        Phone,
        Picture,
        Road,
        Suburb,
      },
    });

    return createdReport;
  }

  findAllReports() {
    const findAllReports = this.prisma.report.findMany();

    return findAllReports;
  }

  findOneReport(Id: number) {
    const findReport = this.prisma.report.findUnique({ where: { Id } });
    return findReport;
  }
}
