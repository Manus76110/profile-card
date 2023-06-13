<template>
  <footer class="containt">
    <ul class="icons">
      <li>
        <img
          class="iconGithub"
          title="Lien vers mon Github"
          src="@/assets/images/github.png"
          alt="logo github"
          @click="redirectToGithub"
        />
        <p class="pLogo">Github</p>
      </li>
      <li>
        <img
          class="iconLinkedin"
          title="Lien vers mon Linkedin"
          src="@/assets/images/linkedin.png"
          alt="logo mail"
          @click="redirectToLinkedin"
        />
        <p class="pLogo">Linkedin</p>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.containt {
  background-color: aliceblue;
  border-radius: 0 0 2em 2em;
  width: 90%;
  margin: auto;
}
ul {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin-top: -1.8em;
  padding-top: 2em;
}
.icons {
  padding-bottom: 1.5em;
}
.iconGithub {
  width: 4.5em;
}
.iconGithub:hover {
  transform: scale(1.2);
  transition: 0.8s ease;
}
.iconLinkedin {
  width: 4.5em;
}
.iconLinkedin:hover {
  transform: scale(1.2);
  transition: 0.8s ease;
}
.pLogo {
  display: flex;
  justify-content: space-evenly;
  margin-top: 0;
  color: #0288d1;
  font-weight: bold;
}
@media screen and (min-width: 768px) {
    .containt{
        width: 50%;
        height: 100%;
    }
}
@media screen and (min-width: 1024px) {
    .containt{
        width: 50%;
        height: 80%;
    }
}
</style>

<script>
export default {

  methods: {
    redirectToGithub() {
      window.location.href = "https://github.com/Manus76110";
    },
    redirectToLinkedin() {
      window.location.href = "https://linkedin.com/in/manuel-sanchez-119337235";
    },
  },
};
</script>