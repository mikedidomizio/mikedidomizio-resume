<template>
    <div class="row">
        <div class="span6">

            <h1 class="logo">
                {{name}}
                <br/>
                <small>{{position}}</small>
            </h1>

        </div><!-- end .span6 -->
        <div class="span3">

            <address class="address-info hide-on-phone">
                <!--// Street-->
                {{city}}
                <br/>{{postalCode}}
            </address>

        </div><!-- end .span3 -->
        <div class="span3">

            <ul class="contact-info hide-on-phone fixed">
                <li>E: <a :href="formattedEmail()">{{email}}</a></li>
                <li>T: <strong>{{phoneNumber}}</strong></li>
            </ul>

        </div><!-- end .span3 -->
    </div><!-- end .row -->
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      formattedEmail() {
        return `mailto:${this.email}`;
      }
    },
    props: ['city', 'email', 'name', 'phoneNumber', 'position', 'postalCode']
  }
</script>
