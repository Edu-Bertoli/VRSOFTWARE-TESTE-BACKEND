import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AlunoModule } from './modules/aluno/aluno.module';
import { CursoModule } from './modules/curso/curso.module';
import { MatriculaModule } from './modules/matricula/matricula.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 25,
        limit: 20,
      },
    ]),
    AlunoModule,
    CursoModule,
    MatriculaModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
