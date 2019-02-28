import axios from 'axios';
import { enviromnent } from '../environment';

export const recipeClient = axios.create({
    baseURL: enviromnent.recipeContext,
    withCredentials: true
})