import { Component } from '@angular/core';
import { Layout } from '@swimlane/ngx-graph';
import { MSAGLLayout } from './msaglLayout';

import GameOfThrones from "./../examples/gameOfThrones.json";
import * as shape from 'd3-shape';

const cache = {};

@Component({
  selector: 'ngx-graph-msagl',
  templateUrl: './ngx-graph-msagl.component.html',
  styleUrls: ['./ngx-graph-msagl.component.scss']
})
export class NgxGraphMSAGLComponent {
  public layout: Layout = new MSAGLLayout();
  public curve: any = shape.curveBasis;

  public nodes: any = [];
  public links: any = [];

  constructor() {
    this.nodes = GameOfThrones.nodes;
    this.links = GameOfThrones.edges;

    for (const link of this.links) {
      link.id = this.id();
    }
  }

  private id(): string {
    let newId = ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
  
    newId = `a${newId}`;
  
    // ensure not already used
    if (!cache[newId]) {
      cache[newId] = true;
      return newId;
    }
  
    return this.id();
  }
}
