<script>
  import NavButton from "../components/buttons/NavButton.svelte";
  import { scrollTo } from "lib/utils";
  import { goto } from "@sapper/app";
  let y;

  $: navBgClasses = y > 40 ? "bg-opacity-90 shadow-sm" : "bg-transparent";
</script>

<svelte:window bind:scrollY={y} />

<!-- This example requires Tailwind CSS v1.4.0+ -->
<div class="bg-gray-50 sticky top-0 {navBgClasses} z-40 items-center">
  <nav
    class="flex justify-between items-center px-4 py-3 sm:px-6 md:justify-start
    md:space-x-10">
    <div class="lg:w-0 lg:flex-1">
      <div class="">
        <button
          on:click|preventDefault={() => {
            goto('/').then(() => scrollTo('top'));
          }}
          class="flex items-center focus:outline-none">
          <span class="text-xl font-black text-gray-900 tracking-wider">
            braidon whatley
          </span>
        </button>
      </div>
    </div>
    <ul class="hidden md:flex space-x-12 items-center">
      <NavButton url="/about">about braidon</NavButton>
      <NavButton url="/articles">articles</NavButton>
      <NavButton url="/resume">resume</NavButton>
      <NavButton url="/contact">get in touch</NavButton>
    </ul>
  </nav>
</div>
