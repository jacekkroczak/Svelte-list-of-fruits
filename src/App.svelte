<script>
	import JkList from './JkList.svelte';
</script>

<main>
	<div class="container">
      <div class="title">
        <h1>Svelte - List of fruits</h1>
      </div>
    </div>
	  <JkList/>
</main>

<style>
	* {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
    }
    
    .container {
        display: flex;
        justify-content: center;
        flex: 1;
        padding: 0 20px;
    }
</style>