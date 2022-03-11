<script>
  import SignUpForm from "./components/SignUpForm.svelte";
  import LoginForm from "./components/LoginForm.svelte";
  import Hero from "./components/Hero.svelte";

  import Header from "./components/Header.svelte";
  import { onDestroy } from "svelte";
  import { global } from "./stores/global";
  

  let showSignup;
  let showLogin;
  let unsubscribe;

  unsubscribe = global.subscribe((glob) => {
    showSignup = glob.showSignup;
    showLogin = glob.showLogin;
  });

    // onDestroy(unsubscribe);
    onDestroy(() => {
      if (unsubscribe) {
        unsubscribe();
      }
    });
</script>

<!-- <div class="landingpage__container"> -->
  <Header />
  {#if showSignup}
    <SignUpForm />
  {/if }

  {#if showLogin}
    <LoginForm />
  {/if }
 
  <Hero />

<style global lang="scss">
  @import "main.scss";
  .block {
    padding: 2rem 6rem;
  }
</style>
