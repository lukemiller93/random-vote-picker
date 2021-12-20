<script lang="ts">
  import { contestants } from '../stores/contestants'

import { winner } from '../stores/winner'


$: buttonDisabled = $contestants.length > 0 ? false : true
  function selectWinner() {
    const condensedArr = $contestants.reduce((acc, curr) => {
      let initialArr =[]
      // console.log({acc, curr})
      for (let index = 0; index < curr.entries; index++) {
        initialArr.push({name: curr.name, entryNumber: index + 1})
        // const entryObj = curr.entries[index];
        // return initialArr
      }
      return acc.concat(initialArr)
    },[])

    $winner = condensedArr[Math.floor(Math.random()*condensedArr.length)].name

  }

  function resetContest() {
    contestants.set([])
    localStorage.setItem('contestants', JSON.stringify($contestants))
    winner.update(() => '')
  }

</script>

<button disabled={buttonDisabled} on:click|preventDefault={selectWinner} type="button">Choose Winner!</button>
<button on:click|preventDefault={resetContest} type="button">Reset Contestants</button>
