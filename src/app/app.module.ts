import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivesComponent } from './directives/directives.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { DataFetchComponent } from './data-fetch/data-fetch.component';
import {DataService} from './data.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { MenuComponent } from './admin/menu/menu.component';
import { TodoadminModule } from './todoadmin/todoadmin.module';
import { TodoadminComponent } from './todoadmin/todoadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    DirectivesComponent,
    AboutUsComponent,
    ContactUsComponent,
    DataFetchComponent,
    LoginFormComponent,
    TodoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TodoadminModule,
    FormsModule,
    RouterModule.forRoot([
        {path: 'about-us', component: AboutUsComponent},
        {path: 'contact-us', component: ContactUsComponent},
        {path: 'directives', component:DirectivesComponent},
        {path: 'DataFetch', component:DataFetchComponent},
        {path: 'login-form', component:LoginFormComponent},
        {path: 'todoadmin/todolist', component:TodoadminComponent}
      ]),
    ],
  
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
