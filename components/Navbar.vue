<template>
  <div class="header-wrapper">
    <header>
      <div class="logo-wrapper">
        <NuxtLink to="/">
          <img src="@/assets/images/achare.png" alt="achare">
        </NuxtLink>
      </div>
      <div class="navbar-options">
        <ul>
          <li>
            <NuxtLink to="/">ثبت آدرس</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">مشاهده آدرس ها</NuxtLink>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.header-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 7px -8px rgba(0,0,0,0.75);
  header{
    padding: 20px 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar-options ul{
      display: flex;
      justify-content: center;
      align-items: center;
      li{
        font-size: 14px;
        margin: 0 20px;
        &:last-child a{
          color: var(--achare-main);
        }
      }
    }
  }
  /****************************/
  /*     Responsive Design    */
  /****************************/
  @media screen and (max-width: 725px){
    header{
      padding: 20px 50px;
    }
  }
  @media screen and (max-width: 500px){
    header{
      padding: 20px 20px;
      .navbar-options ul{
        li{
          &:last-child{
            margin: 0;
          }
          a{
            font-size: 12.5px;
          }
        }
      }
    }
  }
}
</style>