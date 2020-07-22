<script>
  export let url = "/";
</script>

<a
  href={`${url}`}
  class="text-blue-600 border-b border-blue-600 hover:text-blue-800
  hover:border-blue-800 focus:outline-none">
  <slot>Read more →</slot>
</a>
