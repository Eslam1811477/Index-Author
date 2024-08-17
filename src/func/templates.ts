import { DBConnect } from "@/db";
import TemplateModel from "@/schema/templates";
import { Template } from "@/types/templates";

export const getAllTemplatsData = async (): Promise<Template[]> => {
    await DBConnect();
    const allTemplatsData = await TemplateModel.find();
    return allTemplatsData;
};


export const addNewTemplate = async (templateData: Template): Promise<boolean> => {


    const newTemplate = new TemplateModel(templateData);

    const res = await newTemplate.save();
    console.log(res)
    return true;

};