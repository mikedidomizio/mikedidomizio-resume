<template>
    <!-- cv item -->
    <div class="row cv-item">
        <div class="span3 cv-item-description">

            <h6 v-if="education">{{title}}</h6>
            <h6 v-if="!education">
              <a v-if="website" :href="website">{{title}}</a>
              <span v-else>{{title}}</span>
            </h6>
            <p>{{location}}<br v-if="location"/><span class="mute">{{date}}</span></p>

        </div><!-- end .span3 -->
        <div class="span9 cv-item-details">

            <h4>{{position}}</h4>

            <p v-if="education && !hasNoLineItems">My time in {{title}} was exciting to say the least. A few of the many things I learnt there
                were:</p>

            <p v-if="hasNoLineItems">I'm still working on accomplishments at this company</p>

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
      hasNoLineItems: Boolean,
      location: {
        type: String,
        required: false,
      },
      position: String,
      title: String,
      website: String,
    },
    methods: {
      isCurrentPosition: function() {
        return this.date.toLowerCase().includes('present');
      }
    },
    data() {
      // This solely exists to appear in the coverage report
      return {}
    }
  }
</script>
