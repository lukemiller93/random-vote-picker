<script lang="ts">
  import { contestants } from "../stores/contestants";
import { scale, fade } from 'svelte/transition'
  const removeContestant = (entryId) => {
    contestants.update(previousValue => previousValue.filter(({id}) => id !== entryId))
    localStorage.setItem('contestants', JSON.stringify($contestants))
  }

</script>

<div class="entries">

  {#await $contestants then }
    {#each $contestants as entry}
      <div class="entry" in:scale={{duration: 200}} out:fade={{duration:200}}>
        <p>{entry.name}</p>
        <p>{entry.entries} Entries</p>
        <button data-id={entry.id} class="remove" on:click={() =>removeContestant(entry.id)}>Remove Contestant</button>
      </div>
    {/each}
  {/await}
</div>

<style>

  .entries {
    margin-bottom: 4rem;
  }
  .entry {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .entry p:first-of-type {
    font-weight: bold;
  }

  .remove {
    margin: 0;
    background: tomato;
    align-self: center;
    justify-self: center;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem .75rem;
    border: none;
    cursor: pointer;
    border-radius: 10px;

  }
</style>
