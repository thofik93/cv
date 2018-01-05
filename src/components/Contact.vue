<template>
  <transition name="fade">
    <div class="l-contact">
        <h2 class="primary-heading primary-heading_line" v-bind:class="['primary-heading-line_' + theme]"><span>Contact</span></h2>

        <div class="contact" :class="['primary-heading-line_' + theme]">
                    
            <h2>Have a cool project in mind, and think I can help you with it?</h2> 
            <h2>Feel free to e-mail me at <strong>contact@thofikwiranata.com</strong>.</h2>
            <br /><br />
            <fieldset>
                <form method="post" action="#" v-on:submit.prevent="sendMessage">
                    <div class="form-group">
                        <label for="name">Name <span class="primary">*</span></label>
                        <input type="text" class="form-control" name="name" ref="name" maxlength="100" placeholder="Fill Your Name" required />
                    </div>

                    <div class="form-group">
                        <label for="email">Email <span class="primary">*</span></label>
                        <input type="email" class="form-control" name="email" ref="email" maxlength="40" placeholder="Fill Your Email" required />
                    </div>

                    <div class="form-group">
                        <label for="message">Message <span class="primary">*</span></label>
                        <textarea name="message" class="form-control" id="message"  ref="message" maxlength="255" rows="4" placeholder="Fill Message" required></textarea>
                    </div>
                    <br />
                    <div>
                        <button type="submit" name="send_message" ref="send_message" class="btn btn-lg btn-block btn-send" v-bind:class="['btn_' + theme]">Get In Touch</button>
                    </div>
                </form>
            </fieldset>
        </div><!--.contact-->
    </div><!--.l-contact-->
  </transition>
</template>

<script>
  export default {
    name: 'Contact',
    props: ['theme'],
    methods: {
        sendMessage: function() {
            var data = {}
            data['name'] = this.$refs.name.value
            data['email'] = this.$refs.email.value
            data['message'] = this.$refs.message.value
            data['send_message'] = this.$refs.send_message.value

            $.ajax({
              url: '/static/ajax/send_message.php',
              method: 'post',
              data: data,
              success: function(){
                alert('message has been sent.')
              }
            })
        }
    }
  }
</script>