<script>
  import ExperienceItem from "parts/resume/ExperienceItem.svelte";
  import ExperienceLine from "parts/resume/_ExperienceLine.svelte";
  import ResumeHeader from "parts/resume/ResumeHeader.svelte";
  import Job from "parts/resume/Job.svelte";
  import JobLine from "parts/resume/JobLine.svelte";
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
      Generalist with experience in project management, data analysis, machine
      learning & data science, and web development.
    </span>
    <span class="text-gray-700 text-xl">
      Braidon is an experienced, PMP-certified project management professional
      with a proven history of successfully delivering multiple concurrent
      Technology-enabled projects in Finance, Sales, and Business
      Transformation.
    </span>
  </div>

  <div class="mt-12">
    <ResumeHeader>Professional Experience</ResumeHeader>
    <div class="space-y-10 mt-3">
      <Job
        organisation={'Woolworths'}
        jobTitle={'Contractor'}
        organisationURL={'www.woolworths.com.au'}
        fromDate={'May 2020'}
        toDate={'Present'}>
        <JobLine>
          I developed a python library to help identify and structure
          relationships between ~200k Woolworths customer accounts.
        </JobLine>
      </Job>

      <Job
        organisation={'Karework Pty Ltd'}
        jobTitle={'Founder'}
        organisationURL={'www.karework.com'}
        fromDate={'Jul 2019'}
        toDate={'Present'}>
        <JobLine>
          I developed a web application using Svelte/Sapper, Tailwind CSS, and
          GraphQL that connects aged care providers with people in the community
          in need of their services.
        </JobLine>

      </Job>
      <Job
        organisation={'Winc Australia Pty Ltd'}
        jobTitle={'Project Manager'}
        organisationURL={'www.winc.com.au'}
        fromDate={'Sep 2019'}
        toDate={'Mar 2020'}>
        <JobLine>
          I led a project team to develop a product MVP for a machine-learning
          based customer engagement application that assists the business in
          directing its salespeople.
        </JobLine>

        <JobLine>
          I worked on the execution of organisation-wide initiatives to
          significantly reduce the headcount in the sales organisation.
        </JobLine>
      </Job>

      <Job
        organisation={'NSW Business Chamber'}
        jobTitle={'Project Manager'}
        organisationURL={'nswbusinesschamber.com.au'}
        fromDate={'May 2018'}
        toDate={'Aug 2019'}
        location="Sydney">
        <JobLine>
          Successfully managed several concurrent projects as part of the
          organisation's PMO.
        </JobLine>
        <JobLine>
          I developed a python application to automate the data migration
          between 26 legacy databases as part of a wider ERP implementation in
          the healthcare business.
        </JobLine>
        <JobLine>
          I engaged and managed a team from a product design agency to design a
          new mobile application to support our healthcare labour-hire business.
          We built an interactive prototype, which we validated along with our
          initial problem- and solution-hypotheses by conducting 16 1-on-1 user
          interviews across several nursing agencies in Australia.
        </JobLine>
        <JobLine>
          I managed the procurement of a Microsoft Dynamics CRM solution and
          development partner.
        </JobLine>
      </Job>

      <Job
        organisation={'Winc Australia Pty Ltd'}
        jobTitle={'Project Manager'}
        organisationURL={'www.winc.com.au'}
        fromDate={'Sep 2019'}
        toDate={'Mar 2020'}>
        <JobLine>
          Successfully managed several key projects simultaneously as part of a
          Business Transformation Program initiated after a Private Equity
          acquisition.
        </JobLine>
        <JobLine>
          I delivered a $900k reduction in annualised labour costs by delivering
          a $1m+ business automation solution. My 12-person project team, from
          three globally disperse organisations, used an Agile methodology to
          deliver a system that was integrated with SAP and used Optical
          Character Recognition to process 300k vendor invoices and 300k
          customer remittances per annum.
        </JobLine>
        <JobLine>
          I managed a 5-person project team to deliver an SAP FICO enhancement
          that allowed a surcharge to be applied to post-dispatch card payments.
          The business realised a reduction in card payment processing costs of
          $400k per annum from this enhancement.
        </JobLine>
        <JobLine>
          I managed the design and Agile delivery of an innovative
          customer-facing reporting product. The product was designed by
          iterative validations with both our users (Sales) and customers and
          allowed our Sales team to provide customer with industry-benchmarked
          insights into their procurement practices.
        </JobLine>
        <JobLine>
          I built a Python- and SQL-based model that identified customers and
          users that were not ordering at expected levels and identified $40M in
          missed revenue. I presented my analysis to a VP at our Private Equity
          owners, and subsequently kicked-off an initiative with our Sales teams
          to capture the revenue.
        </JobLine>
        <JobLine>
          As part of designing a new commissions structure for the entire Sales
          organisation (350+ sales reps), I built a Python model that used a
          Monte-Carlo method to analyse the expected cost and risk of various
          options. I used the model to provide real-time guidance to the Senior
          Management and Executive team to dramatically increase the speed of
          the commission scheme design.
        </JobLine>
        <JobLine>
          I delivered a reporting and analytics solution that provided the Sales
          organisation, from Executive team to Sales person, with an
          unprecedented view of financial performance, sales pipeline and
          activities. I employed an Agile approach to develop enhancements to
          Salesforce.com and both our SQL and SAP HANA databases, as well as the
          delivery of 20+ Tableau dashboards.
        </JobLine>
        <JobLine>
          Managed the design, development, and implementation of other projects
          spanning Salesforce.com, Business Intelligence (SSRS, Crystal reports
          and Tableau) and SAP.
        </JobLine>
      </Job>

      <Job
        organisation={'Staples Australia Pty Ltd'}
        jobTitle={'Business Analyst'}
        organisationURL={'www.staples.com.au'}
        fromDate={'Feb 2014'}
        toDate={'Mar 2015'}>
        <JobLine>
          I identified that existing Sales Commission plans were
          disproportionately rewarding certain associates relative to their
          performance. Proposed, designed and implemented a revised commission
          scheme for 100+ associates across 4 sales teams that reduced annual
          commissions expenses by over $600,000.
        </JobLine>
        <JobLine>
          I designed and implemented a set of new business services for an
          80-person business development sales team, including a new sales
          commission scheme, changes to employee remuneration, new performance
          reporting tools, and a solution to expedite new customer
          implementation.
        </JobLine>
        <JobLine>
          I developed the business case and business requirements document for
          the development of an SAP- integrated Sales Commission calculation &
          processing system for 400 Sales Associates. Worked with the technical
          team throughout the development, testing, change management and
          successful implementation of the solution.
        </JobLine>
        <JobLine>
          I designed a series of demographic and firmographic data fields that
          were implemented into the Salesforce.com CRM system that supported
          in-depth sales analysis. This was fundamental to supporting the
          organisations 2015 sales strategic initiatives.
        </JobLine>
      </Job>

      <Job
        organisation={'Staples Australia Pty Ltd'}
        jobTitle={'Consultant'}
        organisationURL={'www.staples.com.au'}
        fromDate={'Jun 2013'}
        toDate={'Feb 2014'}>
        <JobLine>
          Conducted stakeholder interviews, cost-benefit analysis and a
          current-state review of the existing Salesforce.com CRM system and
          developed a 12-month roadmap to embed Salesforce.com into the sales
          organisation.
        </JobLine>
        <JobLine>
          Worked with Sales Leaders to develop and implement new sales targeting
          methodologies, commission schemes, territory management plans, and
          reporting & analysis tools to support the organisational restructures
          of the Facilities Solutions and Furniture business divisions.
        </JobLine>
      </Job>

      <Job
        organisation={'Different Australia Pty Ltd'}
        jobTitle={'Consultant'}
        organisationURL={undefined}
        fromDate={'2012'}
        toDate={'Jun 2013'}>
        <JobLine>
          Worked on projects with major Australian Blue-Chip organisations
          including Westpac, the Commonwealth Bank of Australia, Toyota
          Financial Services, and David Jones.
        </JobLine>
        <JobLine>
          Conducted 1-on-1 user interviews for Toyota Financial Services at
          Toyota dealerships in Sydney and Adelaide to assess current and future
          needs of a tailored CRM solution, and presented key findings to
          Project stakeholders and Executive team members. Recommendations were
          then successfully validated with a workshop involving over 50 Toyota
          dealers and TFS staff, with findings and recommendations provided back
          to project stakeholders.
        </JobLine>
        <JobLine>
          Facilitated design-thinking workshops with senior managers, project
          stakeholders, and executive team members of David Jones to construct a
          framework for their desired strategy towards customer experience.
          Worked to create new set of customer service standards reflecting this
          strategy, and successfully validated them in a live retail
          environment.
        </JobLine>
        <JobLine>
          Worked with small and medium size business owners to map out,
          document, and understand their process of acquiring and integrating
          remote payment solutions and merchant banking services, and developed
          several key insights and strategic recommendations that were then
          delivered back to key project stakeholders at CBA.
        </JobLine>
      </Job>
    </div>
  </div>

  <div class="mt-12">
    <ResumeHeader>Education and Qualifications</ResumeHeader>
    <JobLine>
      Project Management Professional, from the
      <a
        class="text-blue-600 underline hover:text-blue-900"
        href={'https://www.pmi.org'}>
        Project Management Institute.
      </a>
    </JobLine>
    <JobLine>
      Bachelor of Arts, with majors in Philosophy and Psychology, from the
      University of NSW.
    </JobLine>
  </div>

  <div class="mt-12">
    <ResumeHeader>Skills & Other Experience</ResumeHeader>
    <div>
      <span>
        Experience working with the following enterprise technologies:
      </span>
      <JobLine>Salesforce.com</JobLine>
      <JobLine>Microsoft SQL Server</JobLine>
      <JobLine>Microsoft SQL Server Reporting Services (SSRS)</JobLine>
      <JobLine>Microsoft Project</JobLine>
      <JobLine>SAP</JobLine>
      <JobLine>SAP HANA / Business Objects</JobLine>
      <JobLine>Tableau</JobLine>
      <JobLine>Plotly Dash</JobLine>
    </div>
  </div>
</div>
