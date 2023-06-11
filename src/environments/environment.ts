// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // replace the data below with your personal data
  personal: {
    caricature: "IMG_1116.png",
    name: "Areen Khalaila",
    birth: "2001-12-27",
    email: "areen.khalaila@gmail.com",
    phone: "",
    location: "Waltham, Massachusetts"
  },
  // replace the dummy data below with the real firebase configs
  // firebaseConfig: {
  //   apiKey: "AIzaSyC2frVRAAltsVTmdwgFnATGHoVUzNHfzsM",
  //   authDomain: "live-resume-a575a.firebaseapp.com",
  //   databaseURL: "https://live-resume-a575a.firebaseio.com",
  //   projectId: "live-resume-a575a",
  //   storageBucket: "live-resume-a575a.appspot.com",
  //   messagingSenderId: "681076751855",
  //   appId: "1:681076751855:web:18bae3866ebfcc4fcd8a1a",
  //   measurementId: "G-00VXD77WNG"
  // }

  // Import the functions you need from the SDKs you need
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   firebaseConfig : {
    apiKey: "AIzaSyCheE5VCAC6o9zVGD0yvPZfU9-pcEBEDjI",
    authDomain: "resume-website-8ecbf.firebaseapp.com",
    projectId: "resume-website-8ecbf",
    storageBucket: "resume-website-8ecbf.appspot.com",
    messagingSenderId: "844507711386",
    appId: "1:844507711386:web:e51c20c04e4a5cd1289c23",
    measurementId: "G-Y21FNB6ZHP"
  }

  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
