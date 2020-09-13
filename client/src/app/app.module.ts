import {environment} from '../environments/environment'
import {SharedModule} from './blog/shared/shared.module'

import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to'
import {BrowserModule} from '@angular/platform-browser'
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, Provider} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTooltipModule,
  MatSnackBarModule,
} from '@angular/material/'


import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {MainPageComponent} from './main-page/main-page.component'
import {ShadowComponent} from './shadow/shadow.component'
import {ButtonComponent} from './button/button.component'
import {FlexBoxComponent} from './flex-box/flex-box.component'
import {ToDoComponent} from './to-do/to-do.component'
import {ModalComponent} from './to-do/modal/modal.component'
import {TranslateComponent} from './translate/translate.component'
import {ClipboardModule} from 'ngx-clipboard'
import {MainLayoutComponent} from './blog/shared/components/main-layout/main-layout.component'
import {HomePageComponent} from './blog/home-page/home-page.component'
import {PostPageComponent} from './blog/post-page/post-page.component'
import {PostComponent} from './blog/shared/components/post/post.component'
import {AuthInterseptor} from './blog/shared/auth.interseptor'
import {InputPageComponent} from './translate/childrens/input-page/input-page.component'
import {TestPageComponent} from './translate/childrens/test-page/test-page.component'
import {SuccessPageComponent} from './translate/childrens/success-page/success-page.component'
import {FailPageComponent} from './translate/childrens/fail-page/fail-page.component'
import {ModalWordsComponent} from './translate/childrens/modal-words/modal-words.component'
import {CopySnackBarComponent} from './flex-box/copy-snack-bar/copy-snack-bar.component'
import {AboutPageComponent} from './main-page/about-page/about-page.component'
import {ContactPageComponent} from './main-page/contact-page/contact-page.component'
import {ProjectsPageComponent} from './main-page/projects-page/projects-page.component'
import {SkillsPageComponent} from './main-page/skills-page/skills-page.component'
import {WelcomePageComponent} from './main-page/welcome-page/welcome-page.component';
import { MainSnackbarComponent } from './main-page/main-snackbar/main-snackbar.component'


const INTERSEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterseptor
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ShadowComponent,
    ButtonComponent,
    FlexBoxComponent,
    ToDoComponent,
    ModalComponent,
    TranslateComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
    InputPageComponent,
    TestPageComponent,
    SuccessPageComponent,
    FailPageComponent,
    ModalWordsComponent,
    CopySnackBarComponent,
    AboutPageComponent,
    ContactPageComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    WelcomePageComponent,
    MainSnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule,
    ClipboardModule,
    SharedModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.fbToDo),
    AngularFireDatabaseModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    INTERSEPTOR_PROVIDER
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    ModalComponent,
    ModalWordsComponent,
    CopySnackBarComponent,
    MainSnackbarComponent
  ]
})
export class AppModule {
}

