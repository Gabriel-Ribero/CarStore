import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page3Component } from './pages/page3/page3.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ModalViewCarrosComponent } from './pages/page3/modal-view-carros/modal-view-carros.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'page1', component: Page1Component},
  //{ path: 'page2', component: Page2Component},
  { path: 'page3', component: Page3Component},
  { path: 'modal-view-carros', component: ModalViewCarrosComponent},
  { path: 'crud', component: CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
