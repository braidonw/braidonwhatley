<script>
  import Heading from "components/type/Heading.svelte";
  import BodyText from "components/type/BodyText.svelte";
  import BlogCard from "../parts/blog/BlogCard.svelte";

  export let posts;
</script>

<div class="relative max-w-screen-md mt-16 sm:mt-24 md:mt-32 mx-auto">
  <Heading class="" level={'2'}>Writing</Heading>

  <div class="">
    <BodyText>Here's what I've been writing about recently.</BodyText>
  </div>

  <div class="py-6 space-y-10 divide-y divide-gray-100">
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
