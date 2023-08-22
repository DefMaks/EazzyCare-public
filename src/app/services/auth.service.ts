import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatform } from '@ionic/angular';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppGlobals } from './app.global';

// Databases
// APP CORE DATA
const vendor_DB = 'vendor';
const healthservices_DB = 'healthservices';
// EAZZYCARE DATA
// Databases

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase: SupabaseClient;
  private currentUser: BehaviorSubject<User | boolean | any> =
    new BehaviorSubject(null);

  constructor(private router: Router, private appGlobal: AppGlobals) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );

    // console.log(this.supabase)

    this.supabase.auth.onAuthStateChange((event, sess: any) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        console.log('SET USER');

        this.currentUser.next(sess.user);
        console.log(event);
        appGlobal.mySession = sess.user;
        // console.log(appGlobal.mySession);
      } else {
        this.currentUser.next(false);
      }
    });
    // Trigger initial session load
    // console.log(5);
    // this.loadUser();
    this.assignations();
    setTimeout(() => {
      console.log('Live reloads open');
      this.listenVendrors();
      console.log(this.appGlobal);
      // this.appGlobal.serverUpdate = false;
    }, 3500);
  }

  async assignations() {
    this.getVendors();
    return this.appGlobal;
  }

  async loadUser() {
    if (this.currentUser.value) {
      // User is already set, no need to do anything else
      return;
    }
    const user = await this.supabase.auth.getUser();

    if (user.data.user) {
      this.currentUser.next(user.data.user);
    } else {
      this.currentUser.next(false);
    }
  }

  signUp(credentials: { email: any; password: any }) {
    return this.supabase.auth.signUp(credentials);
  }

  signIn(credentials: { email: any; password: any }) {
    return this.supabase.auth.signInWithPassword(credentials);
  }

  sendPwReset(email: string) {
    return this.supabase.auth.resetPasswordForEmail(email);
  }

  async signOut() {
    await this.supabase.auth.signOut();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  getCurrentUser(): Observable<User | boolean> {
    return this.currentUser.asObservable();
  }

  getCurrentUserId() {
    if (this.currentUser.value) {
      return (this.currentUser.value as User).id;
    } else {
      return null;
    }
  }

  signInWithEmail(email: string) {
    return this.supabase.auth.signInWithOtp({ email });
  }

  async setSession(access_token: any, refresh_token: any) {
    return this.supabase.auth.setSession({ access_token, refresh_token });
  }

  // DB FETCH

  // VENDORS
  async getVendors() {
    return (
      this.supabase
        .from(vendor_DB)
        .select(
          `*,
          type(*),
          offers(*, inOfferServices(*, healthservice(*))),
          vendorServices(*, healthService(*))`
        )
        // .and('isOnline.eq.true, isDriver.eq.true')
        // .match({ isOnline: true, isDriver: true })
        .then((result) => {
          // console.log(result)
          this.appGlobal.vendors = result.data;
          const cm = this.appGlobal.vendors.filter((item: any) => {
            if (item.type.id == 1) {
              return item;
            }
          });

          const insure = this.appGlobal.vendors.filter((item: any) => {
            if (item.type.id == 2) {
              return item;
            }
          });
          this.appGlobal.insure = insure;
          this.appGlobal.cm = cm;
          return this.appGlobal;
        })
    );
  }
  async listenVendrors() {
    const d = this.supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: vendor_DB },
        (payload) => {
          console.log('Change received!', payload);
          // this.appGlobal.serverUpdate = true;
          console.log('Will refresh VENDORS');
          setTimeout(() => {
            this.assignations();
          }, 500);
          // console.log(this.appGlobal.users);
          return this.appGlobal;
        }
      )
      .subscribe();

    // console.log(d);
    return d;
  }

  // SERVICES
  async getServices() {
    return (
      this.supabase
        .from(healthservices_DB)
        .select(`*`)
        // .and('isOnline.eq.true, isDriver.eq.true')
        // .match({ isOnline: true, isDriver: true })
        .then((result) => {
          this.appGlobal.healthServices = result.data;
          return this.appGlobal;
        })
    );
  }

  async listenServices() {
    const d = this.supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: healthservices_DB },
        (payload) => {
          console.log('Change received!', payload);
          // this.appGlobal.serverUpdate = true;
          console.log('Will refresh SERVICES');
          setTimeout(() => {
            this.assignations();
          }, 500);
          // console.log(this.appGlobal.users);
          return this.appGlobal;
        }
      )
      .subscribe();

    // console.log(d);
    return d;
  }
}
