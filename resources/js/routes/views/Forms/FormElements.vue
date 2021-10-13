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

    <div class="container-fluid mt--6">
      <b-card no-body class="mb-4">
        <!-- Card header -->
        <b-card-header>
          <h3 class="mb-0">Form group in grid</h3>
        </b-card-header>
        <!-- Card body -->
        <b-card-body>
          <!-- Form groups used in grid -->
          <b-row>
            <b-col md="4">
              <base-input label="One of three cols" placeholder="One of three cols"/>
            </b-col>
            <b-col md="4">
              <base-input label="One of three cols" placeholder="One of three cols"/>
            </b-col>
            <b-col md="4">
              <base-input label="One of three cols" placeholder="One of three cols"/>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="6" md="3">
              <base-input label="One of four cols" placeholder="One of four cols"/>
            </b-col>
            <b-col sm="6" md="3">
              <base-input label="One of four cols" placeholder="One of four cols"/>
            </b-col>
            <b-col sm="6" md="3">
              <base-input label="One of four cols" placeholder="One of four cols"/>
            </b-col>
            <b-col sm="6" md="3">
              <base-input label="One of four cols" placeholder="One of four cols"/>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <base-input label="One of two cols" placeholder="One of two cols"/>
            </b-col>
            <b-col md="6">
              <base-input label="One of two cols" placeholder="One of two cols"/>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
      <b-row>
        <b-col lg="6">
          <div class="card-wrapper">
            <!-- Form controls -->
            <b-card no-body>
              <!-- Card header -->
              <b-card-header>
                <h3 class="mb-0">Form controls</h3>
              </b-card-header>
              <!-- Card body -->
              <b-card-body>
                <form>
                  <base-input label="Email address" placeholder="name@example.com"/>

                  <base-input label="Example select">
                    <select class="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </base-input>

                  <base-input label="Example multiple select">
                    <select multiple="" class="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </base-input>


                  <base-input label="Example textarea">
                    <textarea class="form-control" id="exampleFormControlTextarea3" rows="3"></textarea>
                  </base-input>
                </form>
              </b-card-body>
            </b-card>
            <!-- HTML5 inputs -->
            <b-card no-body>
              <!-- Card header -->
              <b-card-header>
                <h3 class="mb-0">HTML5 inputs</h3>
              </b-card-header>
              <!-- Card body -->
              <b-card-body>
                <form>
                  <b-row class="form-group">
                    <label class="col-md-2 col-form-label form-control-label">Text</label>
                    <b-col md="10">
                      <base-input placeholder="Jon Snow"></base-input>
                    </b-col>
                  </b-row>
                  <b-row class="form-group">
                    <label for="example-search-input" class="col-md-2 col-form-label form-control-label">Search</label>
                    <b-col md="10">
                      <base-input id="example-search-input" placeholder="Tell me your secret ..."></base-input>
                    </b-col>
                  </b-row>
                  <b-row class="form-group">
                    <label for="example-email-input" class="col-md-2 col-form-label form-control-label">Email</label>
                    <b-col md="10">
                      <base-input type="email" autocomplete="username email" placeholder="argon@example.com" id="example-email-input"/>
                    </b-col>
                  </b-row>
                  <b-row class="form-group">
                    <label for="example-url-input" class="col-md-2 col-form-label form-control-label">URL</label>
                    <b-col md="10">
                      <base-input type="url" placeholder="https://www.creative-tim.com" id="example-url-input"/>
                    </b-col>
                  </b-row>
                  <b-row class="form-group">
                    <label for="example-tel-input" class="col-md-2 col-form-label form-control-label">Phone</label>
                    <b-col md="10">
                      <base-input type="tel" placeholder="40-(770)-888-444" id="example-tel-input"/>
                    </b-col>
                  </b-row>
                  <b-row class="form-group">
                    <label for="example-password-input"
                           class="col-md-2 col-form-label form-control-label">Password</label>
                    <b-col md="10">
                      <base-input type="password" autocomplete="current-password" placeholder="password" id="example-password-input"/>
                    </b-col>
                  </b-row>
                  <b-row class="form-group">
                    <label for="example-number-input" class="col-md-2 col-form-label form-control-label">Number</label>
                    <b-col md="10">
                      <base-input type="number" placeholder="23" id="example-number-input"/>
                    </b-col>
                  </b-row>
                  <b-row class="form-group">
                    <label for="example-datetime-local-input" class="col-md-2 col-form-label form-control-label">Datetime</label>
                    <b-col md="10">
                      <base-input type="datetime-local" value="2018-11-23T10:30:00" id="example-datetime-local-input"/>
                    </b-col>
                  </b-row>
                  <b-row class="form-group">
                    <label for="example-date-input" class="col-md-2 col-form-label form-control-label">Date</label>
                    <b-col md="10">
                      <base-input type="date" value="2018-11-23" id="example-date-input"/>
                    </b-col>
                  </b-row>
                  <b-row class="form-group">
                    <label for="example-month-input" class="col-md-2 col-form-label form-control-label">Month</label>
                    <b-col md="10">
                      <base-input type="month" value="2018-11" id="example-month-input"/>
                    </b-col>
                  </b-row>
                  <b-row class="form-group">
                    <label for="example-week-input" class="col-md-2 col-form-label form-control-label">Week</label>
                    <b-col md="10">
                      <base-input type="week" value="2018-W23" id="example-week-input"/>
                    </b-col>
                  </b-row>
                  <b-row class="form-group">
                    <label for="example-time-input" class="col-md-2 col-form-label form-control-label">Time</label>
                    <b-col md="10">
                      <base-input type="time" value="10:30:00" id="example-time-input"/>
                    </b-col>
                  </b-row>
                  <b-row class="form-group">
                    <label for="example-color-input" class="col-md-2 col-form-label form-control-label">Color</label>
                    <b-col md="10">
                      <base-input type="color" value="#5e72e4" id="example-color-input"/>
                    </b-col>
                  </b-row>
                </form>
              </b-card-body>
            </b-card>
          </div>
        </b-col>
        <b-col lg="6">
          <div class="card-wrapper">
            <!-- Sizes -->
            <b-card no-body>
              <!-- Card header -->
              <b-card-header>
                <h3 class="mb-0">Sizes</h3>
              </b-card-header>
              <!-- Card body -->
              <b-card-body>
                <base-input label="Large input" input-classes="form-control-lg" placeholder=".form-control-lg"/>
                <base-input label="Default input" placeholder="Default input"/>
                <base-input label="Default input" input-classes="form-control-sm" placeholder=".form-control-sm"/>
              </b-card-body>
            </b-card>
            <!-- Textareas -->
            <b-card no-body>
              <!-- Card header -->
              <b-card-header>
                <h3 class="mb-0">Text inputs</h3>
              </b-card-header>
              <!-- Card body -->
              <b-card-body>
                <form>
                  <base-input label="Basic textarea">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </base-input>
                  <base-input label="Unresizable textarea">
                    <textarea class="form-control" id="exampleFormControlTextarea2" rows="3" resize="none"></textarea>
                  </base-input>
                </form>
              </b-card-body>
            </b-card>
            <!-- Selects -->
            <b-card no-body>
              <!-- Card header -->
              <b-card-header class="card-header">
                <h3 class="mb-0">Select</h3>
              </b-card-header>
              <!-- Card body -->
              <b-card-body>
                <form>
                  <base-input label="Basic select">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </base-input>
                  <base-input label="Basic select">
                    <select class="form-control" id="exampleFormControlSelect2" disabled="">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </base-input>
                  <base-input label="Multiple select">
                    <label class="form-control-label" for="exampleFormControlSelect3">Multiple select</label>
                    <select multiple="" class="form-control" id="exampleFormControlSelect3">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </base-input>
                  <base-input class="form-group" label="Disabled multiple select">
                    <select multiple="" class="form-control" id="exampleFormControlSelect4" disabled="">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </base-input>
                </form>
              </b-card-body>
            </b-card>
            <!-- File browser -->
            <b-card no-body>
              <!-- Card header -->
              <b-card-header class="card-header">
                <h3 class="mb-0">File browser</h3>
              </b-card-header>
              <!-- Card body -->
              <b-card-body class="card-body">
                <b-form>
                  <b-form-file
                    @change="filesChange"
                    placeholder="Select file"
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                </b-form>
              </b-card-body>
            </b-card>
            <!-- Checkboxes and radios -->
            <b-card no-body>
              <!-- Card header -->
              <b-card-header>
                <h3 class="mb-0">Checkboxes and radios</h3>
              </b-card-header>
              <!-- Card body -->
              <b-card-body>
                <form>
                  <b-row>
                    <b-col md="6">
                      <b-form-checkbox class="mb-3" v-model="checkboxes.unchecked">
                        Unchecked
                      </b-form-checkbox>
                      
                      <b-form-checkbox class="mb-3" v-model="checkboxes.checked">
                        Checked
                      </b-form-checkbox>

                      <b-form-checkbox class="mb-3" v-model="checkboxes.unchecked" disabled="">
                        Disabled Unchecked
                      </b-form-checkbox>

                      <b-form-checkbox class="mb-3" v-model="checkboxes.checked" disabled >
                        Disabled Checked
                      </b-form-checkbox>

                    </b-col>
                    <b-col md="6">
                      <b-form-radio-group v-model="radios.radio1">
                        <div>
                          <b-form-radio
                            value="checked"
                            name="unchecked"
                            class="mb-3">
                            Unchecked
                          </b-form-radio>
                        </div>
                        <div>
                          <b-form-radio
                            value="unchecked"
                            name="checked"
                            class="mb-3">
                          Checked
                        </b-form-radio>
                      </div>
                    </b-form-radio-group>
                    <b-form-radio-group v-model="radios.radio2">
                        <div>
                          <b-form-radio
                            disabled=""
                            value="checked"
                            name="unchecked"
                            class="mb-3">
                            Unchecked
                          </b-form-radio>
                        </div>
                        <div>
                          <b-form-radio
                            disabled=""
                            value="unchecked"
                            name="checked"
                            class="mb-3">
                          Checked
                        </b-form-radio>
                      </div>
                    </b-form-radio-group>
                    </b-col>
                  </b-row>
                </form>
              </b-card-body>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import FileInput from '@/components/Inputs/FileInput'
  export default {
    name: 'form-elements',
    components: {
      FileInput
    },
    data() {
      return {
        inputs: {
          file: []
        },
        checkboxes: {
          unchecked: false,
          checked: true,
          uncheckedDisabled: false,
          checkedDisabled: true
        },
        radios: {
          radio1: 'checked',
          radio2: 'checked'
        }
      }
    },
    methods: {
      filesChange(files) {
        this.inputs.file = files
      }
    }
  }
</script>
