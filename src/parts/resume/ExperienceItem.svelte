<script>
  import ExperienceHeader from "./_ExperienceHeader.svelte";
  import ExperienceBody from "./_ExperienceBody.svelte";
  import ExperienceLine from "./_ExperienceLine.svelte";

  let classes = "";
  export { classes as class };
  export let company = "Winc Australia";
  export let location = "Sydney";
  export let title = "Project Manager";
  export let fromDate = "Sep 2019";
  export let toDate = "Mar 2020";
</script>

<div class={classes}>
  <ExperienceHeader>
    <span slot="company">{company}</span>
    <span slot="location">{location}</span>
    <span slot="title">{title}</span>
    <span slot="from-date">{fromDate}</span>
    <span slot="to-date">{toDate}</span>
  </ExperienceHeader>
  <ExperienceBody>
    <slot />
  </ExperienceBody>
</div>
