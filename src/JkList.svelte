<script>
    import JkListItem from './JkListItem.svelte';    
    import { array } from './MyList.svelte';

    let fruits = [];
    
    for (let i = 0; i < 1000; i++) {
    const index = Math.floor(Math.random() * array.length);
    const itemFruit = array[index];
    fruits.push(itemFruit);
    }

    console.log('array', fruits);
</script>


<style>
    ul {
        column-count: 5;
        list-style: none;
        }
</style>

<ul>
    {#each fruits as item, index}
        <JkListItem name={item.name} index={index} />
    {/each}    
</ul>