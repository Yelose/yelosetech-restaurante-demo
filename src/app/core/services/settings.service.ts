import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore, doc, docData, collection, collectionData, setDoc, deleteDoc } from '@angular/fire/firestore';
import { catchError, of } from 'rxjs';
import { PageSettings } from '../models/page-settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private firestore = inject(Firestore);

  // --- 1. CONFIGURACIÓN GENERAL (Documento único) ---
  private settingsDoc = doc(this.firestore, 'settings/general');
  
  private settingsFromFirestore = toSignal(
    docData(this.settingsDoc).pipe(
      catchError((err) => {
        console.error('🔥 Error leyendo settings:', err);
        return of(null);
      })
    ),
    { initialValue: null }
  );

  readonly settings = computed(() => this.settingsFromFirestore() as PageSettings | null);

  // UPDATE SETTINGS (Fire and forget)
  updateSettings(changes: Partial<PageSettings>): void {
    // Usamos merge: true para no machacar todo el documento, solo actualiza los campos enviados
    setDoc(this.settingsDoc, changes, { merge: true });
  }


  // --- 2. PLATOS DESTACADOS (Colección independiente) ---
  private featuredCollection = collection(this.firestore, 'featured_products');
  
  private featuredFromFirestore = toSignal(
    collectionData(this.featuredCollection, { idField: 'id' }).pipe(
      catchError(() => of([]))
    ),
    { initialValue: [] }
  );

  readonly featuredProductIds = computed(() => this.featuredFromFirestore());

  // TOGGLE DESTACADO (Añade o quita el producto de la colección)
  toggleFeaturedProduct(productId: string, isFeatured: boolean): void {
    const docRef = doc(this.firestore, `featured_products/${productId}`);
    
    if (isFeatured) {
      setDoc(docRef, { id: productId }); // Añadimos el ID
    } else {
      deleteDoc(docRef); // Lo eliminamos
    }
  }
}