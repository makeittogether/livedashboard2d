import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { AppComponent } from './app.component';
import { GridlayoutComponent } from './components/gridlayout/gridlayout.component';
import { OppVerBarOverallComponent } from './components/opp-ver-bar-overall/opp-ver-bar-overall.component';
import { OlsPiechartComponent } from './components/ols-piechart/ols-piechart.component';
import { CcpiechartComponent } from './components/ccpiechart/ccpiechart.component';
import { DailyoppstatusComponent } from './components/dailyoppstatus/dailyoppstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    GridlayoutComponent,
    OppVerBarOverallComponent,
    OlsPiechartComponent,
    CcpiechartComponent,
    DailyoppstatusComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
