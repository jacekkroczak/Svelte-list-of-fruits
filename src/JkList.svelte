<script>
    import JkListItem from './JkListItem.svelte';   
    import JkScrollToTop from './JkScrollToTop.svelte';    
    import { basicFruits } from './FruitsList.svelte';
    import { afterUpdate } from 'svelte';

    let fruits = [];
    let standardFruits = [];
    let filteredFruits = [];
    let search;
    let inputValue;

    afterUpdate(() => {
        if (standardFruits.length === 0 && fruits.length === 0) {
            _renderElements();
        }
	});
    
    function _renderElements() {
        fruits = [];
        for (let i = 0; i < 100; i++) {
            for (let i = 0; i < basicFruits.length; i++) {
                let itemFruit = basicFruits[i];
                fruits.push(itemFruit);
            }
        }
        standardFruits = fruits;
    }

    function _filterFruits(event) {
        let filterValues = event.target.value;
        standardFruits.sort((a, b) => {

            if (filterValues === 'filterAZ' && a.name < b.name) {
                return -1;
            }

            else if (filterValues === 'filterZA' && a.name > b.name) {
                return -1;
            }

            else if (filterValues === 'random') {
                return 0.5 - Math.random();
            }

            else {
                return 0;
            }
        })
        filteredFruits = standardFruits;
  }

  function _resetFruits() {
    search.value = '';
    filteredFruits = [];
    _renderElements();
  }

  function _searchFruits(event) {
    event.preventDefault();
    filteredFruits = [];
    inputValue = event.target.value;
    const item = event.target.value.toLowerCase();
    standardFruits = fruits.filter((filterFruit) => {
      return filterFruit.name.toLowerCase().includes(item)
    });
  }
</script>


<style>
    #filters {
        justify-content: space-between;
        display: flex;
        max-width: 75%;
        padding: 20px 0;
    }

    #noItems {
        display: flex;
        justify-content: center;
        background: #c3002f38;
        box-shadow: 2px 2px 15px 2px #00000038;
    }

    #noItems p {
        font-size: 26px;
        word-break: break-word;
        padding: 0 15px;
    }

    #noItems strong {
        background: #904ae624;
    }

    ul {
        column-count: 5;
        list-style: none;
        padding-left: 0;
    }

    button {
        border: 2px solid;
        padding: 0 30px;
        height: 45px;
        background: transparent;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        cursor: pointer;
        transition: 0.5s;
    }

    button:focus {
        outline: none;
    }

    .purpleButton {
        border-color: #904ae6;
        color: #904ae6;
    }

    .blueButton {
        border-color: #35b8ee;
        color: #35b8ee;
    }

    .redButton {
        border-color: #c3002f;
        color: #c3002f;
    }

    .purpleButton:hover {
        background: #904ae6;
        color: #fff;
        border-color: #904ae6;
    }

    .blueButton:hover {
        background: #35b8ee;
        color: #fff;
        border-color: #35b8ee;
    }

    .redButton:hover {
        background: #c3002f;
        color: #fff;
        border-color: #c3002f;
    }

    .purpleButton:focus {
        background: #904ae6;
        color: #fff;
    }

    .blueButton:focus {
        background: #35b8ee;
        color: #fff;
    }

    .greenInput {
        border: 2px solid #3fb984;
        padding-left: 10px;
    }

    @media screen and (max-width: 1150px) {
        #filters {
            max-width: 100%;
        }

        #filters button, #filters input {
            margin-right: 5px;
        }

        .list {
            column-count: 3;
        }
        }

        @media screen and (max-width: 768px) {
        #filters {
            display: block;
            max-width: 100%;
        }

        #filters button, #filters input {
            margin: 10px 0;
            width: 100%;
        }

        #filters input {
            height: 45px;
            width: -webkit-fill-available;
        }

        .list {
            column-count: 2;
        }
    }

    @media screen and (max-width: 480px) {
        .list {
            column-count: 1;
        }
    }
</style>

<div id="filters">
    <button class="purpleButton" on:click={event => _filterFruits(event)} value="filterAZ">A-Z filter</button>
    <button class="purpleButton" on:click={event => _filterFruits(event)} value="filterZA">Z-A filter</button>
    <button class="blueButton" on:click={event => _filterFruits(event)} value="random">Random fruits</button>
    <input id="search" class="greenInput" on:keyup={event => _searchFruits(event)} bind:this={search} placeholder="Type here...">
    <button class="redButton" on:click={_resetFruits} value="reset">Reset</button>
</div>
<div id="list">
    <ul class="list">
        {#if filteredFruits.length === 0}
            {#each standardFruits as item, index}
                <JkListItem name={item.name} index={index} />
            {/each} 
        {:else}
            {#each filteredFruits as item, index}
            <JkListItem name={item.name} index={index} />
            {/each}  
        {/if}      
    </ul>
    {#if standardFruits.length === 0}
        <div id="noItems">
            <p>No records found for the phrases: <strong> {inputValue} </strong></p>
        </div>
    {/if}
</div>
<JkScrollToTop/>