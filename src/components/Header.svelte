<script>
  import { onDestroy } from "svelte";
  import { global } from "../stores/global";

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
    const myNewGlob = {
      showSignup: true,
    };
    global.set(myNewGlob);
  }

  
  function showLogInFn() {
    const myNewGlob = {
      showLogin: true,
    };
    global.set(myNewGlob);
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
          <button class="button singup is-primary" on:click={showSignupFn}>
            <strong>Sign up</strong>
          </button>
          <!-- <Modal /> -->

          <!-- If "Sign In" geklickt, wird LoginForm aufgerufen -->
          <button class="button is-light" on:click={showLogInFn}>Log In</button>
          <!-- <Modal /> -->
        </div>
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
