<script lang="ts" context="module">
  import newUniqueId from 'locally-unique-id-generator'
</script>

<script lang="ts">
import { contestants } from "../stores/contestants";
import { entry } from "../stores/entry";



  function handleSubmit(e) {
    $entry.id = newUniqueId()
    console.log(entry)
    let cArr
    contestants.subscribe(v => cArr = v )

    console.log([...cArr, $entry])
    // contestants.update(v =>([...v, entry]) )

  }

</script>

<form method="get" on:submit|preventDefault={handleSubmit}  action="#">
  <label>Name<input type="text" name="name" bind:value={$entry.name} id="name" /></label>
  <label>
    Vote Count
  <input type="number" min="0" name="entries" id="entries" bind:value={$entry.entries} /></label>
  <!-- <input type="hidden" min="0" name="uid" id="uid" bind:value={$entry.id} /></label> -->
  <button type="submit">Add Contestant</button>
</form>
<!-- {#each $contestants as contestant}
  <p>{contestant.name}</p>
  <p>{contestant.votes} entries</p>
{/each} -->
<p>{$entry.name}</p>
<p>{$entry.entries}</p>


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
