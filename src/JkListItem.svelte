<script>

</script>

<style>
      li {
          line-height: 50px;    
          align-items: center;
          width: min-content;
      }

      img {
        width: 220px;
        height: 170px;
      }
</style>
	
		<li>name: {$$props.name}, id: {$$props.index + 1}
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="/assets/{$$props.name}.jpg"/>
        </li>