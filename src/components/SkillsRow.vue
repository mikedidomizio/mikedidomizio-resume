<template>
    <div class="row">
        <div class="span3 nbsp">&nbsp;</div>
        <div class="span9">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'SkillsRow',
  }
</script>

<style scoped>
    /* issue with Vue stripping &nbsp; from empty elements, the compilerOptions to preserve whitespace aren't working so this will suffice */
    /* https://github.com/vuejs/vue-cli/issues/5639 */
    .nbsp:before {
        content: "\a0";
    }
</style>
