import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { STORAGE_ENGINE } from '@ngxs/storage-plugin';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ServerStorageEngine } from './shared/storage/server-storage.engine';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule // <-- *Important* to have lazy-loaded routes work
  ],
  providers: [
    { provide: STORAGE_ENGINE, useClass: ServerStorageEngine }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
