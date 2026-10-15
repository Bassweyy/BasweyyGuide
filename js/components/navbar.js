(function () {
if (window.__basweyyNavbarInit) return;
window.__basweyyNavbarInit = true;

const NAVBAR_SCRIPT_SRC = document.currentScript ? document.currentScript.src : "";

function loadScript(src) {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Échec du chargement : ${src}`));
        document.head.appendChild(script);
    });
}

async function ensureFirebaseAuthLoaded() {
    if (typeof firebase !== 'undefined' && firebase.auth) {
        return true;
    }
    try {
        await loadScript("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
        await loadScript("https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js");
        return typeof firebase !== 'undefined' && typeof firebase.auth === 'function';
    } catch (err) {
        console.error("Erreur lors du chargement de Firebase :", err);
        return false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header");
    if (!header) {
        console.error("Erreur : #site-header introuvable.");
        return;
    }

    const currentPath = window.location.pathname;
    const isInPagesFolder = currentPath.includes("/pages/");
    let rootPath = isInPagesFolder ? "../" : "";
    if (NAVBAR_SCRIPT_SRC) {
        rootPath = new URL("../../", NAVBAR_SCRIPT_SRC).href;
    }
    const pagesPath = "pages/";

    let currentPage = "";
    if (currentPath.endsWith("/") || currentPath.endsWith("/index.html")) {
        currentPage = "index";
    } else if (currentPath.includes("guides.html")) {
        currentPage = "guides";
    } else if (currentPath.includes("characters.html")) {
        currentPage = "characters";
    } else if (currentPath.includes("teams.html")) {
        currentPage = "teams";
    } else if (currentPath.includes("tier-list.html")) {
        currentPage = "tier-list";
    } else if (currentPath.includes("news.html")) {
        currentPage = "news";
    }

    const pageLinks = [
        { title: "Accueil", description: "Page principale de BASWEYY GUIDE", keywords: "home accueil silver palace wuthering waves", url: `${rootPath}index.html` },
        { title: "Guides", description: "Retrouver les guides du jeu", keywords: "guide tutoriel débutant astuces build", url: `${rootPath}${pagesPath}guides.html` },
        { title: "Personnages", description: "Découvrir les personnages et leurs rôles", keywords: "personnage personnages dps support sub-dps élément rareté", url: `${rootPath}${pagesPath}characters.html` },
        { title: "Teams", description: "Équipes et compositions recommandées", keywords: "team teams équipe équipes composition synergie", url: `${rootPath}${pagesPath}teams.html` },
        { title: "Tier List", description: "Classement des personnages", keywords: "tier list classement meilleur personnage", url: `${rootPath}${pagesPath}tier-list.html` },
        { title: "Actualités", description: "Nouveautés et informations du jeu", keywords: "actualités news patch notes mise à jour nouveauté", url: `${rootPath}${pagesPath}news.html` }
    ];

    // Injection du Style CSS du Menu Déroulant et de la Modale
    const style = document.createElement('style');
    style.innerHTML = `
        .user-dropdown-container { position: relative; display: inline-block; }
        .user-dropdown-menu {
            position: absolute; right: 0; top: calc(100% + 8px);
            background: #111317; border: 1px solid #232730; border-radius: 8px;
            width: 220px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            display: none; flex-direction: column; z-index: 1000; overflow: hidden;
        }
        .user-dropdown-menu.show { display: flex; }
        .dropdown-item {
            display: flex; align-items: center; gap: 10px; padding: 12px 16px;
            color: #d1d5db; font-size: 0.85rem; font-weight: 500; text-decoration: none;
            background: transparent; border: none; cursor: pointer; text-align: left;
            transition: background 0.2s, color 0.2s;
        }
        .dropdown-item:hover { background: #1a1d24; color: #fff; }
        .dropdown-item svg { width: 16px; height: 16px; fill: currentColor; }

        .modal-overlay {
            position: fixed; inset: 0; background: rgba(0,0,0,0.75);
            backdrop-filter: blur(4px); display: none; align-items: center;
            justify-content: center; z-index: 2000;
        }
        .modal-overlay.show { display: flex; }
        .linked-accounts-modal {
            background: #0f1115; border: 1px solid #21252d; border-radius: 12px;
            width: 100%; max-width: 440px; padding: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.8);
            position: relative; color: #fff; font-family: inherit;
        }
        .modal-title { font-size: 1.25rem; font-weight: 800; letter-spacing: 0.5px; margin-bottom: 6px; }
        .modal-subtitle { font-size: 0.8rem; color: #8b92a0; margin-bottom: 20px; line-height: 1.4; }
        .modal-close-btn {
            position: absolute; top: 20px; right: 20px; background: none; border: none;
            color: #8b92a0; font-size: 1.2rem; cursor: pointer; transition: color 0.2s;
        }
        .modal-close-btn:hover { color: #fff; }
        
        .account-card {
            background: #15181e; border: 1px solid #232730; border-radius: 8px;
            padding: 12px 16px; margin-bottom: 12px; display: flex; align-items: center;
            justify-content: space-between;
        }
        .account-info { display: flex; align-items: center; gap: 12px; }
        .account-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: bold; }
        .account-icon.google { background: #1a1d24; color: #ea4335; }
        .account-icon.twitch { background: #9146FF; color: #fff; }
        .account-name { font-size: 0.9rem; font-weight: 700; }
        .account-status { font-size: 0.75rem; color: #8b92a0; }
        .account-status.linked { color: #22c55e; display: flex; align-items: center; gap: 4px; }
        
        .account-btn {
            padding: 6px 16px; border-radius: 6px; font-size: 0.8rem; font-weight: 700;
            cursor: pointer; transition: all 0.2s; border: none;
        }
        .account-btn.btn-link { background: #232d3d; color: #3b82f6; border: 1px solid #1d4ed8; }
        .account-btn.btn-link:hover { background: #1d4ed8; color: #fff; }
        .account-btn.btn-unlink { background: #2a181c; color: #f87171; border: 1px solid #991b1b; }
        .account-btn.btn-unlink:hover { background: #991b1b; color: #fff; }
    `;
    document.head.appendChild(style);

    header.innerHTML = `
        <nav class="site-navbar" aria-label="Navigation principale">
            <div class="navbar-inner">

                <a href="${rootPath}index.html" class="navbar-logo" aria-label="BASWEYY GUIDE - Accueil">
                    <span class="navbar-logo-main">BASWEYY</span>
                    <span class="navbar-logo-sub">GUIDE</span>
                </a>

                <div class="navbar-links">
                    <a href="${rootPath}index.html" class="navbar-link ${currentPage === "index" ? "active" : ""}">Accueil</a>
                    <a href="${rootPath}${pagesPath}guides.html" class="navbar-link ${currentPage === "guides" ? "active" : ""}">Guides</a>
                    <a href="${rootPath}${pagesPath}characters.html" class="navbar-link ${currentPage === "characters" ? "active" : ""}">Personnages</a>
                    <a href="${rootPath}${pagesPath}teams.html" class="navbar-link ${currentPage === "teams" ? "active" : ""}">Teams</a>
                    <a href="${rootPath}${pagesPath}tier-list.html" class="navbar-link ${currentPage === "tier-list" ? "active" : ""}">Tier List</a>
                    <a href="${rootPath}${pagesPath}news.html" class="navbar-link ${currentPage === "news" ? "active" : ""}">Actualités</a>
                </div>

                <div class="navbar-actions">

                    <!-- BOUTON CONNEXION TWITCH -->
                    <button id="twitch-login-btn" class="navbar-icon-btn" type="button" title="Connexion Twitch" style="width: auto; padding: 0 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; gap: 6px; display: inline-flex; align-items: center; cursor: pointer; z-index: 10;">
                        <span>Twitch</span>
                    </button>

                    <!-- PROFIL UTILISATEUR ET MENU DÉROULANT -->
                    <div class="user-dropdown-container" id="user-profile-container" style="display: none;">
                        <div id="user-profile" style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                            <img id="user-avatar" src="" alt="Avatar" style="width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--gold-accent); object-fit: cover;">
                            <span id="user-name" style="font-size: 0.75rem; font-weight: 700; color: var(--gold-accent);"></span>
                            <span style="font-size: 0.6rem; color: #8b92a0;">▼</span>
                        </div>

                        <div class="user-dropdown-menu" id="user-dropdown-menu">
                            <button class="dropdown-item" id="open-linked-accounts">
                                <svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
                                Comptes liés
                            </button>
                            <button class="dropdown-item" onclick="alert('Historique à venir !')">
                                Historique d'Invocation
                            </button>
                            <button class="dropdown-item" id="logout-btn" style="color: #f87171;">
                                <svg viewBox="0 0 24 24"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>
                                Déconnexion
                            </button>
                        </div>
                    </div>

                    <div class="navbar-search">
                        <button class="navbar-icon-btn navbar-search-toggle" type="button" aria-label="Ouvrir la recherche"><svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.5"></circle><path d="m16 16 4.5 4.5"></path></svg></button>
                        <div class="navbar-search-panel" id="navbar-search-panel" hidden>
                            <form class="navbar-search-form" role="search">
                                <input class="navbar-search-input" type="search" placeholder="Rechercher sur le site...">
                                <button class="navbar-search-close" type="button">✕</button>
                            </form>
                            <div class="navbar-search-results"></div>
                        </div>
                    </div>

                    <button class="navbar-icon-btn navbar-theme-toggle" type="button">
                        <svg class="theme-icon theme-icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path></svg>
                        <svg class="theme-icon theme-icon-moon" viewBox="0 0 24 24"><path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.6 8.6 0 1 0 20.2 15.1Z"></path></svg>
                    </button>

                    <button class="navbar-menu-btn" type="button">☰</button>
                </div>
            </div>
        </nav>

        <!-- FENÊTRE MODALE : COMPTES LIÉS -->
        <div class="modal-overlay" id="linked-accounts-modal">
            <div class="linked-accounts-modal">
                <button class="modal-close-btn" id="close-modal-btn">✕</button>
                <div class="modal-title">COMPTES LIÉS</div>
                <div class="modal-subtitle">Lie plusieurs providers à un seul compte pour te connecter avec n'importe lequel.</div>

                <div class="account-card">
                    <div class="account-info">
                        <div class="account-icon google">G</div>
                        <div>
                            <div class="account-name">Google</div>
                            <div class="account-status" id="google-status">Non lié</div>
                        </div>
                    </div>
                    <button class="account-btn btn-link" id="google-action-btn">Lier</button>
                </div>

                <div class="account-card">
                    <div class="account-info">
                        <div class="account-icon twitch">👾</div>
                        <div>
                            <div class="account-name">Twitch</div>
                            <div class="account-status" id="twitch-status">Non lié</div>
                        </div>
                    </div>
                    <button class="account-btn btn-link" id="twitch-action-btn">Lier</button>
                </div>
            </div>
        </div>
    `;

    /* =========================
       LOGIQUE D'AUTHENTIFICATION & MODALE
    ========================= */
    const loginBtn = header.querySelector('#twitch-login-btn');
    const userProfileContainer = header.querySelector('#user-profile-container');
    const userProfile = header.querySelector('#user-profile');
    const userDropdownMenu = header.querySelector('#user-dropdown-menu');
    const userAvatar = header.querySelector('#user-avatar');
    const userName = header.querySelector('#user-name');
    const logoutBtn = header.querySelector('#logout-btn');

    const modal = document.getElementById('linked-accounts-modal');
    const openModalBtn = header.querySelector('#open-linked-accounts');
    const closeModalBtn = document.getElementById('close-modal-btn');

    const googleActionBtn = document.getElementById('google-action-btn');
    const twitchActionBtn = document.getElementById('twitch-action-btn');
    const googleStatus = document.getElementById('google-status');
    const twitchStatus = document.getElementById('twitch-status');

    const firebaseConfig = {
        apiKey: "AIzaSyC7ye2-ly4tg-MMdMSA3iYr0SdKuRAZ2LM",
        authDomain: "basweyy-guide.firebaseapp.com",
        projectId: "basweyy-guide",
        storageBucket: "basweyy-guide.firebasestorage.app",
        messagingSenderId: "974172485220",
        appId: "1:974172485220:web:0cd2a1e2bf10f7c9571171",
        measurementId: "G-GFZ3G8XY6B"
    };

    const DEFAULT_AVATAR = "https://static-cdn.jtvnw.net/user-default-pictures-uv/75305db0-3a59-4304-b6d3-3fc1dbe57f42-profile_image-300x300.png";

    function updateUI(user) {
        if (user) {
            if (loginBtn) loginBtn.style.display = 'none';
            if (userProfileContainer) userProfileContainer.style.display = 'block';

            const name = user.displayName || localStorage.getItem('twitch_name') || 'Utilisateur';
            const photo = user.photoURL || localStorage.getItem('twitch_picture') || DEFAULT_AVATAR;

            if (userAvatar) { userAvatar.src = photo; userAvatar.onerror = () => { userAvatar.src = DEFAULT_AVATAR; }; }
            if (userName) userName.textContent = name;

            // Analyse des providers liés au compte Firebase actuel
            let hasGoogle = false;
            let hasTwitch = false;

            user.providerData.forEach(p => {
                if (p.providerId === 'google.com') hasGoogle = true;
                if (p.providerId.includes('twitch') || p.providerId === 'oidc.twitch' || p.providerId === 'oidc.basweyy-guide') hasTwitch = true;
            });

            // Mise à jour des statuts dans la modale
            if (googleStatus && googleActionBtn) {
                if (hasGoogle) {
                    googleStatus.textContent = "✓ Lié";
                    googleStatus.className = "account-status linked";
                    googleActionBtn.textContent = "Délier";
                    googleActionBtn.className = "account-btn btn-unlink";
                } else {
                    googleStatus.textContent = "Non lié";
                    googleStatus.className = "account-status";
                    googleActionBtn.textContent = "Lier";
                    googleActionBtn.className = "account-btn btn-link";
                }
            }

            if (twitchStatus && twitchActionBtn) {
                if (hasTwitch) {
                    twitchStatus.textContent = "✓ Lié";
                    twitchStatus.className = "account-status linked";
                    twitchActionBtn.textContent = "Délier";
                    twitchActionBtn.className = "account-btn btn-unlink";
                } else {
                    twitchStatus.textContent = "Non lié";
                    twitchStatus.className = "account-status";
                    twitchActionBtn.textContent = "Lier";
                    twitchActionBtn.className = "account-btn btn-link";
                }
            }

        } else {
            if (loginBtn) loginBtn.style.display = 'inline-flex';
            if (userProfileContainer) userProfileContainer.style.display = 'none';
            if (userDropdownMenu) userDropdownMenu.classList.remove('show');
        }
    }

    // Gestion du menu déroulant
    userProfile?.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdownMenu?.classList.toggle('show');
    });
    document.addEventListener('click', () => userDropdownMenu?.classList.remove('show'));

    // Modale
    openModalBtn?.addEventListener('click', () => {
        userDropdownMenu?.classList.remove('show');
        modal?.classList.add('show');
    });
    closeModalBtn?.addEventListener('click', () => modal?.classList.remove('show'));
    modal?.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });

    ensureFirebaseAuthLoaded().then((firebaseReady) => {
        if (firebaseReady) {
            if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

            firebase.auth().onAuthStateChanged((user) => updateUI(user));

            // Connexion principale via le bouton Twitch de la navbar
            if (loginBtn) {
                loginBtn.addEventListener('click', () => {
                    if (loginBtn.disabled) return;
                    loginBtn.disabled = true;

                    const provider = new firebase.auth.OAuthProvider('oidc.twitch');
                    provider.addScope('openid');
                    provider.addScope('user:read:email');

                    firebase.auth().signInWithPopup(provider)
                        .then((result) => {
                            const profileData = result.additionalUserInfo ? result.additionalUserInfo.profile : {};
                            const twitchName = profileData.preferred_username || profileData.name || profileData.login || result.user.displayName;
                            const twitchPicture = profileData.picture || profileData.profile_image_url || result.user.photoURL;

                            if (twitchName) localStorage.setItem('twitch_name', twitchName);
                            if (twitchPicture) localStorage.setItem('twitch_picture', twitchPicture);

                            if (result.user && (twitchName || twitchPicture)) {
                                result.user.updateProfile({ displayName: twitchName, photoURL: twitchPicture })
                                    .then(() => updateUI(firebase.auth().currentUser));
                            }
                        })
                        .catch((error) => console.error("Erreur de connexion Twitch :", error))
                        .finally(() => { loginBtn.disabled = false; });
                });
            }

            // Gestion des actions (Lier / Délier) Google depuis la modale
            googleActionBtn?.addEventListener('click', () => {
                const user = firebase.auth().currentUser;
                if (!user) return;

                const isLinked = user.providerData.some(p => p.providerId === 'google.com');

                if (isLinked) {
                    // Délier Google
                    user.unlink('google.com').then(() => {
                        updateUI(firebase.auth().currentUser);
                    }).catch((err) => alert("Erreur lors du délinkage : " + err.message));
                } else {
                    // Lier Google
                    const provider = new firebase.auth.GoogleAuthProvider();
                    user.linkWithPopup(provider).then((result) => {
                        updateUI(firebase.auth().currentUser);
                    }).catch((err) => alert("Erreur lors de la liaison Google : " + err.message));
                }
            });

            // Gestion des actions (Lier / Délier) Twitch depuis la modale
            twitchActionBtn?.addEventListener('click', () => {
                const user = firebase.auth().currentUser;
                if (!user) return;

                const isLinked = user.providerData.some(p => p.providerId.includes('twitch') || p.providerId === 'oidc.twitch');

                if (isLinked) {
                    // Trouver l'ID exact du provider Twitch lié
                    const twitchProviderData = user.providerData.find(p => p.providerId.includes('twitch') || p.providerId === 'oidc.twitch');
                    if (twitchProviderData) {
                        user.unlink(twitchProviderData.providerId).then(() => {
                            updateUI(firebase.auth().currentUser);
                        }).catch((err) => alert("Erreur lors du délinkage Twitch : " + err.message));
                    }
                } else {
                    const provider = new firebase.auth.OAuthProvider('oidc.twitch');
                    provider.addScope('openid');
                    provider.addScope('user:read:email');
                    user.linkWithPopup(provider).then((result) => {
                        updateUI(firebase.auth().currentUser);
                    }).catch((err) => alert("Erreur lors de la liaison Twitch : " + err.message));
                }
            });

            // Déconnexion
            logoutBtn?.addEventListener('click', () => {
                firebase.auth().signOut().then(() => {
                    localStorage.removeItem('twitch_name');
                    localStorage.removeItem('twitch_picture');
                    modal?.classList.remove('show');
                });
            });
        }
    });

    /* =========================
       THEME / SEARCH / MOBILE MENU
    ========================= */
    const themeButton = header.querySelector(".navbar-theme-toggle");
    function applyTheme(theme) { document.documentElement.dataset.theme = theme === "light" ? "light" : "dark"; }
    let savedTheme = "dark";
    try { savedTheme = localStorage.getItem("basweyy-theme") || "dark"; } catch (e) {}
    applyTheme(savedTheme);
    themeButton?.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        applyTheme(nextTheme);
        try { localStorage.setItem("basweyy-theme", nextTheme); } catch (e) {}
    });
});
})();