<template>
  <div class="users-wrapper">
    <div class="inner">
      <h4>آدرس ها و مشخصات</h4>
      <UserCard
          firstName="محمد"
          lastName="محمدی"
          phoneNumber="۰۹۱۲۱۲۳۴۵۶۷"
          tellPhone="۰۲۱۳۴۵۶۷۸۹"
          gender="آقا"
          address="لورم ایپسوم متن ساختگی با تولید سادگی "
      />
    </div>
  </div>
</template>

<script setup lang="ts">

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