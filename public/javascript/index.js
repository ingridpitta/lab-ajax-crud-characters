const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      event.preventDefault();
      charactersAPI
        .getFullList()
        .then(res => {
          const data = res.data;
          let container = document.querySelector(".characters-container");
          let content = "";
          data.map(char => {
            const { id, name, occupation, weapon, cartoon } = char;
            content += `<div class="character-info">
              <div class="id">Id: ${id}</div>
              <div class="name">Name: ${name}</div>
              <div class="occupation">Occupation: ${occupation}</div>
              <div class="cartoon">Cartoon: ${cartoon}</div>
              <div class="weapon">Weapon: ${weapon}</div>
            </div>`
          });
          container.innerHTML = content;
        })
        .catch(err => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {});
});
