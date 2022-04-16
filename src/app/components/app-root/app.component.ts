import { Component } from '@angular/core';
import { ngxMsaglEdge, ngxMsaglNode } from 'src/ngx-msagl-src/models';

import GameOfThrones from "./../../examples/gameOfThrones.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public nodes: ngxMsaglNode[] = [];
  public links: ngxMsaglEdge[] = [];

  title = 'ngx-msagl';

  constructor() {
    this.nodes = GameOfThrones.nodes;
    this.links = GameOfThrones.edges;
  }
}
