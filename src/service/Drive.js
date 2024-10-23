// googleDriveApi.js
import axios from 'axios';

const API_KEY = 'AIzaSyCpRlk__EaoqGHLJ52MOIJ6RFB5F009dxA'; 
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
