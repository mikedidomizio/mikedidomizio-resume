<template>
    <div id="app" class="wrap">
        <Header name="Mike DiDomizio" position="Staff Engineer" city="Ottawa, Ontario"
                email="mikedidomizio@gmail.com"
                github="mikedidomizio"
                phone-number="+1-613-806-0770">
        </Header>
        <PersonalProfile message="Hi - I'm Mike — a Staff Engineer passionate about writing clean,<br/> scalable code and mentoring engineers to grow and thrive." />
        <Section>Working Experience</Section>
        <CVItem title="theScore" website="https://www.thescore.bet"
                date="Aug 2022 - Present" position="Staff Engineer, Tech Lead (Web Platform)">
            <ul class="disc">
                <li>Write guidelines and standards on building complex shareable components for our monorepo</li>
                <li>Mentoring new team on advanced React concepts, proper testing, best practices</li>
                <li>Created software to bypass daemon service to reduce testing friction</li>
                <li>Added Datadog monitoring with Slack alerts for CI flakiness, identifying potential application anomalies</li>
                <li>Created Datadog observability dashboards to monitor frontend performance and ensure alignment with partnership SLOs</li>
                <li>Worked with product management to align on timelines, assess risks, and drive delivery of high priority features</li>
                <li>Learning the various pain points from team members, taking the feedback and implementing
                    solutions to improve productivity, testing, and developer experience</li>
            </ul>
        </CVItem>
        <CVItem title="Coveo" website="https://www.coveo.com"
                date="Aug 2021 - Aug 2022" position="Senior Frontend Developer (Machine Learning)">
          <ul class="disc">
            <li>Implement visual regression testing to reduce the number of unintended visual changes between releases</li>
            <li>Write standards and recommendations on contributing code and reviewing to reduce pull request time turnaround</li>
            <li>Refactoring of legacy Backbone code in React, with RTL added to ensure no regressions</li>
            <li>Provide guidance from previous experience to improve the processes in place for my team</li>
          </ul>
        </CVItem>
        <CVItem title="Thales Canada" website="https://www.thalesgroup.com/en/americas/canada"
                date="July 2017 - Aug 2021" position="Scrum Master/Software Developer (Cybersecurity)">
            <ul class="disc">
                <li>Work closely with Product Managers to t-shirt size features with our team and give estimated
                    delivery
                    date by using the team velocity from previous sprints
                </li>
                <li>Conduct retrospectives on our sprint and work towards improving the efficiency of the team</li>
                <li>Hold daily scrums to ensure team is moving forward and be able to help and guide the team</li>
                <li>Complete breakdown and autonomous implementation of full stack objectives</li>
                <li>Help with pager duty incidents to ensure minimal downtime</li>
                <li>Run lunch and learn events to further develop teams skill sets</li>
                <li>Deployed a number of GCP Functions like Pub/Sub, BigQuery</li>
            </ul>
        </CVItem>
        <CVItem title="IDS North America" website="https://www.idscorporation.com/na"
                date="July 2015 - July 2017" position="Lead Developer (Aircraft Navigation)">
            <ul class="disc">
                <li>Lead developer on 12 person billing project</li>
                <li>Responsible for driving the team to one of the most successful launches of a product within the company</li>
                <li>Responsible for Sprint planning and backlog refinement</li>
                <li>Set up of common design, templating, shared AngularJS components for projects</li>
                <li>Automate CI/CD of projects through GulpJS and GitLab CI</li>
                <li>Set up custom Yeoman generators for scaffolding future AngularJS projects</li>
            </ul>
        </CVItem>
        <CVItem title="Spoonity" website="https://www.spoonity.com/"
                date="February 2014 - July 2015" position="Mobile App Developer">
            <ul class="disc">
                <li>App development for all major mobile platforms (iOS, Android, WP8 and Blackberry)</li>
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
                <li>Planned out solutions using appropriate and convenient scalable applications (like Wowza,
                    Flowplayer deployed on AWS EC2)
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
                <Skill v-bind:rank="9">Typescript</Skill>
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
                      It received a lot of feedback, and I was interviewed by <a href="https://www.youtube.com/watch?v=JZNTT7g3ytQ" target="_blank">CTV Toronto</a>
                      and <a href="https://www.youtube.com/watch?v=6ofQ82206K8" target="_blank">CTV Ottawa</a> as well as multiple radio/newspaper interviews.
                      Built with NextJS, queries via GraphQL, deploys with Vercel. 20,000-30,000 hits per day around Christmas 2021.
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
