<template>
  <div class="user-card-wrapper">
    <div class="inner">
      <ul>
        <li class="desktop-item">
          <p>نام</p>
          <p>{{ firstName }}</p>
        </li>
        <li class="desktop-item">
          <p>نام خانوادگی</p>
          <p>{{ lastName }}</p>
        </li>
        <li class="mobile-item">
          <p>نام و نام خانوادگی</p>
          <p>{{ firstName }} {{ lastName }}</p>
        </li>
        <li>
          <p>شماره تلفن همراه</p>
          <p>{{ phoneNumber }}</p>
        </li>
      </ul>
      <ul>
        <li>
          <p>شماره تلفن ثابت</p>
          <p>{{ tellPhone }}</p>
        </li>
        <li>
          <p>جنسیت</p>
          <p>{{ gender }}</p>
        </li>
        <hr class="mobile-item">
        <li>
          <p>آدرس</p>
          <p>{{ address }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  tellPhone: String,
  gender: String,
  address: String,
})
</script>

<style scoped lang="scss">
.user-card-wrapper {
  background-color: #ffffff;
  padding: 30px;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  border-radius: 4px;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:first-child {
        margin-bottom: 40px;
      }

      li {
        width: 30%;

        p {
          font-size: 16px;

          &:first-child {
            margin-bottom: 5px;
            font-size: 14px;
            color: var(--text-light);
          }
        }
      }
      .mobile-item{
        display: none;
      }
      hr{
        width: 100%;
        color: var(--text-light);
        opacity: 0.2;
      }
    }
  }

  /****************************/
  /*     Responsive Design    */
  /****************************/
  @media screen and (max-width: 1081px) {

  }
  @media screen and (max-width: 725px) {
    .inner {
      ul {
        flex-direction: column;
        justify-content: flex-start;

        &:first-child {
          margin-bottom: 0;
        }

        li {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            font-size: 14px;
          }
        }
        .mobile-item{
          display: flex;
        }
        .desktop-item{
          display: none;
        }
      }
    }
  }
}
</style>