<script>
  import Modal from "../containers/Modal.svelte";
  import { global } from "../stores/global";

  let fullname;
  let mail;
  let password;

  // let formInput = { fullName: "", mail: "", password: "" };
  let errors = { fullName: "", mail: "", password: "" };
  let isValid = false;

  function logInHandler() {
    console.log("Have an Email?");
    const myNewGlob = {
      showLogin: true,
    };
    global.set(myNewGlob);
  }

  function nameValid(fullname) {
    var nameRegEx = /^[a-zA-Z_\s]{4,}$/g;
    return nameRegEx.test(fullname);
  }

  function emailValid(mail) {
        //           /^\S+@\S+\.\S+$/g
    var mailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/g;
    return mailRegEx.test(mail);
  }

  function passwordValid(password) {
    var passwordRegEx = /^\S+[0-9]\S+\S+$/g;
    // var passwordRegEx = /(?=.*[[:alpha:]]+)(?=.[[:alnum:]]?){5,}/g;
    return passwordRegEx.test(password);
  }

  function handleSubmit() {
    isValid = true;
    // Validate Fullname
    if (!nameValid(fullname)) {
      isValid = false;
      errors.fullName = "Your Full name please! Ex: Max Muster";
    } else {
      isValid = true;
      errors.fullName = "";
      // console.log("Right!");
    }

    // Validate E-Mail
    if (!emailValid(mail)) {
      isValid = false;
      errors.mail = "Your E-Mail! Ex: mu@m.de";
    } else {
      isValid = true;
      errors.mail = "";
    }

    // Validate Password
    if (!passwordValid(password)) {
      isValid = false;
      errors.password = "A strong Password! Ex: Ma123";
    } else {
      isValid = true;
      errors.password = "";
    }
  }
</script>

<Modal>
  <form on:submit|preventDefault={handleSubmit} slot="slot-form" class="form">
    <h1 class="title-cont is-medium">BOOM | Sing Up</h1>
    <div class="form-container">
      <!-- <div class="input-wrapp"> </div> -->
      <label for="name">Full Name</label>
      <input
        required
        type="text"
        bind:value={fullname}
        class="input is-rounded"
        placeholder="Your Full Name"
      />
      <!-- {#if !isValid }    -->
      <p class="error">{errors.fullName}</p>
      <!-- {/if} -->
      <label for="email">E-Mail</label>
      <input
        required
        type="email"
        bind:value={mail}
        class="input is-rounded"
        placeholder="Your E-Mail-Adress"
      />
      <p class="error">{errors.mail}</p>

      <label for="password">Password</label>
      <input
        required
        type="password"
        bind:value={password}
        class="input is-rounded"
        placeholder="A Strong Password"
      />
      <p class="error">{errors.password}</p>
    </div>
  </form>
  <div slot="button" class="btn-contianer">
    <button
      on:click={handleSubmit}
      type="submit"
      class="button is-rounded is-primary">Sign Up</button
    >
  </div>
  <div slot="title" class="para-contianer">
    <p on:click={logInHandler} class="para__title">Already have an Account?</p>
  </div>
</Modal>

<style>
  .input-wrapp {
    background-color: #a1a1a1;
    flex: 1;
    text-align: left;
    /* padding: 15px; */
  }

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
    content: "Hi there! Nice to see you!";
    color: #9c9898;
    width: 100%;
    font-family: "Patrick Hand";
    font-weight: normal;
    font-size: 0.9rem;
    left: 3.2rem;
    top: 36px;
  }
  .form-container {
    margin-top: 1.5rem;
    text-align: left;
    color: #000;
  }
  label {
    padding-bottom: 2px !important;
    /* margin-top: 15px; */
    padding: 10px calc(calc(0.75em - 2px) + 0.375em);
  }
  .btn-contianer,
  .para-contianer {
    padding: 1rem 1.5rem;
  }
  .error {
    padding: 5px calc(calc(0.75em - 2px) + 0.375em);
    color: red;
    font-size: 14px;
    margin-top: 5px;
  }
  .is-primary {
    font-family: "Sofia";
    background: #db4e61;
    color: rgb(31, 28, 28);
    width: 100%;
  }
  .input {
    border: none !important;
  }
  .para__title {
    /* margin: 0.8rem; */
    color: rgb(77, 75, 75);
    text-decoration: underline;
    text-align: right;
    font-family: "Patrick Hand";
  }
  .para__title:hover {
    cursor: pointer;
    color: #db4e61;
  }
</style>
