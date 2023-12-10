import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CursoService } from './curso.service';
import CursoController from './curso.controller';
import CriarCurso from './use-cases/criar-curso';
import ConsultarCursos from './use-cases/consultar-cursos';
import EditarCurso from './use-cases/editar-curso';
import ExcluirCurso from './use-cases/excluir-curso';

@Module({
  providers: [
    CursoService,
    PrismaService,
    CriarCurso,
    ConsultarCursos,
    EditarCurso,
    ExcluirCurso,
  ],
  controllers: [CursoController],
})
export class CursoModule {}
