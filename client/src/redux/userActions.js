import axios from 'axios';
import { getLocalStorage } from '../handlers/localStorage.js';
import {
	getAllUsers,
	getUserById,
	getFilteredProfessionals,
	setActiveUser
} from './userSlice.js';


export const getChars = () => (dispatch) => {
	axios
		.get('/users')
		.then((res) => {
			dispatch(getAllUsers(res.data));
		})
		.catch((e) => console.log(e));
};

export const getCharsById = (id) => (dispatch) => {
	axios
		.get(`/users/${id}`)
		.then((res) => {
			dispatch(getUserById(res.data));
		})
		.catch((e) => console.log(e));
};

export const getLeadingProfessionals = () => (dispatch) => {
	axios
		.get(`/users?rating=ASC`)
		.then((res) => {
			dispatch(getFilteredProfessionals(res.data));
		})
		.catch((e) => console.log(e));
};

export const filterProfessionals = (filters) => (dispatch) => {
	axios
		.get(
			`/users?name=${filters.name}&profession=${filters.profession}&rating=${filters.rating}`
		)
		.then((res) => {
			dispatch(getFilteredProfessionals(res.data));
		})
		.catch((e) => console.log(e));
};

export const modifyUser = (id, payload) => (dispatch) => {
	// console.log('modifyUser payload', payload)
	// console.log('id', id)
	axios.put(`/users/edit/${id}`, payload)
	.then(() => {
		getLocalStorage()
	})
	.catch((e) => console.log(e));
	
}

export const modifyProfessions = (id, payload) => (dispatch)=> {
	axios.put(`/users/${id}`, payload)
	.then((res) => {
		getLocalStorage()
	})
	.catch((e) => console.log(e));
	
}

export const changeReview = (id, payload) => {
	axios.put(`/review/${id}`, payload);
	getChars()
}