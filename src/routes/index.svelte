<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`/writing.json`);

    const data = await res.json();

    const posts = data.slice(0, 3);

    if (res.status === 200) {
      return { posts: posts };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Hero from "parts/Hero.svelte";
  import MyWork from "parts/MyWork.svelte";
  import HomePageBlogPosts from "parts/HomePageBlogPosts.svelte";

  export let posts;
</script>

<Hero />
<MyWork />
<HomePageBlogPosts {posts} />
