import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateHomeComponent } from './candidate-home/candidate-home.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CandidateHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CandidateHomeComponent }
    ])
  ]
})
export class CandidateHomeModule { }
