import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { MyFooterComponent } from './user-screen/my-component/my-footer/my-footer.component';
import { MyNavComponent } from './user-screen/my-component/my-nav/my-nav.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UserScreenComponent, MyFooterComponent, MyNavComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
