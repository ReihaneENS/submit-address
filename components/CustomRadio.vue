<template>
  <div class="custom-radio">
    <label :for="id">{{label}}</label>
    <input type="radio" :value="inputData" :id="id" :name="name">
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id : String,
  label : String,
  data: String,
  name: String,
})
const inputData = computed(()=> props.data)
</script>

<style scoped lang="scss">
.custom-radio{
  label,input{
    font-size: 14px;
  }
  input{
    &:focus{
      border-color: var(--achare-main);
    }
    &:checked{
      background-color: var(--achare-main);
    }
  }
}
</style>