import { FailPageComponent } from './translate/childrens/fail-page/fail-page.component';
import { SuccessPageComponent } from './translate/childrens/success-page/success-page.component';
import { TestPageComponent } from './translate/childrens/test-page/test-page.component';
import { InputPageComponent } from './translate/childrens/input-page/input-page.component';
import { PostPageComponent } from './blog/post-page/post-page.component';
import { HomePageComponent } from './blog/home-page/home-page.component';
import { TranslateComponent } from './translate/translate.component';
import { ToDoComponent } from './to-do/to-do.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { ButtonComponent } from './button/button.component';
import { ShadowComponent } from './shadow/shadow.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainLayoutComponent } from './blog/shared/components/main-layout/main-layout.component';
import {WelcomePageComponent} from './main-page/welcome-page/welcome-page.component'
import {AboutPageComponent} from './main-page/about-page/about-page.component'
import {SkillsPageComponent} from './main-page/skills-page/skills-page.component'
import {ProjectsPageComponent} from './main-page/projects-page/projects-page.component'
import {ContactPageComponent} from './main-page/contact-page/contact-page.component'

const routes: Routes = [
  { path: '', component: MainPageComponent, children: [
      {path: '', component: WelcomePageComponent},
      {path: 'about', component: AboutPageComponent},
      {path: 'skills', component: SkillsPageComponent},
      {path: 'projects', component: ProjectsPageComponent},
      {path: 'contact', component: ContactPageComponent},
    ] },
  { path: 'shadow', component: ShadowComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'flexbox', component: FlexBoxComponent },
  { path: 'to-do', component: ToDoComponent },
  { path: 'words', component: TranslateComponent, children: [
    { path: '', redirectTo: '/words/input', pathMatch: 'full'},
    { path: 'input', component: InputPageComponent },
    { path: 'test', component: TestPageComponent },
    { path: 'success', component: SuccessPageComponent},
    { path: 'fail', component: FailPageComponent}
  ] },
  { path: 'blog', component: MainLayoutComponent , children: [
    {path: 'blog', redirectTo: '/blog', pathMatch: 'full'},
    {path: '', component: HomePageComponent},
    {path: 'post/:id', component: PostPageComponent}
  ]},
  { path: 'blog/admin', loadChildren: () => import('./blog/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
