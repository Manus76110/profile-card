<template>
  <div>
    <img src="@/assets/images/cv.jpg" alt="image du cv" />
  </div>
</template>



<style scoped>

div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin-top: 1.8em;
}

img {
  width: 100%;
  height: 90vh;
  margin-top: 1.8em;
}

@media screen and (min-width: 768px) {
  img {
    width: 60%;
    margin: auto;
    height: auto;
  }
}

@media screen and (min-width: 1024px) {

  img {
    width: 50%;
    height: auto;
    margin: auto;
  }
}
</style>