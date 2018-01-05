<template>
  <transition name="fade">
    <div class="l-portofolio">
        <h1 class="primary-heading primary-heading_line" v-bind:class="['primary-heading-line_' + theme]"><span>List Projects</span></h1>

        <div class="project-box" v-bind:class="['project-box_' + theme]" v-for="portofolio in portofolios">
            <div class="project-box-img">
                <img v-bind:src="'/static/images/projects/' + portofolio.images" class="img-responsive" />
            </div>

            <div class="project-box-content">
                <h2 class="project-box-title">{{ portofolio.projectName }}</h2>
                <p>{{ portofolio.description }}</p>
            </div> 
        </div><!--.project-box-->
    
    </div><!--.l-portofolio-->
  </transition>
</template>

<script>
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

  export default {
    name: 'Portofolio',
    props: ['theme'],
    data() {
      return dataPortofolio
    }
  }
</script>