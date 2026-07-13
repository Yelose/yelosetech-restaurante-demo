import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore, doc, docData, setDoc } from '@angular/fire/firestore';
import { catchError, of } from 'rxjs';
import { CompanyInfo } from '../models/company-info.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private firestore = inject(Firestore);

  private companyDoc = doc(this.firestore, 'company/info');

  private companyFromFirestore = toSignal(
    docData(this.companyDoc).pipe(
      catchError((err) => {
        console.error('🔥 Error leyendo company info:', err);
        return of(null);
      })
    ),
    { initialValue: null }
  );

  readonly companyInfo = computed(() => this.companyFromFirestore() as CompanyInfo | null);

  // UPDATE COMPANY INFO (Fire and forget)
  updateCompanyInfo(changes: Partial<CompanyInfo>): void {
    setDoc(this.companyDoc, changes, { merge: true });
  }
}