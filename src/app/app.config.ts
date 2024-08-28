import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { provideStore } from '@ngrx/store';
import { counterReducer } from './my-counter/counter-reducer';
import { shopReducer} from './shopping-cart-redux/store/shop-reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    //provideExperimentalZonelessChangeDetection(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore({ counter : counterReducer,'shop': shopReducer })
  ],
};
