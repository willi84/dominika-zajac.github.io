import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { WorkshopsRoutingModule } from './workshops-routing.module';
import { WorkshopsComponent } from './workshops.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { PartnersComponent } from './components/partners/partners.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { PatreonModule } from '../patreon/patreon.module';

@NgModule({
  declarations: [WorkshopsComponent, MentorsComponent, PartnersComponent, HeroSectionComponent],
  imports: [CommonModule, WorkshopsRoutingModule, ScullyLibModule, PatreonModule],
})
export class WorkshopsModule { }
