import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , RoutingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContenidoComponent } from './contenido/contenido.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';








@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HeaderComponent,
    MenuComponent,
    ContenidoComponent,
    DialogConfirmationComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule
    
  ],
  entryComponents: [
    DialogConfirmationComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
