<script>
  export let level = 1;
  export { extraClasses as class };
  let extraClasses;
  let h1Classes = "text-5xl md:text-6xl font-bold text-gray-900";
  let h2Classes = "text-4xl md:text-5xl font-bold text-gray-900";

  let classLookup = {
    1: h1Classes,
    2: h2Classes
  };
  $: classes = classLookup[level];
</script>

<h1 class="{classes} {extraClasses}">
  <slot />
</h1>
