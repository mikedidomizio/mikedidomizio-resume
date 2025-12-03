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
                date="Aug 2022 - Dec 2025" position="Staff Engineer, Tech Lead (Web Platform)">
            <ul class="disc">
                <li>Led cross-team architectural direction for a 40+ developer NX Next.js monorepo,
                  defining standards for building scalable, shareable UI components used across multiple product lines.</li>
                <li>Mentored engineers across several teams, coaching intermediate and senior developers on advanced React patterns,
                  testing rigor, performance profiling, and scalable frontend design—raising overall engineering quality and velocity.</li>
                <li>Partnered closely with product leadership to set delivery expectations,
                  assess technical risk, and unblock high-priority feature work across multiple squads.</li>
                <li>Proactively gathered developer pain points and implemented DX improvements—reducing testing friction,
                  standardizing workflows, and helping teams ship with greater confidence.</li>
                <li>Built a custom macOS utility to bypass a daemon service,
                  significantly reducing testing pains and improving day-to-day feedback loops for dozens of QA engineers.</li>
                <li>Created Datadog dashboards that surfaced frontend performance, SLO adherence,
                  and user-experience metrics for internal teams and partners, strengthening reliability and
                  alignment on performance goals.</li>
            </ul>
        </CVItem>
        <CVItem title="Coveo" website="https://www.coveo.com"
                date="Aug 2021 - Aug 2022" position="Senior Frontend Developer (Machine Learning)">
          <ul class="disc">
            <li>Implemented automated visual regression testing, reducing unintended UI changes across
              releases and improving overall release confidence.</li>
            <li>Authored coding and review standards that streamlined PR turnaround time and improved consistency across contributors.</li>
            <li>Modernized large sections of legacy Backbone code into React, supported by React Testing Library
              to prevent regressions in ML-focused interfaces.</li>
          </ul>
        </CVItem>
        <CVItem title="Thales Canada" website="https://www.thalesgroup.com/en/americas/canada"
                date="July 2017 - Aug 2021" position="Scrum Master/Software Developer (Cybersecurity)">
            <ul class="disc">
                <li>Collaborated with Product Managers to estimate feature scope and timeline commitments,
                  using historical velocity to improve delivery predictability.
                </li>
                <li>Facilitated retros, daily scrums, and sprint planning, cultivating a continuous-improvement culture within the team.</li>
                <li>Hold daily scrums to ensure team is moving forward and be able to help and guide the team.</li>
                <li>Delivered independent full-stack feature implementations, supporting a complex cybersecurity
                  platform and participating in on-call rotations to ensure system uptime.</li>
                <li>Organized lunch-and-learns to raise engineering capability across cloud, backend, and frontend topics.</li>
                <li>Deployed multiple GCP functions (Pub/Sub, BigQuery) to automate internal workflows and improve system capability.</li>
            </ul>
        </CVItem>
        <CVItem title="IDS North America" website="https://www.idscorporation.com/na"
                date="July 2015 - July 2017" position="Lead Developer (Aircraft Navigation)">
            <ul class="disc">
                <li>Acted as lead developer for a 12-person billing platform initiative,
                  driving one of the company’s most successful product launches.</li>
                <li>Led sprint planning and backlog refinement, while establishing shared AngularJS component libraries used across multiple projects.</li>
                <li>Automated CI/CD workflows using GulpJS and GitLab CI to reduce
                  deployment friction and accelerate iterative delivery.</li>
                <li>Built custom Yeoman generators to standardize project scaffolding for future teams—improving consistency and onboarding time.</li>
            </ul>
        </CVItem>
        <CVItem title="Spoonity" website="https://www.spoonity.com/"
                date="February 2014 - July 2015" position="Mobile App Developer">
            <ul class="disc">
                <li>App development for all major mobile platforms (iOS, Android, Windows Phone 7/8, and Blackberry)</li>
                <li>Built a remote updater to remotely update apps outside of the platform stores. Eliminating wait times for app updates</li>
                <li>Multilingualism built into apps/dashboard</li>
                <li>GruntJS set up to automate and minimize time developing apps</li>
                <li>Server side PHP development for supporting consumer apps</li>
            </ul>
        </CVItem>
        <CVItem title="MideoMe"
                date="2011 - 2013" position="Software Developer">
            <ul class="disc">
                <li>Helped in architecture and managing a number of remote server setups, databases and
                    infrastructures
                </li>
                <li>Planned out solutions using appropriate and convenient scalable applications like Wowza, and
                    Flowplayer deployed on Amazon Web Services (AWS) EC2
                </li>
                <li>Experience and knowledge in integrating back-end code with Amazon's S3/Cloudfront service for
                    scalability and easy accessibility
                </li>
                <li>Set up and deployed AWS (EC2, S3, Cloudfront, RDS) in different zones for distributing files globally</li>
                <li>Integrated with Facebook, Twitter, YouTube, Vimeo and Tumblr</li>
            </ul>
        </CVItem>

        <Section>Related skills</Section>

        <SkillsSection>
            <SkillsRow>
                <Skill v-bind:rank="9">Next/React</Skill>
                <Skill v-bind:rank="9">NodeJS</Skill>
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
                      In late December 2021, I built a <a href="https://covid-testing.vercel.app/" target="_blank">rapid antigen test appointment helper</a> for most of Canada.
                      It received nationwide attention, and I was interviewed by <a href="https://www.youtube.com/watch?v=JZNTT7g3ytQ" target="_blank">CTV Toronto</a>
                      and <a href="https://www.youtube.com/watch?v=6ofQ82206K8" target="_blank">CTV Ottawa</a> as well as multiple radio/newspaper interviews.
                      Built with NextJS, queries via GraphQL, deploys with Vercel. Received 20,000-30,000 hits per day around Christmas 2021.
                    </li>
                    <li>
                        <a href="https://github.com/mikedidomizio/transcriber-summarizer" target="_blank">Transcriber Summarizer</a> - I wanted a way to summarize long meetings. Using AWS Transcribe, OpenAI,
                        and built on top of Remix, the app can record or take audio files, determine each speaker, and then return a summary of the discussion.
                    </li>
                    <li><a href="https://github.com/mikedidomizio/launchdorkly" target="_blank">LaunchDorkly</a> - A power user dashboard of LaunchDarkly.
                        The main project page displays the status of feature flags in all environments right up front. Includes a feature that allows you to copy flags from one project to another.
                    </li>
                    <li>Worked on a <a
                            href="https://chrome.google.com/webstore/detail/tab-group-helper/llhkcebnebfiaamifhbpehjompplpnae?hl=en&authuser=0"
                            target="_blank">Tab Group Helper</a> Chrome Extension written in React to improve
                        productivity/organization of tab groups in people's browsers.
                    </li>
                    <li>This CV is built in VueJS!  It's <a href="https://github.com/mikedidomizio/mikedidomizio-resume">open
                        source</a>, with various testing setups, dockerized, and deploys to S3.
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
