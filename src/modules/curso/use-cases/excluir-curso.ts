import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export default class ExcluirCurso {
  constructor(private prismaService: PrismaService) {}

  async excluirCurso(id: number) {
    try {
      const alunoMatriculado = await this.prismaService.matricula.findFirst({
        where:{
            curso:{
                id: Number(id)
            }
        }
      })  
      if(alunoMatriculado){
        return new HttpException(
            'Existem alunos cadastrados nesse curso',
            HttpStatus.BAD_REQUEST,
          );
      }
      const curso = await this.prismaService.curso.delete({
        where: {
          id: Number(id),
        },
      });

      return curso;
    } catch (error) {}
  }
}
