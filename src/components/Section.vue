<template>
    <div class="row">
        <div class="span3 nbsp"></div>
        <div class="span9">

            <h3 class="cv-section-title"><slot></slot></h3>

        </div><!-- end .span9 -->
    </div><!-- end .row -->
</template>

<script>
  export default {
    name: 'Section',
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
</style>
