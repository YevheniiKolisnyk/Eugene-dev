import { Environment } from './interface';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  apiKey: 'AIzaSyAx4NLPlEo2SnDeQpXK8FMRX1GAlcGysk8',
  production: false,
  fbDbUrl: 'https://blog-aacca.firebaseio.com/',
  fbToDo: {
    apiKey: 'AIzaSyCxIJcoWZQ2NCf4LmUrg0pwJJLpzLz_r7A',
    authDomain: 'todo-7335d.firebaseapp.com',
    databaseURL: 'https://todo-7335d.firebaseio.com',
    projectId: 'todo-7335d',
    storageBucket: 'todo-7335d.appspot.com',
    messagingSenderId: '891737515056',
    appId: '1:891737515056:web:3c693e43a2d1d3b655f9f5'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
