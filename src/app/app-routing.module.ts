import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyLayoutComponent } from './body-layout/body-layout.component';
import { BarChartComponent } from './chart-component/bar-chart/bar-chart.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '\dashboard',
    pathMatch : 'full'
  },
  {
    path : 'dashboard',
    component : BodyLayoutComponent,
  },
  {
    path : 'd3bar',
    component : BarChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
