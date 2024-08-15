import { Document } from 'mongoose';


export interface Template extends Document {
    name:string;
    imgUrl:string;
    plugins:{
        pluginName:string;
        require:boolean;
        pluginURL:string
    }[];
    content:templateContent[]
}


type templateContent = {
    elementor_posts:[];
    elementor_meta:[];
    elementor_options:[];
    customize_options:[];
}