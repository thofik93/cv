<template>
  <transition name="fade">
    <div class="l-about-me">
        <h1 class="primary-heading primary-heading_line" v-bind:class="['primary-heading-line_' + theme]">
            <span>About Me</span>
        </h1>

        <div class="l-quote">
            <div class="quote">
                <h4 class="quote-heading" v-bind:class="['quote-heading_' + theme]">FAVORITE QUOTE</h4>
                <p class="quote-paragraph"><i class="fa fa-quote-left"></i> Insanity: doing the same thing over and over again and expecting different results. <i class="fa fa-quote-right"></i></p>

                <p class="quote-author"><em>Albert Einstein</em></p>
            </div>
        </div>

        <p class="paragraph-about-me"><strong>Name:</strong> Thofik Wiranata</p>
        <p class="paragraph-about-me"><strong>Citizenship:</strong> Indonesian</p>
        <p class="paragraph-about-me"><strong>Job:</strong> Front-end Engineer </p>
        <p class="paragraph-about-me"><strong>Residence:</strong> Tangerang</p>
        <p class="paragraph-about-me"><strong>Hometown:</strong> Jakarta</p>
        <p class="paragraph-about-me"><strong>Phone:</strong> +6281287299922</p>
        <p class="paragraph-about-me"><strong>Email:</strong> thofikwiranata15@gmail.com</p>

        <div class="l-more-about-me">
            <p class="paragraph-about-me">HI, I'm a creative front-end and back-end developer with 2+ years of professional experience, based in Jakarta. I develop compelling designs that spring to life using transition and animations that suit my clients, using the most sophisticated technologies available today for fully interactive and responsive websites and apps.</p>

            <p class="paragraph-about-me">I working in Qeon Interactive as a Front-end Engineer and I help them realise their goal of creating truly outstanding digital properties that get them and their clients the results they need.</p>

            <p class="paragraph-about-me">I'm passionate about the power of colours and shapes in developing a great new design, and JavaScript offers me endless fascinating possibilities in devising just the right solution for companies all around the world.</p>

            <p class="paragraph-about-me">Some of those that I've been lucky to have worked with include such leading global brands as Daihatsu, Yamaha Music, Astra and many others.</p>

            <p class="paragraph-about-me">The devil, of course, is in the detail, which is why it's important for me to not only be creative but also to pay meticulous attention to detail so my clients get the results they want.</p>

            <p class="paragraph-about-me">In my spare time, I like to photograph, draw as well as work on all sorts of experimental development projects to see where they go.</p>
        </div>
    </div><!--.l-about-me-->
  </transition>
</template>

<script>
export default {
  name: 'About',
  props: ['theme']
}
</script>