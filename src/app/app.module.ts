import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { DigimonModule } from './digimon/digimon.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { firebaseConfig } from './firebase-config';
// const firebaseConfig = {
//   apiKey: 'AIzaSyDu6WahxJ_5pr4aZllWaWEHo-Mpy3uXkpo',
//   authDomain: 'blubeardatabase.firebaseapp.com',
//   projectId: 'blubeardatabase',
//   storageBucket: 'blubeardatabase.appspot.com',
//   messagingSenderId: '1039067370760',
//   appId: '1:1039067370760:web:601a948e899255080108bd',
//   measurementId: 'G-EHEH73PBQG',
// };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // AngularFireModule.initializeApp({
    //   apiKey: 'AIzaSyDu6WahxJ_5pr4aZllWaWEHo-Mpy3uXkpo',
    //   authDomain: 'blubeardatabase.firebaseapp.com',
    //   projectId: 'blubeardatabase',
    //   storageBucket: 'blubeardatabase.appspot.com',
    //   messagingSenderId: '1039067370760',
    //   appId: '1:1039067370760:web:601a948e899255080108bd',
    //   measurementId: 'G-EHEH73PBQG',
    // }),
    // AngularFireAuthModule,
    // DigimonModule,
    // AuthModule,
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
