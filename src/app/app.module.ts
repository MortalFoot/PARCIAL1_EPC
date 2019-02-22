import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tabs } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http'
import { Api1Page } from '../pages/api1/api1';
import { TabsPage } from '../pages/tabs/tabs';
import { AnimalesPage } from '../pages/animales/animales';
import { RemodelacionesPage } from '../pages/remodelaciones/remodelaciones';
import { Api2Page } from '../pages/api2/api2';
import { Api3Page } from '../pages/api3/api3';
import { BusquedaPage } from '../pages/busqueda/busqueda';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { FavoritossProvider } from '../providers/favoritoss/favoritoss';
import { Busqueda2Page } from '../pages/busqueda2/busqueda2';
import { Busqueda3Page } from '../pages/busqueda3/busqueda3';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Api1Page,
    Api2Page,
    Api3Page,
    TabsPage,
    AnimalesPage,
    RemodelacionesPage,
    BusquedaPage,
    FavoritosPage,
    Busqueda2Page,
    Busqueda3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Api1Page,
    Api2Page,
    Api3Page,
    TabsPage,
    AnimalesPage,
    RemodelacionesPage,
    BusquedaPage,
    FavoritosPage,
    Busqueda2Page,
    Busqueda3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritossProvider
  ]
})
export class AppModule {}
