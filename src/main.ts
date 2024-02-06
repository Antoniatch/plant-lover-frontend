import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment.dev';
import { enableProdMode } from '@angular/core';

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));

if (environment.production) {
  enableProdMode();
}
