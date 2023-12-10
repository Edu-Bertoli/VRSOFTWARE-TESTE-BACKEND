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
import { MatriculaService } from './matricula.service';

@Controller('matricula')
export default class MatriculaController {
  constructor(private matriculaService: MatriculaService) {}

  @Post('/criar')
  async criarMatricula(
    @Body() params: { alunoId: number; cursoId: number },
    @Res() response,
  ) {
    const matricula = await this.matriculaService.criarMatricula(params);
    if (!matricula) {
      return response.status(401).json('Matricula não foi criada');
    }
    return response.status(201).json(matricula);
  }

  @Get('/matriculas')
  async consultarMatricula(@Res() response) {
    const matriculas = await this.matriculaService.consultarMatriculas();
    if (!matriculas) {
      return response.status(400).json('Não foi possivel achar matriculas');
    }
    return response.status(200).json(matriculas);
  }

  @Delete(':id')
  async excluirCurso(@Param('id') id: number, @Res() response) {
    const matricula = await this.matriculaService.excluirMatricula(id);
    if (!matricula) {
      return response.status(401).json('Matricula não foi excluída');
    }
    return response.status(200).json(matricula);
  }
}
