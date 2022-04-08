import { writable } from "svelte/store";

export const app = writable({
    showSignup: false,
    showLogin: false,
});