import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Layout } from '@swimlane/ngx-graph';
import { MSAGLLayout } from './msaglLayout';
import { ngxMsaglNode, ngxMsaglEdge } from '../models';

import * as shape from 'd3-shape';

//const cache = {};

@Component({
  selector: 'ngx-graph-msagl',
  templateUrl: './ngx-graph-msagl.component.html',
  styleUrls: ['./ngx-graph-msagl.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxGraphMSAGLComponent implements OnInit {
  @Input() nodes: ngxMsaglNode[] = undefined;
  @Input() links: ngxMsaglEdge[] = undefined;
  @Input() useMsaglLayout: boolean = true;
  @Input() useMSAGLLayeredLayout: boolean = false;

  public msaglLayout: Layout;
  public curve: any = shape.curveBasis;

  ngOnInit(): void {
    this.msaglLayout = new MSAGLLayout(this.useMSAGLLayeredLayout);
  }

  // private id(): string {
  //   let newId = ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
  
  //   newId = `a${newId}`;
  
  //   // ensure not already used
  //   if (!cache[newId]) {
  //     cache[newId] = true;
  //     return newId;
  //   }
  
  //   return this.id();
  // }
}
