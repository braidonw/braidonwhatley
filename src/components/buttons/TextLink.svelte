<script>
  export let url = "/";
  let classes = "";
  export { classes as class };
</script>

<a
  href={`${url}`}
  class="text-blue-600 hover:text-blue-800 hover:underline hover:border-blue-800
  focus:outline-none {classes}">
  <slot>Read more →</slot>
</a>
