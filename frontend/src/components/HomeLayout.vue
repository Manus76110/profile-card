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
        Avec plus de 14 ans d'expérience en chaudronnerie, j'ai récemment fait
        le choix passionné de devenir développeur web. Grâce à une formation
        intensive de 6 mois, j'ai acquis les compétences nécessaires pour créer
        des sites web exceptionnels.<br />
        <br />
        Je suis constamment en quête d'apprentissage et d'amélioration,
        investissant mon temps libre pour rester à la pointe des dernières
        technologies et tendances en développement web. <br />
        <br />
        Ma motivation sans faille et mon engagement total garantissent une
        collaboration professionnelle et des résultats de qualité. Je suis prêt
        à relever tous les défis pour transformer votre vision en réalité.
        <br />
        <br />
        Contactez-moi dès maintenant pour discuter de vos projets et construire
        ensemble une présence en ligne exceptionnelle.
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
  color: black;
  margin-top: 0.8em;
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
    width: 70%;
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
    width: 60%;
    height: 80%;
  }
  .para {
    font-size: 1.5em;
  }
  h1 {
    text-align: center;
    font-size: 3em;
    color: black;
    margin-top: 2em;
  }
  h2 {
    font-size: 1.5em;
    text-align: center;
    margin-top: -12px;
  }
  .picture {
    width: 12em;
  }
}
</style>