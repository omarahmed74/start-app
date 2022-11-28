import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './main/about/about.component';
import { ServicesComponent } from './main/services/services.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { TeamComponent } from './main/team/team.component';
import { PricingComponent } from './main/pricing/pricing.component';
import { RecentPostsComponent } from './main/recent-posts/recent-posts.component';
import { ContactComponent } from './main/contact/contact.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    PortfolioComponent,
    TeamComponent,
    PricingComponent,
    RecentPostsComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
