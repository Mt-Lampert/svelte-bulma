<script>
  import SignUpForm from "../components/SignUpForm.svelte";
  import LoginForm from "../components/LoginForm.svelte";
  import Hero from "../components/Hero.svelte";

  import Header from "../components/Header.svelte";
  import { onDestroy } from "svelte";
  import { app } from "../stores/app";
  

  let showSignup;
  let showLogin;
  let unsubscribe;

  unsubscribe = app.subscribe((app) => {
    showSignup = app.showSignup;
    showLogin = app.showLogin;
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
  @import "../main.scss";
  .block {
    padding: 2rem 6rem;
  }
</style>
