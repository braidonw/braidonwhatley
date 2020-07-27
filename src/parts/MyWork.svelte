<script>
  import Heading from "components/type/Heading.svelte";
  import BodyText from "components/type/BodyText.svelte";
  import TextLink from "components/buttons/TextLink.svelte";
</script>

<div class="py-16">
  <Heading level="2">My Work</Heading>
  <BodyText>Here's a sample of my recent work</BodyText>

  <ul class="pl-6 space-y-6">
    <li class="list-disc mt-3">
      <BodyText level="3">
        <span class="font-bold">$900k p/a</span>
        reduction in labour by implementing an automated AP / AR OCR system
        integrated with SAP ERP.
      </BodyText>
    </li>
    <li class="list-disc">
      <BodyText level="3">
        Development of Karework.com web application using
        <TextLink url="https://svelte.dev">Svelte,</TextLink>
        <TextLink url="https://sapper.svelte.dev">Sapper,</TextLink>
        <TextLink url="https://tailwindcss.com">Tailwind CSS,</TextLink>
        <TextLink url="https://graphql.org">GraphQL,</TextLink>
        and
        <TextLink url="https://pouchdb.com">PouchDB.</TextLink>
      </BodyText>
    </li>
    <li class="list-disc">
      <BodyText level="3">
        Development of a
        <TextLink url="https://https://python.org">Python</TextLink>
        application to automate the data migration between 26 legacy databases
        as part of a wider ERP/CRM implementation.
      </BodyText>
    </li>
    <li class="list-disc">
      <BodyText level="3">
        Leading a team to design and develop an MVP
        <span class="font-bold">machine-learning</span>
        solution that provides salespeople with
        <span class="font-bold">actionable customer insights</span>
        based on recent customer behaviour.
      </BodyText>
    </li>
    <li class="list-disc">
      <BodyText level="3">
        Developed a model of customer transactions that identified a
        <span class="font-bold">$40M</span>
        gap in realised vs. expected revenue, the contributing set of customers,
        and presented findings to the Private Equity owners of the busienss.
      </BodyText>
    </li>

  </ul>

</div>
