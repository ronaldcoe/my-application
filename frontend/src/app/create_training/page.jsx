'use client'
import { useState } from "react";
import {createNewModule, createNewTraining} from "../../../../backend/training";
export default function CreateTraining() {
    const [trainingTitle, setTrainingTitle] = useState('');
    const [moduleTitle, setModuleTitle] = useState('');
    const [trainingId, setTrainingId] = useState();
    const [traningSuccess, setTrainingSuccess] = useState(false);
    console.log(trainingId)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await createNewTraining(trainingTitle);
            setTrainingSuccess(true);
            console.log(data.data.id)
            setTrainingId(data.data.id);
            // Handle success, such as clearing form, showing a success message, or redirecting
        } catch (error) {
            // Handle errors, show user feedback, etc.
            console.log(error);
        }
    };

    const handleNewModule = async (e) => {
        e.preventDefault();

        try {
            const data = await createNewModule(moduleTitle, trainingId);
           
            setTrainingSuccess(true);
            
            console.log("module",data)
            // Handle success, such as clearing form, showing a success message, or redirecting
        } catch (error) {
            // Handle errors, show user feedback, etc.
            console.log(error);
        }
    }

   
    return(
        <div>
            {!traningSuccess&&
                <div>
                    <h1 className="text-3xl mb-12">
                        Create New Training
                    </h1>
                    <div class="mb-6 w-96">
                        <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900">Training Tittle</label>
                        <input type="text" id="base-input" onChange={(e)=>{setTrainingTitle(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                    </div>
                    <button type="button" onClick={(e)=>handleSubmit(e)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">
                        Create Training
                    </button>
                </div>
            }
            {traningSuccess&&
                <div>
                     <h1 className="text-3xl mb-12">
                        Create New Module
                    </h1>
                    <div class="mb-6 w-96">
                        <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900">Module Tittle</label>
                        <input type="text" id="base-input" onChange={(e)=>{setModuleTitle(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                    </div>
                    <button type="button" onClick={(e)=>handleNewModule(e)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">
                        Create Module
                    </button>
                </div>
            }
        </div>
    )
}