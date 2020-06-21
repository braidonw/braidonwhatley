<script>
  export let weight = "md";

  let classLookup = {
    md: "text-xl text-gray-700 font-normal"
  };

  $: textClasses = classLookup[weight];
</script>

<span class={textClasses}>
  <slot />
</span>
