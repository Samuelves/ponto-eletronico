import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('start')
export class MainController {
  @Post('')
  public StartWorking(_: Request, res: Response): void {
    res
      .status(200)
      .send({ date: '2021-04-18', id: '1', meridiem: 'PM', time: '04:00' });
  }
}
