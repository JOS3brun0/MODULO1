import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './COMPONENTES/header/header.component';
import { BannerComponent } from './COMPONENTES/banner/banner.component';
import { AcercaDeComponent } from './COMPONENTES/acerca-de/acerca-de.component';
import { SkillSoftComponent } from './COMPONENTES/skill-soft/skill-soft.component';
import { EducacionComponent } from './COMPONENTES/educacion/educacion.component';
import { TrabajoComponent } from './COMPONENTES/trabajo/trabajo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    SkillSoftComponent,
    EducacionComponent,
    TrabajoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
