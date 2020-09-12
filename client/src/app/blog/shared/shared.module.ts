import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot(),
  ],
  exports: [
    HttpClientModule,
    QuillModule
  ]
})

export class SharedModule {

}
