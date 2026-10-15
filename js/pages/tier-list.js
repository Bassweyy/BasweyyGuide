/* =========================================
   BASWEYY GUIDE — TIER LIST
========================================= */

(() => {
    "use strict";

    const container = document.getElementById("tier-list-container");
    const roleFilter = document.getElementById("tier-role-filter");
    const emptyMessage = document.getElementById("tier-empty");

    if (!container || !roleFilter) return;

    /*
     * Configuration exacte des rangs
     */
    const tierConfig = {
        S: ["cinderella", "detective"],
        A: ["red-riding-hood", "argos", "rex"],
        B: ["alf", "gratia", "bentham", "grimm", "lorin", "firtho", "cynthia-ii", "gucia"],
        C: ["captain-kaboom"]
    };

    const tierInfo = {
        S: { name: "TIER S", description: "Les personnages prioritaires", color: "#85443a" },
        A: { name: "TIER A", description: "Des personnages très solides", color: "#80643b" },
        B: { name: "TIER B", description: "Des personnages situationnels", color: "#435a70" },
        C: { name: "TIER C", description: "Des personnages plus spécialisés", color: "#49494f" }
    };

    /*
     * Récupération intelligente du roster (gère characters ou charactersData)
     */
    const roster = 
        (typeof characters !== "undefined" && Array.isArray(characters)) ? characters :
        (typeof charactersData !== "undefined" && Array.isArray(charactersData)) ? charactersData : [];

    if (!roster.length) {
        container.innerHTML = `
            <p class="tier-empty">
                Impossible de charger les personnages. 
                Vérifie que characters.js est bien inclus dans le HTML avant ce script.
            </p>
        `;
        return;
    }

    const normalize = value =>
        String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();

    function getRoleGroup(character) {
        const role = normalize(
            `${character.role || ""} ${character.roleLabel || ""}`
        );

        if (role.includes("dps") || role.includes("striker") || role.includes("porter")) return "dps";
        if (role.includes("support") || role.includes("soutien")) return "support";
        if (role.includes("tank") || role.includes("defender") || role.includes("survivalist")) return "tank";
        return "other";
    }

    function getCharacterLink(character) {
        const rawLink = character.link || "";
        if (rawLink && !rawLink.startsWith("http") && !rawLink.startsWith("javascript:")) {
            return rawLink;
        }
        return `character.html?id=${encodeURIComponent(character.id)}`;
    }

    function createCharacterButton(character) {
        const link = getCharacterLink(character);
        const wrapper = document.createElement("a");

        wrapper.className = "tier-character";
        wrapper.href = link;
        wrapper.setAttribute("aria-label", `Voir la fiche de ${character.name}`);

        const imageBox = document.createElement("span");
        imageBox.className = "tier-character-image";

        const image = document.createElement("img");
        // Ajustement automatique du chemin d'image si on est dans /pages/
        let imgPath = character.image || "";
        if (window.location.pathname.includes("/pages/") && imgPath && !imgPath.startsWith("../") && !imgPath.startsWith("http")) {
            imgPath = "../" + imgPath;
        }
        image.src = imgPath;
        image.alt = character.name;
        image.loading = "lazy";

        image.addEventListener("error", () => {
            image.remove();
            if (!imageBox.querySelector(".tier-character-fallback")) {
                const fallback = document.createElement("span");
                fallback.className = "tier-character-fallback";
                fallback.textContent = (character.name || "?").charAt(0).toUpperCase();
                imageBox.appendChild(fallback);
            }
        }, { once: true });

        imageBox.appendChild(image);

        const name = document.createElement("span");
        name.className = "tier-character-name";
        name.textContent = character.name;

        wrapper.append(imageBox, name);
        return wrapper;
    }

    function renderTier(tier, selectedRole) {
        const info = tierInfo[tier];
        const ids = tierConfig[tier] || [];

        const tierCharacters = ids
            .map(id => roster.find(character => character.id === id))
            .filter(Boolean)
            .filter(character =>
                selectedRole === "all" ||
                getRoleGroup(character) === selectedRole
            );

        if (!tierCharacters.length) return null;

        const row = document.createElement("section");
        row.className = "tier-row";
        row.dataset.tier = tier;
        row.setAttribute("aria-label", info.name);

        const rank = document.createElement("div");
        rank.className = "tier-rank";

        const letter = document.createElement("span");
        letter.className = "tier-rank-letter";
        letter.textContent = tier;

        const rankName = document.createElement("span");
        rankName.className = "tier-rank-name";
        rankName.textContent = info.name;

        rank.append(letter, rankName);

        const charactersGrid = document.createElement("div");
        charactersGrid.className = "tier-characters";

        tierCharacters.forEach(character => {
            charactersGrid.appendChild(createCharacterButton(character));
        });

        row.append(rank, charactersGrid);
        return row;
    }

    function renderTierList() {
        const selectedRole = roleFilter.value;
        container.replaceChildren();

        let visibleCount = 0;

        ["S", "A", "B", "C"].forEach(tier => {
            const row = renderTier(tier, selectedRole);
            if (row) {
                container.appendChild(row);
                visibleCount++;
            }
        });

        emptyMessage.hidden = visibleCount !== 0;
    }

    roleFilter.addEventListener("change", renderTierList);
    renderTierList();
})();