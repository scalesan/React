import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 
        'Client-ID a6b44cf2742a4303ae23a006fdcbedd0304f08c8a62f7a008066e8749465d5ad'
    }
});
