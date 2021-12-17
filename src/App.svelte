<script lang="ts">
import AddEntry from "./components/AddEntry.svelte";
import Button from "./components/Button.svelte";
import EntryListings from "./components/EntryListings.svelte";

  export let name: string;
</script>

<main>
  <h1>Random Vote Picker</h1>
  <p>Use this app to pick a random winner for a giveaway, etc.</p>
  <ol>
    <li>Add names and vote count for each entry.</li>
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
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }


  @media (min-width: 640px) {
    main {
      max-width: 800px;
    }
  }
</style>
