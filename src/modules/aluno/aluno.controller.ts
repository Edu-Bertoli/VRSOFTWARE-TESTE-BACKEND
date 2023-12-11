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
import { AlunoService } from './aluno.service';

@Controller('aluno')
export default class AlunoController {
  constructor(private alunoService: AlunoService) {}

  @Post('/criar')
  async criarAluno(@Body() data: { nome: string }, @Res() response) {
    const aluno = await this.alunoService.criarAluno(data);
    if (!aluno) {
      return response.status(401).json('Aluno não foi criado');
    }
    return response.status(201).json(aluno);
  }

  @Get('/alunos')
  async consultarAlunos(@Res() response) {
    const alunos = await this.alunoService.consultarAlunos();
    if (!alunos) {
      return response.status(400).json('Não foi possivel achar alunos');
    }
    return response.status(200).json(alunos);
  }

  @Delete(':id')
  async excluirAluno(@Param('id') id: number, @Res() response) {
    const aluno = await this.alunoService.excluirAluno(id);
    if (!aluno) {
      return response.status(401).json('Aluno não foi excluído');
    }
    return response.status(200).json(aluno);
  }

  @Put(':id')
  async editarAluno(
    @Param('id') id: number,
    @Body() data: { nome: string },
    @Res() response,
  ) {
    const aluno = await this.alunoService.editarAluno(id, data);
    if (!aluno) {
      return response
        .status(401)
        .json('Não foi possivel atualizar informações do aluno');
    }
    return response.status(200).json(aluno);
  }
}
