document.addEventListener("DOMContentLoaded", () => {
const grid = document.getElementById("characters-grid");
const searchInput = document.getElementById("character-search");
const filterButtons = document.querySelectorAll(".character-filter");
const counter = document.getElementById("characters-visible");
const emptyState = document.getElementById("characters-empty");


if (!grid || typeof characters === "undefined") {
    console.error("Grille ou données des personnages introuvables.");
    return;
}

let currentFilter = "all";
let currentSearch = "";

function createCharacterCard(character) {
    const article = document.createElement("article");
    article.className = "character-card";

    const link = document.createElement("a");
    link.href = `character.html?id=${encodeURIComponent(character.id)}`;
    link.className = "character-card-link";

    const imageContainer = document.createElement("div");
    imageContainer.className = "character-card-image";

    if (character.image) {
        const img = document.createElement("img");
        img.src = character.image;
        img.alt = character.name;
        img.className = "character-image";
        imageContainer.appendChild(img);
    } else {
        const placeholder = document.createElement("div");
        placeholder.className = "character-image-placeholder";
        placeholder.textContent = "CHARACTER";
        imageContainer.appendChild(placeholder);
    }

    const rarity = document.createElement("span");
    rarity.className = "character-rarity";
    rarity.textContent = `${character.rarity}★`;

    const element = document.createElement("span");
    element.className = "character-element";
    element.textContent = character.element;

    imageContainer.append(rarity, element);

    const content = document.createElement("div");
    content.className = "character-card-content";

    const role = document.createElement("span");
    role.className = "character-role";
    role.textContent = character.role;

    const name = document.createElement("h2");
    name.className = "character-name";
    name.textContent = character.name;

    const meta = document.createElement("div");
    meta.className = "character-card-meta";

    const game = document.createElement("span");
    game.textContent = "Silver Palace";

    const arrow = document.createElement("span");
    arrow.textContent = "→";

    meta.append(game, arrow);
    content.append(role, name, meta);
    link.append(imageContainer, content);
    article.appendChild(link);

    article.dataset.role = character.roleId;
    article.dataset.name = character.name.toLowerCase();

    return article;
}

function renderCharacters() {
    grid.querySelectorAll(".character-card").forEach(card => card.remove());

    const filtered = characters.filter(character => {
        const matchesFilter =
            currentFilter === "all" ||
            character.roleId === currentFilter;

        const matchesSearch = character.name
            .toLowerCase()
            .includes(currentSearch);

        return matchesFilter && matchesSearch;
    });

    filtered.forEach(character => {
        grid.appendChild(createCharacterCard(character));
    });

    if (counter) {
        counter.textContent = filtered.length;
    }

    if (emptyState) {
        emptyState.classList.toggle("visible", filtered.length === 0);
        grid.appendChild(emptyState);
    }
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        currentFilter = button.dataset.filter;
        renderCharacters();
    });
});

if (searchInput) {
    searchInput.addEventListener("input", () => {
        currentSearch = searchInput.value.trim().toLowerCase();
        renderCharacters();
    });
}

renderCharacters();


});
