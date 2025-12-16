<template>
    <div id="app" class="wrap">
        <Header name="Mike DiDomizio" position="Staff Engineer" city="Ottawa, Ontario"
                email="mikedidomizio@gmail.com"
                github="mikedidomizio"
                phone-number="+1-613-806-0770">
        </Header>
        <PersonalProfile message="Hi - I'm Mike, a Staff Engineer passionate about writing clean,<br/> scalable code and mentoring engineers to grow and thrive." />

        <Section>Working Experience</Section>

        <CVItem title="theScore" website="https://www.thescore.bet"
                date="Aug 2022 - Nov 2025" position="Staff Engineer, Tech Lead (Web Platform)">
            <ul class="disc">
                <li>Led cross team architectural direction for a 40+ developer Next.js NX monorepo,
                  defining standards for building scalable, shareable UI components used across multiple product lines.</li>
                <li>Mentored engineers across several teams, coaching intermediate and senior developers on
                  advanced React patterns, testing strategies, performance profiling, and scalable frontend design,
                  which raised overall engineering quality and velocity.</li>
                <li>Established and led the Web Guild to gather feedback across feature teams, surface common pain points,
                  quickly iterate on solutions, and drive alignment on shared frontend and DX standards.</li>
                <li>Partnered with leadership to set delivery expectations, evaluate technical risk, and unblock high priority initiatives.</li>
                <li>Proactively gathered developer pain points and implemented DX improvements, which reduced testing friction,
                  standardized workflows, and helped teams ship with greater confidence.</li>
                <li>Started a 30-60-90 onboarding plan with an onboarding buddy program to accelerate
                  ramp-up during rapid team growth which enabled engineers to contribute within their first week.</li>
                <li>Developed a macOS utility that sidestepped a blocking daemon dependency, enabling engineers and QA to toggle
                  daemon dependent flows without reinstalls and significantly reducing local testing friction.</li>
                <li>Built Datadog dashboards surfacing frontend performance, SLO adherence, and user-experience metrics,
                  paired with Slack alerts that improved visibility and alignment on reliability goals.</li>
            </ul>
        </CVItem>
        <CVItem title="Coveo" website="https://www.coveo.com"
                date="Aug 2021 - Aug 2022" position="Senior Frontend Developer (Machine Learning)">
          <ul class="disc">
            <li>Implemented automated visual regression testing, reducing unintended UI changes across
              releases and improving overall release confidence.</li>
            <li>Authored coding and review standards that streamlined PR turnaround time and improved consistency across contributors.</li>
            <li>Modernized large sections of legacy Backbone code into React, supported by React Testing Library
              to prevent regressions in ML focused interfaces.</li>
          </ul>
        </CVItem>
        <CVItem title="Thales Canada" website="https://www.thalesgroup.com/en/americas/canada"
                date="July 2017 - Aug 2021" position="Scrum Master/Software Developer (Cybersecurity)">
            <ul class="disc">
                <li>Collaborated with Product Managers to estimate feature scope and timeline commitments,
                  using historical velocity to improve delivery predictability.
                </li>
                <li>Facilitated daily scrums, sprint planning, and retros, cultivating a continuous improvement culture within the team.</li>
                <li>Delivered independent fullstack feature implementations, supporting a complex cybersecurity
                  platform and participating in oncall rotations to ensure system uptime.</li>
                <li>Organized lunch and learns to raise engineering capability across cloud, backend, and frontend topics.</li>
                <li>Deployed multiple Go GCP functions (Pub/Sub, BigQuery) to automate internal workflows and improve system capability.</li>
            </ul>
        </CVItem>
        <CVItem title="IDS North America" website="https://www.idscorporation.com/na"
                date="July 2015 - July 2017" position="Lead Developer (Aircraft Navigation)">
            <ul class="disc">
                <li>Acted as lead developer for a 12 person billing application,
                  driving one of the company’s most successful product launches.</li>
                <li>Responsible for Sprint planning and backlog refinement.</li>
                <li>Set up of common design, templating, shared AngularJS components for projects.</li>
                <li>Automated CI/CD workflows using GulpJS and GitLab CI to reduce
                  deployment friction and accelerate iterative delivery.</li>
                <li>Built custom Yeoman generators to standardize project scaffolding for future teams, improving consistency and onboarding time.</li>
            </ul>
        </CVItem>
        <CVItem title="Spoonity" website="https://www.spoonity.com/"
                date="February 2014 - July 2015" position="Mobile App Developer">
            <ul class="disc">
                <li>Maintained 30+ white-labelled mobile apps, powered by a Government SR&ED recognized remote updater system
                  that bypassed app store delays and drastically improved release speed.</li>
                <li>Automated development workflows using GruntJS to speed up delivery.</li>
                <li>Built backend PHP functionality supporting consumer facing app features.</li>
            </ul>
        </CVItem>
        <CVItem title="MideoMe"
                date="2011 - 2013" position="Software Developer">
            <ul class="disc">
                <li>Designed and deployed globally distributed AWS infrastructure (EC2, S3, CloudFront, RDS)
                  for scalable media delivery, including streaming pipelines using Wowza/Flowplayer and integrations with major social platforms.</li>
                <li>Contributed to backend architecture, multi server deployments, and content distribution systems optimized for high availability and reach.</li>
            </ul>
        </CVItem>

        <Section>Related skills</Section>

        <SkillsSection>
            <SkillsRow>
                <Skill v-bind:rank="9">Next.js/React</Skill>
                <Skill v-bind:rank="9">Node.js</Skill>
                <Skill v-bind:rank="8">PostgreSQL/MySQL</Skill>
            </SkillsRow>
            <SkillsRow>
                <Skill v-bind:rank="9">TypeScript</Skill>
                <Skill v-bind:rank="6">Java</Skill>
                <Skill v-bind:rank="9">Automation/CI/CD</Skill>
            </SkillsRow>
            <SkillsRow>
                <Skill v-bind:rank="9">HTML</Skill>
                <Skill v-bind:rank="7">PHP</Skill>
                <Skill v-bind:rank="6">Terraforming</Skill>
            </SkillsRow>
        </SkillsSection>

        <Section>Other projects</Section>

        <SkillsSection>
            <SkillsRow>
                <ul class="disc">
                    <li>
                      Rapid Antigen Test Finder (2021):  built a rapid antigen test appointment helper for most of Canada.
                      It received nationwide attention, and I was interviewed by <a href="https://www.youtube.com/watch?v=JZNTT7g3ytQ" target="_blank">CTV Toronto</a>
                      , <a href="https://www.youtube.com/watch?v=6ofQ82206K8" target="_blank">CTV Ottawa</a>, as well as multiple radio/newspaper interviews including the Toronto Star.
                      Built with Next.js, GraphQL, and deployed via Vercel. In its first five days, it consistently received 20,000+ hits per day.
                    </li>
                    <li>Open Source Contributions: Contributed to fixes in open source tooling like pnpm, LaunchDarkly SDK, and ESLint.</li>
                    <li>VueJS powered résumé: This résumé is a web project in VueJS!  It's <a href="https://github.com/mikedidomizio/mikedidomizio-resume">open
                        source</a>, with automated testing, Docker setup, and S3/Vercel deployment.
                    </li>
                </ul>
            </SkillsRow>
        </SkillsSection>
    </div>
</template>

<script>
  import CVItem from "./components/CVItem";
  import Header from "./components/Header";
  import PersonalProfile from "./components/PersonalProfile";
  import Section from "./components/Section";
  import Skill from "./components/Skill";
  import SkillsRow from "./components/SkillsRow";
  import SkillsSection from "./components/SkillsSection";

  export default {
    name: 'App',
    components: {CVItem, Header, PersonalProfile, Section, Skill, SkillsRow, SkillsSection},
    data() {
      // This solely exists to appear in the coverage report
      return {}
    }
  }
</script>

<style>
    /* the CSS from before, not scoped to correct components */
    @import "assets/base.css";
    @import "assets/grid.css";
    @import "assets/layout.css";
    @import "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700";
</style>
