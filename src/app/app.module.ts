import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './pages/basic/basic.component';
import { FeedbackAppComponent } from './pages/feedback-app/feedback-app.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    FeedbackAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
