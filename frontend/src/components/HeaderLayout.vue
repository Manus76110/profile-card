<template>
  <header>
    <div class="containt">
      <nav class="header-links">
        <ul class="menu__list">
          <li class="menu__item">
            <a href="/Realisation/" class="menu__link">Réalisation</a>
          </li>

          <li class="menu__item">
            <a href="/CV/" class="menu__link">CV</a>
          </li>

          <li class="menu__item">
            <a href="/Contact/" class="menu__link">Contact</a>
          </li>
        </ul>

        <div
          v-if="isMobile"
          class="burger-menu"
          :class="{ open: isMenuOpen }"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul v-if="isMobile && isMenuOpen" class="mobile-menu">
          <li><a href="/Realisation/" class="menu__link">Réalisation</a></li>
          <li><a href="/CV/" class="menu__link">CV</a></li>
          <li><a href="/Contact/" class="menu__link">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isMobile: false,
    };
  },
  mounted() {
    this.checkWindowSize();
    window.addEventListener("resize", this.checkWindowSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkWindowSize);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    checkWindowSize() {
      this.isMobile = window.innerWidth < 768;
      this.closeMenu();
    },
    closeMenu() {
      if (!this.isMobile) {
        this.isMenuOpen = false;
      }
    },
    openMenu() {
      this.isMenuOpen = true;
    },
  },
};
</script>


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
  display: flex;
  justify-content: flex-end;
}

a.menu__link {
  color: rgb(234, 238, 225);
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2em;
  margin-right: 2em;
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

.burger-menu {
  display: none;
}

.mobile-menu {
  
  background-color: #0288d1;;
  position: absolute;
  top: 4em; 
  padding: 1em;
  z-index: 99;
  border-radius: 10px 0 0 10px;
  height: 9em;

}

.mobile-menu.open {
  display: block;
}

.mobile-menu li {
  margin-bottom: 2.2em;
}

.mobile-menu li a {
  color: rgb(234, 238, 225);
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2em;
  margin: auto;
}

@media screen and (max-width: 767px) {
  .containt {
    width: 90%;
  }

  .burger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 17px;
    cursor: pointer;
    position: relative;
    z-index: 100;
    margin-top: 2.5em;
    margin-right: 2.5em;

  }

  .burger-menu span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: rgb(234, 238, 225);
    border-radius: 2px;
    transition: background-color 0.3s ease-in-out;
  }

  .burger-menu.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .burger-menu.open span:nth-child(2) {
    opacity: 0;
  }

  .burger-menu.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .mobile-menu {
    display: block;
  }

  .menu__list {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .containt {
    width: 70%;
    height: 8.5em;
  }

  .burger-menu,
  .mobile-menu {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .containt {
    width: 60%;
    height: 8.5em;
  }

  .burger-menu,
  .mobile-menu {
    display: none;
  }
}
</style>