import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';



bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
