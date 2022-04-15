import { Component } from '@angular/core';
import { Layout } from '@swimlane/ngx-graph';
import { MSAGLLayout } from './msaglLayout';

import ComposerJson from "./../examples/composer.json";
import * as shape from 'd3-shape';

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
    if (ComposerJson) {
      console.log("1");
    }
    this.nodes = ComposerJson.nodes;
    this.links = ComposerJson.edges;
  }
}
