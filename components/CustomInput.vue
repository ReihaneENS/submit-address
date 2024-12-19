<template>
  <div class="custom-input">
    <label :for="id">{{label}}</label>
    <input :type="type" v-model="inputData" :placeholder="placeholder" :id="id" :style="customStyle">
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id : String,
  label : String,
  type: String,
  data: String,
  customStyle: String,
  placeholder: String,
})
const inputData = computed(()=> props.data)
</script>

<style scoped lang="scss">
.custom-input{
  width: 100%;
  label{
    display: block;
    margin-bottom: 5px;
  }
  label,input{
    font-size: 14px;
  }
  input{
    width: 82%;
    border-radius: 5px;
    padding: 10px 15px;
    border: solid 1px var(--text-light);
    &:focus{
      border-color: var(--achare-main);
    }
  }
  /****************************/
  /*     Responsive Design    */
  /****************************/
  @media screen and (max-width: 725px){
    input{
      font-size: 12px;
      width: 93%;
    }
    label{
      font-size: 12px;
    }
  }
}
</style>