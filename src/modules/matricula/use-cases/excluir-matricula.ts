import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export default class ExcluirMatricula {
  constructor(private prismaService: PrismaService) {}

  async excluirMatricula(id: number) {
    try {
      const matricula = await this.prismaService.matricula.delete({
        where: {
          id: Number(id),
        },
      });

      return matricula;
    } catch (error) {}
  }
}
