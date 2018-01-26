import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { TodoService } from './todo.service';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AddComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [    // Ici, on rentre manuellement les services (on rentre le nom de la classe)
    AppService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
