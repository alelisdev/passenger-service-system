<template>
  <div>
    <base-header class="pb-6">
      <b-row class="align-items-center py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 text-white d-inline-block mb-0">{{$route.name}}</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb/>
          </nav>
        </b-col>
        <b-col lg="6" cols="5" class="text-right">
          <base-button size="sm" type="neutral">New</base-button>
          <base-button size="sm" type="neutral">Filters</base-button>
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col lg="6">
          <div class="card-wrapper">
            <!-- Input groups -->
            <card>
              <!-- Card header -->
              <h3 slot="header" class="mb-0">Input groups</h3>
              <!-- Card body -->
              <form>
                <!-- Input groups with icon -->
                <b-row>
                  <b-col md="6">
                    <base-input prepend-icon="fas fa-user" placeholder="Your name"></base-input>
                  </b-col>
                  <b-col md="6">
                    <base-input prepend-icon="fas fa-envelope" placeholder="Email"></base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="6">
                    <base-input append-icon="fas fa-map-marker" placeholder="Location"></base-input>
                  </b-col>
                  <b-col md="6">
                    <base-input append-icon="fas fa-eye" placeholder="Password" type="password"></base-input>
                  </b-col>
                </b-row>
                <!-- Input groups with icon -->
                <b-row>
                  <b-col md="6">
                    <base-input prepend-icon="fas fa-credit-card"
                                placeholder="Payment Method">
                      <small slot="append" class="font-weight-bold">USD</small>
                    </base-input>
                  </b-col>
                  <b-col md="6">
                    <base-input append-icon="fas fa-phone"
                                prepend-icon="fas fa-globe-americas"
                                placeholder="Phone">
                    </base-input>
                  </b-col>
                </b-row>
              </form>
            </card>
            <!-- Dropdowns -->
            <card>
              <!-- Card header -->
              <h3 slot="header" class="mb-0">Selects</h3>
              <!-- Card body -->
              <form>
                <b-row>
                  <b-col md="6">
                    <base-input label="Simple select">
                      <el-select v-model="selects.simple" filterable
                                 placeholder="Simple select">
                        <el-option v-for="option in selectOptions"
                                   :key="option.label"
                                   :label="option.label"
                                   :value="option.value">
                        </el-option>
                      </el-select>
                    </base-input>
                  </b-col>
                  <b-col md="6">
                    <base-input label="Multiple select">
                      <el-select v-model="selects.multiple"
                                 multiple
                                 filterable
                                 placeholder="Multiple select">
                        <el-option v-for="option in selectOptions"
                                   :key="option.label"
                                   :label="option.label"
                                   :value="option.value">
                        </el-option>
                      </el-select>
                    </base-input>
                  </b-col>
                </b-row>
              </form>
            </card>
            <!-- Datepicker -->
            <b-card no-body>
              <!-- Card header -->
              <b-card-header>
                <h3 class="mb-0">Datepicker</h3>
              </b-card-header>
              <!-- Card body -->
              <b-card-body>
                <form>
                  <b-row>
                    <b-col md="6">
                      <base-input label="Date picker">
                        <flat-picker slot-scope="{focus, blur}"
                                     @on-open="focus"
                                     @on-close="blur"
                                     class="form-control datepicker"
                                     v-model="dates.simple">
                        </flat-picker>
                      </base-input>
                    </b-col>
                    <b-col md="6">
                      <base-input label="Range picker">
                        <flat-picker slot-scope="{focus, blur}"
                                     @on-open="focus"
                                     @on-close="blur"
                                     :config="{mode: 'range',}"
                                     class="form-control datepicker"
                                     v-model="dates.range">
                        </flat-picker>
                      </base-input>
                    </b-col>
                  </b-row>
                </form>
              </b-card-body>
            </b-card>
            <!-- Text editor -->
            <b-card no-body>
              <!-- Card header -->
              <b-card-header>
                <h3 class="mb-0">Text editor</h3>
              </b-card-header>
              <!-- Card body -->
              <b-card-body>
                <form>
                  <html-editor></html-editor>
                </form>
              </b-card-body>
            </b-card>
          </div>
        </b-col>
        <b-col lg="6">
          <div class="card-wrapper">
            <card>
              <!--Card Header-->
              <h3 slot="header" class="mb-0">Tags</h3>
              <!--Card Body-->
              <tags-input v-model="inputs.tags" placeholder="Add new tag" class="test"></tags-input>
            </card>

            <card>
              <!--Card Header-->
              <h3 slot="header" class="mb-0">Toggle buttons</h3>
              <!--Card Body-->
              <base-switch class="mr-1" on-text="On" off-text="Off"></base-switch>
              <base-switch class="mr-1" v-model="switches.primary"></base-switch>
              <base-switch class="mr-1" v-model="switches.default" type="default"></base-switch>
              <base-switch class="mr-1" v-model="switches.danger" type="danger"></base-switch>
              <base-switch class="mr-1" v-model="switches.warning" type="warning"></base-switch>
              <base-switch class="mr-1" v-model="switches.success" type="success"></base-switch>
              <base-switch class="mr-1" v-model="switches.info" type="info"></base-switch>
            </card>

            <card>
              <!--Card Header-->
              <h3 slot="header" class="mb-0">Sliders</h3>
              <!--Card Body-->

              <base-slider v-model="sliders.simple"></base-slider>

              <b-row class="mt-3">
                <b-col cols="6"><span class="range-slider-value">{{sliders.simple}}</span></b-col>
              </b-row>

              <base-slider class="mt-5" v-model="sliders.range" :range="{min: 100, max: 500}"></base-slider>
              <b-row class="mt-3">
                <b-col cols="6">
                  <span class="range-slider-value">{{sliders.range[0]}}</span>
                </b-col>
                <b-col cols="6" class="text-right">
                  <span class="range-slider-value value-high">{{sliders.range[1]}}</span>
                </b-col>
              </b-row>
            </card>

            <card>
              <!--Card Header-->
              <h3 slot="header" class="mb-0">Dropzone</h3>
              <!--Card Body-->

              <dropzone-file-upload v-model="inputs.fileSingle"></dropzone-file-upload>

              <dropzone-file-upload v-model="inputs.fileMultiple" multiple></dropzone-file-upload>
            </card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import { Select, Option } from 'element-ui'
  import flatPicker from "vue-flatpickr-component";
  import "flatpickr/dist/flatpickr.css";

  import HtmlEditor from '@/components/Inputs/HtmlEditor'
  import TagsInput from '@/components/Inputs/TagsInput'
  import DropzoneFileUpload from '@/components/Inputs/DropzoneFileUpload'
  import BaseSlider from '@/components/BaseSlider'

  export default {
    name: 'form-components',
    components: {
      HtmlEditor,
      TagsInput,
      DropzoneFileUpload,
      BaseSlider,
      flatPicker,
      [Select.name]: Select,
      [Option.name]: Option,
    },
    data() {
      return {
        selectOptions: [
          {
            label: 'Alerts',
            value: 'Alerts'
          },
          {
            label: 'Badges',
            value: 'Badges'
          },
          {
            label: 'Buttons',
            value: 'Buttons'
          },
          {
            label: 'Cards',
            value: 'Cards'
          },
          {
            label: 'Forms',
            value: 'Forms'
          },
          {
            label: 'Modals',
            value: 'Modals'
          }
        ],
        selects: {
          simple: 'Badges',
          multiple: ['Alerts', 'Buttons']
        },
        dates: {
          simple: new Date(),
          range: '2019-04-19 to 2019-04-24'
        },
        inputs: {
          tags: ['BUCHAREST', 'IASI', 'TIMISOARA'],
          fileSingle: [],
          fileMultiple: []
        },
        switches: {
          off: false,
          primary: true,
          default: true,
          danger: true,
          warning: true,
          success: true,
          info: true
        },
        sliders: {
          simple: 50,
          range: [200, 400]
        }
      }
    }
  }
</script>
