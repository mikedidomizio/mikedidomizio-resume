<template>
    <div class="row print-flex">
        <div class="span3 nbsp">&nbsp;</div>
        <div class="span9 print-flex">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'SkillsRow',
    props: {},
    data() {
      // This solely exists to appear in the coverage report
      return {}
    }
  }
</script>

<style scoped>
    /* issue with Vue stripping &nbsp; from empty elements, the compilerOptions to preserve whitespace aren't working so this will suffice */
    /* https://github.com/vuejs/vue-cli/issues/5639 */
    .nbsp:before {
        content: "\a0";
    }


    @media print {
      .print-flex {
        display: flex;
      }
    }
</style>
