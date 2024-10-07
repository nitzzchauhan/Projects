import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.modules';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode(); // Enables production mode, which disables Angular’s development mode checks and logging.
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
