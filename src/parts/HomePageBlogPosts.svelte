<script>
  import Heading from "components/type/Heading.svelte";
  import BodyText from "components/type/BodyText.svelte";
  import BlogCard from "../parts/blog/BlogCard.svelte";
</script>

<div class="relative max-w-screen-md mt-16 sm:mt-24 md:mt-32 mx-auto">
  <Heading class="text-center" level={'2'}>My Blog</Heading>

  <div class="text-center">
    <BodyText>Here's what I've been writing about.</BodyText>
  </div>

  <div class="py-6 space-y-10">
    <BlogCard
      articleName={'Structuring Customer Relationships - Part 1 of 2'} />

  </div>
</div>
