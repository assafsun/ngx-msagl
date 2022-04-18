import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { HomeComponent } from './routes/home/home.component';
import { ExampleComponent } from './routes/example/example.component';
import { HelpComponent } from './routes/help/help.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { NgxGraphMSAGLComponent } from './../ngx-msagl-src/ngx-graph-msagl/ngx-graph-msagl.component';

@NgModule({
  declarations: [AppComponent, 
    HomeComponent, 
    ExampleComponent, 
    HelpComponent, 
    NotFoundComponent, 
    NgxGraphMSAGLComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgxGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
