<template>
    <div id="app" class="wrap">
        <Header name="Mike DiDomizio" position="Software Developer" city="Ottawa, Ontario" postal-code="K1Y 4T1"
                email="mikedidomizio@gmail.com"
                github="mikedidomizio"
                phone-number="+1-613-806-0770">
        </Header>
        <PersonalProfile message="Hi - I'm Mike, and programming is my passion.<br/>Check out some of the awesome
                things I've done below."></PersonalProfile>

        <Section>Working Experience</Section>
        <CVItem title="Coveo" website="https://www.coveo.com"
                date="Aug 2021 - Present" position="Senior Frontend Developer (Machine Learning)">
          <ul class="disc">
            <li>Implement visual regression testing to reduce the number of unintended visual changes between releases</li>
          </ul>
        </CVItem>
        <CVItem title="Thales Canada" website="https://www.thalesgroup.com/en/americas/canada"
                date="July 2017 - Present" position="Scrum Master/Software Developer (Cybersecurity)">
            <ul class="disc">
                <li>Work closely with Product Managers to t-shirt size features with our team and give estimated
                    delivery
                    date by using the team velocity from previous sprints
                </li>
                <li>Conduct retrospectives on our sprint and work towards improving the efficiency of the team</li>
                <li>Hold daily scrums to ensure team is moving forward and be able to help and guide the team</li>
                <li>Developed entire features autonomously</li>
                <li>Help with Pager Duty incidents to ensure minimal downtime</li>
                <li>Run lunch and learn events to further develop teams skill sets</li>
                <li>Complete breakdown and implementation of full stack objectives</li>
            </ul>
        </CVItem>
        <CVItem title="IDS North America" website="https://www.idscorporation.com/na"
                date="July 2015 - July 2017" position="Lead Developer (Aircraft Navigation)" previousPosition>
            <ul class="disc">
                <li>Lead developer on 12 person billing project</li>
                <li>Responsible for driving the team to one of the most successful launches of a product within the company</li>
                <li>Responsible for Sprint planning and backlog refinement</li>
                <li>Test Driven Development with Karma/Protractor E2E tests</li>
                <li>Set up of common design, templating, shared AngularJS components for projects</li>
                <li>Automate CI/CD of projects through GulpJS and GitLab CI</li>
                <li>Set up custom Yeoman generators for scaffolding future AngularJS projects</li>
            </ul>
        </CVItem>
        <CVItem title="Spoonity" website="http://www.spoonity.com/"
                date="February 2014 - July 2015" position="Mobile App Developer" previousPosition>
            <ul class="disc">
                <li>App development for all major mobile platforms (iOS, Android, WP8 and Blackberry)</li>
                <li>Built a remote updater to remotely update apps outside of the platform stores. Eliminating wait times for app updates</li>
                <li>Multilingualism built into apps/dashboard</li>
                <li>GruntJS set up to automate and minimize time developing apps</li>
                <li>Server side PHP development for supporting consumer apps</li>
            </ul>
        </CVItem>
        <CVItem title="MideoMe"
                date="2011 - 2013" position="Lead Developer" previousPosition>
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
                <li>Polls the server for new content depending on which page you are on</li>
            </ul>
        </CVItem>

        <Section>Related skills</Section>

        <SkillsSection>
            <SkillsRow>
                <Skill v-bind:rank="9">HTML5</Skill>
                <Skill v-bind:rank="7">PHP</Skill>
                <Skill v-bind:rank="8">PostgreSQL/MySQL</Skill>
            </SkillsRow>
            <SkillsRow>
                <Skill v-bind:rank="8">Typescript</Skill>
                <Skill v-bind:rank="6">Java</Skill>
                <Skill v-bind:rank="8">Automation</Skill>
            </SkillsRow>
            <SkillsRow>
                <Skill v-bind:rank="9">Angular/React/Vue</Skill>
                <Skill v-bind:rank="8">NodeJS</Skill>
                <Skill v-bind:rank="6">Terraforming</Skill>
            </SkillsRow>
        </SkillsSection>

        <Section>Other skills/projects</Section>

        <SkillsSection>
            <SkillsRow>
                <ul class="disc">
                    <li>
                        Currently building a Visual Regression testing front/backend.  Reverse engineering <a href="https://www.npmjs.com/package/@percy/core" target="_blank">@percy/core</a>
                        requests so I can use their plugins for my server.  Using AWS RDS/S3.  After will have containers with different OS/browsers in cloud to test.
                    </li>
                    <li>
                        Recently built a <a href="https://covid-testing.vercel.app/" target="_blank">rapid antigen test appointment helper</a> for most of Canada.
                        It received a lot of feedback, and I was interviewed by <a href="https://www.youtube.com/watch?v=JZNTT7g3ytQ" target="_blank">CTV Toronto</a>
                        and <a href="https://www.youtube.com/watch?v=6ofQ82206K8" target="_blank">CTV Ottawa</a> as well as multiple radio/newspaper interviews, and am
                        receiving a Local Legend award.  Built with NextJS, queries GraphQL, deploys with Vercel.  20,000-30,000 hits per day around Christmas 2021.
                    </li>
                    <li>
                        Built and maintaining a <a href="https://github.com/boxing/boxrec" target="_blank">boxing
                        project</a> that has 83 stars. Using NodeJS/Typescript to act
                        as an API for a boxing website.  The data is fetched from a third party and to speed up development, heavily uses decorators.
                    </li>
                    <li>Worked on a <a
                            href="https://chrome.google.com/webstore/detail/tab-group-helper/llhkcebnebfiaamifhbpehjompplpnae?hl=en&authuser=0"
                            target="_blank">Tab Group Helper</a> Chrome Extension written in React to improve
                        productivity/organization of tab groups in people's browsers.
                    </li>
                    <li>This CV is built in VueJS!  It's <a href="https://github.com/mikedidomizio/mikedidomizio.com">open
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
    @import "http://fonts.googleapis.com/css?family=Open+Sans:300,400,700";
</style>
