
import axios from 'axios';

const instance = axios.create({
     baseURL: 'https://burger-builder-e674b-default-rtdb.firebaseio.com/'
});

export default instance;