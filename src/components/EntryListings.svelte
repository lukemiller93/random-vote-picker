<script lang="ts">
  import { contestants } from "../stores/contestants";


  console.log($contestants)
</script>

<div class="entries">

  {#await $contestants then }
    {#each $contestants as entry}
      <div class="entry">
        <p>{entry.name}</p>
        <p>{entry.entries} Entries</p>
      </div>
    {/each}
  {/await}
</div>

<style>
  .entry {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .entry p:first-of-type {
    font-weight: bold;
  }
</style>
