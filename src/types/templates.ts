

export interface Template {
    name:string;
    plugins:Plugin[];
    content:string
}

export type Plugin={
    name:string;
    require:boolean;
}
