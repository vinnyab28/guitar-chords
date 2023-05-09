import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyChartComponent } from './components/key-chart/key-chart.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, children: [{ path: 'key-chart', component: KeyChartComponent }] },
  { path: '**', redirectTo: 'home', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
