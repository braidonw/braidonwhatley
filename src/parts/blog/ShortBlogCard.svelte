<script>
  import Heading from "components/type/Heading.svelte";
  import BodyText from "components/type/BodyText.svelte";
  import TextLink from "components/buttons/TextLink.svelte";
  export let title;
  export let subtitle;
  export let publishDate;
  export let type;
  export let slug;
  export let leadText;

  let typeClasses =
    "bg-teal-50 text-teal-600 rounded-full text-sm uppercase font-medium";
</script>

<div>

  <div class="py-1 flex justify-between">
    <div>
      <span class="text-md text-gray-500 font-medium">{publishDate}</span>
    </div>

    <div class="">
      <span class={typeClasses}>{type}</span>

    </div>

  </div>

  <a href={`/writing/${slug}`} class="focus:outline-none hover:underline">
    <Heading level="3">{title}</Heading>
  </a>

  <div class="mt-1">
    <BodyText weight="sm">{leadText}</BodyText>

  </div>

  <div class="mt-1">
    <TextLink url={`/writing/${slug}`}>Read more →</TextLink>

  </div>

</div>
