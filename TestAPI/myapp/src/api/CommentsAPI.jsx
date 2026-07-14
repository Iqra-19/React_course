import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com"

export async function getComments() {
    const response = await axios.get(`${BASE_URL}/comments`);
    return response.data;

    //console.log("Response is:", response);
}