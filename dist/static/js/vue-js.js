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

var dataPortofolio = {
    portofolios: [
        { 
            projectName: 'Ayana Shop', 
            description: 'E-commerce untuk keperluan pesan hotel, transportasi dari bandara menuju ayana dan berbagai kebutuhan lain.',
            tech: 'SASS/Gulp + CSS + HMTL5 + jQuery/Javascript + Laravel',
            images: 'ayana-shop.jpg'
        },
        { 
            projectName: 'Tips Sahabat', 
            description: 'Website forum otomotif Daihatsu Indoneisa.',
            tech: 'SASS/Compass + CSS + HMTL5 + jQuery/Javascript + PHP + Facebook API + Google Api + Bootstrap',
            images: 'tips-sahabat.jpg'
        },
        { 
            projectName: 'Wajah Insan Astra', 
            description: 'Microsite yang berisi foto-foto karyawan Astra, microsite ini dibuat dengan tujuan merayakan ulang tahun Astra yang ke 60, mengajak karyawan Astra untuk menunjukan kebanggaan menjadi bagian keluarga Astra Indonesia.',
            tech: 'SASS/Compass + CSS + HMTL5 + jQuery/Javascript + PHP + Bootstrap + Linkedln API + Facebook API + Twitter API',
            images: 'wajah-insan-astra.jpg'
        },
        { 
            projectName: 'Berani Makan Apapun', 
            description: 'Dalam Microsite ini saya membuat sebuah campaign menggunakan Facebook API, Semacam permainan untuk menentukan karakter sesorang berdasarkan tanggal lahirnya.',
            tech: 'SASS/Compass + CSS + HMTL5 + jQuery/Javascript + PHP + Bootstrap + Facebook API + Twitter API',
            images: 'beranimakanapapun.jpg'
        },
        { 
            projectName: 'E-Library', 
            description: 'E-library adalah sistem pengarsipan berbasis website yang saya buat menggunakan framework Codeigniter.',
            tech: 'CSS + HMTL5 + jQuery/Javascript + Codeigniter + Bootstrap',
            images: 'elibrary.jpg'
        },
        { 
            projectName: 'Skill Contest', 
            description: 'Landing Page dari program CSR Daihatsu Indonesia untuk proses mendaftarkan diri bagi para murid/guru SMK di seluruh Indonesia. Dan tidak hanya membuat landing pagenya saja. Tapi saya juga membuat Online Testnya menggunakan Moodle.',
            tech: 'SASS/Compass + CSS + HMTL5 + jQuery/Javascript + PHP + Bootstrap + Moodle',
            images: 'skill-contest.jpg'
        }
    ]
} 

var homeComponent = Vue.component('home-component', {
    props: ['theme'],
    template: '#home'
})

var aboutComponent = Vue.component('about-component', {
    props: ['theme'],
    template: '#aboutMe'
})

var whatidoComponent = Vue.component('whatido-component', {
    props: ['theme'],
    template: '#whatIDo',
    data: function() {
        return whatidoData;
    }
})

var experienceComponent = Vue.component('experience-component', {
    props: ['theme'],
    template: '#experience'
})

var portofolioComponent = Vue.component('portofolio-component', {
    props: ['theme'],
    template: '#portofolio',
    data: function() {
        return dataPortofolio;
    }
})

var contactComponent = Vue.component('contact-component', {
    props: ['theme'],
    template: '#contact',
    methods: {
        sendMessage: function() {
            var data = {}
            data['name'] = this.$refs.name.value
            data['email'] = this.$refs.email.value
            data['message'] = this.$refs.message.value
            data['send_message'] = this.$refs.send_message.value

            $.ajax({
              url: 'ajax/send_message.php',
              method: 'post',
              data: data,
              success: function(){
                alert('message has been sent.')
              }
            })
        }
    }
})

Vue.component('setting-component', {
    template: '#setting',
    methods: {
        changeTheme: function(themeClass) {
            this.$emit('updatetheme', themeClass)
        }
    }
})

const router = new VueRouter({
    base: '/home',
    routes: [
        { path: '/', component: homeComponent, props: true },
        { path: '/home', component: homeComponent, props: true },
        { path: '/aboutme', component: aboutComponent, props: true },
        { path: '/whatido', component: whatidoComponent, props: true },
        { path: '/experience', component: experienceComponent, props: true },
        { path: '/portofolio', component: portofolioComponent, props: true },
        { path: '/contact', component: contactComponent, props: true }
      ]
})

const app = new Vue({
    router,
    data: {
        theme: 'theme-maroon'
    },
    methods: {
        updateTheme: function(themeClass) {

            this.$on('updatetheme', function (className) {
              this.theme = className
            })

            this.theme = themeClass
        }
    }
}).$mount('#app');