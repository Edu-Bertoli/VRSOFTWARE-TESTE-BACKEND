import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export default class EditarAluno {
  constructor(private prismaService: PrismaService) {}

  async editarAluno(id: number, data: { nome: string }) {
    try {
      const aluno = await this.prismaService.aluno.update({
        where: {
          id: Number(id),
        },
        data: {
          nome: data.nome,
        },
      });

      return aluno;
    } catch (error) {}
  }
}
