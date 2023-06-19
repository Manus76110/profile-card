<template>
  <div>
    <form
      action="https://formsubmit.co/sanchez.manu.pro@gmail.com"
      method="post"
      id="contact-form"
    >
      <h1>Formulaire de contact</h1>
      <div class="form-container">
        <label for="name">Nom :</label>
        <input type="text" id="name" required />
      </div>

      <div class="form-container">
        <label for="firstname">Prenom :</label>
        <input type="text" id="firstname" required />
      </div>

      <div class="form-container">
        <label for="email">Email :</label>
        <input type="email" id="email" required />
      </div>

      <div class="form-container">
        <label for="message">Message :</label>
        <textarea id="message" rows="8" required></textarea>
      </div>

      <input class="btn" type="submit" value="Envoyer" />
    </form>
  </div>
</template>

<style scoped>
#contact-form {
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  width: 90%; 
  margin: auto;
}
h1 {
  text-align: center;
  color: white;
  margin-top: -1.5em;
}
.form-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding-top: 1em;
}

.btn {
  background-color: #6fc7ff;
  border-radius: 0.4em;
  width: 30%;
  margin: 2em auto;
  color: rgb(17, 15, 15);
  padding: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 15px;
}

@media screen and (min-width: 768px) {
  #contact-form {
    width: 70%;
    height: 100%;
  }
}
@media screen and (min-width: 1024px) {
  #contact-form {
    width: 60%;
    height: 90%;
  }
  .form-container {
    width: 60%;
    
  }
}
</style>