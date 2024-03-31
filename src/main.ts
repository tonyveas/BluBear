import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from 'firebase/app';

if (environment.production) {
  enableProdMode();
}

initializeApp({
  apiKey: 'AIzaSyDu6WahxJ_5pr4aZllWaWEHo-Mpy3uXkpo',
  authDomain: 'blubeardatabase.firebaseapp.com',
  projectId: 'blubeardatabase',
  storageBucket: 'blubeardatabase.appspot.com',
  messagingSenderId: '1039067370760',
  appId: '1:1039067370760:web:601a948e899255080108bd',
  measurementId: 'G-EHEH73PBQG',
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
