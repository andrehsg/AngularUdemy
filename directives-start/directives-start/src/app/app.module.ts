import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight-directive';

import { AppComponent } from './app.component';
import { BetterHighlightDirective } from './better-highlight.directive';
import { UnlessDirectiveDirective } from './unless-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
