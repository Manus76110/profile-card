<template>
  <div class="containt">
    <h1>Oups !</h1>
    <p class="first-p">
      Vous vous etes perdu. La page que vous recherchez n'existe pas.
    </p>
    <img src="@/assets/images/404.jpg" alt="image erreur 404" />
    <p class="second-p">
      C'est vrai que c'est jolie mais... <br />
      Le retour à la page d'accueil c'est
    </p>
    <router-link class="link" to="/"> <strong>ici</strong> </router-link>
    <p class="icon">😊</p>
  </div>
</template>



<style scoped>
.containt {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
}
h1 {
  margin-top: 0.5em;
  font-size: 3.5em;
}
.first-p {
  width: 60%;
  text-align: center;
  margin: auto;
  font-size: 1.5em;
  margin-bottom: 1.5em;
}
img {
  width: 90%;
  height: 15em;
  margin: auto;
  border-radius: 10px;
}
.second-p {
  color: white;
  font-size: 1.3em;
  margin: auto;
  margin-top: 1.5em;
}
.link {
  color: blue;
  margin: auto;
  cursor: pointer;
  margin-top: 10px;
  text-transform: uppercase;
}
.icon {
  margin: auto;
  font-size: 3em;
}


@media screen and (min-width: 768px) {

  img {
    height: 20em;
  }

}

@media screen and (min-width: 1024px) {

  img {
    width: 50%;
    height: 22em;
  }
  .second-p {
    font-size: 2em;
  }
  .link {
    font-size: 2em;
    margin-bottom: 0.7em;
  }
}

</style>