import { writable } from 'svelte/store'

export interface Constestant {
  name: string;
  entries: number;
  id: string;
}

// get the value out of storage on load
const itemName="contestants"
const retrieved = localStorage.getItem(itemName)
const parsed = JSON.parse(retrieved)

// Set the stored value or a sane default
export const contestants = writable(parsed === null ? [] : parsed)

// contestants.subscribe((value) => localStorage.setItem(itemName, JSON.stringify(value)))
