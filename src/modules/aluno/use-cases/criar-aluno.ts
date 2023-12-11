import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export default class CriarAluno {
  constructor(private prismaService: PrismaService) {}

  async criarAluno(data: { nome: string }) {
    try {
      const aluno = await this.prismaService.aluno.create({
        data: {
          nome: data.nome,
        },
      });

      return aluno;
    } catch (error) {}
  }
}
