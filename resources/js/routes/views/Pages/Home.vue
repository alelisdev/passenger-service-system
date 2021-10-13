<template>
  <div>
    <!--Header-->
    <div class="header bg-success pt-5 pb-7">
      <b-container>
        <div class="header-body">
          <b-row align-v="center" >
            <b-col lg="6">
              <div class="pr-5">
                <h1 class="display-2 text-white font-weight-bold mb-0">Bootstrap Vue Argon Dashboard PRO</h1>
                <h2 class="display-4 text-white font-weight-light">A beautiful premium dashboard for BootstrapVue.</h2>
                <p class="text-white mt-4">Bootstrap Vue Argon Dashboard PRO perfectly combines reusable HTML and modular CSS with a modern styling and beautiful markup throughout each HTML template in the pack.</p>
                <div class="mt-5">
                  <router-link to="/dashboard" class="btn btn-neutral my-2">Explore Dashboard</router-link>
                  <a href="https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard-pro?ref=bvadp-index-page" class="btn btn-default my-2">Purchase now</a>
                </div>
              </div>
            </b-col>
            <b-col lg="6">
              <b-row class="pt-5">
                <b-col md="6">
                  <b-card no-body>
                    <b-card-body >
                      <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Components</h5>
                      <p>Argon comes with over 200 handcrafted components.</p>
                    </b-card-body>
                  </b-card>
                  <b-card no-body>
                    <b-card-body >
                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Plugins</h5>
                      <p>Fully integrated and extendable third-party plugins that you will love.</p>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col md="6" class="pt-lg-5 pt-4">
                  <b-card no-body class="mb-4">
                    <b-card-body >
                      <div class="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Pages</h5>
                      <p>From simple to complex, you get a beautiful set of 26 page examples.</p>
                    </b-card-body>
                  </b-card>
                  <b-card no-body class="mb-4">
                    <b-card-body >
                      <div class="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Documentation</h5>
                      <p>You will love how easy is to to work with Argon.</p>
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <section class="py-6 pb-9 bg-default">
      <b-row class="justify-content-center text-center">
        <b-col md="6">
          <h2 class="display-3 text-white">A complete HTML solution</h2>
          <p class="lead text-white">
            Argon is a completly new product built on our newest re-built from scratch framework structure that is meant to make our products more intuitive,
            more adaptive and, needless to say, so much easier to customize. Let Argon amaze you with its cool features and build tools and get your project to a whole new level.
          </p>
        </b-col>
      </b-row>
    </section>
    <section class="section section-lg pt-lg-0 mt--7">
      <b-container>
        <b-row class="justify-content-center">
          <b-col lg="12" >
            <b-row >
              <b-col lg="4">
                <b-card no-body class="card-lift--hover shadow border-0">
                  <b-card-body class="py-5">
                    <div class="icon icon-shape bg-gradient-primary text-white rounded-circle mb-4">
                      <i class="ni ni-check-bold"></i>
                    </div>
                    <h4 class="h3 text-primary text-uppercase">Based on BootstrapVue</h4>
                    <p class="description mt-3">Argon is built on top of the most popular open source toolkit for developing with HTML, CSS, and JS.</p>
                    <div>
                      <b-badge pill variant="primary">bootstrap-vue</b-badge>
                      <b-badge pill variant="primary">dashboard</b-badge>
                      <b-badge pill variant="primary">template</b-badge>
                    </div>
                  </b-card-body>
                </b-card>
              </b-col>
              <b-col lg="4">
                <b-card no-body class="card-lift--hover shadow border-0">
                  <b-card-body  class="py-5">
                    <div class="icon icon-shape bg-gradient-success text-white rounded-circle mb-4">
                      <i class="ni ni-istanbul"></i>
                    </div>
                    <h4 class="h3 text-success text-uppercase">Integrated build tools</h4>
                    <p class="description mt-3">Use Argons's included npm and gulp scripts to compile source code, run tests, and more with just a few simple commands.</p>
                    <div>
                      <b-badge pill variant="success">npm</b-badge>
                      <b-badge pill variant="success">gulp</b-badge>
                      <b-badge pill variant="success">build tools</b-badge>
                    </div>
                  </b-card-body>
                </b-card>
              </b-col>
              <b-col lg="4">
                <b-card no-body class="card-lift--hover shadow border-0">
                  <b-card-body class="py-5">
                    <div class="icon icon-shape bg-gradient-warning text-white rounded-circle mb-4">
                      <i class="ni ni-planet"></i>
                    </div>
                    <h4 class="h3 text-warning text-uppercase">Full Sass support</h4>
                    <p class="description mt-3">Argon makes customization easier than ever before. You get all the tools to make your website building process a breeze.</p>
                    <div>
                      <b-badge pill variant="warning">sass</b-badge>
                      <b-badge pill variant="warning">design</b-badge>
                      <b-badge pill variant="warning">customize</b-badge>
                    </div>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-6">
      <b-container>
        <b-row align-v="center" class="row-grid">
          <b-col md="6" class="order-md-2">
            <b-img src="img/theme/landing-1.png" fluid />
          </b-col>
          <b-col md="6" class="order-md-1">
            <div class="pr-md-5">
              <h1>Awesome features</h1>
              <p>This dashboard comes with super cool features that are meant to help in the process. Handcrafted components, page examples and functional widgets are just a few things you will see and love at first sight.</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <b-badge pill variant="success" class="badge-circle mr-3">
                        <i class="ni ni-settings-gear-65"></i>
                      </b-badge>
                    </div>
                    <div>
                      <h4 class="mb-0">Carefully crafted components</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <b-badge pill variant="success" class="badge-circle mr-3">
                        <i class="ni ni-html5"></i>
                      </b-badge>
                    </div>
                    <div>
                      <h4 class="mb-0">Amazing page examples</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <b-badge pill variant="success" class="badge-circle mr-3">
                        <i class="ni ni-satisfied"></i>
                      </b-badge>
                    </div>
                    <div>
                      <h4 class="mb-0">Super friendly support team</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-6">
      <b-container>
        <b-row align-v="center" class="row-grid">
          <b-col md="6">
            <b-img src="img/theme/landing-2.png" fluid />
          </b-col>
          <b-col md="6">
            <div class="pr-md-5">
              <h1>Example pages</h1>
              <p>If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages.</p>
              <router-link to="/pages/user" class="font-weight-bold text-warning mt-5">Explore pages</router-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-6">
      <b-container>
        <b-row align-v="center" class="row-grid">
          <b-col md="6" class="order-md-2">
            <b-img src="img/theme/landing-3.png" fluid />
          </b-col>
          <b-col md="6" class="col-md-6">
            <div class="pr-md-5">
              <h1>Lovable widgets and cards</h1>
              <p>We love cards and everybody on the web seems to. We have gone above and beyond with options for you to organise your information. From cards designed for content, to pricing cards or user profiles, you will have many options to choose from.</p>
              <router-link to="/widgets" class="font-weight-bold text-info mt-5">Explore widgets</router-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-7 section-nucleo-icons bg-white overflow-hidden">
      <b-container>
        <b-row class="justify-content-center">
          <b-col lg="8" class="text-center">
            <h2 class="display-3">Nucleo Icons</h2>
            <p class="lead">
              The official package contains over 21.000 icons which are looking great in combination with Argon Design System. Make sure you check all of them and use those that you like the most.
            </p>
            <div class="btn-wrapper">
              <a href="https://www.creative-tim.com/learning-lab/bootstrap-vue/icons/argon-dashboard" class="btn btn-primary">View demo icons</a>
              <a href="https://nucleoapp.com/?ref=1712" target="_blank" class="btn btn-default mt-3 mt-md-0">View all icons</a>
            </div>
          </b-col>
        </b-row>
        <div class="blur--hover">
          <a href="https://www.creative-tim.com/learning-lab/bootstrap-vue/icons/argon-dashboard">
            <div class="icons-container blur-item mt-5">
              <!-- Center -->
              <i class="icon ni ni-diamond"></i>
              <!-- Right 1 -->
              <i class="icon icon-sm ni ni-album-2"></i>
              <i class="icon icon-sm ni ni-app"></i>
              <i class="icon icon-sm ni ni-atom"></i>
              <!-- Right 2 -->
              <i class="icon ni ni-bag-17"></i>
              <i class="icon ni ni-bell-55"></i>
              <i class="icon ni ni-credit-card"></i>
              <!-- Left 1 -->
              <i class="icon icon-sm ni ni-briefcase-24"></i>
              <i class="icon icon-sm ni ni-building"></i>
              <i class="icon icon-sm ni ni-button-play"></i>
              <!-- Left 2 -->
              <i class="icon ni ni-calendar-grid-58"></i>
              <i class="icon ni ni-camera-compact"></i>
              <i class="icon ni ni-chart-bar-32"></i>
            </div>
            <span class="blur-hidden h5 text-success">Eplore all the 21.000+ Nucleo Icons</span>
          </a>
        </div>
      </b-container>
    </section>
    <section class="py-7">
      <b-container>
        <b-row class="row-grid justify-content-center">
          <b-col lg="8" class="text-center">
            <h2 class="display-3">Do you love this awesome <span class="text-success">Dashboard for BootstrapVue ?</span></h2>
            <p class="lead">Cause if you do, it can be yours now. Hit the button below to navigate to get the free version or purchase a license for your next project. Build a new web app or give an old BootstrapVue project a new look!</p>
            <div class="btn-wrapper">
              <base-button type="neutral" disabled href="javascript:void(0)" aria-pressed="true" target="_blank"><span class="btn-inner--text">Get FREE version</span></base-button>
              <a href="https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard-pro?ref=bvadp-index-page" class="btn btn-success btn-icon mb-3 mb-sm-0">
                <span class="btn-inner--icon"><i class="ni ni-basket"></i></span>
                <span class="btn-inner--text">Purchase now</span>
                <b-badge size="md" pill variant="danger" class="badge-floating border-white">$89</b-badge>
              </a>
            </div>
            <div class="text-center">
              <h4 class="display-4 mb-5 mt-5">Available on these technologies</h4>
              <b-row class="justify-content-center">
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip placement="top" content="Bootstrap 4 - Most popular front-end component library">
                    <a href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=bvadp-index-page" target="_blank">
                      <b-img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg" fluid rounded="circle" class="shadow shadow-lg--hover" />
                    </a>
                  </el-tooltip>
                </b-col>
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip placement="top" content="BootstrapVue - Most popular front-end component library for Vue.js">
                    <a href="https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard-pro?ref=vadp-index-page" target="_blank">
                      <b-img src="https://test.creative-tim.com/assets/icon-bootstrap-vue-f224def7158bbb9ed0e8436fd745d8cf6002ff00f3f65184282c4258958e598c.jpg" fluid rounded="circle" class="shadow shadow-lg--hover" />
                    </a>
                  </el-tooltip>
                </b-col>
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip placement="top" content="Vue.js - The progressive javascript framework">
                    <a href="https://www.creative-tim.com/product/vue-argon-dashboard-pro?ref=bvadp-index-page" target="_blank">
                      <b-img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg" fluid rounded="circle" />
                    </a>
                  </el-tooltip>
                </b-col>
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip placement="top" content="Sketch - Digital design toolkit">
                    <a href="https://www.sketchapp.com/" rel="noffolow"  target="_blank">
                      <b-img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg" fluid rounded="circle" />
                    </a>
                  </el-tooltip>
                </b-col>
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip placement="top" content="[Coming Soon] Adobe Photoshop - Software for digital images manipulation">
                    <a href="https://www.adobe.com/products/photoshop.html" rel="noffolow" target="_blank">
                      <b-img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg" fluid rounded="circle" class="opacity-3" />
                    </a>
                  </el-tooltip>
                </b-col>
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip placement="top" content="Angular - One framework. Mobile ">
                    <a href="https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=bvadp-index-page" target="_blank">
                      <b-img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg" fluid rounded="circle" />
                    </a>
                  </el-tooltip>
                </b-col>
                <b-col md="2" cols="3" class="my-2">
                  <el-tooltip placement="top" content="React - A JavaScript library for building user interfaces">
                    <a href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=bvadp-index-page" target="_blank">
                      <b-img src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg" fluid rounded="circle" />
                    </a>
                  </el-tooltip>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
  import { Tooltip } from 'element-ui'
  export default {
    name: 'home-page',
    components: {
      [Tooltip.name]: Tooltip
    }
  };
</script>
