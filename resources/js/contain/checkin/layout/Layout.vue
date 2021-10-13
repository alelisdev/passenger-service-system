<template>
  <div>
    <notifications></notifications>
    <nav class="navbar navbar-expand-md" style="background-color: #0f0f0f">
      <!-- Brand -->
      <a class="navbar-brand" href="/"><img src="img/brand/white.png" style="max-height: 55px;"></a>

      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse pull-right" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>

    <base-nav
      v-model="showMenu"
      type="light"
      :transparent="true"
      class="navbar-horizontal navbar-main tabs-nav d-flex justify-content-center"
      expand="lg"
    >
        <b-navbar-nav class="bg-white text-center">
          <b-nav-item to="/login" class="nav-tab">
            <span class="nav-link-inner--text text-dark"><h4>Step 1</h4>Main Info</span>
          </b-nav-item>
          <b-nav-item to="/booking" class="nav-tab">
            <span class="nav-link-inner--text text-dark"><h4>Step 2</h4>Booking Info</span>
          </b-nav-item>
          <b-nav-item to="/declaration" class="nav-tab">
            <span class="nav-link-inner--text text-dark"><h4>Step 3</h4>Declaration</span>
          </b-nav-item>
          <b-nav-item to="/dangerous" class="nav-tab">
            <span class="nav-link-inner--text text-dark"><h4>Step 4</h4>Dangerous goods</span>
          </b-nav-item>
          <b-nav-item to="/select-seat" class="nav-tab">
            <span class="nav-link-inner--text text-dark"><h4>Step 5</h4>Seat map</span>
          </b-nav-item>
          <b-nav-item to="/confirm" class="nav-tab">
            <span class="nav-link-inner--text text-dark"><h4>Step 6</h4>Confirmation</span>
          </b-nav-item>
        </b-navbar-nav>
    </base-nav>
    <div class="main-content">
      <zoom-center-transition
        :duration="pageTransitionDuration"
        mode="out-in"
      >
        <router-view></router-view>
      </zoom-center-transition>
    </div>

    <footer class="pb-4" style="background-color: #0f0f0f" id="footer-main">
      <b-container>
        <b-row  class="mt-5" align-v="center" style="border-bottom: solid 1px #ffffff">
            <b-col xl="3" lg="3" md="3" class="d-flex flex-colum">
                <img src="img/brand/footer.png" style="max-height: 55px;">
                <div class="d-flex flex-column">
                  <a href="#"><span class="text-white" style="font-size: 12px;">Best Airline</span></a>
                  <a href="#"><span class="text-white" style="font-size: 12px;">Skytrax World</span></a>
                  <a href="#"><span class="text-white" style="font-size: 12px;">Airline Awards</span></a>
                </div>
            </b-col>
            <b-col xl="9" lg="9" md="9">
                <b-row>
                    <b-col xl="3" lg="3" md="3">
                        <a href="#"><span class="text-white" style="font-size: 15px;">Sponsorship</span></a>
                    </b-col>
                    <b-col xl="3" lg="3" md="3">
                        <a href="#"><span class="text-white" style="font-size: 15px;">Media</span></a>
                    </b-col>
                    <b-col xl="3" lg="3" md="3">
                        <a href="#"><span class="text-white" style="font-size: 15px;">Sitemap</span></a>
                    </b-col>
                    <b-col xl="3" lg="3" md="3">
                        <a href="#"><span class="text-white" style="font-size: 15px;">Contact Us</span></a>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col xl="3" lg="3" md="3">
                        <a href="#"><span class="text-white" style="font-size: 15px;">Company Overview</span></a>
                    </b-col>
                    <b-col xl="3" lg="3" md="3">
                        <a href="#"><span class="text-white" style="font-size: 15px;">Careers</span></a>
                    </b-col>
                    <b-col xl="3" lg="3" md="3">
                        <span class="text-white" style="font-size: 15px;">Help</span></a>
                    </b-col>
                    <b-col xl="3" lg="3" md="3">
                        <a href="#"><span class="text-white" style="font-size: 15px;">FAQ</span></a>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row>
            <b-col xl="2" lg="2" md="2">
                <span class="text-white" style="font-size: 12px;">@Pionair West</span>
            </b-col>
            <b-col xl="10" lg="10" md="10">
                <b-row>
                    <b-col xl="2" lg="2" md="2">
                        <a href="#"><span class="text-white" style="font-size: 12px;"></span></a>
                    </b-col>
                    <b-col xl="2" lg="2" md="2">
                        <a href="#"><span class="text-white" style="font-size: 12px;">Conditions of Carriage</span></a>
                    </b-col>
                    <b-col xl="2" lg="2" md="2">
                        <a href="#"><span class="text-white" style="font-size: 12px;">Term of Use</span></a>
                    </b-col>
                    <b-col xl="2" lg="2" md="2">
                        <a href="#"><span class="text-white" style="font-size: 12px;">Privacey</span></a>
                    </b-col>
                    <b-col xl="2" lg="2" md="2">
                        <a href="#"><span class="text-white" style="font-size: 12px;">Cookies Policy</span></a>
                    </b-col>
                </b-row>
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
        document.body.classList.add('bg-white');
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

  .active {
    background-color: #ffdfd1;
    border-radius: 0px !important;
  }
  .nav-tab {
    border-radius: 0px !important;
    border: 1px solid #b26210 !important;
    width: 170px;
  }
  .navbar-horizontal {
    border: 1px solid #b26210;
  }

  .tabs-nav {
    padding: 0 !important;
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
