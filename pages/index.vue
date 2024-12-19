<template>
  <div class="home-wrapper">
    <div class="inner">
      <h4>ثبت آدرس</h4>
      <div class="form-wrapper">
        <h4>لطفا مشخصات و آدرس خود را وارد کنید</h4>
        <div class="input-group">
          <CustomInput
              id="firstName"
              label="نام"
              type="text"
              data=""
              placeholder="مثال: محمدرضا"
          />
          <CustomInput
              id="lastName"
              label="نام خانوادگی"
              type="text"
              data=""
              placeholder="مثال: محمدی"
          />
          <CustomInput
              id="phoneNumber"
              label="شماره تلفن همراه"
              type="text"
              data=""
              placeholder=" مثال: ۰۹۱۲۱۲۳۴۵۶۷"
          />
        </div>
        <div class="input-group">
          <CustomInput
              id="tellPhone"
              label="شماره تلفن ثابت (اختیاری)"
              type="text"
              data=""
              placeholder="مثال: ۰۲۱۱۲۳۴۵۶۷"
          />
          <CustomInput
              id="address"
              label="آدرس"
              type="text"
              data=""
              customStyle="width: 91%"
          />
        </div>
        <div class="radio-group">
          <label>جنسیت</label>
          <CustomRadio
              id="female"
              label="خانم"
              data="female"
              name="gender"
          />
          <CustomRadio
              id="male"
              label="آقا"
              data="male"
              name="gender"
          />
        </div>
      </div>
    </div>
  </div>
  <CustomButton
      text="ثبت و ادامه"
  />
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.home-wrapper{
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner{
    width: 60%;
    h4{
      margin-bottom: 20px;
    }
    .form-wrapper{
      h4{
        margin-bottom: 50px;
      }
      border-radius: 4px;
      background-color: #ffffff;
      box-shadow: 0px 0px 10px -7px rgba(0,0,0,0.75);
      padding: 20px 40px;
      .input-group{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-bottom: 30px;
        &:nth-child(3){
          grid-template-columns: 1fr 2fr;
        }
      }
      .radio-group{
        label{
          margin-left: 50px;
        }
        display: flex;
        justify-content: flex-start;
        .custom-radio{
          margin: 0 20px;
        }
      }
    }
  }
}
</style>