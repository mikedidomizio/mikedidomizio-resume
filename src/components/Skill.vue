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
        switch (this.rank) {
          case 8: return 'knowledgeable';
          case 9: return 'extensive knowledge';
          default: return 'learning';
        }
      }
    },
    props: {
        rank: Number,
    },
  }
</script>
