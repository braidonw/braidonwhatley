<script>
  import Heading from "components/type/Heading.svelte";
  import { goto } from "@sapper/app";
  export let articleName;
</script>

<div class="relative py-16">
  <div class="relative px-4 sm:px-6 lg:px-8">
    <div class="text-lg max-w-prose mx-auto mb-6">
      <p
        class="text-base text-center leading-6 text-gray-600 font-semibold
        tracking-wide uppercase">
        Python / SQL Server
      </p>
      <Heading level={'3'} class="text-center">{articleName}</Heading>
      <p class="text-xl text-gray-500 leading-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia magnam
        mollitia quo, unde vitae provident eligendi, vel neque ipsam odio
        aliquam excepturi quasi soluta odit. Soluta, sapiente sed. Esse,
        doloribus!
      </p>
    </div>

    <div class="mt-6">
      <button
        class="text-md font-semibold text-blue-700 border-t-4 uppercase px-3
        py-2 border-blue-600 italic"
        on:click={() => goto(`/blog/${articleName}`)}>
        keep reading
      </button>
    </div>
  </div>

</div>
