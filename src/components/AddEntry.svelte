<script lang="ts" context="module">
  import newUniqueId from 'locally-unique-id-generator'
import { onMount, tick } from 'svelte';
</script>

<script lang="ts">
import { Constestant, contestants } from "../stores/contestants";

let name = ''
let entries = 0
let ref
let entry: Constestant
$: entry = {
  name, entries, id: newUniqueId()
}



  async function  handleSubmit(e) {
    const entryWithId = {
      ...entry,
      id: newUniqueId()
    }
    contestants.update((currentContestants) => {
        entry.name = ''
        entry.entries = 0
        return [entryWithId, ...currentContestants]
      })
      localStorage.setItem('contestants', JSON.stringify($contestants))

    await tick()
    ref.focus()
  }

  onMount(() => ref.focus())

</script>

<form method="get" on:submit|preventDefault={handleSubmit}  action="#">
  <label>Name<input type="text" name="name" bind:this={ref} bind:value={entry.name} id="name" /></label>
  <label>
    Entry Count
  <input type="number" min="0" name="entries" id="entries" bind:value={entry.entries} /></label>
  <button type="submit" disabled={entry.name === '' || entry.entries < 1 }>Add Contestant</button>
</form>



<style>
  form {
    width: 98%;
    margin: 4rem auto;
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  label {
    font-weight: bold;
    display: flex;
    align-items: start;
    flex-direction: column;
  }

  input {
    margin-bottom: 0;
  }
  button {
    align-self: flex-end;;
    margin-bottom: 0;
  }
</style>
