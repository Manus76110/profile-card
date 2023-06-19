<template>
  <div>
    <embed :src="pdfPath" type="application/pdf" width="100%" height="100%">
  </div>
</template>

<script>
export default {

  data() {
    return {
      pdfPath: '/assets/cv.pdf' // Chemin d'accès absolu vers le fichier PDF
    };
  }
};
</script>

<style scoped>
div {
  width: 80%;
  height: 100vh;
  margin: auto;
  margin-top: -0.6em;
  
}
</style>