import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

// AngularFire
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// (opcional) Analytics
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyALcZoyrtuCpS6rYg6xEh0j89SaDBPvgHc",
  authDomain: "ppw-angular-06.firebaseapp.com",
  projectId: "ppw-angular-06",
  storageBucket: "ppw-angular-06.firebasestorage.app",
  messagingSenderId: "757743999108",
  appId: "1:757743999108:web:b00fd4757da24cfefd4ad1",
  measurementId: "G-X22NH001QK"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),

    // Firebase (UNA sola vez)
    provideFirebaseApp(() => initializeApp(firebaseConfig)),

    // Servicios
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),

    provideAnalytics(() => getAnalytics()),
  ],
};
