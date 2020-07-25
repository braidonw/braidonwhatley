<script>
  import TextLink from "components/buttons/TextLink.svelte";

  export let organisation = "Winc Australia Pty Ltd";
  export let organisationURL = "www.winc.com.au";
  export let jobTitle = "Project Manager";
  export let location = "Sydney";
  export let fromDate = "Sep 2019";
  export let toDate = "Mar 2020";
</script>

<div>
  <div class="leading-5">
    <div>
      <span class="text-md font-normal text-gray-900">
        <span class="font-semibold">{jobTitle}</span>
        at
        <span class="font-semibold">
          {#if organisationURL}
            <TextLink url={`https://${organisationURL}`}>
              {organisation}
            </TextLink>
          {:else}{organisation}{/if}
        </span>
      </span>
    </div>

    <div class="mt-1">
      <span class="text-md font-normal text-gray-900">{location}</span>
      &middot
      <span class="text-md font-normal text-gray-900">{fromDate}</span>
      -
      <span class="text-md font-normal text-gray-900">{toDate}</span>
    </div>

  </div>

  <ul class="ml-4 mt-2 space-y-3">
    <slot />
  </ul>
</div>
