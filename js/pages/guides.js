document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".guide-filter");
    const cards = document.querySelectorAll(".guide-page-card");
    const featuredSection = document.querySelector(".featured-guide-section");
    const featuredGuide = document.querySelector(".featured-guide");
    const guidesCount = document.querySelector(".guides-count");
    const grid = document.querySelector(".guides-page-grid");

    if (!filterButtons.length) return;

    // Message affiché quand aucun guide ne correspond
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "guides-empty";
    emptyMessage.textContent = "Aucun guide dans cette catégorie pour le moment.";
    emptyMessage.style.display = "none";
    emptyMessage.style.gridColumn = "1 / -1";
    emptyMessage.style.textAlign = "center";
    emptyMessage.style.opacity = "0.7";
    if (grid) grid.appendChild(emptyMessage);

    function applyFilter(filter) {
        let visibleCount = 0;

        // Boutons : état actif
        filterButtons.forEach(button => {
            const isActive = button.dataset.filter === filter;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        // Cartes de la grille
        cards.forEach(card => {
            const matches = filter === "all" || card.dataset.category === filter;
            card.style.display = matches ? "" : "none";
            if (matches) visibleCount++;
        });

        // Guide mis en avant : visible seulement si sa catégorie correspond
        if (featuredSection && featuredGuide) {
            const featuredMatches =
                filter === "all" || featuredGuide.dataset.category === filter;
            featuredSection.style.display = featuredMatches ? "" : "none";
        }

        // Compteur "06 GUIDES"
        if (guidesCount) {
            const label = visibleCount > 1 ? "GUIDES" : "GUIDE";
            guidesCount.textContent = `${String(visibleCount).padStart(2, "0")} ${label}`;
        }

        emptyMessage.style.display = visibleCount === 0 ? "" : "none";
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => applyFilter(button.dataset.filter));
    });

    applyFilter("all");
});