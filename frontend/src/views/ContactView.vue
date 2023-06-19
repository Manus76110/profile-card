<template>
    <div>
        <HeaderLayout />
        <ContactLayout />
        <FooterLayout />
    </div>
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue'
import ContactLayout from '@/components/ContactLayout.vue'
import FooterLayout from '@/components/FooterLayout.vue'

  export default {
    components : {
      HeaderLayout,
      ContactLayout,
      FooterLayout,
    },
  }
</script>