<template>
    <div>
        <image v-for="(image,i) in images" :key="i" :src="image"  style="width:0;height:0;opacity:0" />
    </div>
</template>

<script>
  export default {
    props: {
      images: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>

</style>