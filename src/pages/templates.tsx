import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from './_navbar';
import { useState } from 'react';
import { Plugin } from '@/types/templates';
import { addNewTemplate } from '@/func/templates';
import { notify } from './_alert';




const Templates: NextPage = () => {

    const [templateName, setTemplateName] = useState<string>('');
    const [plugins, setPlugins] = useState<Plugin[]>([{ name: '', require: false }]);
    const [jsonData, setJsonData] = useState<string>('');

    const handleAddPlugin = () => {
        setPlugins([...plugins, { name: '', require: false }]);
    };

    const handlePluginChange = (index: number, field: keyof Plugin, value: string | boolean) => {
        const updatedPlugins = [...plugins];
        updatedPlugins[index] = { ...updatedPlugins[index], [field]: value };
        setPlugins(updatedPlugins);
    };

    const handleRemovePlugin = (index: number) => {
        const updatedPlugins = plugins.filter((_, i) => i !== index);
        setPlugins(updatedPlugins);
    };

    const handleDataChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const file = event.target.value?.[0] || '';
        setJsonData(file);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // const sd = await addNewTemplate({
        //     name:templateName,
        //     plugins:plugins,
        //     content:jsonData
        // })


        // if(sd){
        //     notify('The template has been added successfully!👌')
        // }
    };

    return (
        <>
            <Head>
                <title>Templates</title>
                <meta name="description" content="A page to manage and view templates" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="flex flex-col items-center justify-center min-h-screen text-slate-950 bg-gray-100 p-4">
                <h1 className="text-3xl font-bold mb-4">Templates</h1>
                <p className="text-lg">This is the Templates page where you can manage and view your templates.</p>



                <div className="p-6 w-full mx-auto rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Add Template</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="templateName" className="block text-sm font-medium text-gray-700">Template Name</label>
                            <input
                                id="templateName"
                                type="text"
                                value={templateName}
                                onChange={(e) => setTemplateName(e.target.value)}
                                placeholder="Enter template name"
                                className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Plugins</label>
                            {plugins.map((plugin, index) => (
                                <div key={index} className="flex items-center mb-2 border p-2 rounded-md">
                                    <input
                                        type="text"
                                        value={plugin.name}
                                        onChange={(e) => handlePluginChange(index, 'name', e.target.value)}
                                        placeholder="Enter plugin name"
                                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md mr-2"
                                    />
                                    <input
                                        type="checkbox"
                                        checked={plugin.require}
                                        onChange={(e) => handlePluginChange(index, 'require', e.target.checked)}
                                        className="mr-2"
                                    />
                                    <label className="mr-2 text-sm text-gray-700">Require</label>
                                    <button
                                        type="button"
                                        onClick={() => handleRemovePlugin(index)}
                                        className="text-sm bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddPlugin}
                                className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                                Add Plugin
                            </button>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="jsonData" className="block text-sm font-medium text-gray-700">Template Data</label>

                            <textarea 
                                id="jsonData"
                                onChange={handleDataChange}
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"></textarea>

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>



            </main>
        </>
    );
};

export default Templates;
