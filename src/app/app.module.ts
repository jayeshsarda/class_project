import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { SocialLoginModule, AuthServiceConfig} from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import { PrimeModule } from './modules/prime/prime.module';
import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DummyComponent } from './dummy/dummy.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NoidaComponent } from './contact/noida/noida.component';
import { DelhiComponent } from './contact/delhi/delhi.component';
import { GurugramComponent } from './contact/gurugram/gurugram.component';
import { CategoryComponent } from './category/category.component';
import { AuthGuard } from './guard/auth.guard';
import { AttrDirective } from './attribute_directive/attr.directive';
import { StrDirective } from './attribute_directive/str.directive';
import { ParentComponent } from './ptc/parent/parent.component';
import { ChildComponent } from './ptc/child/child.component';
import { InputComponent } from './ctp/input/input.component';
import { OutputComponent } from './ctp/output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DummyComponent,
    NotfoundComponent,
    NoidaComponent,
    DelhiComponent,
    GurugramComponent,
    CategoryComponent,
    AttrDirective,
    StrDirective,
    ParentComponent,
    ChildComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SocialLoginModule,
    PrimeModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [
              AuthGuard,
              {
                provide: AuthServiceConfig,
                useFactory: provideConfig
              },
              MessageService
              ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('318535589992-uc87qrph7ihbmlfm12vjek8ssna2mkka.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('Facebook-App-Id')
  }
]);

export function provideConfig() {
  return config;
}
