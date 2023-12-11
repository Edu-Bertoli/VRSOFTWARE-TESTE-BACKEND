import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { MatriculaService } from './matricula.service';
import MatriculaController from './matricula.controller';
import CriarMatricula from './use-cases/criar-matricula';
import ConsultarMatriculas from './use-cases/consultar-matriculas';
import ExcluirMatricula from './use-cases/excluir-matricula';

@Module({
  providers: [
    PrismaService,
    MatriculaService,
    CriarMatricula,
    ConsultarMatriculas,
    ExcluirMatricula
  ],
  controllers: [MatriculaController],
})
export class MatriculaModule {}
