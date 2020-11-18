class ToyCard {
    constructor(toy) {
        this.toy = toy;
        this.renderToy();
        console.log(this);
    }

    static getAll() {
        api.getAllToys().then((data) =>
            data.forEach((toy) => new ToyCard(toy))
        );
    }

    renderToy() {
        const { name, image, likes } = this.toy;
        toyCollectionDiv.innerHTML += `
        <div class="card">
        <h2>${name}</h2>
        <img src=${image} class="toy-avatar" />
        <p>${likes} Likes </p>
        <button class="like-btn">Like <3</button>
      </div>
      `;
    }
}
