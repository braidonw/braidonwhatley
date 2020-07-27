<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`/writing.json`);

    const data = await res.json();
    console.log(data);

    if (res.status === 200) {
      return { posts: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Heading from "components/type/Heading.svelte";
  import BodyText from "components/type/BodyText.svelte";
  import TextLink from "components/buttons/TextLink.svelte";
  import BlogCard from "parts/blog/BlogCard.svelte";
  export let posts;
</script>

<div class="py-16">
  <Heading level="1">Writing</Heading>

  <div class="mt-16 space-y-12">

    {#each posts as post}
      <BlogCard
        title={post.title}
        subtitle={post.subtitle}
        publishDate={post.published}
        preview={post.preview}
        type={post.type}
        slug={post.slug} />
    {/each}

  </div>
</div>
