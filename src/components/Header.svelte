<script>
  import { onDestroy } from "svelte";
  import { app } from "../stores/app";

  // let showSignup = false;
  // let showLogin = false;
  // let unsubscribe;

  // unsubscribe = global.subscribe((glob) => {
  //   showSignup = glob.showSignup;
  // });

  // function showSignupFn() {
  //   global.update((glob) => {
  //     glob.showSignup = true;
  //     return glob;
  //   });
  // }

   function showSignupFn() {
    const myNewAppSettings = {
      showSignup: true,
    };
    app.set(myNewAppSettings);
  }

  
  function showLogInFn() {
    const myNewAppSettings = {
      showLogin: true,
    };
    app.set(myNewAppSettings);
  }
  // unsubscribe = global.subscribe((glob) => {
  //   showLogin = glob.showLogin;
  // });

  // function showLogInFn() {
  //   global.update((glob) => {
  //     glob.showLogin = true;
  //     return glob;
  //   });
  // }

  // onDestroy(unsubscribe);
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item logo" href="/">BOOM</a>
    <a
      href="/"
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      on:click|preventDefault={showSignupFn}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <!-- If "Sign Up" geklickt, wird SignUpForm aufgerufen -->
          <a class="button singup is-primary" href="/signup">
            <strong>Sign up</strong>
          </a>
          <!-- <Modal /> -->

          <!-- If "Sign In" geklickt, wird die '/login'-Route aufgerufen -->
          <a href="/login" class="button is-light">Log In</a> 
          <!-- <Modal -->
      </div>
    </div>
  </div>
</nav>

<style>
  .singup {
    background-color: #df485b;
  }
  .logo {
    font-family: "Sofia";
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.7);
  }
</style>
