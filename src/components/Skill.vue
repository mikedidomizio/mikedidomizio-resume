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

<style scoped>
.level {
  text-indent: -9999px;
  background-color: #e2e2e2;
  height: 5px;
  width: 100%;
  margin: 5px 0;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.level span {
  display: block;
  background-color: #359CBD;
  height: 5px;
  -webkit-border-radius: 5px 0 0 5px;
  border-radius: 5px 0 0 5px;
}

.l-1 {
  width: 10%;
}

.l-2 {
  width: 20%;
}

.l-3 {
  width: 30%;
}

.l-4 {
  width: 40%;
}

.l-5 {
  width: 50%;
}

.l-6 {
  width: 60%;
}

.l-7 {
  width: 70%;
}

.l-8 {
  width: 80%;
}

.l-9 {
  width: 90%;
}

.l-10 {
  width: 100%;
}

@media print {
  .level {
    display: block !important;
  }

  .level {
    box-shadow: inset 0 0 0 200px #fff;
    height: 2px;
    width: 100%;
    border-radius: 0;
  }

  .level > span {
    /* use box shadow as print doesn't understand backgrounds */
    box-shadow: inset 0 0 0 200px #efefef;
    height: 100%;
  }
}
</style>
