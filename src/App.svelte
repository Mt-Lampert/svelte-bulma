<script>
  import fb_config  from "./lib/fb_config";
  // Firebase 8: 
  // import firebase from "firebase.app"
  // Firebase 9:
  import { initializeApp } from "firebase/app"
  
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";

  // Firebase 8: Connector erstellen
  // const fb = firebase.initializeApp(firebaseConfig);
  // Firebase 9:
  const fb = initializeApp(fb_config);


</script>

<Router {routes} />

<style global lang="scss">
  @import "./main.scss";
  .block {
    padding: 2rem 6rem;
  }
</style>