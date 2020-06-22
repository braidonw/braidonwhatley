<script>
  import ExperienceItem from "parts/resume/ExperienceItem.svelte";
  import ExperienceLine from "parts/resume/_ExperienceLine.svelte";
  import ResumeHeader from "parts/resume/ResumeHeader.svelte";
</script>

<div
  class="max-w-screen-md mx-auto px-4 py-5 sm:p-6 bg-white rounded-t-lg
  shadow-lg">
  <h1 class="py-3 text-4xl font-semibold text-gray-900 text-center">
    Braidon Whatley,
    <span class="text-2xl text-gray-600 font-medium">PMP</span>
  </h1>
  <div class="border-t-2 border-b-2 border-gray-400 py-2 flex justify-around">
    <span class="text-gray-700 text-xl">
      Project Manager. Analyst. Data Scientist. Web Developer.
    </span>
  </div>

  <div class="mt-12">
    <ResumeHeader />
    <div class="space-y-6">
      <ExperienceItem
        class="mt-6"
        company="NSW Business Chamber"
        title="Project Manager"
        fromDate="May 2018"
        toDate="Aug 2019"
        location="Sydney">
        <ExperienceLine>
          I engaged and managed a team from a product design agency to design a
          new mobile application to support our healthcare labour-hire business.
          We built an interactive prototype, which we validated along with our
          initial problem- and solution-hypotheses by conducting 16 1-on-1 user
          interviews across several nursing agencies in Australia.
        </ExperienceLine>
      </ExperienceItem>

      <ExperienceItem>
        <ExperienceLine>
          Successfully managed several key projects simultaneously as part of a
          Business Transformation Program initiated after a Private Equity
          acquisition.
        </ExperienceLine>
        <ExperienceLine>
          I delivered a $900k reduction in annualised labour costs by delivering
          a $1m+ business automation solution. My 12-person project team, from
          three globally disperse organisations, used an Agile methodology to
          deliver a system that was integrated with SAP and used Optical
          Character Recognition to process 300k vendor invoices and 300k
          customer remittances per annum.
        </ExperienceLine>
        <ExperienceLine>
          I managed a 5-person project team to deliver an SAP FICO enhancement
          that allowed a surcharge to be applied to post-dispatch card payments.
          The business realised a reduction in card payment processing costs of
          $400k per annum from this enhancement.
        </ExperienceLine>
        <ExperienceLine>
          I managed the design and Agile delivery of an innovative
          customer-facing reporting product. The product was designed by
          iterative validations with both our users (Sales) and customers and
          allowed our Sales team to provide customer with industry-benchmarked
          insights into their procurement practices.
        </ExperienceLine>
        <ExperienceLine>
          I built a Python- and SQL-based model that identified customers and
          users that were not ordering at expected levels and identified $40M in
          missed revenue. I presented my analysis to a VP at our Private Equity
          owners, and subsequently kicked-off an initiative with our Sales teams
          to capture the revenue.
        </ExperienceLine>
        <ExperienceLine>
          As part of designing a new commissions structure for the entire Sales
          organisation (350+ sales reps), I built a Python model that used a
          Monte-Carlo method to analyse the expected cost and risk of various
          options. I used the model to provide real-time guidance to the Senior
          Management and Executive team to dramatically increase the speed of
          the commission scheme design.
        </ExperienceLine>
        <ExperienceLine>
          I delivered a reporting and analytics solution that provided the Sales
          organisation, from Executive team to Sales person, with an
          unprecedented view of financial performance, sales pipeline and
          activities. I employed an Agile approach to develop enhancements to
          Salesforce.com and both our SQL and SAP HANA databases, as well as the
          delivery of 20+ Tableau dashboards.
        </ExperienceLine>
        <ExperienceLine>
          Managed the design, development, and implementation of other projects
          spanning Salesforce.com, Business Intelligence (SSRS, Crystal reports
          and Tableau) and SAP.
        </ExperienceLine>
      </ExperienceItem>
    </div>
  </div>
</div>
