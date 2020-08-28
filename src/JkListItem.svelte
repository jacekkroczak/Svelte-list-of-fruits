<script>
    let fruits = [   
    {  name: 'Apple' },
    {  name: 'Banana' },
    {  name: 'Cherry' },
    {  name: 'Coconut' },
    {  name: 'Cranberry' },
    {  name: 'Strawberry' },
    {  name: 'Lemon' },
    {  name: 'Mango' },
    {  name: 'Watermelon' },
    {  name: 'Yuzu' },
];

    console.log('fruits', {fruits})
    
    firstUpdated() {
        console.log('dupa')
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

	{#each fruits as item, i (item)}
		<li>name: {item.name}, id: {i+1}
            <img src="/{item.name}.jpg" />
        </li>
	{/each}