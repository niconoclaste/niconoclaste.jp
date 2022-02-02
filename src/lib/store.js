import { writable } from 'svelte/store';
function createTitle() {
	const {subscribe, set} = writable('');
	return {
		subscribe,
		set: (value) => {
			set(`${value} | NicoNoClaste Web developer / ウェブデベロッパー`)
		},
		clear: () => {
			set('NicoNoClaste Web developer / ウェブデベロッパー');
		}
	}
}
export const title = createTitle();