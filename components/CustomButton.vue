<template>
  <div class="custom-button">
    <div class="inner">
      <button>{{text}}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text : String,
})
const inputData = computed(()=> props.data)
</script>

<style scoped lang="scss">
.custom-button{
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px -3px 7px -7px rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  .inner{
    padding: 20px 88px;
    button{
      background-color: var(--achare-main);
      color: #ffffff;
      width: 224px;
      height: 46px;
      border-radius: 4px;
      border: none;
      font-size: 16px;
      text-align: center;
    }
  }
}
</style>