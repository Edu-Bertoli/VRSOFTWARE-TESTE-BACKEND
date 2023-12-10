import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export default class ConsultarAlunos {
  constructor(private prismaService: PrismaService) {}

  async consultarAlunos() {
    try {
      const alunos = await this.prismaService.aluno.findMany({
        orderBy: {
          id: 'asc',
        },
      });

      return alunos;
    } catch (error) {}
  }
}
