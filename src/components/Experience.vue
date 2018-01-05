<template>
  <transition name="fade">
      <div class="l-experience">
          <h1 class="primary-heading primary-heading_line" v-bind:class="['primary-heading-line_' + theme]"><span>Experiences</span></h1>

          <ul class="list-timeline list-timeline_line" v-bind:class="['list-timeline_' + theme]">
              <li>
                  <span class="list-timeline-style">2017 - Now</span>
                  <section class="list-timeline-content">
                      <h2 class="list-timeline-title">Front-end Engineer</h2>
                      <p class="list-timeline-paragraph list-timeline-paragraph_line">Until Now, I worked in Qeon Interactive as a Front-end Engineer.</p>
                  </section>
              </li>
              <li>
                  <span class="list-timeline-style">2016 - 2017</span>
                  <section class="list-timeline-content">
                      <h2 class="list-timeline-title">Front-end Developer</h2>
                      <p class="list-timeline-paragraph list-timeline-paragraph_line">I worked in Neo Digital. Digital agency in Jakarta as a front end developer.</p>
                  </section>
              </li>
              <li>
                  <span class="list-timeline-style">2015 - 2016</span>
                  <section class="list-timeline-content">
                      <h2 class="list-timeline-title">Full-stack Developer</h2>
                      <p class="list-timeline-paragraph list-timeline-paragraph_line">I work in PT. Arca International as a full stack developer.</p>
                  </section>
              </li>
          </ul>

          <h1 class="primary-heading primary-heading_line" v-bind:class="['primary-heading-line_' + theme]"><span>Studies</span></h1>

          <ul class="list-timeline list-timeline_line" v-bind:class="['list-timeline_' + theme]">
              <li>
                  <span class="list-timeline-style">2011 - 2015</span>
                  <section class="list-timeline-content">
                      <h2 class="list-timeline-title">Mercu Buana University</h2>
                      <p class="list-timeline-paragraph list-timeline-paragraph_line">I studied at the Mercu Buana Meruya university majored in information systems</p>
                  </section>
              </li>
              <li>
                  <span class="list-timeline-style">2008 - 2011</span>
                  <section class="list-timeline-content">
                      <h2 class="list-timeline-title">SMA Yuppentek 1 Tangerang</h2>
                      <p class="list-timeline-paragraph list-timeline-paragraph_line"></p>
                  </section>
              </li>
          </ul>

          <h1 class="primary-heading primary-heading_line" v-bind:class="['primary-heading-line_' + theme]"><span>Non-Formal Education</span></h1>

          <ul class="list-timeline list-timeline_line" v-bind:class="['list-timeline_' + theme]">
              <li>
                  <span class="list-timeline-style">2006 - 2008</span>
                  <section class="list-timeline-content">
                      <h2 class="list-timeline-title">Practical Education Center</h2>
                      <p class="list-timeline-paragraph list-timeline-paragraph_line"></p>
                  </section>
              </li>
              <li>
                  <span class="list-timeline-style">2011 - 2012</span>
                  <section class="list-timeline-content">
                      <h2 class="list-timeline-title">LIA Mercu Buana</h2>
                      <p class="list-timeline-paragraph list-timeline-paragraph_line"></p>
                  </section>
              </li>
          </ul>
      </div>
  </transition>
</template>

<script>
  export default {
    name: 'Experience',
    props: ['theme']
  }
</script>