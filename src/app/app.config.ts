import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions({ skipInitialTransition: true })), 
    provideFirebaseApp(() => initializeApp({ projectId: "yelose-bar-restaurante", appId: "1:112213104741:web:3e5c9b3fdcb104323fce8c", storageBucket: "yelose-bar-restaurante.firebasestorage.app", apiKey: "AIzaSyAQjl0F5uz1GbX1VWCZk6FUUznoj6o_e-0", authDomain: "yelose-bar-restaurante.firebaseapp.com", messagingSenderId: "112213104741", measurementId: "G-KT2G474E5F" })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()),
  ]
};
