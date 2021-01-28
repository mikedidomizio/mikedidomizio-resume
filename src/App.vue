<template>
    <div id="app" class="wrap">
        <Header name="Mike DiDomizio" position="Software Developer" city="Ottawa, Ontario" postal-code="K1Y 4T1"
                email="mikedidomizio@gmail.com"
                phone-number="+1-613-806-0770"></Header>
        <PersonalProfile message="Hi - I'm Mike, and programming is my passion.<br/>Check out some of the awesome
                things I've done below."></PersonalProfile>

        <Section>Working Experience</Section>
        <CVItem title="Thales Canada" website="https://www.thalesgroup.com/en/americas/canada"
                date="July 2017 - Present" position="Scrum Master/Software Developer">
            <ul class="disc">
                <li>Work closely with Product Managers to t-shirt size features with our team and give estimated
                    delivery
                    date with previous sprint velocity
                </li>
                <li>Conduct retrospectives on our sprint and work towards improving the efficiency of the team</li>
                <li>Hold daily scrums to ensure team is moving forward and be able to help and guide the team</li>
                <li>Help with Pager Duty incidents to ensure minimal downtime</li>
                <li>Run lunch and learn events to further develop teams skill sets</li>
                <li>Complete full stack features</li>
            </ul>
        </CVItem>
        <CVItem title="IDS North America" website="https://www.idscorporation.com/na"
                date="July 2015 - July 2017" position="Lead Developer (Air Navigation Division)" previousPosition>
            <ul class="disc">
                <li>Lead developer on 12 person Aviation Billing Project</li>
                <li>Responsible for Sprint planning and backlog refinement</li>
                <li>Written in Typescript/ES6 with ES7 experimental features</li>
                <li>Test Driven Development with Karma and Protractor E2E tests</li>
                <li>SASS integration for compiling CSS</li>
                <li>Set up of base design, templating, shared AngularJS components for projects</li>
                <li>Automate deployment of projects through GulpJS and GitLab CI</li>
                <li>Set up custom Yeoman generators for scaffolding future AngularJS projects</li>
            </ul>
        </CVItem>
        <CVItem title="Spoonity" website="http://www.spoonity.com/"
                date="February 2014 - July 2015" position="Mobile App Developer" previousPosition>
            <ul class="disc">
                <li>App development for all major mobile platforms (iOS, Android, WP8 and Blackberry)</li>
                <li>Apps support loyalty, gift card, and mobile ordering services</li>
                <li>Multilingualism built into apps/dashboard</li>
                <li>GruntJS set up to automate and minimize time developing apps</li>
                <li>Dashboard development for generating statistics for merchants</li>
                <li>Remote updating of mobile apps (eliminate the need to update through the app store)</li>
            </ul>
        </CVItem>
        <CVItem title="MideoMe" website="http://www.mideome.com/"
                date="2011 - 2013" position="Lead Developer" previousPosition>
            <ul class="disc">
                <li>Helping in architecture and managing a number of remote server setups, databases and
                    infrastructures
                </li>
                <li>Developing and maintaining the back-end & front-end from ground-up using CodeIgniter as a
                    framework
                </li>
                <li>Planning out solutions using appropriate and convenient scalable applications (like Wowza,
                    Flowplayer, CodeIgniter, and many others)
                </li>
                <li>Experience and knowledge in integrating back-end code with Amazon's S3/Cloudfront service for
                    scalability and easy accessibility
                </li>
                <li>Excellent time management skills as well as task planning</li>
                <li>Heavily using OOP and MVC for maintainability</li>
                <li>Set up and deployed AWS (EC2, S3, Cloudfront) servers for distributing files globally</li>
                <li>OOP and REST API set-up to ensure ease of cross-platform across multiple devices</li>
                <li>SQL database set up with multiple servers in mind</li>
                <li>Integrated with Facebook, Twitter, YouTube, Vimeo and Tumblr</li>
                <li>Polls the server for new content depending on which page you are on</li>
                <li>Developed the iOS application using a custom API token for the server back end</li>
            </ul>
        </CVItem>

        <Section>Education</Section>

        <CVItem title="Police Foundations"
                location="Ontario, CA"
                position="Police Foundations Diploma"
                date="2003 - 2005" education>
            <ul class="disc last">
                <li>How to work with people</li>
                <li>How to deal with stressful/unexpected situations</li>
                <li>Careful planning</li>
                <li>Time management skills</li>
                <li>How to develop as a person</li>
                <li>Broadening my mindset</li>
                <li>Building confidence and maintaining my perseverance in achieving my goals successfully</li>
                <li>Learning how to stay open to constructive criticism/feedback and using it to my advantage</li>
            </ul>
        </CVItem>

        <Section>Related skills</Section>

        <SkillsSection>
            <SkillsRow>
                <Skill v-bind:rank="9">HTML5</Skill>
                <Skill v-bind:rank="9">PHP</Skill>
                <Skill v-bind:rank="9">PostgreSQL/MySQL</Skill>
            </SkillsRow>
            <SkillsRow>
                <Skill v-bind:rank="8">Typescript</Skill>
                <Skill v-bind:rank="3">Java</Skill>
                <Skill v-bind:rank="8">Automation</Skill>
            </SkillsRow>
            <SkillsRow>
                <Skill v-bind:rank="9">Angular</Skill>
                <Skill v-bind:rank="8">NodeJS</Skill>
                <Skill v-bind:rank="3">React/Vue</Skill>
            </SkillsRow>
        </SkillsSection>

        <Section>Other skills</Section>

        <SkillsSection>
            <SkillsRow>
                <ul class="disc">
                    <li><strong>Systems:</strong> Linux, Windows, OSX</li>
                    <li><strong>Networking:</strong> FTP/SFTP, SSH</li>
                    <li><strong>Frameworks:</strong> VueJS, Angular, Express, NestJS</li>
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
