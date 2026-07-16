import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Auth, authState, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly auth = inject(Auth)
  private readonly isLoading = signal(false);
  private readonly userSignal = toSignal<User | null>(authState(this.auth), {initialValue: null});
  readonly currentUser = computed(() => this.userSignal())
  readonly isLoggedIn = computed(() => !!this.userSignal())

  
}
