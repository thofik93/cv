 <template>
  <transition name="fade">
      <div class="primary-content">

        <h1 class="primary-heading">Thofik Wiranata</h1>
        <h2 class="secondary-heading"><em>Front-end Engineer at Qeon Interactive</em></h2>

        <img src="/static/images/me-good.jpg" class="img-responsive block-center hidden-sm hidden-md hidden-lg">

        <p class="less-about-me"><span class="text_size-big" style="font-size: 45px">Hi</span>, I'm a creative front-end and back-end developer with 2+ years of professional experience, based in Jakarta. I develop compelling designs that spring to life using transition and animations that suit my clients, using the most sophisticated technologies available today for fully interactive and responsive websites and apps.</p>

        <div class="l-resume">
          <a href="#" class="btn btn_size-big btn-flat_line" v-bind:class="['btn-line_' + theme]">Hire Me</a>
          <a href="public/cv.docx" class="btn btn_size-big btn-flat_line" v-bind:class="['btn-full_' + theme]">Download Resume</a>
        </div>

        <ul class="list-inline">
            <li>
              <a href="https://www.facebook.com/thofik.wiranata" class="btn btn-flat_line btn-flat_social-media" v-bind:class="['btn-full_' + theme]" target="_blank"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="https://twitter.com/thofik93" class="btn btn-flat_line btn-flat_social-media" v-bind:class="['btn-full_' + theme]"><i class="fa fa-twitter" target="_blank"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/thofik/" class="btn btn-flat_line btn-flat_social-media" v-bind:class="['btn-full_' + theme]"><i class="fa fa-instagram" target="_blank"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/thofik-wiranata-ba7340126/" class="btn btn-flat_line btn-flat_social-media" v-bind:class="['btn-full_' + theme]" target="_blank"><i class="fa fa-linkedin"></i></a>
            </li>
            <li>
              <a href="#" class="btn btn-flat_line btn-flat_social-media" v-bind:class="['btn-full_' + theme]"><i class="fa fa-youtube"></i></a>
            </li>
        </ul>
      </div><!--.primary-content-->
  </transition>
</template>


<script>
export default {
  name: 'Setting',
  props: ['theme']
}
</script>