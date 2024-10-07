import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // NgRx Store setup with counterReducer
    StoreModule.forRoot({ count: counterReducer }),
    // Devtools setup (optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode in production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
