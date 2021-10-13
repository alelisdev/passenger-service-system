<template>
  <div>     
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
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
      <b-row class="justify-content-center">
        <b-col lg="8" class="card-wrapper">
          <!-- Headings -->
          <card>
            <h3 slot="header" class="mb-0">Headings</h3>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Heading 1</small>
              </b-col>
              <b-col sm="9">
                <h1 class="mb-0">Argon Dashboard PRO</h1>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Heading 2</small>
              </b-col>
              <b-col sm="9">
                <h2 class="mb-0">Argon Dashboard PRO</h2>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Heading 3</small>
              </b-col>
              <b-col sm="9">
                <h3 class="mb-0">Argon Dashboard PRO</h3>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Heading 4</small>
              </b-col>
              <b-col sm="9">
                <h4 class="mb-0">Argon Dashboard PRO</h4>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Heading 5</small>
              </b-col>
              <b-col sm="9">
                <h5 class="mb-0">Argon Dashboard PRO </h5>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Heading 6</small>
              </b-col>
              <b-col sm="9">
                <h6 class="mb-0">Argon Dashboard PRO </h6>
              </b-col>
            </b-row>
          </card>
          <!-- Display titles -->
          <card>
            <h3 slot="header" class="mb-0">Display titles</h3>

            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Display 1</small>
              </b-col>
              <b-col sm="9">
                <h1 class="display-1 mb-0">Argon Dashboard PRO</h1>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Display 2</small>
              </b-col>
              <b-col sm="9">
                <h2 class="display-2 mb-0">Argon Dashboard PRO</h2>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Display 3</small>
              </b-col>
              <b-col sm="9">
                <h3 class="display-3 mb-0">Argon Dashboard PRO</h3>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Display 4</small>
              </b-col>
              <b-col sm="9">
                <h4 class="display-4 mb-0">Argon Dashboard PRO</h4>
              </b-col>
            </b-row>
          </card>
          <!-- Specialized titles -->
          <card>
            <h3 slot="header" class="mb-0">Specialized titles</h3>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Heading</small>
              </b-col>
              <b-col sm="9">
                <h3 class="heading mb-0">Argon Dashboard PRO</h3>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Heading title</small>
              </b-col>
              <b-col sm="9">
                <h3 class="heading-title text-warning mb-0">Argon Dashboard PRO</h3>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3" class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Heading seaction</small>
              </b-col>
              <b-col sm="9">
                <div>
                  <h2 class="display-3">Header with small subtitle </h2>
                  <p class="lead text-muted">According to the National Oceanic and Atmospheric Administration, Ted,
                    Scambos, NSIDClead scentist, puts the potentially record maximum.</p>
                </div>
              </b-col>
            </b-row>
          </card>
          <!-- Paragraphs -->
          <card>
            <h3 slot="header" class="mb-0">Paragraphs</h3>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Paragraph</small>
              </b-col>
              <b-col sm="9">
                <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the
                  answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to
                  push possibilities, to show
                  people, this is the level that things could be at.</p>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Lead text</small>
              </b-col>
              <b-col sm="9">
                <p class="lead">I will be the leader of a company that ends up being worth billions of dollars,
                  because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility
                  that I have, to push
                  possibilities, to show people, this is the level that things could be at.</p>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Quote</small>
              </b-col>
              <b-col sm="9">
                <blockquote class="blockquote">
                  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                    ante.</p>
                  <footer class="blockquote-footer">Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Muted text</small>
              </b-col>
              <b-col sm="9">
                <p class="text-muted mb-0">I will be the leader of a company that ends up being worth billions of
                  dollars, because I got the answers...</p>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Primary text</small>
              </b-col>
              <b-col sm="9">
                <p class="text-primary">I will be the leader of a company that ends up being worth billions of
                  dollars, because I got the answers...</p>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Info text</small>
              </b-col>
              <b-col sm="9" class="col-sm-9">
                <p class="text-info mb-0">I will be the leader of a company that ends up being worth billions of
                  dollars, because I got the answers...</p>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Success text</small>
              </b-col>
              <b-col sm="9">
                <p class="text-success mb-0">I will be the leader of a company that ends up being worth billions of
                  dollars, because I got the answers...</p>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Warning text</small>
              </b-col>
              <b-col sm="9">
                <p class="text-warning mb-0">I will be the leader of a company that ends up being worth billions of
                  dollars, because I got the answers...</p>
              </b-col>
            </b-row>
            <b-row align-v="center" class="py-3">
              <b-col sm="3">
                <small class="text-uppercase text-muted font-weight-bold">Danger text</small>
              </b-col>
              <b-col sm="9">
                <p class="text-danger mb-0">I will be the leader of a company that ends up being worth billions of
                  dollars, because I got the answers...</p>
              </b-col>
            </b-row>
        </card>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>
<script>
  import RouteBreadcrumb from '@/components/Breadcrumb/RouteBreadcrumb';
  import BaseHeader from '@/components/BaseHeader';

  export default {
    name: 'typography',
    components: {
      BaseHeader,
      RouteBreadcrumb
    }
  };
</script>
<style></style>
