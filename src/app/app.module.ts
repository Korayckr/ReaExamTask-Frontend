import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './modules/auth/loginpage/loginpage.component';
import { RegisterpageComponent } from './modules/auth/registerpage/registerpage.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';


import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './modules/dashboard/sidebar/sidebar.component';
import { TableComponent } from './modules/dashboard/table/table.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterpageComponent,
    ProfileComponent,
    SidebarComponent,
    TableComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MenuModule,
    ToastModule,
    ButtonModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    MenubarModule

    
   
    
    
   
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
