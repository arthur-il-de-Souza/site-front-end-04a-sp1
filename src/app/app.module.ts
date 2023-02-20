import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './views/top/top.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { NavComponent } from './views/nav/nav.component';
import { NavBotComponent } from './views/nav-bot/nav-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    CarouselComponent,
    NavComponent,
    NavBotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
