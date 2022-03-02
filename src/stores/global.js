import { writable } from "svelte/store";

export const global = writable({
    showSignup: false,
    showLogin: false,
});