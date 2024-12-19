<template>
  <div class="address-wrapper">
    <div class="inner">
      <div class="title">
        <button @click="useRouter().push('/')">
          <img src="@/assets/images/arrow.png" alt="">
        </button>
        <h4>انتخاب آدرس</h4>
      </div>
      <div class="map-card">
        <h5>موقعیت مورد نظر خود را روی نقشه مشخص کنید</h5>
        <ClientOnly>
          <Map/>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Map from "~/components/Map.client.vue";
</script>

<style scoped lang="scss">
.address-wrapper {
  padding: 100px 0;
  position: relative;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner {
    width: 60%;

    .title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 20px;

      img {
        margin-left: 5px;
        margin-top: 5px;
      }
    }

    .map-card {
      border-radius: 4px;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);

      h5 {
        border-radius: 4px 4px 0 0;
        padding: 20px 40px;
        background-color: #ffffff;
      }
    }
  }

  /****************************/
  /*     Responsive Design    */
  /****************************/
  @media screen and (max-width: 1081px) {
    .inner {
      width: 90%;

      h5 {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 725px) {
    padding: 30px 0;
    .inner {
      width: 100%;

      .title {
        display: none;
      }
      .map-card{
        h5{
          display: none;
        }
      }
    }
  }
}
</style>