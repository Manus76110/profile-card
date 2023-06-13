<template>
  <header>
    <div class="containt">
      <nav class="header-links">
        <ul class="menu__list">
          <li class="menu__item">
            <a href="./realisation.html" class="menu__link">Réalisation</a>
          </li>

          <li class="menu__item">
            <a href="./images/cv.pdf" class="menu__link">CV</a>
          </li>

          <li class="menu__item">
            <a href="./contact.html" class="menu__link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.containt {
  width: 90%;
  margin: auto;
  background-color: rgb(124, 42, 232);
  height: 8.5em;
  border-radius: 2em 2em 0em 0em;
}
.head_background {
  background-color: rgb(124, 42, 232);
  height: 8em;
  border-radius: 2em 2em 0em 0em;
}
nav.header-links {
  text-align: center;
}
a.menu__link {
  color: rgb(234, 238, 225);
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2em;
}
a.menu__link:hover {
  color: #6fc7ff;
  text-decoration-line: underline;
}
ul {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  padding-top: 1.5em;
}
@media screen and (min-width: 768px) {
  .containt {
    width: 50%;
    height: 8.5em;
  }
}
@media screen and (min-width: 1024px) {
  .containt {
    width: 50%;
    height: 8.5em;
  }
}
</style>