import { Injectable } from '@nestjs/common';
import CriarCurso from './use-cases/criar-curso';
import ConsultarCursos from './use-cases/consultar-cursos';
import EditarCurso from './use-cases/editar-curso';
import ExcluirCurso from './use-cases/excluir-curso';

@Injectable()
export class CursoService {
  constructor(
    private usecasecriarCurso: CriarCurso,
    private usecaseconsultarCursos: ConsultarCursos,
    private usecaseeditarCurso: EditarCurso,
    private usecaseexcluirCurso: ExcluirCurso,
  ) {}

  async criarCurso(data: { descricao: string; ementa: string }) {
    return await this.usecasecriarCurso.criarCurso(data);
  }

  async consultarCursos() {
    return await this.usecaseconsultarCursos.consultarCursos();
  }
  async editarCurso(id: number, data: { descricao?: string; ementa?: string }) {
    return await this.usecaseeditarCurso.editarCurso(id, data);
  }
  async excluirCurso(id: number) {
    return await this.usecaseexcluirCurso.excluirCurso(id);
  }
}
