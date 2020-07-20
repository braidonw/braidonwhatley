<script>
  import Heading from "components/type/Heading.svelte";
  import { goto } from "@sapper/app";
  export let articleName;
</script>

<div class="relative w-full pb-12">

  <div class="flex flex-col bg-gray-200 z-10 shadow">
    <img
      class="opacity-25 h-60 object-cover w-full z-10"
      src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt="" />
  </div>
  <div class="group absolute bg-gray-50 z-30 bottom-0 left-12">
    <button
      on:click={() => goto(`/blog/${articleName}`)}
      class=" z-30 border-b-4 border-blue-600 group-hover:text-blue-600
      group-hover:bg-blue-50 py-4 px-6">
      <Heading class="italic" level={'4'}>{articleName}</Heading>
    </button>
  </div>

</div>
