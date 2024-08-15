import { Template } from '@/types/templates';
import { Schema, model } from 'mongoose';

const templateSchema = new Schema<Template>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    plugins: [
        {
            pluginName: {
                type: String,
                required: true,
            },
            require: {
                type: Boolean,
                required: true,
            },
            pluginURL: {
                type: String,
                required: true,
            },
        },
    ],
    content: [
        {
            elementor_posts: {
                type: Array, 
                required: true,
            },
            elementor_meta: {
                type: Array,
                required: true,
            },
            elementor_options: {
                type: Array,
                required: true,
            },
            customize_options: {
                type: Array,
                required: true,
            },
        },
    ],
});

const TemplateModel = model<Template>('Template', templateSchema);

export default TemplateModel;
