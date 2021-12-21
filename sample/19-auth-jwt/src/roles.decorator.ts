/*
 * @Author: Hujianbo
 * @Date: 2021-12-21 00:42:31
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-12-21 00:42:32
 * @FilePath: /nest/sample/19-auth-jwt/src/roles.decorator.ts
 */
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);