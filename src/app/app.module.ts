import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// page components
import { TopComponent } from './views/top/top.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { NavComponent } from './views/nav/nav.component';
import { NavBotComponent } from './views/nav-bot/nav-bot.component';
import { FooterBotComponent } from './views/footer-bot/footer-bot.component';
import { FooterComponent } from './views/footer/footer.component';
import { MainCardsComponent } from './views/main-cards/main-cards.component';
import { HomeBannerComponent } from './views/home-banner/home-banner.component';

// pages
import { HomeComponent } from './views/home/home.component';
import { PageLoginComponent } from './views/page-login/page-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    CarouselComponent,
    NavComponent,
    NavBotComponent,
    FooterBotComponent,
    FooterComponent,
    MainCardsComponent,
    HomeComponent,
    HomeBannerComponent,
    PageLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
