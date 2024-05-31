import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page3Component } from './pages/page3/page3.component';
import { ModelFormPecaComponent } from './pages/page1/model-form-peca/model-form-peca.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalFormCarrosComponent } from './pages/page3/modal-form-carros/modal-form-carros.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ButtonComponent,
    HomeComponent,
    Page1Component,
    Page3Component,
    ModelFormPecaComponent,
    ModalFormCarrosComponent
  ],
  imports: [
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),

    FormsModule, ReactiveFormsModule,
    BrowserModule,

    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
