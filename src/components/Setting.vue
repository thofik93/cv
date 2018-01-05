<template>
  <div class="l-setting">

    <div class="setting" id="setting">
      <a href="#" class="setting-icon"><i class="fa fa-gear fa-2x"></i></a>
      <div class="setting-container">
          <ul class="list-inline list-setting-color">
              <li><a href="/thofikwiranata.com" class="list-setting-color_maroon" @click.prevent="changeTheme('theme-maroon')"></a></li>
              <li><a href="/thofikwiranata.com" class="list-setting-color_sky" @click.prevent="changeTheme('theme-sky')"></a></li>
              <li><a href="/thofikwiranata.com" class="list-setting-color_forest" @click.prevent="changeTheme('theme-forest')"></a></li>
              <li><a href="/thofikwiranata.com" class="list-setting-color_orange" @click.prevent="changeTheme('theme-orange')"></a></li>
          </ul>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'Setting',
  methods: {
    changeTheme: function(themeClass) {
      this.$emit('updatetheme', themeClass)
    }
  }
}
</script>