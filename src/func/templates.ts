import TemplateModel from "@/schema/templates";
import { Template } from "@/types/templates";

// Assuming Template is your TypeScript interface for the document
export const getAllTemplatsData = async (): Promise<Template[]> => {
    const allTemplatsData = await TemplateModel.find();
    return allTemplatsData;
};