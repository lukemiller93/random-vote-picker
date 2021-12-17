<script lang="ts">
  function handleClick() {
    console.log('button clicked')
  }

  function resetContest() {
    console.log('reset contest')
  }
</script>

<button on:click|preventDefault={handleClick} type="button">Choose Winner!</button>
<button on:click|preventDefault={resetContest} type="button">Reset Contestants</button>
