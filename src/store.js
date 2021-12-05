import { writable } from 'svelte/store';

function createTitle() {
	const {subscribe, set, update} = writable('');
	
	return {
		subscribe,
		set: (value) => {
			set(`${value} | NicoNoClaste Web developer`)
		},
		clear: () => {
			set('NicoNoClaste Web developer');
		}
	}
}

export const title = createTitle();