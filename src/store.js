import { writable } from "svelte/store";

// 0 is the default value, e.g. first item in list
export const activeItem = writable(0);
