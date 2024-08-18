import { Document } from 'mongoose';


export interface Template extends Document {
    name:string;
    plugins:Plugin[];
    content:string
}

export type Plugin={
    name:string;
    require:boolean;
}
