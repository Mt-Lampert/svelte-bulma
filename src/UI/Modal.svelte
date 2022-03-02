<script>

  export let showModal = true;
  let isPromp = true;

</script>

{#if showModal}
<div class:promo={isPromp} class="modal-backdrop" >
  <div class="modal-container">
    <!-- <SignUpForm/> -->
    <slot name="signup" />
    <slot name="button" />
    <slot name="title" />
  </div>
</div>
{/if}

<style>
  .modal-backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.55);
  }
  .modal-container {
    padding: 10px;
    border-radius: 10px;
    max-width: 500px;
    height: fit-content;
    margin: 10% auto;
    text-align: center;
    background: white;
  }
  .promo :global(.modal-container) {
    background: #FCE6E6;
    color: white;
  }

</style>
