<script>
	import JkList from './JkList.svelte';
</script>

<style>
    .container {
      display: block;
      padding: 0 20px;
    }

    h1 {
      text-align: center;
    }
</style>

<main>
	<div class="container">
      <div class="title">
        <h1>Svelte - List of fruits</h1>
      </div>
    </div>
    <div class="container">
	    <JkList/>
    </div>
</main>

