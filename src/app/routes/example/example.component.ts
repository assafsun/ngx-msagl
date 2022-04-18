import { Component } from '@angular/core';

import { ngxMsaglEdge, ngxMsaglNode } from 'src/ngx-msagl-src/models';
import GameOfThrones from "./../../examples/gameOfThrones.json";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  public nodes: ngxMsaglNode[] = [];
  public links: ngxMsaglEdge[] = [];

  constructor() {
    console.log("assaf1");
    this.nodes = GameOfThrones.nodes;
    this.links = GameOfThrones.edges;
    console.log("assaf2");
  }
}
