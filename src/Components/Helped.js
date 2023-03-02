import axios from 'axios'

export const Helper = async (str) => {

    // call api and get the movie details;
    // fetch("http://www.omdbapi.com/?apiKey=de4c7ce7&t=avatar")
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    //     .catch((error) => console.log(error));

    // OR 

    const { data } = await axios.get('http://www.omdbapi.com/?apiKey=de4c7ce7&t=' + str);

    return data;

}