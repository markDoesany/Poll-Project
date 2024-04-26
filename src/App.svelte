<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte"
  import CreatePollForm from "./components/CreatePollForm.svelte";

  let items = ["Current Polls", "Add New Poll"]
  let activeItem  = "Current Polls"
  
  const tabchange = (event) => activeItem = event.detail

  const handleAdd = () => activeItem = 'Current Polls'
  
</script>

<Header/>
<main>
  <Tabs {items} {activeItem}  on:tabchange={tabchange}/>
  {#if activeItem === "Current Polls"}
    <PollList/>
  {:else if activeItem === "Add New Poll"}
      <CreatePollForm on:add={handleAdd}/>
  {/if}
</main>

<Footer/>
<style>
  main{
    max-width: 960px;
    margin: 40px auto;
  }
</style>