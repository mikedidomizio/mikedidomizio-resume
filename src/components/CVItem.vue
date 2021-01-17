<template>
    <!-- cv item -->
    <div class="row cv-item">
        <div class="span3 cv-item-description">

            <h6 v-if="education">Police Foundations</h6>
            <h6 v-if="!education"><a :href="website">{{title}}</a></h6>
            <p>{{location}}<br v-if="location"/><span class="mute">{{date}}</span></p>

        </div><!-- end .span3 -->
        <div class="span9 cv-item-details">

            <h4>{{position}}</h4>

            <p v-if="education">My time in {{title}} was exciting to say the least. A few of the many things I learnt there
                were:</p>

            <p v-if="!education">My involvement and skill set with {{title}} include{{ previousPosition ? "d" : "s" }} the following:</p>

            <slot></slot>
        </div><!-- end .span9 -->
    </div><!-- end .row -->
</template>

<script>
  export default {
    name: 'CVItem',
    props: {
      date: String,
      education: Boolean,
      location: {
        type: String,
        required: false,
      },
      previousPosition: Boolean,
      position: String,
      title: String,
      website: String,
    },
  }
</script>
