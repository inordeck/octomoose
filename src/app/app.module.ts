/*  import {  } from '';  */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*  ANGULAR FIRE 2 */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

/* COMPONENTS */
import { AppComponent } from './app.component';

/* SERVICES */
import { AuthService } from './shared/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'inspiration-only-dev'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
