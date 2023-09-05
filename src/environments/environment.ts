// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: true,
    url: 'https://api-prod.saudetechama.com.br/api/',
    urlCep: 'https://viacep.com.br/ws/',
    pushKey: "BHifWlroi04Vm5W9gnPRZyArK1KQTb54DGhfglgzTEsOoWXliWrNuQXrnO3U8M0ljAYnvMPTLNpi-zg8lEqIzgQ",
  
    firebase: {
      apiKey: "AIzaSyD9cEP_uiyCS24RcG1nWNeC2Y-kRsekktQ",
      authDomain: "stc-app-f8a39.firebaseapp.com",
      databaseURL: "https://stc-app-f8a39.firebaseio.com",
      projectId: "stc-app-f8a39",
      storageBucket: "stc-app-f8a39.appspot.com",
      messagingSenderId: "265454616492",
      appId: "1:265454616492:web:22f7d42482256689188409",
      measurementId: "G-EFN4N74WVB"
    },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.