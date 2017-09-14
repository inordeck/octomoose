/* import {  } from './' */

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';

/* ANGULAR BOOTSTRAP MATERIAL DESIGN */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from './typescripts/free';
import { AgmCoreModule } from '@agm/core';

/* SERTVICES */
import { FirebaseService } from './firebase.service';
import { ApiKeyService } from './apikey.service';
import { AuthService } from './auth.service';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
//  imports firebase/app needed for everything
    AngularFireModule.initializeApp(environment.firebase, 'octomoose'),
//  imports firebase/database, only needed for database features
    AngularFireDatabaseModule,
//  imports firebase/auth, only needed for auth features
    AngularFireAuthModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [
    AuthService,
    ApiKeyService,
    FirebaseService,
  ],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})

export class AppModule { }
