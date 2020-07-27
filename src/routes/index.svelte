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
  import GetInTouch from "parts/GetInTouch.svelte";
  import { onMount } from "svelte";

  export let posts;

  onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });
</script>

<svelte:head>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js">

  </script>
</svelte:head>
<Hero />
<MyWork />
<HomePageBlogPosts {posts} />
<GetInTouch />
