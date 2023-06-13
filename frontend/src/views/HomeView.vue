<template>
  <div>
    <HeaderLayout />
    <HomeLayout />
    <FooterLayout />

  </div>
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue'
import HomeLayout from '@/components/HomeLayout.vue'
import FooterLayout from '@/components/FooterLayout.vue'



export default {
    components : {
      HeaderLayout,
      HomeLayout,
      FooterLayout
  }
}

</script>
