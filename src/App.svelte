<script>
  let people = [
    {
      fullname: 'Sophia Lorraine Tecson',
      age: 22,
      status: 'single',
      id:0
    },
    {
      fullname: 'Mark Teofel Cernal ',
      age: 23,
      status: 'single',
      id:1
    },
    {
      fullname: 'Kabit ni Sophia',
      age: 22,
      status: 'single',
      id:2
    }
  ]

  const handleClick = (id) =>{ 
    people = people.filter((person) => person.id != id)
  }

</script>

<main>
  {#each people as person (person.id)}
    <div>
      <h3>{person.fullname}</h3>
      <p>{person.age} years old</p>
      <p>{person.status}</p>
      <button on:click={() => handleClick(person.id)}>Delete</button>
    </div>
  {:else}
    <p>No person here</p>
  {/each}
  <div>
  </div>
</main>

<style>

</style>