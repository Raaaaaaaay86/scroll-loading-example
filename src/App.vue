<template>
  <Header></Header>
  <Content>
    <Card
      v-for="(userInfo, index) in userList"
      :key="index"
      :userInfo="userInfo"
    ></Card>
  </Content>
  <teleport to="body">
    <Overlay v-if="isLoading"></Overlay>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import Header from '@/components/Layout/Header.vue';
import Content from '@/components/Layout/Content.vue';
import Card from '@/components/UI/Card.vue';
import Overlay from '@/components/Layout/Overlay.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Content,
    Card,
    Overlay,
  },
  setup() {
    const userList = reactive<RandomUserInfo[]>([]);
    const isLoading = ref<boolean>(false);

    const getUsers = async (
      requestAmount: number = 10
    ) => {
      const data = await (
        await fetch(`https://randomuser.me/api/?results=${requestAmount}`)
      ).json();

      if (userList.length === 0) {
        userList.splice(1, 0, ...data.results);
      } else {
        userList.splice(userList.length - 1, 0, ...data.results);
      }

      isLoading.value = false;
      document.querySelector('body')!.style.overflowY = 'auto';
    };

    onMounted(() => {
      getUsers();

      document.addEventListener('scroll', (event) => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          if (isLoading.value) return console.log('plz wait');

          isLoading.value = true;
          document.querySelector('body')!.style.overflowY = 'hidden';

          setTimeout(() => {
            getUsers(3);
          }, 0);
        }
      });
    });

    return {
      userList,
      isLoading,
    };
  },
});
</script>

<style></style>
