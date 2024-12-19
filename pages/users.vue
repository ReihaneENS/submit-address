<template>
  <div class="users-wrapper">
    <div class="inner">
      <h4>آدرس ها و مشخصات</h4>
      <UserCard
          v-for="item in addresses"
          :key="item.id"
          :name="item.first_name"
          :lastName="item.last_name"
          :gender="item.gender"
          :mobile="item.coordinate_mobile"
          :phone="item.coordinate_phone_number"
          :address="item.address"
      />
    </div>
  </div>
</template>

<script setup>
import {toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

const addresses = ref([]);

api
    .get("address")
    .then((res) => (addresses.value = res))
    .catch(() => {
      toast.error({
        title: "خطا",
        message: "خطایی رخ داده است",
      });
    })
</script>

<style scoped lang="scss">
.users-wrapper{
  padding: 50px 0;
  position: relative;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    width: 60%;

    h4 {
      margin-bottom: 20px;
    }
  }
  /****************************/
  /*     Responsive Design    */
  /****************************/
  @media screen and (max-width: 1081px){
    .inner{
      width: 90%;
    }
  }
}
</style>