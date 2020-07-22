<script>
  import { onMount } from "svelte";

  let MyResume;

  onMount(async () => {
    console.log("loading");
    const module = await import("../parts/resume/MyResume.svelte");
    console.log(module);
    MyResume = module.default;
    console.log("loaded");
  });
</script>

<div class="py-16">

  <svelte:component this={MyResume} foo="bar" />
</div>
