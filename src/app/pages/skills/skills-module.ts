import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsRoutingModule } from './skills-routing-module';
import { SkillsComponent } from './skills';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, SkillsRoutingModule]
})
export class SkillsModule {}
