import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export default class CriarCurso {
  constructor(private prismaService: PrismaService) {}

  async criarCurso(data: { descricao: string; ementa?: string }) {
    try {
      const curso = await this.prismaService.curso.create({
        data: {
          descricao: data.descricao,
          ementa: data?.ementa,
        },
      });
      console.log('bateu')
      return curso;
    } catch (error) {
      console.log(error)
    }
  }
}
