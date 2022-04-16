import { Layout, Node ,Edge } from '@swimlane/ngx-graph';

export interface ngxMsaglNode extends Node{
    id : string;
}

export interface ngxMsaglEdge extends Edge {
    source: string;
    target: string;
}