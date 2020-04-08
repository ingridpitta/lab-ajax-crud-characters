class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList() {
    return this.api.get(`/characters`);
  }

  getOneRegister(id) {
    this.api
      .get(`/characters/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    const characterInfo = {
      id: 4,
      name: "Chewbacca",
      occupation: "Co-pilot",
      weapon: "Bowcaster",
      cartoon: true
    };

    this.api
      .post(`/characters`, characterInfo)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    const updatedcharacterInfo = {
      name: "Chewbacca",
      occupation: "Co-pilot",
      weapon: "Bowcaster",
      cartoon: true
    };
    this.api
      .patch(`/characters/${id}`, updatedcharacterInfo)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  deleteOneRegister(id) {
    this.api
      .delete(`/characters/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}
