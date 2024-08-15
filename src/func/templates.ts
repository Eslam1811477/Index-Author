import TemplateModel from "@/schema/templates";
import { Template } from "@/types/templates";

export const getAllTemplatsData = async (): Promise<Template[]> => {
    const allTemplatsData = await TemplateModel.find();
    return allTemplatsData;
};