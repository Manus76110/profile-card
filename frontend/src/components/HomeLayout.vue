<template>
  <div class="container">
    <div class="containt">
      <div class="picture-container">
        <img
          class="picture centered-image"
          src="@/assets/images/Capture.jpg"
          alt="photo de profil"
        />
      </div>

      <h1>Manuel Sanchez</h1>
      <h2>Développeur web Junior</h2>
      <p class="para">
        Après plus de 14 ans dans la chaudronnerie je me suis enfin lancé dans
        une formation de 6 mois pour apprendre et exercer le métier qui me
        passionne depuis toujours: Développeur Web.<br />
        <br />Je continue de me former en autodidacte pour améliorer mes
        compétences et en acquérir de nouvelles. Je suis extrêmement motivé et
        je ferais tout pour évoluer professionnellement.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

.containt {
  background-color: aliceblue;
  width: 90%;
  margin-top: -2.3em;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px; /* Ajoute un espace pour le header */
}

.picture-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.picture {
  border-radius: 50%;
  border: solid 5px rgb(124, 42, 232);
  width: 9em;
}

.centered-image {
  margin-top: -70px;
}

h1 {
  text-align: center;
  font-size: 1.5em;
}

h2 {
  font-size: 15px;
  text-align: center;
  margin-top: -12px;
}

.para {
  width: 80%;
  font-size: 1.2em;
  margin: 1.5em auto;
}

@media screen and (min-width: 768px) {
  .containt {
    width: 50%;
  }
  .picture {
    width: 9em;
  }
  .para {
    font-size: 1em;
  }
}

@media screen and (min-width: 1024px) {
  .containt {
    width: 50%;
    height: 80%;
  }
  .para {
    font-size: 0.8em;
  }
}
</style>