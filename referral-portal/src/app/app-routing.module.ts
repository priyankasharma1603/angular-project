import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '././././app.routes';
import { AppComponent } from './app.component';
import { IndexModule } from './features/index/index.module';
import { LoginModule } from './features/login/login.module';
import { CandidateHomeModule } from './features/candidate-home/candidate-home.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    LoginModule,
    CandidateHomeModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
