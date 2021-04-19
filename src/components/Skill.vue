<template>
    <div class="span3 skill">

        <h4><slot></slot></h4>
        <!--  To change the level modify class="l-5" with l-1 ... l-10 for skill levels from 1 to 10 -->
        <div class="level"><span :class="className()">{{rankMessage()}}</span></div>
        <p>{{rankMessage()}}</p>

    </div>
</template>

<script>
  export default {
    name: 'Skill',
    methods: {
      className() {
        return `l-${this.rank}`
      },
      rankMessage() {
        // these rankings are somewhat based off of
        // http://jim-mcbeath.blogspot.com/2011/12/levels-of-expertise.html?_sm_au_=iPVSqSS5n7DSZQrMQvVMjK0tJ0N7M
        const ranking = [{
            experienceLevel: 'pursuing',
            rank: 0,
        }, {
            experienceLevel: 'learning',
            rank: 4,
        }, {
            experienceLevel: 'competent',
            rank: 6,
        }, {
            experienceLevel: 'proficient',
            rank: 8,
        }, {
            experienceLevel: 'expert',
            rank: 10,
        }];

        let word = 'pursuing';

        for (let rank of ranking) {
            if (this.rank >= rank.rank) {
                word = rank.experienceLevel;
            } else {
                return word;
            }
        }

        return word;
      }
    },
    props: {
        rank: Number,
    },
    data() {
      // This solely exists to appear in the coverage report
      return {}
    }
  }
</script>
