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

<div class="mt-16 mx-auto max-w-screen-md px-4 py-5 sm:p-6">
  <article class="prose prose-sm sm:prose md:prose-lg lg:prose-xl">
    {#if post.subtitle}
      <p class="lead">{post.subtitle}</p>
    {/if}
    <h1 class="">{post.title}</h1>
    {@html post.html}
  </article>
</div>
