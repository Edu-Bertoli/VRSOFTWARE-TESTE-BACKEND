import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export default class CriarMatricula {
  constructor(private prismaService: PrismaService) {}

  async criarMatricula(params: { alunoId: number; cursoId: number }) {
    try {
      const matriculaFeita = await this.prismaService.matricula.findFirst({
        where: {
          AND: {
            alunoId: params.alunoId,
            cursoId: params.cursoId,
          },
        },
      });
      if (matriculaFeita) {
        return new HttpException(
          'Aluno já cadastrado nesse curso',
          HttpStatus.BAD_REQUEST,
        );
      }
      const matricula = await this.prismaService.matricula.create({
        data: {
          aluno: {
            connect: {
              id: params.alunoId,
            },
          },
          curso: {
            connect: {
              id: params.cursoId,
            },
          },
          createdAt: new Date(),
        },
      });
      return matricula;
    } catch (error) {
      console.log('Erro durante criação de matricula :', error);
      throw error;
    }
  }
}
