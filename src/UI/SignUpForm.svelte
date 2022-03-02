<script>
  import Modal from "./Modal.svelte";
  import { showMod } from "./Modal-store";


  // let formIsValid = false;
  let enteredName = "";

  // console.log(enteredName.value);
  
  async function handleSubmit(event) {
    if(enteredName <=2) {
      formIsValid = true;
    } else {
      formIsValid = false;
    }
  }

</script>
<!-- 
    on:invalid={validateMessageEmail}
    on:changed={validateMessageEmail}
    on:input={validateMessageEmail}
 -->
<Modal>
  <form
    on:submit|preventDefault={handleSubmit}
    slot="signup"
    class="form"
  >
    <h1 class="title-cont is-medium">BOOM | Sing Up</h1>
    <div class="form-container">
      <label for="name">Voll Name:</label>
      <input
        required
        type="name"
        bind:value={enteredName}
        class="input is-rounded"
        placeholder="Your Voll Name"
      />
      <label for="email">Email:</label>
      <input
        required
        type="email"
        class="input is-rounded"
        placeholder="Your E-Mail"
      />
      <label for="password">Password:</label>
      <input
        class="input is-rounded"
        type="password"
        placeholder="A Strong Password"
      />
    </div>
  </form>
  <div slot="button" class="btn-contianer">
    <button on:click={handleSubmit} type="submit" class="button is-rounded is-primary">Sign Up</button>
  </div>
  <div slot="title" class="para-contianer">
    <p class="para__title">Already have an Email?</p>
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
    top: 30px;
  }
  .form-container {
    margin-top: 1.5rem;
    text-align: left;
    color: #000;
  }
  label {
    padding-bottom: 2px !important;
    margin-top: 15px;
    padding: 10px calc(calc(0.75em - 2px) + 0.375em);
  }
  .btn-contianer, .para-contianer {
    padding: 1rem 1.5rem;
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
    text-decoration: underline;
    text-align: right;
    font-family: "Patrick Hand";
  }
  .para__title:hover {
      cursor: pointer;
      color: #db4e61;
  }
</style>
