import { writable } from 'svelte/store'

export const entry = writable({
  name: "",
  entries: "",
  id: ""
})
