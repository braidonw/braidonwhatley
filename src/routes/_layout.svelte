<script>
  import Nav from "components/Nav.svelte";
  import Footer from "components/Footer.svelte";
</script>

<svelte:head>
  <title>Braidon Whatley</title>
</svelte:head>
<div class="relative flex flex-col">

  <Nav />

  <body class="flex-1 max-w-screen-md mx-auto">
    <div class="space-y-16">
      <slot />
    </div>
  </body>
  <Footer />
</div>
