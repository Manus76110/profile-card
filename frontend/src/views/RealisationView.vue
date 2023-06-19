<template>
    <div>
        <HeaderLayout />
        <RealisationLayout />
        <FooterLayout />
    </div>
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue'
import RealisationLayout from '@/components/RealisationLayout.vue'
import FooterLayout from '@/components/FooterLayout.vue'

  export default {
    components : {
      HeaderLayout,
      RealisationLayout,
      FooterLayout,
    },
  }
</script>