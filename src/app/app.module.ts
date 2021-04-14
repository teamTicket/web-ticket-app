import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';


import { ChartpromedioatencionComponent } from './components/chartpromedioatencion/chartpromedioatencion.component';
import { ChartticketmensualComponent } from './components/chartticketmensual/chartticketmensual.component';
import { ChartticketanualComponent } from './components/chartticketanual/chartticketanual.component';
import { ChartTicketSemanalComponent } from './components/chartticketsemanal/chartticketsemanal.component';
import { ChartClientesComponent } from './components/chartclientes/chartclientes.component';

import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { CardUsuariosComponent } from './components/card-usuarios/card-usuarios.component';
import { CardTicketsComponent } from './components/card-tickets/card-tickets.component';
import { ChartTicketsComponent } from './components/chart-tickets/chart-tickets.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartTicketSemanalComponent,
    ChartClientesComponent,
    NavbarComponent,
    SidebarComponent,
    ChartpromedioatencionComponent,
    ChartticketmensualComponent,
    ChartticketanualComponent,
    UsuariosComponent,
    CardUsuariosComponent,
    CardTicketsComponent,
    ChartTicketsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
