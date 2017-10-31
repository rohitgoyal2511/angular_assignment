import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HaryanaComponent } from './haryana/haryana.component';
import { PunjabComponent } from './punjab/punjab.component';
import { UttarpardeshComponent } from './uttarpardesh/uttarpardesh.component';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { MaharashtraComponent } from './maharashtra/maharashtra.component';
import { RouterModule } from '@angular/router';
import { StatesComponent } from './states/states.component';
import { HisarComponent } from './hisar/hisar.component';
import { RohtakComponent } from './rohtak/rohtak.component';
import { KurukshetraComponent } from './kurukshetra/kurukshetra.component';
import { HaryanaInfoComponent } from './haryana-info/haryana-info.component';
import { GondaComponent } from './gonda/gonda.component';
import { UttarpardeshInfoComponent } from './uttarpardesh-info/uttarpardesh-info.component';
import { RajasthanInfoComponent } from './rajasthan-info/rajasthan-info.component';
import { MaharashtraInfoComponent } from './maharashtra-info/maharashtra-info.component';
import { PunjabInfoComponent } from './punjab-info/punjab-info.component';
import { EtawahComponent } from './etawah/etawah.component';
import { LudhianaComponent } from './ludhiana/ludhiana.component';
import { PatialaComponent } from './patiala/patiala.component';
import { AgraComponent } from './agra/agra.component';
import { VaranasiComponent } from './varanasi/varanasi.component';
import { NagpurComponent } from './nagpur/nagpur.component';
import { PuneComponent } from './pune/pune.component';
import { AlwarComponent } from './alwar/alwar.component';
import { BikanerComponent } from './bikaner/bikaner.component';

@NgModule({
  declarations: [
    AppComponent,
    HaryanaComponent,
    PunjabComponent,
    UttarpardeshComponent,
    RajasthanComponent,
    MaharashtraComponent,
    StatesComponent,
    HisarComponent,
    RohtakComponent,
    KurukshetraComponent,
    HaryanaInfoComponent,
    GondaComponent,
    UttarpardeshInfoComponent,
    RajasthanInfoComponent,
    MaharashtraInfoComponent,
    PunjabInfoComponent,
    EtawahComponent,
    LudhianaComponent,
    PatialaComponent,
    AgraComponent,
    VaranasiComponent,
    NagpurComponent,
    PuneComponent,
    AlwarComponent,
    BikanerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //full : makes sure the path is absolute path
      { path: '', redirectTo: '/haryana', pathMatch: 'full' },
      { path: 'haryana', component: HaryanaComponent,
        children : [{path:'', component: HaryanaInfoComponent},
        {path: 'hisar', component:HisarComponent},
          {path: 'rohtak', component:RohtakComponent},
          {path: 'kurukshetra', component: KurukshetraComponent},
        ]},
      { path: 'uttarpardesh', component: UttarpardeshComponent,
        children : [{path:'', component: UttarpardeshInfoComponent},
        {path: 'agra', component:AgraComponent},
        {path: 'varanasi', component:VaranasiComponent},
    ]},
      { path: 'punjab', component: PunjabComponent,
        children : [{path:'', component: PunjabInfoComponent},
          {path: 'patiala', component:PatialaComponent},
          {path: 'ludhiana', component:LudhianaComponent},
      ]},
      { path: 'maharashtra', component: MaharashtraComponent,
        children : [{path:'', component: MaharashtraInfoComponent},
          {path: 'pune', component:PuneComponent},
          {path: 'nagpur', component:NagpurComponent},
      ]},
      { path: 'rajasthan', component: RajasthanComponent,
        children : [{path:'', component: RajasthanInfoComponent},
          {path: 'alwar', component:AlwarComponent},
          {path: 'bikaner', component:BikanerComponent},
        ]}
    ],)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
