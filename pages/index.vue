<template>
  <div class="home-wrapper" v-if="stepper === 0">
    <div class="inner">
      <h4>ثبت آدرس</h4>
      <div class="form-wrapper">
        <h4>لطفا مشخصات و آدرس خود را وارد کنید</h4>
        <div class="input-group">
          <div class="custom-input">
            <label for="firstName">نام</label>
            <input type="text" v-model="firstName" placeholder="'مثال: محمدرضا'" id="firstName"
                   :class="{'border-red' : errors.firstName}">
            <p>{{ errors.firstName }}</p>
          </div>
          <div class="custom-input">
            <label for="lastName">نام خانوادگی</label>
            <input type="text" v-model="lastName" placeholder="'مثال: محمدی'" id="lastName"
                   :class="{'border-red' : errors.lastName}">
            <p>{{ errors.lastName }}</p>
          </div>
          <div class="custom-input">
            <label for="phoneNumber">شماره تلفن همراه</label>
            <input type="text" v-model="phoneNumber" placeholder="'مثال: ۰۹۱۲۱۲۳۴۵۶۷'" id="phoneNumber"
                   :class="{'border-red' : errors.phoneNumber}">
            <p>{{ errors.phoneNumber }}</p>
          </div>
        </div>
        <div class="input-group">
          <div class="custom-input">
            <label for="tellPhone">شماره تلفن ثابت (اختیاری)</label>
            <input type="text" v-model="tellPhone" placeholder="'مثال: ۰۲۱۱۲۳۴۵۶۷'" id="tellPhone"
                   :class="{'border-red' : errors.tellPhone}">
            <p>{{ errors.tellPhone }}</p>
          </div>
          <div class="custom-input">
            <label for="address">آدرس</label>
            <input type="text" v-model="address" id="address"
                   :class="{'border-red' : errors.address}">
            <p>{{ errors.address }}</p>
          </div>
        </div>
        <div class="radio-group">
          <label class="main-label">جنسیت</label>
          <div class="custom-radio">
            <label for="female">خانم</label>
            <input type="radio" @change="updateRadio('female')" value="gender" id="female" name="gender">
          </div>
          <div class="custom-radio">
            <label for="male">آقا</label>
            <input type="radio" @change="updateRadio('male')" value="gender" id="male" name="gender">
          </div>
        </div>
        <CustomButton @click="onFormSubmit" text="ثبت و ادامه"/>
      </div>
    </div>
  </div>

  <div class="address-wrapper" v-if="stepper === 1">
    <div class="inner">
      <div class="title">
        <button @click="stepper--">
          <img src="@/assets/images/arrow.png" alt=""/>
        </button>
        <h4>انتخاب آدرس</h4>
      </div>
      <div class="map-card">
        <h5>موقعیت مورد نظر خود را روی نقشه مشخص کنید</h5>
        <ClientOnly>
          <Map @submit="onSubmit"/>
        </ClientOnly>
      </div>
    </div>
  </div>
  <SuccessPage v-if="stepper === 2" />
</template>

<script setup lang="ts">
import {ref} from "vue";
import {toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css';
import CustomButton from "~/components/CustomButton.vue";

const formValues = ref({});
const stepper = ref(2);
const loader = ref(false);
const firstName = ref('');
const lastName = ref('');
const phoneNumber = ref('');
const tellPhone = ref('');
const address = ref('');
const gender = ref('');
const regex = ref(/(^09[0-9]{9}$)|(^\u06F0\u06F9[\u06F0-\u06F9]{9})$/);
const errors = ref({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  tellPhone: '',
  address: '',
  gender: '',
});

const onFormSubmit = () => {
  errors.value = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    tellPhone: '',
    address: '',
    gender: '',
  };
  if (!firstName.value) {
    errors.value.firstName = "پر کردن این فیلد الزامی است"
  } else if (firstName.value && firstName.value.length < 3) {
    errors.value.firstName = "نام باید دارای ۳ کرکتر باشد"
  } else if (!lastName.value) {
    errors.value.lastName = "پر کردن این فیلد الزامی است"
  } else if (lastName.value.length < 3) {
    errors.value.lastName = "نام خانوادگی باید دارای ۳ کرکتر باشد"
  } else if (!phoneNumber.value) {
    errors.value.phoneNumber = "پر کردن این فیلد الزامی است"
  } else if (!phoneNumber.value.match(regex.value)) {
    errors.value.phoneNumber = "شماره تلفن همراه نامعتبر است!"
  } else if (!address.value) {
    errors.value.address = "پر کردن این فیلد الزامی است"
  } else if (address.value.length < 3) {
    errors.value.address = "آدرس باید دارای ۳ کرکتر باشد"
  } else {
    formValues.value = {
      firstName: firstName.value,
      lastName: lastName.value,
      phoneNumber: phoneNumber.value,
      tellPhone: tellPhone.value,
      address: address.value,
      gender: gender.value,
    }
    stepper.value = 1;
  }
}
const updateRadio = (value:string) =>{
  gender.value = value;
}
const onSubmit = (coords: number[]) => {
  const payload = {
    region: "1",
    lng: coords[0]?.toString(),
    lat: coords[1]?.toString(),
    ...formValues,
  };
  console.log(payload);
  loader.value = true;
  api
      .post("address", payload)
      .then(() => {
        stepper.value++;
        toast.success({
          message: "مشخصات با موفقیت ثبت شد",
        });
      })
      .catch(() => {
        toast.error({
          title: "خطا",
          message: "خطایی رخ داده است",
        });
      })
      .finally(() => (loader.value = false));
};
</script>


<style scoped lang="scss">
.home-wrapper {
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

    .form-wrapper {
      h4 {
        margin-bottom: 50px;
      }

      border-radius: 4px;
      background-color: #ffffff;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      padding: 20px 40px;

      .input-group {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-bottom: 30px;
        .custom-input{
          width: 100%;
          label{
            display: block;
            margin-bottom: 5px;
          }
          label,input{
            font-size: 14px;
          }
          p{
            color: #E61236;
            font-size: 10px;
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
          .border-red{
            border-color: #E61236;
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

        &:nth-child(3) {
          grid-template-columns: 1fr 2fr;
        }
      }

      .radio-group {
        .main-label {
          margin-left: 50px;
        }
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
          /****************************/
          /*     Responsive Design    */
          /****************************/
          @media screen and (max-width: 725px){
            label{
              font-size: 12px;
            }
          }
        }

        display: flex;
        justify-content: flex-start;

        .custom-radio {
          margin: 0 20px;
        }
      }
    }
  }

  .custom-button {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
  }

  /****************************/
  /*     Responsive Design    */
  /****************************/
  @media screen and (max-width: 1081px) {
    .inner {
      width: 90%;
    }
  }
  @media screen and (max-width: 725px) {
    .inner {
      padding: 50px 0;

      .form-wrapper {
        h4 {
          font-size: 12px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          align-items: self-start;
          justify-content: flex-start;

          .custom-input {
            margin-bottom: 20px;
          }
        }

        .radio-group {
          label {
            font-size: 12px;
          }
        }
      }
    }
  }
}

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

      .map-card {
        h5 {
          display: none;
        }
      }
    }
  }
}
</style>