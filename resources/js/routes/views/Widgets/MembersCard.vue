<template>
    <b-card no-body>
        <!-- Card header -->
        <b-card-header>
            <!-- Title -->
            <h5 class="h3 mb-0">Team members</h5>
        </b-card-header>
        <!-- Card search -->
        <b-card-header class="py-0" v-if="showSearch">
            <!-- Search form -->
            <b-form>
                <b-form-group class="mb-0">
                    <base-input class="input-group-lg input-group-flush mb-0"
                                prepend-icon="fas fa-search"
                                placeholder="Search"
                                type="search"
                                v-model="membersSearch">
                    </base-input>
                </b-form-group>
            </b-form>
        </b-card-header>
        <!-- Card body -->
        <b-card-body>
            <!-- List group -->
            <b-list-group flush class="list my--3">
                <b-list-group-item v-for="member in members"
                    :key="member.image"
                    class="list-group-item px-0">
                    <b-row align-v="center" >
                        <b-col md="auto">
                            <!-- Avatar -->
                            <a href="#" class="avatar">
                                <b-img rounded="circle" alt="Image placeholder" :src="member.image" />
                            </a>
                        </b-col>
                        <b-col class="ml--2">
                            <h4 class="mb-0">
                                <a href="#!">{{member.name}}</a>
                            </h4>
                            <span :class="`text-${member.statusType}`">● </span>
                            <small>{{member.status}}</small>
                        </b-col>
                        <b-col md="auto">
                            <b-button type="button" size="sm" variany="primary">Add</b-button>
                        </b-col>
                    </b-row>
                </b-list-group-item>
            </b-list-group>
        </b-card-body>
    </b-card>
</template>
<script>
  export default {
    name: 'members-card',
    props: {
      showSearch: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        membersSearch: '',
        members: [
          {
            name: 'John Michael',
            status: 'Online',
            statusType: 'success',
            image: 'img/theme/team-1.jpg'
          },
          {
            name: 'Alex Smith',
            status: 'In a meeting',
            statusType: 'danger',
            image: 'img/theme/team-2.jpg'
          },
          {
            name: 'Samantha Ivy',
            status: 'Offline',
            statusType: 'danger',
            image: 'img/theme/team-3.jpg'
          },
          {
            name: 'John Michael',
            status: 'Online',
            statusType: 'success',
            image: 'img/theme/team-4.jpg'
          },
          {
            name: 'John Snow',
            status: 'Online',
            statusType: 'success',
            image: 'img/theme/team-5.jpg'
          }
        ]
      }
    }
  }
</script>
