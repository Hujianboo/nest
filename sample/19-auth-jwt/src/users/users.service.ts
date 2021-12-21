import { Injectable } from '@nestjs/common';

export type User = any;
export enum Role {
  User = 'user',
  Admin = 'admin',
}
@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
        roles: [Role.User,Role.Admin]
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
        roles: [Role.User]
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        roles: [Role.User]
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {    
    return this.users.find(user => user.username === username);
  }
}
