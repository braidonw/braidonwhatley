<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`/writing/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Heading from "components/type/Heading.svelte";
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="mt-16 mx-auto max-w-screen-md px-4 py-5 sm:p-6">
  <article class="prose prose-sm sm:prose md:prose-lg lg:prose-xl">
    <h1 class="text-center">{post.title}</h1>
    {#if post.subtitle}
      <p class="text-center lead">{post.subtitle}</p>
    {/if}
    {@html post.html}
  </article>
</div>
