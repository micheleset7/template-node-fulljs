import axios  from 'axios';

export const api= axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/'
});

export const postform= axios.create({
    baseURL: 'https://webhook.site/81ed162c-64c3-464b-a3f8-f1835166bb31'
});