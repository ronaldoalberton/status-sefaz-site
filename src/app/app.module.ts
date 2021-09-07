import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CardModule} from 'primeng/card';
import { StatusServicoComponent } from './component/status-servico/status-servico.component';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import {StyleClassModule} from 'primeng/styleclass';

@NgModule({
  declarations: [
    AppComponent,
    StatusServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    TabViewModule,
    AutoCompleteModule,
    FormsModule,
    CardModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    ChartModule,
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
