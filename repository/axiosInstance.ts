import axios from 'axios';
import { BASE_URL, TEST_URL } from '../config';

export const axiosInstance = axios.create({
    baseURL: TEST_URL,
});