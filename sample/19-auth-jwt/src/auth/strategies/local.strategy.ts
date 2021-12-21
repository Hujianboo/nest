import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Reflector } from '@nestjs/core';
import {Role} from '../../users/users.service'
export const ROLES_KEY = 'roles';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  async validate(username: string, password: string): Promise<any> {        
    const userOne = await this.authService.validateUser(username, password);
    if (!userOne) {
      throw new UnauthorizedException();
    }    
    return userOne;
  }
}
