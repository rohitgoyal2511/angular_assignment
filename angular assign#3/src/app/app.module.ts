import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CorouselComponent } from './corousel/corousel.component';
import { TableComponent } from './table/table.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { PlayerFollowComponent } from './player-follow/player-follow.component';
import { InFocusComponent } from './in-focus/in-focus.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CorouselComponent,
    TableComponent,
    FixturesComponent,
    GalleriesComponent,
    PlayerFollowComponent,
    InFocusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
