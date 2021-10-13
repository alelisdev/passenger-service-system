<template>
  <b-list-group flush class="my--3">
    <b-list-group-item class="px-0"
        v-for="user in users"
        :key="user.id"
    >
      <b-row align-v="center">
        <b-col cols="auto">
          <!-- Avatar -->
          <a href="#" class="avatar rounded-circle">
            <b-img alt="Image placeholder" :src="user.img" />
          </a>
        </b-col>
        <b-col class="ml--2">
          <h4 class="mb-0">
            <a href="#!">{{user.name}}</a>
          </h4>
          <span :class="`text-${user.statusType}`">● </span>
          <small>{{user.status}}</small>
        </b-col>
        <b-col cols="auto">
          <base-button type="primary" size="sm">Add</base-button>
        </b-col>
      </b-row>
    </b-list-group-item>
  </b-list-group> 
</template>
<script>
import { BaseProgress } from '@/components';

export default {
  name: 'user-list',
  components: {
    BaseProgress
  },
  data() {
    return {
      users: [
        {
          id: 1,
          img: 'img/theme/team-1.jpg',
          name: 'John Michael',
          status: 'Online',
          statusType: 'success'
        },
        {
          id: 2,
          img: 'img/theme/team-2.jpg',
          name: 'Alex Smith',
          status: 'In a meeting',
          statusType: 'danger'
        },
        {
          id: 3,
          img: 'img/theme/team-3.jpg',
          name: 'Samantha Ivy',
          status: 'Offline',
          statusType: 'danger'
        },
        {
          id: 4,
          img: 'img/theme/team-4.jpg',
          name: 'John Michael',
          status: 'Online',
          statusType: 'success'
        }
      ]
    };
  }
};
</script>
<style></style>
