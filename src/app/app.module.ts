import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule }   from '@angular/forms';
import { DirectoryComponent } from './directory/directory.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './components/persons/persons.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonAddComponent } from './components/person-add/person-add.component';

const appRoutes : Routes=[
  {path : '',component: PersonsComponent},
  //{path : 'addPerson', component : PersonAddComponent},
  {path : 'edit/:id', component : PersonEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    PersonsComponent,
    NavbarComponent,
    FooterComponent,
    PersonEditComponent,
    PersonAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
