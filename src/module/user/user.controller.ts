import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('hello/:userid')
  async getHello(@Param() params): Promise<string> {
    const userid = params.userid;
    console.log(userid);
    const result = await this.userService.findOne(userid);
    return result ? result.name : '찾을수 없음';
  }
}
