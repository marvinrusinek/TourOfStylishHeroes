import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule, MATERIAL_COMPATIBILITY_MODE } from '@angular/material';
import { CustomMaterialModule } from './custom-material.module';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import 'hammerjs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
    MatToolbarModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 }),
    CustomMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CdkTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [{provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
