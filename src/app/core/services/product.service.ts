import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore, collection, CollectionReference, query, orderBy, collectionData, Timestamp, addDoc, doc, updateDoc } from '@angular/fire/firestore';
import { map, catchError, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly firestore = inject(Firestore);

  // Ahora apuntamos a la colección genérica 'products'
  private readonly productsCollection = collection(
    this.firestore,
    'products'
  ) as CollectionReference<Product>;

  private readonly productsQuery = query(
    this.productsCollection,
    orderBy('createdAt', 'desc')
  );

  // Escucha activa y en tiempo real mapeada a un Signal inmutable
  private readonly productsFromFirestore = toSignal(
    collectionData(this.productsQuery, { idField: 'id' }).pipe(
      map(products => products.map(p => this.parseProduct(p))),
      catchError((error) => {
        console.error('🔥 Error en Firestore (Products):', error);
        return of([]);
      })
    ),
    { initialValue: [] }
  );

  readonly products = computed(() => this.productsFromFirestore());

  // Estado derivado optimizado
  readonly activeProducts = computed(() =>
    this.products().filter(p => p.isActive)
  );

  private parseProduct(product: Product): Product {
    return {
      ...product,
      createdAt: product.createdAt instanceof Timestamp ? product.createdAt.toDate() : product.createdAt,
      updatedAt: product.updatedAt instanceof Timestamp ? product.updatedAt.toDate() : product.updatedAt,
    };
  }

  createProduct(product: Partial<Product>) {
    const dataToCreate = {
      ...product,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    return addDoc(this.productsCollection, dataToCreate);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    const productDoc = doc(this.firestore, `products/${id}`);
    const dataToUpdate = {
      ...changes,
      updatedAt: new Date()
    };
    return updateDoc(productDoc, dataToUpdate);
  }
}