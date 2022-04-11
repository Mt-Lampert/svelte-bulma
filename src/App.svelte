<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<Router {routes} />

<style global lang="scss">
  @import "./main.scss";
  .block {
    padding: 2rem 6rem;
  }
</style>