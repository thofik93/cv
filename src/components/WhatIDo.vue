<template>
  <transition name="fade">
      <div class="l-what-i-do">
          <h1 class="primary-heading primary-heading_line" v-bind:class="['primary-heading-line_' + theme]"><span>What I Do</span></h1>

          <div class="layout l-8">
              <div class="c-laptop-4 c-tablet-8 c-mobile-8 column" v-for="ability in abilities">
                  <div class="ability-box" v-bind:class="['ability-box_' + theme]">
                      <a href="#" class="ability-box-heading" v-on:click.prevent>
                          <span class="ability-box-icon"><i class="fa fa fa-laptop fa-3x"></i></span> 
                          <span class="ability-box-title">{{ ability.title }}</span>
                      </a>
                      <p class="ability-box-copyright">{{ ability.copyright }}</p>
                  </div>
              </div>  
          </div><!--.layout-->

          <div class="layout l-8">
              <div class="c-tablet-8 c-mobile-8 column">
                  <div class="l-programming-skill">
                      <h2 class="heading-line">MY PROGRAMMING SKILL</h2>

                      <h3 class="heading-skill"><i class="fa fa-wrench"></i> Back-end Skills</h3>

                      <div class="skill-bar" v-for="skill in backEnd">
                          <h4 class="skill-bar-title">{{ skill.programmingLanguage }}</h4>
                          <div class="skill-bar-item">
                              <div class="progress">
                                  <div class="progress-bar" v-bind:class="['progress-bar_'] + theme" role="progressbar" v-bind:aria-valuenow="skill.progressValue"
                                    aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: skill.progressValue}">
                                      {{ skill.progressValue }}
                                  </div>
                              </div>
                          </div>
                      </div><!--.skill-bar-->

                      <h3 class="heading-pattern">Back-end Patterns and Techniques</h3>
                      <div class="skill-bar" v-for="skill in backEndPattern">
                          <h4 class="skill-bar-title">{{ skill.name }}</h4>
                          <div class="skill-bar-item">
                              <div class="progress">
                                  <div class="progress-bar" v-bind:class="['progress-bar_'] + theme" role="progressbar" v-bind:aria-valuenow="skill.progressValue"
                                    aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: skill.progressValue}">
                                      {{ skill.progressValue }}
                                  </div>
                              </div>
                          </div>
                      </div><!--.skill-bar-->
                      <br />

                      <h3 class="heading-skill"><i class="fa fa-paint-brush"></i> Front-end Skills</h3>

                      <div class="skill-bar" v-for="skill in frontEnd">
                          <h4 class="skill-bar-title">{{ skill.programmingLanguage }}</h4>
                          <div class="skill-bar-item">
                              <div class="progress">
                                  <div class="progress-bar" v-bind:class="['progress-bar_'] + theme" role="progressbar" v-bind:aria-valuenow="skill.progressValue"
                                    aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: skill.progressValue}">
                                      {{ skill.progressValue }}
                                  </div>
                              </div>
                          </div>
                      </div><!--.skill-bar-->

                      <h3 class="heading-pattern">Front-end Patterns and Techniques</h3>
                      <div class="skill-bar" v-for="skill in frontEndPattern">
                          <h4 class="skill-bar-title">{{ skill.name }}</h4>
                          <div class="skill-bar-item">
                              <div class="progress">
                                  <div class="progress-bar" v-bind:class="['progress-bar_'] + theme" role="progressbar" v-bind:aria-valuenow="skill.progressValue"
                                    aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: skill.progressValue}">
                                      {{ skill.progressValue }}
                                  </div>
                              </div>
                          </div>
                      </div><!--.skill-bar-->
                      <br />

                      <h2 class="heading-skill">LANGUAGES THAT I KNOW</h2>
                      <span>Indonesia | English</span>

                  </div>
              </div>
          </div>
      </div><!--.l-what-i-do-->
  </transition>
</template>

<script>
var whatidoData = {
    backEnd: [
        { programmingLanguage: 'PHP', progressValue: '80%' },
        { programmingLanguage: 'Database Processing', progressValue: '70%' },
        { programmingLanguage: 'MYSQL', progressValue: '70%' },
        { programmingLanguage: 'Codeigniter', progressValue: '70%' },
        { programmingLanguage: 'Laravel', progressValue: '60%' }
    ],
    backEndPattern: [
        { name: 'Object Oriented Programming', progressValue: '60%' },
        { name: 'Git (version control)', progressValue: '60%' },
        { name: 'MVC', progressValue: '70%' },
        { name: 'AJAX', progressValue: '100%' }
    ],
    frontEnd: [
        { programmingLanguage: 'Javascript', progressValue: '70%' },
        { programmingLanguage: 'jQuery', progressValue: '85%' },
        { programmingLanguage: 'CSS3', progressValue: '90%' },
        { programmingLanguage: 'SASS/LESS', progressValue: '70%' },
        { programmingLanguage: 'ReactJs', progressValue: '40%' },
        { programmingLanguage: 'Vue.js', progressValue: '60%' },
    ],
    frontEndPattern: [
        { name: 'Responsive Web Design', progressValue: '100%' },
        { name: 'Effective UI', progressValue: '70%' },
        { name: 'Accessibility / WCAG', progressValue: '60%' },
        { name: 'User-Centered Design', progressValue: '40%' },
        { name: 'SMACSS', progressValue: '80%' },
        { name: 'BEM', progressValue: '90%' },
        { name: 'OOCSS', progressValue: '70%' },
        { name: 'Material Design', progressValue: '70%' },
        { name: 'Motion Design Theory', progressValue: '60%' },
        { name: 'Performance Optimization Techniques', progressValue: '80%' },
        { name: 'Browser Sync', progressValue: '70%' },
        { name: 'Compass (sass framework)', progressValue: '70%' },
        { name: 'Grunt/Gulp', progressValue: '40%' },
        { name: 'Bootstrap', progressValue: '90%' },
        { name: 'Foundation', progressValue: '70%' },
        { name: 'Bower', progressValue: '60%' },
        { name: 'AutoPrexier', progressValue: '60%' },
        { name: 'Modernizr', progressValue: '60%' }
    ],
    abilities: [
        { 
            title: 'Web Development', 
            copyright: 'I emphasize the aspects of maintainability. For an application to be easily developed love the process further.'
        },
        { 
            title: 'Web Design & UI', 
            copyright: 'I like the idea of a unique, elegant clean design and strength of color in making the website design. Of couse, for my client happy'
        },
        { 
            title: 'Landing Page', 
            copyright: 'The final goal is to create a landing page attracted attention of the user to achieve the set targets.'
        },
        { 
            title: 'CMS', 
            copyright: 'I develop CMS using framework like Codeigniter and Laravel.'
        }
    ]
}

export default {
  name: 'WhatIDo',
  props: ['theme'],
  data() {
    return whatidoData
  }
}
</script>
