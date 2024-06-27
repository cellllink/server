import { Global, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule as NestJsJwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from 'src/share/services/common/jwt.strategy.service';

@Global()
@Module({
  imports: [
    PassportModule,
    NestJsJwtModule.register({
      global: true,
      secret: 'cellinkPrivateKey',
      signOptions: { expiresIn: 30 * 60 + 's' },
    }),
  ],
  providers: [JwtStrategyService],
  exports: [JwtStrategyService],
})
export class JwtModule {}
