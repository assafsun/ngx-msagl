import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-root/app.component';
import { AppBarComponent } from './components/app-bar/app-bar/app-bar.component';
import { NgxGraphMSAGLComponent } from 'src/ngx-msagl-src/ngx-graph-msagl/ngx-graph-msagl.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    NgxGraphMSAGLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    NgxGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
