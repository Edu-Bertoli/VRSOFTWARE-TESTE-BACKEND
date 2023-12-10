import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export default class ExcluirAluno {
  constructor(private prismaService: PrismaService) {}

  async excluirAluno(id: number) {
    try {
      const aluno = await this.prismaService.aluno.delete({
        where: {
          id: Number(id),
        },
      });

      return aluno;
    } catch (error) {}
  }
}
