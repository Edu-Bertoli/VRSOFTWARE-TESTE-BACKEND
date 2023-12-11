import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AlunoService } from './aluno.service';
import AlunoController from './aluno.controller';
import CriarAluno from './use-cases/criar-aluno';
import ConsultarAlunos from './use-cases/consultar-alunos';
import ExcluirAluno from './use-cases/excluir-aluno';
import EditarAluno from './use-cases/editar-aluno';

@Module({
  providers: [
    AlunoService,
    PrismaService,
    CriarAluno,
    ConsultarAlunos,
    ExcluirAluno,
    EditarAluno,
  ],
  controllers: [AlunoController],
})
export class AlunoModule {}
