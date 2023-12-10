import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export default class ConsultarMatriculas {
  constructor(private prismaService: PrismaService) {}

  async consultarMatriculas() {
    try {
      const matriculas = await this.prismaService.matricula.findMany({
        orderBy: {
          id: 'asc',
        },
        select:{
          id: true,
          cursoId: true,
          alunoId: true,
          aluno: true,
          curso: true 
        }
      });
      return matriculas;
    } catch (error) {}
  }
}
