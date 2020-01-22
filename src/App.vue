<template>
  <div id="app" class="container">
    <div class="text-center">
      <router-link :to="{name: 'inicio'}"></router-link>
      <img src="@/assets/logo.png" />
    </div>

    <router-view />
  </div>
</template>