import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//--------------- COMPONENTS ----------------------
import { LoginpageComponent } from './modules/auth/loginpage/loginpage.component';
import { RegisterpageComponent } from './modules/auth/registerpage/registerpage.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { TableComponent } from './modules/dashboard/table/table.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home page
  { path: 'login', component: LoginpageComponent },
  { path: 'register', component: RegisterpageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'table', component: TableComponent },
  { path: 'home', component: HomeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
