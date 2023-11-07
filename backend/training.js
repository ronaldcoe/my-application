
const API_URL = 'http://localhost:1337/api/trainings';
const API_MODULES ='http://localhost:1337/api/modules' // Your Strapi endpoint

export  const createNewTraining = async (title) => {
    const trainingData = {
        "data":{
            "title": title
        } // Assumes your Strapi model has a 'title' field
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // If your Strapi API requires authentication, include your token in the request header
                // 'Authorization': 'Bearer YOUR_TOKEN_HERE',
            },
            body: JSON.stringify(trainingData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Training created successfully:', data);
        return data; // Return the data for further handling
    } catch (error) {
        console.error('There was an error creating the training:', error);
        throw error; // Rethrow the error for the caller to handle
    }
};

export const createNewModule = async (title, trainingId) => {
    const moduleData = {
        "data": {
            "title": title,
            "training":trainingId
        }
    };

    try {
        const response = await fetch(API_MODULES, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // If your Strapi API requires authentication, include your token in the request header
                // 'Authorization': 'Bearer YOUR_TOKEN_HERE',
            },
            body: JSON.stringify(moduleData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Module created successfully:', data);
        return data; // Return the data for further handling
    } catch (error) {
        console.error('There was an error creating the module:', error);
        throw error; // Rethrow the error for the caller to handle
    }
}