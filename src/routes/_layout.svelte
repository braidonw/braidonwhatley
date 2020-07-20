<script>
  import Nav from "components/Nav.svelte";
  import Footer from "components/Footer.svelte";
</script>

<div class="relative flex flex-col">

  <Nav />

  <body class="flex-1">
    <div>
      <slot />
    </div>
  </body>
  <Footer />
</div>
