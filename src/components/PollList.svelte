<script>
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../stores/PollStore"
  import { fade, slide, scale }  from 'svelte/transition'
  import { flip } from 'svelte/animate'
</script>
<!--animate:flip={{duration:500}}-->
<div class="poll-list" in:fade out:scale|local>
  {#each $PollStore as poll (poll.id)}
    <div class="poll-detail" animate:flip={{duration:500}}>
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 10px;
    text-align: center;
  }
</style>