<script>
  import Heading from "components/type/Heading.svelte";
  import BodyText from "components/type/BodyText.svelte";
  import BlogCard from "../parts/blog/BlogCard.svelte";
</script>

<div class="relative max-w-screen-md mt-16 sm:mt-24 md:mt-32 mx-auto">
  <Heading class="" level={'2'}>Writing</Heading>

  <div class="">
    <BodyText>Here's what I've been writing about recently.</BodyText>
  </div>

  <div class="py-6 space-y-10">
    <BlogCard
      articleName={'Structuring Customer Relationships - Part 1 of 2'} />

  </div>
</div>
