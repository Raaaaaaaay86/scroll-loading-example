<template>
  <div class="card">
    <div class="card_header">
      <img class="card_header_img" :src="userInfo.picture.large" />
    </div>
    <div class="card_content">
      <p class="card_content_name">
        Name: {{ userInfo.name.first + userInfo.name.last }}
      </p>
      <p class="card_content_phone">
        Phone: {{ userInfo.phone }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  props: {
    userInfo: {
      required: true,
      type: Object as () => RandomUserInfo,
    },
  },
});
</script>

<style lang="scss" scoped>
  .card {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    padding: 1rem;
    min-width: 30%;
    min-height: 20rem;

    &_header {
      background-color: rgb(172, 172, 172);

      &_img {
        width: 200px;
        height: 200px;
        display: block;
        margin: 0 auto;
      }
    }


    &_content {
      padding: 1rem;
      &_name, &_phone {
        margin-bottom: 1rem;
        font-weight: bold;
        font-size: 1.5em;
      }
      p:last-of-type {
        margin: unset;
      }
    }
  }
</style>
