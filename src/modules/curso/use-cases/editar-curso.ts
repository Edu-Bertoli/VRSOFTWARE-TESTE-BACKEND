import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export default class EditarCurso {
  constructor(private prismaService: PrismaService) {}

  async editarCurso(id: number, data: { descricao?: string; ementa?: string }) {
    try {
      const curso = await this.prismaService.curso.update({
        where: {
          id: Number(id),
        },
        data: {
          descricao: data.descricao,
          ementa: data.ementa,
        },
      });

      return curso;
    } catch (error) {}
  }
}
