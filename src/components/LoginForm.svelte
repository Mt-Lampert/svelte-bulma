<script>
  import Modal from "../containers/Modal.svelte";
  import { global } from "../stores/global";

  function signUpHandler() {
    // console.log("Hi from Log In");
    const myNewGlob = {
      showSignup: true,
    };
    global.set(myNewGlob);
  }

  function handleSubmit(event) {
    // fetch Date
  }

  function enteredName() {}

</script>

<Modal>
  <form on:submit|preventDefault={handleSubmit} slot="slot-form" class="form">
    <h1 class="title-cont is-medium">BOOM | Log In</h1>
    <div class="form-container">
      <label for="email">E-Mail or Full Name</label>
      <input
        required
        type="email"
        class="input is-rounded"
        placeholder="Your E-Mail"
      />
      <label for="password">Password</label>
      <input
        class="input is-rounded"
        type="password"
        placeholder="A Strong Password"
      />
      <a href="/" class="password__">Password forgotten? Choose New!</a>
    </div>
  </form>
  <div slot="button" class="btn-contianer">
    <button
      on:click={handleSubmit}
      type="submit"
      class="button is-rounded is-primary"
      >Log In
    </button>
  </div>
  <div slot="title" class="para-contianer">
    <p class="para__title">Password forgotten?</p>
    <span class="__span">|</span>
    <p class="para__title __member" on:click={signUpHandler}>New Member?</p>
  </div>
</Modal>

<style>
  .form {
    padding: 2rem 1.5rem;
  }
  .title-cont {
    color: #000;
    font-family: "Sofia";
    font-size: 1.5rem;
    margin-bottom: 0;
    position: relative;
    margin-bottom: 2.7rem;
  }
  .title-cont::after {
    position: absolute;
    content: "Hi there! Nice to have you!";
    color: #9c9898;
    width: 100%;
    font-family: "Patrick Hand";
    font-weight: normal;
    font-size: 0.9rem;
    left: 3.2rem;
    top: 36px;
  }
  .form-container {
    /* margin-top: 1.5rem; */
    margin: 3.5rem 0 2rem 0;
    text-align: left;
    color: #000;
  }
  label {
    padding-bottom: 2px !important;
    margin-top: 1.8rem;
    padding: 10px calc(calc(0.75em - 2px) + 0.375em);
  }
  .btn-contianer,
  .para-contianer {
    padding: 1rem 1.5rem;
  }
  .para-contianer {
    display: flex;
    gap: 5px;
    justify-content: flex-end;
  }
  .is-primary {
    font-family: "Sofia";
    background: #db4e61;
    color: rgb(31, 28, 28);
    width: 100%;
  }
  .para__title {
    /* margin: 0.8rem; */
    color: rgb(77, 75, 75);
    text-align: right;
    font-family: "Patrick Hand";
  }
  .para__title:hover,
  .password__:hover,
  .__member {
    cursor: pointer;
    color: #db4e61;
  }
  .__member {
    color: #df485b;
  }
  .__span {
    color: rgb(31, 28, 28);
  }
  .password__ {
    padding: 1.5rem 1rem;
    color: rgb(77, 75, 75);
    font-size: 10px;
    text-decoration: underline;
  }
</style>
