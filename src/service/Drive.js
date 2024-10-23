// googleDriveApi.js
import axios from 'axios';

const API_KEY = '513556553539-ph97r7uj5bfu573nhknke58m5rci2tjm.apps.googleusercontent.com'; 
const FOLDER_ID = '1xCa3kxKsSG6TwWLD5qi03nBj9_JCLmeQ'; 

export const fetchImagesFromDrive = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,webContentLink)`
    );
    return response.data.files;
  } catch (error) {
    console.error('Error fetching images from Google Drive:', error);
    return [];
  }
};
