import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDu6WahxJ_5pr4aZllWaWEHo-Mpy3uXkpo',
    authDomain: 'blubeardatabase.firebaseapp.com',
    projectId: 'blubeardatabase',
    storageBucket: 'blubeardatabase.appspot.com',
    messagingSenderId: '1039067370760',
    appId: '1:1039067370760:web:601a948e899255080108bd',
    measurementId: 'G-EHEH73PBQG',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
