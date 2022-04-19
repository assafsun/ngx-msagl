import { Component, OnInit } from '@angular/core';
import { ngxMsaglEdge, ngxMsaglNode } from 'src/ngx-msagl-src/models';
import * as GraphlibDot from 'graphlib-dot';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public nodes: ngxMsaglNode[] = [];
  public links: ngxMsaglEdge[] = [];
  public shouldShowGraph:boolean = false;

  async ngOnInit(): Promise<void> {
    const resp = await fetch("https://raw.githubusercontent.com/microsoft/msagljs/main/modules/core/test/data/graphvis/world.gv");
    const content = await resp.text();
    const graph = GraphlibDot.read(content);
    this.nodes = graph.nodes().map((node) => {return {id: node, label:"L"+node}});
    this.links = graph.edges().map((edge) => {return {source: edge.v, target: edge.w}});
    this.shouldShowGraph = true;
  }
}
