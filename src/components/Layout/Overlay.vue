<template>
  <div class="overlay">
    <div class="overlay_imgWrapper">
      <img
        src="https://media3.giphy.com/media/sIIhZliB2McAo/giphy.gif?cid=ecf05e47rdpxi44aeb031ug7mxcu8qds2qdyd8v93cx2lew7&rid=giphy.gif&ct=g"
        alt=""
      />
    </div>
    <p class="overlay_loadingText">Loading...</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;

  &_imgWrapper {
    border-radius: 10px;
    margin-bottom: 1rem;
    height: 100px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  &_loadingText {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
