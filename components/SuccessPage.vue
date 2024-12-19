<template>
  <div class="success-page">
    <!-- Icon -->
    <div class="icon-container">
      <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M39.375 22.5C39.375 13.1802 31.8198 5.625 22.5 5.625C13.1802 5.625 5.625 13.1802 5.625 22.5C5.625 31.8198 13.1802 39.375 22.5 39.375C31.8198 39.375 39.375 31.8198 39.375 22.5Z"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M30.0005 18.7505L20.6255 28.1255L15.0005 22.5005"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
      </svg>
    </div>

    <!-- Success Message -->
    <p class="success-message">اطلاعات شما با موفقیت ثبت شد</p>

    <!-- Button -->
    <NuxtLink class="success-button" to="/users">مشاهده اطلاعات </NuxtLink>

    <!-- <button class="success-button" @click="navigateToDetails">مشاهده اطلاعات</button> -->
  </div>
</template>

<script setup>
</script>

<style scoped>
.success-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-family: "Vazirmatn", sans-serif;
}

.icon-container {
  margin-bottom: 20px;
}

.check-icon {
  color: var(--achare-main); /* Green success color */
}

.success-message {
  font-size: 18px;
  color: #333;
  margin-bottom: 30px;
}

.success-button {
  font-size: 16px;
  color: var(--achare-main);
  border: 2px solid var(--achare-main);
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 5px 100px;
}

.success-button:hover {
  background-color: var(--achare-main);
  color: #fff;
}
</style>
