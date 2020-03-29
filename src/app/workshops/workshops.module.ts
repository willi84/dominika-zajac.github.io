import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { WorkshopsRoutingModule } from './workshops-routing.module';
import { WorkshopsComponent } from './workshops.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { PartnersComponent } from './components/partners/partners.component';
import { PatreonModule } from '../patreon/patreon.module';
import { HeroSectionModule } from '../hero-section/hero-section.module';

@NgModule({
  declarations: [WorkshopsComponent, MentorsComponent, PartnersComponent],
  imports: [CommonModule, WorkshopsRoutingModule, ScullyLibModule, PatreonModule, HeroSectionModule],
})
export class WorkshopsModule { }
