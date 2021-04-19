import './utils/module-alias';
import { Server } from '@overnightjs/core';
import Express, { Application } from 'express';
import { MainController } from './controllers/main';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }
  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }
  private setupExpress(): void {
    this.app.use(Express.json());
  }
  private setupControllers(): void {
    const mainController = new MainController();
    this.addControllers([mainController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
