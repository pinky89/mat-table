import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material';
import { ExpandedrowcontentComponent } from './expandedrowcontent/expandedrowcontent.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ExpandedrowcontentComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
