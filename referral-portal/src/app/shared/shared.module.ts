import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ListCardComponent } from './list-card/list-card.component';

@NgModule({
  declarations: [
    SearchComponent,
    ListCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent,
    ListCardComponent
  ]
})
export class SharedModule { }
