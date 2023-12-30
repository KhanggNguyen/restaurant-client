import axios from 'axios';
const BASE_URL = "http://127.0.0.1:8000"
const VERISON = "v2"

axios.defaults.baseURL = `${BASE_URL}/${VERISON}`;
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

let refresh = false;

axios.interceptors.response.use(
	(resp) => resp,
	async (error) => {
		if (error.response.status === 401 && !refresh) {
			refresh = true;

			const response = await axios.post('/user/refresh-token', {}, { withCredentials: true });

			if (response.status === 200) {
			}
		}
	}
);
