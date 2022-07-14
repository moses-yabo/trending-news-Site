import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewsComponent } from './news-mag/news/news.component';
import { WeatherComponent } from './news-mag/weather/weather.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent
  }
  ,{
  path:'news',
  component:NewsComponent
},
{
  path:'weather',
  component:WeatherComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
