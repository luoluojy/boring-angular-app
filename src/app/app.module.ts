import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule, STORAGE_ENGINE } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './parts/footer/footer.component';
import { HeaderComponent } from './parts/header/header.component';
import { SharedModule } from './shared/shared.module';
import { AppState, AuthState } from './shared/state';
import { BrowserStorageEngine } from './shared/storage/browser-storage.engine';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'awesome-angular-app' }),
    BrowserAnimationsModule,
    SharedModule,
    NgxsModule.forRoot([AppState, AuthState]),
    NgxsStoragePluginModule.forRoot({
      key: ['auth.token', 'auth.expires_at', 'auth.username']
    }),
    NgxsRouterPluginModule.forRoot(),
    AppRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    {
      provide: STORAGE_ENGINE,
      useClass: BrowserStorageEngine
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
