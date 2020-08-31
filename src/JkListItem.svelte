<script>
    import MyList, { array } from './MyList.svelte';

    const myArray = []
    
    for (let i = 0; i < 1000; i++) {
    const index = Math.floor(Math.random() * array.length);
    const itemFruit = array[index];
    myArray.push(itemFruit);
    }

</script>

<style>
      li {
          line-height: 50px;    
          align-items: center;
          width: min-content;
      }

      img {
        width: 220px;
      }
</style>
	{#each myArray as item, index}
		<li>name: {item.name}, id: {index + 1}
            <img src="/assets/{item.name}.jpg"/>
        </li>
	{/each}