import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', pathMatch: 'full', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
    { path: 'nosotros',            loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage) },
    { path: 'contacto',            loadComponent: () => import('./pages/contact/contact.page').then(m => m.ContactPage) },
    { path: "carta",               loadComponent: () => import('./pages/menu/menu.page').then(m => m.MenuPage) },
    { path: 'legal',               loadComponent: () => import('./pages/legal/legal-advise/legal-advise.page').then(m => m.LegalAdvisePage) },
    { path: 'privacidad',          loadComponent: () => import('./pages/legal/privacy/privacy.page').then(m => m.PrivacyPage) },    
    { path: 'cookies',             loadComponent: () => import('./pages/legal/cookies/cookies.page').then(m => m.CookiesPage) },     
    { path: '**',                  loadComponent: () => import('./pages/not-found/not-found.page').then(m => m.NotFoundPage) },
];
