import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home-module').then(m => m.HomeModule)
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./pages/skills/skills-module').then(m => m.SkillsModule)
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/projects/projects-module').then(m => m.ProjectsModule)
  },
  {
    path: 'academics',
    loadChildren: () =>
      import('./pages/academics/academics-module').then(m => m.AcademicsModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact-module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
