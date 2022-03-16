<script>
  import Modal from "../containers/Modal.svelte";
  import { global } from "../stores/global";
  import axios from "axios";

  let fullname = "";
  let mail = "";
  let password = "";

  // let formInput = { fullName: "", mail: "", password: "" };
  let errors = { fullName: "", mail: "", passWord: "" };

  let nameIsValid = false;
  let mailIsValid = false;
  let passwordIsValid = false;

  let isValid = false;

  function logInHandler() {
    console.log("Have an Email?");
    const myNewGlob = {
      showLogin: true,
    };
    global.set(myNewGlob);
  }

  function nameValid(fullname) {
    var nameRegEx = /[A-Za-zäüö\\s\-]{3,}\s[A-Za-züöä\\-]{3,}/g;
    return nameRegEx.test(fullname);
  }

  function emailValid(mail) {
    var mailRegEx = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/g;
    return mailRegEx.test(mail);
  }

  function passwordValid(passWord) {
    let isLongEnough = password.length >= 8;
    var passwordRegEx = /[A-Za-z-#\?!=@$%^&\*0-9]{8,}/g;
    return isLongEnough && passwordRegEx.test(passWord);
    // return isLongEnough;
  }

  function handelValidation() {
    let nameIsValid = false;
    let mailIsValid = false;
    let passwordIsValid = false;

    // Validate Fullname
    if (!nameValid(fullname)) {
      errors.fullName = "Your full name please! Exp: Max Muster";
    } else {
      nameIsValid = true;
      errors.fullName = "";
    }

    // Validate E-Mail
    if (!emailValid(mail)) {
      errors.mail = "Your E-Mail! Exp: mu@m.de";
    } else {
      mailIsValid = true;
      errors.mail = "";
    }

    // Validate Password
    if (!passwordValid(password)) {
      errors.passWord = "A strong Password! Exp: Ma&123";
    } else {
      passwordIsValid = true;
      errors.passWord = "";
    }

    if (nameIsValid && mailIsValid && passwordIsValid) {
      isValid = true;
    }
  }

  function handleSubmit() {
    console.log("Handel Submit!");
    sendData();
  }

  function sendData() {
    // console.log("Data Sent!");
    let URL =
      "https://svelte-bulma-default-rtdb.europe-west1.firebasedatabase.app/";

    axios
      .post(URL)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
      });

    // axios({
    //   method: "POST",
    //   url: "https://svelte-bulma-default-rtdb.europe-west1.firebasedatabase.app/",
    //   data: {
    //     firstName: fullname,
    //     E_Mail: mail,
    //     passWord: password,
    //   },
    // });
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
      <p class="error">{errors.passWord}</p>
    </div>
  </form>
  <div slot="button" class="btn-contianer">
    {#if !isValid}
      <button
        on:click={handelValidation}
        type="submit"
        class="button is-rounded is-primary check">Check Entries</button
      >
    {:else}
      <button
        on:click={handleSubmit}
        type="submit"
        class="button is-rounded is-primary sign-up">Sign Up</button
      >
    {/if}

    <!-- isTrue ? disabled : enabled  -->
  </div>
  <div slot="title" class="para-contianer">
    <p on:click={logInHandler} class="para__title">Already have an Account?</p>
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
    /* background: #db4e61; */
    color: rgb(31, 28, 28);
    width: 100%;
  }
  .check {
    border: #db4e61 2px solid;
    background-color: #f8bbbb;
    box-shadow: 8px 10px 30px 20px rgba(200, 193, 193, 0.5);
  }
  .sign-up {
    box-shadow: #9c9898;
    background-color: rgb(116, 195, 116) !important;
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
