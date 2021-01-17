<template>
    <div class="row">
        <div class="span12">

            <h2 class="cv-profile" v-html="message"></h2>

        </div><!-- end .span12 -->
    </div><!-- end .row -->
</template>

<script>
  export default {
    name: 'PersonalProfile',
    props: ['message'],
  }
</script>
