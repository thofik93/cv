<template>
  <div id="app" class="l-wrapper">
      <div class="layout l-8">
          
          <setting-component v-on:updatetheme="updateTheme"></setting-component>

          <div class="l-header">
              <div class="header-menu-mobile hidden-lg hidden-md hidden-sm">
                  <button class="hamburger-menu" v-bind:class="['hamburger-menu_' + theme]" type="button" id="hamburger-menu">
                    <span class="strip-bar"></span>
                    <span class="strip-bar"></span>
                    <span class="strip-bar"></span>
                  </button>
              </div>
          </div>
          <!-- Nabvar Mobile Device -->
          <nav class="l-menu-list-mobile">
            <ul class="menu-list-mobile" v-bind:class="['menu-list-mobile_' + theme]" id="menu-list-mobile">
                <li>
                    <router-link to="/" exact><i class="fa fa-home"></i> HOME</router-link>
                </li>
                <li>
                    <router-link to="/aboutme"><i class="fa fa-user"></i> ABOUT ME</router-link>
                </li>
                <li>
                    <router-link to="/whatido"><i class="fa fa-laptop"></i> WHAT I DO</router-link>
                </li>
                <li>
                    <router-link to="/experience"><i class="fa fa-building-o"></i> EXPERIENCE</router-link>
                </li>
                <li>
                    <router-link to="/portofolio"><i class="fa fa-object-group"></i> PORTOFOLIO PROJECTS</router-link>
                </li>
                <li><a href="http://frontend.thofikwiranata.com/"><i class="fa fa-cutlery"></i> FRONT-END RESOURCE</a></li>
                <li><a href="http://blog.thofikwiranata.com/"><i class="fa fa-coffee"></i> BLOG</a></li>
                <li>
                    <router-link to="/contact"><i class="fa fa-envelope-o"></i> CONTACT</router-link>
                </li>
            </ul>
          </nav>

          <div class="c-laptop-1 c-tablet-1 mobile-menu column">
              <section class="l-main-menu height-js" v-bind:class="['l-main-menu_' + theme]">
                  <ul class="list-menu" v-bind:class="['list-menu_' + theme]">
                      <li>
                          <router-link to="/" exact><i class="fa fa-home fa-2x"></i> HOME</router-link>
                      </li>
                      <li>
                          <router-link to="/aboutme"><i class="fa fa-user fa-2x"></i> ABOUT ME</router-link>
                      </li>
                      <li>
                          <router-link to="/whatido"><i class="fa fa-laptop fa-2x"></i> WHAT I DO</router-link>
                      </li>
                      <li>
                          <router-link to="/experience"><i class="fa fa-building-o fa-2x"></i> EXPERIENCE</router-link>
                      </li>
                      <li>
                          <router-link to="/portofolio"><i class="fa fa-object-group fa-2x"></i> PORTOFOLIO PROJECTS</router-link>
                      </li>
                      <li><a href="http://frontend.thofikwiranata.com/"><i class="fa fa-cutlery fa-2x"></i> FRONT-END RESOURCE</a></li>
                      <li><a href="http://blog.thofikwiranata.com/"><i class="fa fa-coffee fa-2x"></i> BLOG</a></li>
                      <li>
                          <router-link to="/contact"><i class="fa fa-envelope-o fa-2x"></i> CONTACT</router-link>
                      </li>
                  </ul>
              </section>
          </div>

          <div class="c-laptop-7 c-tablet-7 mobile-content column">
              <div class="layout l-3">
                  <div class="c-tablet-1 column">
                      <a href="#" v-on:click.prevent class="img-cover height-js" style="background-color: #f5f5f5;background-image: url('/static/images/me-good.jpg');background-size:cover;background-repeat: no-repeat;background-position: center;"></a>
                  </div>
                  <div class="c-tablet-2 column">
                      <div class="l-content tab-content height-js">
                          <router-view v-bind:theme="theme"></router-view>
                      </div><!--.l-content-->
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import SettingComponent from '@/components/Setting'

export default {
  name: 'app',
  data() {
    return {
      theme: 'theme-maroon'
    }
  },
  methods: {
    updateTheme: function(themeClass) {

      this.theme = themeClass
    }
  },
  components: {
    'setting-component': SettingComponent
  }
}
</script>
