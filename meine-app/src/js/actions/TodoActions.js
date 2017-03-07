import dispatcher from '../dispatcher';

import axios from 'axios';

export function createTodo(text) {
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text,
	});
}

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id,
	});
}

export function reloadTodos() {
	/*axios('http://someurl.com/somedateendpoint').then((data) => {
		console.log('got the data!'), data);
	})*/
	dispatcher.dispatch({type: "FETCH_TODOS"});
	setTimeout(() => {
		dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
			{
				id: 113464643,
				text: "Go Shopping Again",
				complete: false
			},
			{
				id: 235284679,
				text: "Hug Wife",
				complete: true
			}
		]})
	}, 1000);
}

export function getTracks() {
	axios('https://api.spotify.com/v1/search?q=krawczyk&type=artist').then((data) => {
		console.log('Got the data!', data);
	})
	//dispatcher.dispatch({type: "FETCH_SONGS"});
}