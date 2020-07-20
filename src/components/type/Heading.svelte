<script>
  export let level = "1";
  export { extraClasses as class };
  let extraClasses;
  let h1Classes = "text-5xl md:text-6xl font-bold text-gray-900";
  let h2Classes = "text-3xl md:text-4xl font-semibold text-gray-900";
  let h3Classes = "text-2xl md:text-3xl font-semibold text-gray-900";
  let h4Classes = "text-xl md:text-2xl font-medium text-gray-900";

  let classLookup = {
    "1": h1Classes,
    "2": h2Classes,
    "3": h3Classes,
    "4": h4Classes
  };
  $: classes = classLookup[level];
</script>

<h1 class="{classes} {extraClasses}">
  <slot />
</h1>
