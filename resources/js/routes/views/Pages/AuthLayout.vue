<template>
  <div>
    <base-nav
      v-model="showMenu"
      type="light"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main"
      expand="lg"
    >
      <div slot="brand" class="navbar-wrapper">
        <b-navbar-brand to="/">
          <img src="img/brand/white.png">
        </b-navbar-brand>
      </div>

     <template>
       <div class="navbar-collapse-header">
         <b-row>
           <b-col cols="6" class="collapse-brand">
             <router-link to="/">
               <img src="img/brand/green.png">
             </router-link>
           </b-col>
           <b-col cols="6" class="collapse-close">
             <button type="button" class="navbar-toggler" @click="showMenu = false">
               <span></span>
               <span></span>
             </button>
           </b-col>
         </b-row>
       </div>

       <b-navbar-nav class="mr-auto">
         <b-nav-item to="/dashboard">
             <span class="nav-link-inner--text">Dashboard</span>
         </b-nav-item>
         <b-nav-item to="/pricing" >
             <span class="nav-link-inner--text">Pricing</span>
         </b-nav-item>
         <b-nav-item to="/login">
             <span class="nav-link-inner--text">Login</span>
         </b-nav-item>
         <b-nav-item to="/register">
             <span class="nav-link-inner--text">Register</span>
         </b-nav-item>
         <b-nav-item to="/lock">
             <span class="nav-link-inner--text">Lock</span>
         </b-nav-item>
       </b-navbar-nav>
       <hr class="d-lg-none">
       <b-navbar-nav  class="align-items-lg-center ml-lg-auto">
         <b-nav-item link-classes="nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank"
              data-toggle="tooltip" data-original-title="Like us on Facebook" >
             <i class="fab fa-facebook-square"></i>
             <span class="nav-link-inner--text d-lg-none">Facebook</span>
         </b-nav-item>
         <b-nav-item link-classes="nav-link-icon" href="https://www.instagram.com/creativetimofficial" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Instagram">
             <i class="fab fa-instagram"></i>
             <span class="nav-link-inner--text d-lg-none">Instagram</span>
         </b-nav-item>
         <b-nav-item link-classes="nav-link-icon" href="https://twitter.com/creativetim" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Twitter">
             <i class="fab fa-twitter-square"></i>
             <span class="nav-link-inner--text d-lg-none">Twitter</span>
         </b-nav-item>
         <b-nav-item link-classes="nav-link-icon" href="https://github.com/creativetimofficial" target="_blank" data-toggle="tooltip" data-original-title="Star us on Github">
             <i class="fab fa-github"></i>
             <span class="nav-link-inner--text d-lg-none">Github</span>
         </b-nav-item>
         <!-- This item dont have <b-nav-item> because they add class 'nav-link' which is not needed here -->
         <li class="nav-item d-none d-lg-block ml-lg-4">
           <a href="https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard-pro?ref=bvadp-index-page" target="_blank"
              class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon">
                <i class="fas fa-shopping-cart mr-2"></i>
              </span>
             <span class="nav-link-inner--text">Purchase now</span>
           </a>
         </li>
       </b-navbar-nav>
     </template>
    </base-nav>

    <div class="main-content">
      <zoom-center-transition
        :duration="pageTransitionDuration"
        mode="out-in"
      >
        <router-view></router-view>
      </zoom-center-transition>
    </div>

    <footer class="py-5" id="footer-main">
      <b-container >
        <b-row align-v="center" class="justify-content-xl-between">
          <b-col xl="6">
            <div class="copyright text-center text-xl-left text-muted">
              © {{year}} <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank">Creative Tim</a>
            </div>
          </b-col>
          <b-col xl="6" class="col-xl-6">
            <b-nav  class="nav-footer justify-content-center justify-content-xl-end">
              <b-nav-item href="https://www.creative-tim.com" target="_blank" >
                Creative Tim
              </b-nav-item>
              <b-nav-item href="https://www.creative-tim.com/presentation" target="_blank" >
                About Us
              </b-nav-item>
              <b-nav-item href="http://blog.creative-tim.com"  target="_blank">
                Blog
              </b-nav-item>
              <b-nav-item href="https://www.creative-tim.com/license" target="_blank">
                License
              </b-nav-item>
            </b-nav>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>
<script>
  import { BaseNav } from '@/components';
  import { ZoomCenterTransition } from 'vue2-transitions';

  export default {
    components: {
      BaseNav,
      ZoomCenterTransition
    },
    props: {
      backgroundColor: {
        type: String,
        default: 'black'
      }
    },
    data() {
      return {
        showMenu: false,
        menuTransitionDuration: 250,
        pageTransitionDuration: 200,
        year: new Date().getFullYear(),
        pageClass: 'login-page'
      };
    },
    computed: {
      title() {
        return `${this.$route.name} Page`;
      }
    },
    methods: {
      toggleNavbar() {
        document.body.classList.toggle('nav-open');
        this.showMenu = !this.showMenu;
      },
      closeMenu() {
        document.body.classList.remove('nav-open');
        this.showMenu = false;
      },
      setBackgroundColor() {
        document.body.classList.add('bg-default');
      },
      removeBackgroundColor() {
        document.body.classList.remove('bg-default');
      },
      updateBackground() {
        if (!this.$route.meta.noBodyBackground) {
          this.setBackgroundColor();
        } else {
          this.removeBackgroundColor()
        }
      }
    },
    beforeDestroy() {
      this.removeBackgroundColor();
    },
    beforeRouteUpdate(to, from, next) {
      // Close the mobile menu first then transition to next page
      if (this.showMenu) {
        this.closeMenu();
        setTimeout(() => {
          next();
        }, this.menuTransitionDuration);
      } else {
        next();
      }
    },
    watch: {
      $route: {
        immediate: true,
        handler: function () {
          this.updateBackground()
        }
      }
    }
  };
</script>
<style lang="scss">
  $scaleSize: 0.8;
  @keyframes zoomIn8 {
    from {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
    100% {
      opacity: 1;
    }
  }

  .main-content .zoomIn {
    animation-name: zoomIn8;
  }

  @keyframes zoomOut8 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
  }

  .main-content .zoomOut {
    animation-name: zoomOut8;
  }
</style>
