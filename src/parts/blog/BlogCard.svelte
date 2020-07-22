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
    "bg-teal-50 text-teal-600 rounded-full text-sm uppercase font-medium px-2 py-1";
</script>

<div>
  <a href={`/writing/${slug}`} class="focus:outline-none">
    <div class="px-4 -y5 sm:p-6 bg-white rounded-lg shadow-lg">

      <div class="py-1 flex justify-between">
        <div>
          <span class="text-md text-gray-500 font-medium">{publishDate}</span>
        </div>

        <div class="">
          <span class={typeClasses}>{type}</span>

        </div>

      </div>

      <span class="group-hover:underline">
        <Heading level="3">{title}</Heading>
      </span>

      <div class="mt-1">
        <BodyText weight="sm">{leadText}</BodyText>

      </div>

      <div class="mt-1">
        <TextLink
          class="group-hover:text-blue-800 border-blue-800"
          url={`/writing/${slug}`}>
          Read more →
        </TextLink>

      </div>

    </div>
  </a>
</div>
