import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './root-component/header/header.component';
import { RouteModule } from './module/route/route.module';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './root-component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
