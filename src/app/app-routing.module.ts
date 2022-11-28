import { NotFoundComponent } from './shared/not-found/not-found.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { TeamComponent } from './main/team/team.component';
import { RecentPostsComponent } from './main/recent-posts/recent-posts.component';
import { PricingComponent } from './main/pricing/pricing.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ContactComponent } from './main/contact/contact.component';
import { ServicesComponent } from './main/services/services.component';
import { AboutComponent } from './main/about/about.component';
import { HeroComponent } from './hero/hero.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path : "home" , component : HeroComponent},
{path : "" , component : HeroComponent},
{path : "about" , component : AboutComponent},
{path : "services" , component : ServicesComponent},
{path : "contact" , component : ContactComponent},
{path : "protfolio" , component : PortfolioComponent},
{path : "pricing" , component : PricingComponent},
{path : "recent-posts" , component : RecentPostsComponent},
{path : "team" , component : TeamComponent},
{path : "testimonials" , component : TestimonialsComponent},
{path : "404" , component : NotFoundComponent},
{path : "**" , component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
