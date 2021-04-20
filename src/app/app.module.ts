import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    footerComponent,
    LeftsidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
