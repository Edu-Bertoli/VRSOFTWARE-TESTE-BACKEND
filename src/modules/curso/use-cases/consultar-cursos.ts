import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export default class ConsultarCursos {
  constructor(private prismaService: PrismaService) {}

  async consultarCursos() {
    try {
      const cursos = await this.prismaService.curso.findMany({
        orderBy: {
          id: 'asc',
        },
      });

      return cursos;
    } catch (error) {}
  }
}
