<script lang="ts">
import AddEntry from "./components/AddEntry.svelte";
import Button from "./components/Button.svelte";
import EntryListings from "./components/EntryListings.svelte";
import { winner } from './stores/winner'
import { scale, fade } from 'svelte/transition'
  export let name: string;

  console.log($winner)
</script>

<h1>Giveaway/Sweepstakes Winner Generator</h1>
<main>
  <p>Use this app to pick a random winner for a giveaway, etc.</p>
  <ol>
    <li>Add names and entry count for each constestant.</li>
    <li>Click "Choose Winner"!</li>
  </ol>

  <section>
<!-- @todo add entry form -->
    <AddEntry />
    <!--
      @todo EntryListings
     -->
     <EntryListings />

    <!-- @todo buttons -->
    <Button />
  </section>
  {#if $winner !== ''}
    <section in:scale class="winner">
      <h2>The winner is: {$winner}</h2>
    </section>
  {/if}

</main>

<style>
  main {
    height: 100%;
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }

  h1 {
    color: #ff3e00;
    max-width: 90vw;
    margin: auto;
    word-break: break-word;
    text-align: center;
    text-transform: uppercase;
    font-size:3em;
    font-weight: 100;


  }


  @media (min-width: 640px) {

    h1 {
      font-size: 4em;
    }
    main {
      max-width: 800px;
    }
  }
</style>
