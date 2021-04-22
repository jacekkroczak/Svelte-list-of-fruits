<script>

let scrollToTop;

window.onscroll = () => {
    _scrollFuntion();
}

function _scrollFuntion() {
    if (document.documentElement.scrollTop > 70) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
}

function _scrollTop() {
    document.documentElement.scrollTop = 0;
}

</script>

<style>
    #scrollToTop {
        display: none;
        background: #e00e79;
        color: #fff;
        right: 20px;
        bottom: 20px;
        position: fixed;
        text-align: center;
        padding: 15px;
        text-transform: uppercase;
        font-weight: bold;
        box-shadow: 0px 0px 7px 2px rgb(0 0 0 / 44%);
        letter-spacing: 1px;
        cursor: pointer;
    }
</style>

<div on:click={_scrollTop} bind:this={scrollToTop} id="scrollToTop">Top</div>  
