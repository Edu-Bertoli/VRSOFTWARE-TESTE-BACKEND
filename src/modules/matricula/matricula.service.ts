import { Injectable } from '@nestjs/common';
import CriarMatricula from './use-cases/criar-matricula';
import ConsultarMatriculas from './use-cases/consultar-matriculas';
import ExcluirMatricula from './use-cases/excluir-matricula';

@Injectable()
export class MatriculaService {
  constructor(
    private usecasecriarMatricula: CriarMatricula,
    private usecaseconsultarMatriculas: ConsultarMatriculas,
    private usecaseexcluirMatriculas: ExcluirMatricula,
  ) {}

  async criarMatricula(params: { alunoId: number; cursoId: number }) {
    return await this.usecasecriarMatricula.criarMatricula(params);
  }

  async consultarMatriculas() {
    return await this.usecaseconsultarMatriculas.consultarMatriculas();
  }

  async excluirMatricula(id: number) {
    return await this.usecaseexcluirMatriculas.excluirMatricula(id);
  }
}
