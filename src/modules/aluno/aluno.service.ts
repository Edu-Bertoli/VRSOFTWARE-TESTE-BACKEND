import { Injectable } from '@nestjs/common';
import CriarAluno from './use-cases/criar-aluno';
import ConsultarAlunos from './use-cases/consultar-alunos';
import ExcluirAluno from './use-cases/excluir-aluno';
import EditarAluno from './use-cases/editar-aluno';

@Injectable()
export class AlunoService {
  constructor(
    private usecasecriarAluno: CriarAluno,
    private usecaseconsultarAlunos: ConsultarAlunos,
    private usecaseexcluirAluno: ExcluirAluno,
    private usecaseeditarAluno: EditarAluno,
  ) {}

  async criarAluno(data: { nome: string }) {
    return await this.usecasecriarAluno.criarAluno(data);
  }

  async consultarAlunos() {
    return await this.usecaseconsultarAlunos.consultarAlunos();
  }

  async excluirAluno(id: number) {
    return await this.usecaseexcluirAluno.excluirAluno(id);
  }

  async editarAluno(id: number, data: { nome: string }) {
    return await this.usecaseeditarAluno.editarAluno(id, data);
  }
}
