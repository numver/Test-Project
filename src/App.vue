<script setup>
</script>

<template>
  <router-link :to="{ name: 'A' }" style="margin-right:'60px'">A</router-link>
  &emsp;&emsp;&emsp;&emsp;&emsp;
  <router-link :to="{ name: 'B' }">B</router-link>
  <br /> <br />
  <router-view>
    <template #default="{ Component, route }">
      <transition name="fade" mode="out-in" appear>
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </template>
  </router-view>
</template>

<style lang="less" scoped>
.fade-transition {

  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease-in-out;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
