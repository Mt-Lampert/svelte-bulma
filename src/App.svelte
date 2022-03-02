<script>
  import SignUpForm from "./UI/SignUpForm.svelte";
  import Header from "./UI/Header.svelte";
  import { onDestroy } from "svelte";
  import { global } from "./stores/global";

  let showSignup;
  let unsubscribe;

  unsubscribe = global.subscribe((glob) => {
    showSignup = glob.showSignup;
  });

  onDestroy(unsubscribe);
</script>

<!-- <div class="landingpage__container"> -->
  <Header />
  {#if showSignup}
    <SignUpForm />
  {/if }
  <!--
  {#if showLogin}
    <LoginForm />
  {/if }
  -->
 
  <div class="block">
    <p class="is-large">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </div>

<!-- </div> -->

<style global lang="scss">
  @import "main.scss";
  .block {
    padding: 2rem 6rem;
  }
</style>
