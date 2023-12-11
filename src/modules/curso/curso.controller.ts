import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { CursoService } from './curso.service';

@Controller('curso')
export default class CursoController {
  constructor(private cursoService: CursoService) {}

  @Post('/criar')
  async criarCurso(
    @Body() data: { descricao: string; ementa: string },
    @Res() response,
  ) {
    const curso = await this.cursoService.criarCurso(data);
    if (!curso) {
      return response.status(401).json('Curso não foi criado');
    }
    return response.status(201).json(curso);
  }

  @Get('/cursos')
  async consultarCursos(@Res() response) {
    const cursos = await this.cursoService.consultarCursos();
    if (!cursos) {
      return response.status(400).json('Não foi possivel achar cursos');
    }
    return response.status(200).json(cursos);
  }

  @Put(':id')
  async editarCursos(
    @Param('id') id: number,
    @Body() data: { descricao: string; ementa: string },
    @Res() response,
  ) {
    const curso = await this.cursoService.editarCurso(id, data);
    if (!curso) {
      return response
        .status(401)
        .json('Não foi possivel atualizar informações do curso');
    }
    return response.status(200).json(curso);
  }

  @Delete(':id')
  async excluirCurso(@Param('id') id: number, @Res() response) {
    const curso = await this.cursoService.excluirCurso(id);
    if (!curso) {
      return response.status(401).json('Curso não foi excluído');
    }
    return response.status(200).json(curso);
  }
}
