import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import {Role} from '../../users/users.service'
export const ROLES_KEY = 'roles';
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor(private reflector: Reflector){
    super()
  }
  async canActivate(context: ExecutionContext){
    await super.canActivate(context)
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log(requiredRoles);
    
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    if(requiredRoles.some((item) => user.roles.includes(item))){
      return true
    }else{      
      return false
    }
    
    return true
  }
}
