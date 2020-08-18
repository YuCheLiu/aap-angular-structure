import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BaseStructureComponent } from './base-structure/base-structure.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: DirectiveComponent },
      { path: 'html', component: BaseStructureComponent },
      { path: 'form', component: BasicFormComponent },
      { path: 'directive', component: DirectiveComponent }
    ]) ],
  declarations: [ AppComponent, HelloComponent, BaseStructureComponent, BasicFormComponent, DirectiveComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
