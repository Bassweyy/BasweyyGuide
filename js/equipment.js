document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DONNÉES GLOBALES DES ÉQUIPEMENTS
  // ==========================================

  const toolsData = [
    {
      name: "Droit divin de la Reine",
      img: "../assets/images/Cruauté.webp",
      effect: "Ensemble de 4 : Augmente l’efficacité ultime de charge du détenteur de 15 %. Lorsque le multiplicateur d’amplitude du personnage dépasse 150 %, tous les autres membres de l’équipe gagnent 18 % de multiplicateur d’amplitude.",
      lore: "Aucune information de lore disponible.",
      pieces: [  
        { name: "Le monarque en tant qu'État", icon: "../assets/images/Monarque.webp", stats: { "DEF": 132, "HP": 2646, "HP %": "12.00%", "DMG Bonus": "7.50%", "Coefficient d'amplitude": "7.50%" } },
        { name: "La ruse du renard, la puissance du lion", icon: "../assets/images/LaRuseDuRenard.webp", stats: { "DEF": 165, "HP": 882, "ATK %": "10.00%", "Coefficient d'amplitude": "7.50%", "Multiplicateur d'amplitude": "12.50%" } },
        { name: "La terreur avant l’adoration", icon: "../assets/images/LaTerreurAvantL'Adoration.webp", stats: { "DEF": 165, "ATK": 88, "Efficacité ultime de charge": "12.50%", "ATK %": "6.00%", "DMG Bonus": "3.00%" } },
        { name: "N’ayez pas peur de la cruauté", icon: "../assets/images/Cruauté.webp", stats: { "DEF": 68, "ATK": 264, "Efficacité ultime de charge": "25.00%", "HP %": "12.00%", "Multiplicateur d'amplitude": "25.00%" } }
      ]
    },
    {
      name: "Servir et protéger",
      img: "../assets/images/ServirEtProteger.webp",
      effect: "Ensemble de 4 : Augmente le multiplicateur d’amplitude du détenteur de 42 %. Lorsque le coefficient d’amplitude du détenteur dépasse 50 %, il gagne également Fureur Tonitruante, augmentant encore son multiplicateur d’amplitude de 42 %.",
      lore: "Aucune information de lore disponible.",
      pieces: [
        { name: "Défenseur de la justice", icon: "../assets/images/DefenseurDeLaJustice.webp", stats: { "DEF": 132, "HP": 2646, "ATK %": "12.00%", "DMG Bonus": "7.50%", "HP %": "6.00%" } },
        { name: "Défenseur de l'Ordre", icon: "../assets/images/DefenseurDeL'Ordre.webp", stats: { "DEF": 165, "HP": 882, "Multiplicateur d'amplitude": "31.25%", "Efficacité ultime de charge": "7.50%", "HP %": "4.00%" } },
        { name: "Broyeur du Mal", icon: "../assets/images/BroyeurDuMal.webp", stats: { "DEF": 165, "ATK": 88, "DMG Bonus": "7.50%", "ATK %": "6.00%", "Coefficient d'amplitude": "5.00%" } },
        { name: "Éradicateur des Sans-la-loi", icon: "../assets/images/ServirEtProteger.webp", stats: { "DEF": 66, "ATK": 264, "Coefficient d'amplitude": "25.00%", "Multiplicateur d'amplitude": "37.50%", "Efficacité ultime de charge": "10.00%" } }
      ]
    },
    {
      name: "Code du Serviteur",
      img: "../assets/images/CodeDuServiteur.webp",
      effect: "Set de 4 : Augmente les PV du détenteur de 12 %. Lorsque l’efficacité ultime de charge du personnage dépasse 150 %, tous les autres membres de l’équipe gagnent 6 % de dégâts.",
      lore: "Aucune information de lore disponible.",
      pieces: [
        { name: "Pour une maison bien rangée", icon: "../assets/images/PourUneMaisonBienRangée.webp", stats: { "DEF": 132, "HP": 2646, "HP %": "12.00%", "DMG Bonus": "7.50%", "Taux CRIT": "7.50%" } },
        { name: "Pour une serrure secrète", icon: "../assets/images/PourUneSerrureSecrète.webp", stats: { "DEF": 165, "HP": 882, "ATK %": "10.00%", "Taux CRIT": "7.50%", "CRIT DMG": "12.50%" } },
        { name: "Pour un sommeil paisible", icon: "../assets/images/PourUnSommeilPaisible.webp", stats: { "DEF": 165, "ATK": 88, "Efficacité ultime de charge": "12.50%", "ATK %": "6.00%", "DMG Bonus": "3.00%" } },
        { name: "Pour un bel après-midi", icon: "../assets/images/CodeDuServiteur.webp", stats: { "DEF": 66, "ATK": 264, "Efficacité ultime de charge": "25.00%", "HP %": "12.00%", "CRIT DMG": "25.00%" } }
      ]
    },
    {
      name: "La lumière pré-argent",
      img: "../assets/images/LumierePreArgent.webp",
      effect: "Ensemble de 4 : Augmente l’efficacité ultime de charge du détenteur de 15 %. Lorsque le GRT CRIT du personnage dépasse 150 %, tous les autres membres de l’équipe gagnent 18 % de DÉM CRIT.",
      lore: "Aucune information de lore disponible.",
      pieces: [
        { name: "Terre baignée de lumière", icon: "../assets/images/TerreBaignéDeLumière.webp", stats: { "DEF": 132, "HP": 2646, "HP %": "12.00%", "DMG Bonus": "7.50%", "Taux CRIT": "7.50%" } },
        { name: "Enseignements chéris", icon: "../assets/images/EnseignementsChéris.webp", stats: { "DEF": 165, "HP": 882, "ATK %": "10.00%", "Taux CRIT": "7.50%", "CRIT DMG": "12.50%" } },
        { name: "La compassion éclaire tous", icon: "../assets/images/LaCompassionEclaireTous.webp", stats: { "DEF": 165, "ATK": 88, "Efficacité ultime de charge": "12.50%", "ATK %": "6.00%", "DMG Bonus": "3.00%" } },
        { name: "Champs d'Abondance", icon: "../assets/images/LumierePreArgent.webp", stats: { "DEF": 66, "ATK": 264, "Efficacité ultime de charge": "25.00%", "HP %": "12.00%", "CRIT DMG": "25.00%" } }
      ]
    },
    {
      name: "Serment d’Hippocrate",
      img: "../assets/images/SermentD'Hippocrate.webp",
      effect: "Set de 4 : Augmente le bonus de soin du détenteur de 12 %. Lorsque l’efficacité de charge ultime du personnage dépasse 150 %, tous les autres membres de l’équipe gagnent 8 % d’ATK.",
      lore: "Aucune information de lore disponible.",
      pieces: [
        { name: "Maladie inévitable", icon: "../assets/images/MaladieInévitable.webp", stats: { "DEF": 132, "HP": 2646, "HP %": "12.00%", "DMG Bonus": "7.50%", "Coefficient d'amplitude": "7.50%" } },
        { name: "Rythme de la vie", icon: "../assets/images/Rythme.webp", stats: { "DEF": 165, "HP": 882, "ATK %": "10.00%", "Coefficient d'amplitude": "7.50%", "Multiplicateur d'amplitude": "12.50%" } },
        { name: "Unique chemin vers la guérison", icon: "../assets/images/UniqueCheminVersLaGuérison.webp", stats: { "DEF": 165, "ATK": 88, "Efficacité ultime de charge": "12.50%", "ATK %": "6.00%", "DMG Bonus": "3.00%" } },
        { name: "Le procès d'une vie", icon: "../assets/images/SermentD'Hippocrate.webp", stats: { "DEF": 66, "ATK": 264, "Efficacité ultime de charge": "25.00%", "HP %": "12.00%", "Multiplicateur d'amplitude": "25.00%" } }
      ]
    },
    {
      name: "Les rouages de la ville",
      img: "../assets/images/RouagedeLaVille.webp",
      effect: "Set de 4 : Augmente l'exploit de rupture du détenteur de 60. Lorsque l'exploit de rupture du personnage dépasse 200, il gagne également 25 % de bonus d’accumulation d’étourdissement pendant 14 secondes chaque fois qu'il effectue une attaque chargée.",
      lore: "Aucune information de lore disponible.",
      pieces: [
        { name: "Bouchon antipoussière non étanche", icon: "../assets/images/Bouchon.webp", stats: { "DEF": 132, "HP": 2646, "ATK %": "12.00%", "DMG Bonus": "7.50%", "HP %": "6.00%" } },
        { name: "Serviette non absorbante", icon: "../assets/images/Serviette.webp", stats: { "DEF": 165, "HP": 882, "Non-Break DMG": "15.62%", "Efficacité ultime de charge": "7.50%", "HP %": "4.00%" } },
        { name: "Clé non tournante", icon: "../assets/images/Clé.webp", stats: { "DEF": 165, "ATK": 88, "DMG Bonus": "7.50%", "ATK %": "6.00%", "Exploit de rupture": "20" } },
        { name: "Boîte à déjeuner non isolée", icon: "../assets/images/Boite.webp", stats: { "DEF": 66, "ATK": 264, "Exploit de rupture": "100", "Non-Break DMG": "18.75%", "Efficacité ultime de charge": "10.00%" } }
      ]
    },
    {
      name: "Illusion de la vie",
      img: "../assets/images/Illusion.webp",
      effect: "Ensemble de 4 : Augmente le coefficient d’amplitude du détenteur de 15 %. Lorsque le coefficient d’amplitude du personnage dépasse 50 %, chaque utilisation de compétence augmente aussi son ATK de 8 % pour 8 secondes, pouvant s’accumuler jusqu’à 2 fois.",
      lore: "Aucune information de lore disponible.",
      pieces: [
        { name: "Pensées tourbillonnantes", icon: "../assets/images/Pensée.webp", stats: { "DEF": 132, "HP": 2646, "ATK %": "12.00%", "DMG Bonus": "7.50%", "HP %": "6.00%" } },
        { name: "Voyage de l'Argent Strand", icon: "../assets/images/Voyage.webp", stats: { "DEF": 165, "HP": 882, "Multiplicateur d'amplitude": "31.25%", "Efficacité ultime de charge": "7.50%", "HP %": "4.00%" } },
        { name: "Cycle temporel", icon: "../assets/images/Cycles.webp", stats: { "DEF": 165, "ATK": 88, "DMG Bonus": "7.50%", "ATK %": "6.00%", "Coefficient d'amplitude": "5.00%" } },
        { name: "Échos conscients", icon: "../assets/images/Echos.webp", stats: { "DEF": 66, "ATK": 264, "Coefficient d'amplitude": "25.00%", "Multiplicateur d'amplitude": "37.50%", "Efficacité ultime de charge": "10.00%" } }
      ]
    },
    {
      name: "Élitisme",
      img: "../assets/images/Elitisme.webp",
      effect: "Ensemble de 4 : Augmente le dégât du porteur de 8 %. Lorsque le bonus de dégâts dépasse 30 %, il gagne aussi 1 stack de foudre chaque fois qu’il utilise une compétence, augmentant ainsi son bonus d’accumulation d’étourdissement de 12,5 % pendant 14 secondes. Ça peut s’accumuler jusqu’à 2 fois.",
      lore: "« Réservé à une élite fermée qui domine les hautes sphères de la société. »",
      pieces: [
        { name: "L'ère de la technologie", icon: "../assets/images/Ere.webp", stats: { "DEF": 132, "HP": 2646, "ATK %": "12.00%", "DMG Bonus": "7.50%", "HP %": "6.00%" } },
        { name: "Un avenir axé sur l'innovation", icon: "../assets/images/Avenir.webp", stats: { "DEF": 165, "HP": 882, "Non-Break DMG": "15.62%", "Efficacité ultime de charge": "7.50%", "HP %": "4.00%" } },
        { name: "Industrie de la gloire", icon: "../assets/images/Industrie.webp", stats: { "DEF": 165, "ATK": 88, "DMG Bonus": "7.50%", "ATK %": "6.00%", "Exploit de rupture": "20" } },
        { name: "Efficacité ultime", icon: "../assets/images/Elitisme.webp", stats: { "DEF": 66, "ATK": 264, "Exploit de rupture": "100", "Non-Break DMG": "18.75%", "Efficacité ultime de charge":"10.00%" } }
      ]
    },
    {
      name: "Hé, Jack",
      img: "../assets/images/He.webp",
      effect: "Série de 4 : Augmente le bonus d’étourdissement du détenteur de 25 %. Lorsque le bonus d’accumulation d’étourdissement du personnage dépasse 100 %, placer une attaque de base sur un ennemi ou effectuer une esquive parfaite accorde respectivement 1 ou 3 charges d’All In (All In Bonus). Chaque accumulation de All In augmente les dégâts chargés du personnage de 3 % pendant 8 secondes, pouvant s’accumuler jusqu’à 3 fois.",
      lore: "Aucune information de lore disponible.",
      pieces: [
        { name: "L'Aveugle", icon: "../assets/images/L'Aveugle.webp", stats: { "DEF": 132, "HP": 2646, "ATK %": "12.00%", "DMG Bonus": "7.50%", "HP %": "6.00%" } },
        { name: "Le Souhaiteur", icon: "../assets/images/LeSouhaiteur.webp", stats: { "DEF": 165, "HP": 882, "Non-Break DMG": "15.62%", "Efficacité ultime de charge": "7.50%", "HP %": "4.00%" } },
        { name: "Le Collecteur de dettes", icon: "../assets/images/LeCollecteurDeDettes.webp", stats: { "DEF": 165, "ATK": 88, "DMG Bonus": "7.50%", "ATK %": "6.00%", "Exploit de rupture": "20" } },
        { name: "Le Tricheur", icon: "../assets/images/LeTricheur.webp", stats: { "DEF": 66, "ATK": 264, "Exploit de rupture": "100", "Non-Break DMG": "18.75%", "Efficacité ultime de charge": "10.00%" } }
      ]
    },
    {
      name: "Le Chasseur et le Traqué",
      img: "../assets/images/Chasseur.webp",
      effect: "Set de 4 : Augmente l’ATK du détenteur de 12 %. Lorsque l’efficacité de charge ultime du personnage dépasse 150 %, son ATK augmente encore de 12 %.",
      lore: "Aucune information de lore disponible.",
      pieces: [
        { name: "L'Ombre du Chasseur", icon: "../assets/images/Chasseur.webp", stats: { "DEF": 132, "HP": 2646, "ATK %": "12.00%", "DMG Bonus": "7.50%", "HP %": "6.00%" } },
        { name: "Tirage dans le filet", icon: "../assets/images/Tirage.webp", stats: { "DEF": 165, "HP": 882, "CRIT DMG": "31.25%", "Efficacité ultime de charge": "7.50%", "HP %": "4.00%" } },
        { name: "Un jugement de sang", icon: "../assets/images/Jugement.webp", stats: { "DEF": 165, "ATK": 88, "DMG Bonus": "7.50%", "ATK %": "6.00%", "Taux CRIT": "5.00%" } },
        { name: "Le gagnant mange tout", icon: "../assets/images/Gagnant.webp", stats: { "DEF": 66, "ATK": 264, "Taux CRIT": "25.00%", "CRIT DMG": "37.50%", "Efficacité ultime de charge":"10.00%" } }
      ]
    },
    {
      name: "Braises et Flammes",
      img: "../assets/images/BraisesEtFlammes.webp",
      effect: "Ensemble de 4 : Augmente le taux CRIT du titulaire de 15 %. Lorsque le taux CRIT du personnage dépasse 70 %, chaque utilisation d’Ultime augmente aussi ses dégâts d’attaque de base de 15 % pendant 16 secondes.",
      lore: "Aucune information de lore disponible.",
      pieces: [
        { name: "La mort est maintenant le nid du phénix", icon: "../assets/images/Mort.webp", stats: { "DEF": 132, "HP": 2646, "ATK %": "12.00%", "DMG Bonus": "7.50%", "HP %": "6.00%" } },
        { name: "Yeux de flamme vacillante", icon: "../assets/images/Yeux.webp", stats: { "DEF": 165, "HP": 882, "CRIT DMG": "31.25%", "Efficacité ultime de charge": "7.50%", "HP %": "4.00%" } },
        { name: "Flamme Ébranlante", icon: "../assets/images/Flamme.webp", stats: { "DEF": 165, "ATK": 88, "DMG Bonus": "7.50%", "ATK %": "6.00%", "Taux CRIT": "5.00%" } },
        { name: "Attendre, ou espérer", icon: "../assets/images/Attendre.webp", stats: { "DEF": 66, "ATK": 264, "Taux CRIT": "25.00%", "CRIT DMG": "37.50%", "Efficacité ultime de charge": "10.00%" } }
      ]
    },
    {
      name: "City Grime Alliance",
      img: "../assets/images/City.webp",
      effect: "Set de 4 : Le détenteur accorde une augmentation de 8 % des dégâts à tous les personnages de l’équipe partageant le même attribut de réacteur.",
      lore: "Aucune information de lore disponible.",
      pieces: [
        { name: "Luttes individuelles", icon: "../assets/images/Luttes.webp", stats: { "DEF": 132, "HP": 2646, "HP %": "12.00%", "DMG Bonus": "7.50%", "Taux CRIT": "7.50%" } },
        { name: "Chez soi dans la tempête", icon: "../assets/images/ChezSoi.webp", stats: { "DEF": 165, "HP": 882, "ATK %": "10.00%", "Taux CRIT": "7.50%", "CRIT DMG": "12.50%" } },
        { name: "Fanfare entraînante", icon: "../assets/images/Fanfare.webp", stats: { "DEF": 165, "ATK": 88, "Efficacité ultime de charge": "12.50%", "ATK %": "6.00%", "DMG Bonus": "3.00%" } },
        { name: "Dernières histoires", icon: "../assets/images/City.webp", stats: { "DEF": 66, "ATK": 264, "Efficacité ultime de charge": "25.00%", "HP %": "12.00%", "CRIT DMG": "25.00%" } }
      ]
    }
  ];

  const catalystsData = [
    {
      name: "Asphalte",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Adversaire puissant, boutique",
      desc: "Pour 16 secondes après que le porteur ait déclenché l'Assaut Tactique :<br><br>Gain +6 % de dégâts.",
      img: "../assets/images/Tin.webp"
    },
    {
      name: "Galena",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Acte II Quête principale, « Docteur »",
      desc: "Pour 16 secondes après que le porteur ait déclenché l'Assaut Tactique :<br><br>Chaque coup réussi augmente le taux de CRIT du personnage de 1 % pendant 8 secondes, jusqu'à 7 fois.",
      img: "../assets/images/Tin.webp"
    },
    {
      name: "Alumalloy",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Adversaire puissant, quartier de l’église sud",
      desc: "Pour 16 secondes après que le porteur ait déclenché l’Assaut Tactique : Attribut La pénétration RES augmente lorsque le nombre d’ennemis dans un rayon de 5 mètres diminue, passant de 3 % avec 3 ennemis à 9 % avec 1 ennemi.",
      img: "../assets/images/Cryoflux.webp"
    },
    {
      name: "Pierre",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Donjon de ravitaillement",
      desc: "Après que le détenteur déclenche l’Assaut Tactique : Tous les coéquipiers gagnent un bouclier qui absorbe les dégâts équivalant à 12 % des PV du personnage sur le terrain pendant 25 secondes.",
      img: "../assets/images/Tin.webp"
    },
    {
      name: "Wolframite",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Adversaire puissant, Trimestre des Finances",
      desc: "Pour les 12 secondes après que le porteur déclenche l'Assaut Tactique :<br><br>Plus le personnage est proche de l'ennemi, plus il inflige de dégâts : jusqu'à 9 % de bonus contre les ennemis à moins d'un mètre, et aucun bonus s'il dépasse 3,5 mètres.",
      img: "../assets/images/Wolframite.webp"
    },
    {
      name: "Ferroxène",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Extraction d'otages, tête de pont",
      desc: "Pour 16 secondes après que le porteur ait déclenché l'Assaut Tactique :<br><br>Les dégâts infligés par ce personnage ne peuvent pas accumuler des débuffs d'attributs ou des valeurs d'étourdissement. Le personnage gagne à la place un bonus de 18 % de dégâts.",
      img: "../assets/images/Tin.webp"
    },
    {
      name: "Cryoflux",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Adversaire puissant, Première Couronne",
      desc: "Lorsque le porteur déclenche l'Assaut Tactique, récupérez 25 % des Silverdrips.",
      img: "../assets/images/Cryoflux.webp"
    },
    {
      name: "Acide acétique",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Percée mentale I",
      desc: "Pour les 12 secondes après que le porteur déclenche l'Assaut Tactique :<br><br>Le personnage gagne une Efficacité de Soins de +25 %.",
      img: "../assets/images/Tin.webp"
    },
    {
      name: "Vulkanash",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Percée mentale II",
      desc: "Pour 16 secondes après que le porteur déclenche l'Assaut Tactique :<br><br>Lorsque le dégât Ignis du détenteur déclenche un coup critique, tous les coéquipiers récupèrent 1 Silverdrip, jusqu'à 2 fois par seconde.",
      img: "../assets/images/Sulfate.webp"
    },
    {
      name: "Hexogen",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Adversaire puissant, Meadow",
      desc: "Pour 16 secondes après que le porteur ait déclenché l'Assaut Tactique :<br><br>Quand le personnage tue un ennemi, il déclenche une explosion qui inflige des dégâts d'Ignis équivalents à 70 % d'ATK.",
      img: "../assets/images/Sulfate.webp"
    },
    {
      name: "Sulfate",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Extraction d'otages, tête de pont",
      desc: "Pour 16 secondes après que le porteur ait déclenché l'Assaut Tactique :<br><br>En appliquant un effet de résonance à un ennemi, le personnage gagne +11 % d'ATK pendant 12 secondes.",
      img: "../assets/images/Sulfate.webp"
    },
    {
      name: "Plomb",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Adversaire puissant, quartier de l'église nord",
      desc: "Pour les 12 secondes après que le porteur déclenche l'Assaut Tactique :<br><br>La compétence du personnage augmente l'efficacité d'accumulation de résonance de 24 %.",
      img: "../assets/images/Tin.webp"
    },
    {
      name: "Acide nitrique",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Adversaire puissant, Toroïde central",
      desc: "Pour les 12 secondes après que le porteur déclenche l'Assaut Tactique :<br><br>Coefficient d'amplitude du caractère +7 %.",
      img: "../assets/images/Tin.webp"
    },
    {
      name: "Antimoine",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Adversaire puissant, quartier de la branche UMI",
      desc: "Pour les 12 secondes après que le porteur déclenche l'Assaut Tactique :<br><br>Chaque fois que le personnage parle avec succès, il gagne 3 charges de Focus, jusqu'à un maximum de 6. Tant que Focus est actif, la prochaine attaque du personnage sera critique. La concentration dure 12 secondes.",
      img: "../assets/images/Tin.webp"
    },
    {
      name: "Alkali",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Adversaire puissant, Riverside",
      desc: "Pour les 12 secondes après que le porteur déclenche l'Assaut Tactique :<br><br>L'Exécution du personnage réduit la DEF de l'ennemi de 12 % pendant 16 secondes.",
      img: "../assets/images/Tin.webp"
    },
    {
      name: "Glace sèche",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Adversaire puissant, Tête de pont",
      desc: "Pour 16 secondes après que le porteur ait déclenché l'Assaut Tactique :<br><br>En appliquant l'Effet de Résonance à un ennemi, récupérez immédiatement 12 Silverdrips et réduisez le temps de recharge ultime de 10 %.",
      img: "../assets/images/Cryoflux.webp"
    },
    {
      name: "Tin",
      rarity: "4★",
      type: "Catalyseurs",
      source: "Percée mentale III",
      desc: "Lorsque le porteur déclenche Assaut Tactique, soignez toute l'équipe pour 18 % des PV du personnage.",
      img: "../assets/images/Tin.webp"
    }
  ];

  const motivesData = [
    {
      name: "Le mystère des sosies", rarity: 5, identity: "Héros", mobile: "Sosie", hp: "21,600", atk: "2,640", crit: "+0.5%", img: "../assets/images/MystereDesSosies.webp",
      effects: {
        1: "Le personnage utilisant ce Motif gagne 25 % de CRIT Rate. Lors d’un Assaut Tactique, leur ATK augmente de 20 % pendant 16 secondes ; lorsqu’il déclenche une compétence, leur taux CRIT augmente de 25 % pendant les 4 secondes.",
        2: "Le personnage utilisant ce Motif gagne 30 % de CRIT Rate. Lors d’un Assaut Tactique, leur ATK augmente de 24 % pendant 16 secondes ; lorsqu’ils déclenchent une compétence, leur taux CRIT augmente de 30 % pendant 4 secondes.",
        3: "Le personnage utilisant ce Motif gagne 35 % de taux de CRIT. Lors d’un assaut tactique, leur ATK augmente de 28 % pendant 16 secondes ; lorsqu’ils déclenchent une compétence, leur taux CRIT est augmenté de 35 % pendant les 4 secondes.",
        4: "Le personnage utilisant ce Motif gagne 40 % de taux de CRIT. Lors d’un Assaut Tactique, leur ATK augmente de 32 % pendant 16 secondes ; lorsqu’ils déclenchent une compétence, leur taux CRIT augmente de 40 % pendant 4 secondes.",
        5: "Le personnage utilisant ce Motif gagne 45 % de Taux CRIT. Lors d’un assaut tactique, leur ATK augmente de 36 % pendant 16 secondes ; lorsqu’ils déclenchent une compétence, leur taux CRIT augmente de 45 % pendant les 4 secondes."
      }
    },
    {
      name: "Le mystère de l'ordonnance", rarity: 5, identity: "Héros", mobile: "Ordonnance", hp: "21,000", atk: "2,640", crit: "+0.5%", img: "../assets/images/motif_rex.webp",
      effects: {
        1: "Le personnage utilisant ce Motif gagne un coefficient d’amplitude de 25 %. Lorsqu’ils déclenchent leur Assaut Tactique, ils gagnent 73 % de multiplicateur d’amplitude pendant 18 secondes.",
        2: "Le personnage utilisant ce Motif gagne un coefficient d’amplitude de 30 %. Lorsqu’ils déclenchent leur Assaut Tactique, ils gagnent 80 % de multiplicateur d’amplitude pendant 18 secondes.",
        3: "Le personnage utilisant ce Motif gagne un coefficient d’amplitude de 35 %. Lorsqu’ils déclenchent leur Assaut Tactique, ils gagnent 102,2 % de multiplicateur d’amplitude pendant 18 secondes.",
        4: "Le personnage utilisant ce Motif gagne un coefficient d’amplitude de 40 %. Lorsqu’ils déclenchent leur Assaut Tactique, ils gagnent 116,8 % de multiplicateur d’amplitude pendant 18 secondes.",
        5: "Le personnage utilisant ce Motif gagne un coefficient d’amplitude de 45 %. Lors de leur Assaut Tactique, ils gagnent un multiplicateur d’amplitude de 131,4 % pendant 18 secondes."
      }
    },
    {
      name: "Le Mystère de la Chevalerie", rarity: 5, identity: "Gardien", mobile: "Chevalerie", hp: "26,400", atk: "2,160", crit: "+0.4%", img: "../assets/images/motif_gratia.webp",
      effects: {
        1: "Le personnage utilisant ce Motif gagne 20 % de PV Max. Chaque fois qu'il accorde un Bouclier, l'ATK de tous les personnages de l'équipe augmente de 16 % pendant 40 secondes.",
        2: "Le personnage utilisant ce Motif gagne 24 % de PV Max. Chaque fois qu'il accorde un Bouclier, l'ATK de tous les personnages de l'équipe augmente de 19,2 % pendant 40 secondes.",
        3: "Le personnage utilisant ce Motif gagne 28 % de PV Max. Chaque fois qu'il accorde un Bouclier, l'ATK de tous les personnages de l'équipe augmente de 22,4 % pendant 40 secondes.",
        4: "Le personnage utilisant ce Motif gagne 32 % de PV Max. Chaque fois qu'il accorde un Bouclier, l'ATK de tous les personnages de l'équipe augmente de 25,6 % pendant 40 secondes.",
        5: "Le personnage utilisant ce Motif gagne 36 % de PV Max. Chaque fois qu'il accorde un Bouclier, l'ATK de tous les personnages de l'équipe augmente de 28,8 % pendant 40 secondes."
      }
    },
    {
      name: "Le Mystère de Cendrillon", rarity: 5, identity: "Gardien", mobile: "Cendrillon", hp: "19,200", atk: "2,400", crit: "+0.25%", img: "../assets/images/MystereDeCendrillon.webp",
      effects: {
        1: "Le personnage utilisant ce Motif gagne 12,5 % de CRIT Rate, et 12,5 % supplémentaire face à des ennemis ayant moins de 50 % de PV restants.",
        2: "Le personnage utilisant ce Motif gagne 15 % de CRIT Rate et 15 % supplémentaires face à des ennemis ayant moins de 50 % de PV restants.",
        3: "Le personnage utilisant ce Motif gagne 17,5 % de CRIT Rate, et 17,5 % supplémentaire face à des ennemis ayant moins de 50 % de PV restants.",
        4: "Le personnage utilisant ce Motif gagne 20 % de CRIT Rate, et 20 % supplémentaire face à des ennemis avec moins de 50 % de PV restants.",
        5: "Le personnage utilisant ce Motif gagne 22,5 % de CRIT Rate, et 22,5 % supplémentaire face à des ennemis ayant moins de 50 % de PV restants."
      }
    },
    {
      name: "Le Mystère de la Pierre Brûlante", rarity: 5, identity: "Hors-la-loi", mobile: "Pierre Brûlante", hp: "21,600", atk: "2,640", crit: "+0.5%", img: "../assets/images/motif_cinderella.webp",
      effects: {
        1: "Le personnage utilisant ce Motif gagne 30 % de CRIT Rate. Quand leurs attaques de base touchent un ennemi, leur dégât CRIT augmente de 18 % pendant 5 secondes.",
        2: "Le personnage utilisant ce Motif gagne 35 % de taux de CRIT. Quand leurs attaques de base touchent un ennemi, leur dégât CRIT augmente de 21 % pendant 5 secondes.",
        3: "Le personnage utilisant ce Motif gagne 40 % de taux de CRIT. Quand leurs attaques de base touchent un ennemi, leur dégât CRIT augmente de 24 % pendant 5 secondes.",
        4: "Le personnage utilisant ce Motif gagne 45 % de Taux CRIT. Quand leurs attaques de base touchent un ennemi, leur dégât CRIT augmente de 27 % pendant 5 secondes.",
        5: "Le personnage utilisant ce Motif gagne 50 % de taux de CRIT. Quand leurs attaques de base touchent un ennemi, leur dégât CRIT augmente de 30 % pendant 5 secondes."
      }
    },
    {
      name: "Le Mystère de la Petite Sirène", rarity: 5, identity: "Victime", mobile: "La Petite Sirène", hp: "19,200", atk: "2,400", crit: "+0.2%", img: "../assets/images/MystereDeLaPetiteSirene.webp",
      effects: {
        1: "Le personnage utilisant ce Motif gagne 10 % d'ATK. Chaque stack d'Amour Désespéré augmente leur dégât infligé de 8 % pendant 16 secondes.",
        2: "Le personnage utilisant ce Motif gagne 12,5 % d'ATK. Chaque stack augmente leur dégât infligé de 10 % pendant 16 s.",
        3: "Le personnage utilisant ce Motif gagne 15 % d'ATK. Chaque stack augmente leur dégât infligé de 12 % pendant 16 s.",
        4: "Le personnage utilisant ce Motif gagne 17,5 % d'ATK. Chaque stack augmente leur dégât infligé de 14 % pendant 16 s.",
        5: "Le personnage utilisant ce Motif gagne 20 % d'ATK. Chaque stack augmente leur dégât infligé de 16 % pendant 16 s."
      }
    },
    {
      name: "Le Mystère du Bain de Sang", rarity: 5, identity: "Sauveur", mobile: "Le bain de sang", hp: "24,000", atk: "2,400", crit: "+0.4%", img: "../assets/images/motif_red_rose.webp",
      effects: {
        1: "Le personnage utilisant ce Motif gagne 24 % d'ATK. En utilisant une compétence, le dégât d'Ignis de l'équipe augmente de 7 % pour 40 secondes.",
        2: "Le personnage utilisant ce Motif gagne 28 % d'ATK. Le dégât Ignis de l'équipe augmente de 8,16 % pendant 40 secondes.",
        3: "Le personnage utilisant ce Motif gagne 32 % d'ATK. Le dégât Ignis de l'équipe augmente de 9,33 % pendant 40 secondes.",
        4: "Le personnage utilisant ce Motif gagne 36 % d'ATK. Le dégât d'Ignis de l'équipe augmente de 10,5 % pendant 40 secondes.",
        5: "Le personnage utilisant ce Motif gagne 40 % d'ATK. Le dégât d'Ignis de l'équipe augmente de 11,66 % pendant 40 secondes."
      }
    },
    {
      name: "Le Mystère du Rêve Éveillé", rarity: 5, identity: "Témoin", mobile: "Rêvasser", hp: "24,000", atk: "2,400", crit: "+0.5%", img: "../assets/images/MystereDuReve.webp",
      effects: {
        1: "Le personnage utilisant ce Motif gagne un coefficient d'amplitude de 25 %. Avec 2 stacks de Phantasm, le dégât de compétence de l'équipe augmente de 14 % pour 40 secondes.",
        2: "Le personnage utilisant ce Motif gagne 30 % de coefficient d'amplitude. Dégâts de compétence augmentés de 16,8 %.",
        3: "Le personnage utilisant ce Motif gagne 35 % de coefficient d'amplitude. Dégâts de compétence augmentés de 19,6 %.",
        4: "Le personnage utilisant ce Motif gagne 40 % de coefficient d'amplitude. Dégâts de compétence augmentés de 22,4 %.",
        5: "Le personnage utilisant ce Motif gagne 45 % de coefficient d'amplitude. Dégâts de compétence augmentés de 25,2 %."
      }
    },
    {
      name: "Le Mystère de la Belle au bois dormant", rarity: 5, identity: "Témoin", mobile: "La Belle au bois dormant", hp: "21,600", atk: "2,160", crit: "+0.25%", img: "../assets/images/MystereDeLaBelleAuBoisDormant.webp",
      effects: {
        1: "Le personnage utilisant ce Motif gagne 12,5 % d'Efficacité de Charge Ultime. Lors d'un Ultime, le dégât des coéquipiers augmente de 9 %.",
        2: "Gain de 15,62 % d'Efficacité de Charge Ultime. Dégâts des coéquipiers augmentés de 11,25 %.",
        3: "Gain de 18,75 % d'Efficacité de Charge Ultime. Dégâts des coéquipiers augmentés de 13,5 %.",
        4: "Gain de 21,87 % d'Efficacité de Charge Ultime. Dégâts des coéquipiers augmentés de 15,75 %.",
        5: "Gain de 25 % d'Efficacité de Charge Ultime. Dégâts des coéquipiers augmentés de 18 %."
      }
    }
  ];

  const epiphaniesData = [
    { name: "La mort destinée", img: "../assets/images/LaMortDestine.webp", mainStat: "Bonus DMG +15 %", sub1: "ATK +8 %", sub2: "Taux CRIT +10 %", sub3: "CRIT DMG +25 %", level: "Lv. 20", effect: "Augmente le taux CRIT du titulaire de 15 %. Lorsque leur taux CRIT dépasse 50 %, chaque 1 % supérieur à 50 % accorde 0,8 % ATK, jusqu'à un maximum de 40 %." },
    { name: "Le Comte de la Caverne", img: "../assets/images/LeComteDeLaCaverne.webp", mainStat: "Exploit de rupture +100", sub1: "ATK +8 %", sub2: "DMG sans pause +12,5 %", sub3: "Bonus DMG +6 %", level: "Lv. 20", effect: "Augmente l'exploit Break du détenteur de 60. Lorsque leur Break Exploit dépasse 180, chaque point de Break Exploit supérieur à 180 accorde un bonus Stun Buildup de 0,3 %, jusqu'à un maximum de 60 %." },
    { name: "Frustrations de la jeunesse", img: "../assets/images/FrustrationsDeLaJeunesse.webp", mainStat: "Efficacité de charge ultime +25 %", sub1: "HP max +8 %", sub2: "ATK +8 %", sub3: "Taux CRIT +10 %", level: "Lv. 20", effect: "Augmente l'efficacité de charge ultime du détenteur de 25 %. Le titulaire accorde une augmentation de 50 % du CRIT DMG à tous les personnages de l'équipe qui partagent le même attribut de réacteur." },
    { name: "Collier en diamant", img: "../assets/images/CollierEnDiamant.webp", mainStat: "HP max +20 %", sub1: "Efficacité de charge ultime +10 %", sub2: "ATK +8 %", sub3: "CRIT DMG +25 %", level: "Lv. 20", effect: "Augmente le Max HP du titulaire de 20 %. Lorsque l'efficacité de charge ultime du détenteur dépasse 140 %, la fourniture d'effets de guérison accorde à tous les personnages de l'équipe 25 % de CRIT DMG pendant 30 s." },
    { name: "La chute de la maison de la pourriture", img: "../assets/images/LaChuteDeLaMaisonDeLaPourriture.webp", mainStat: "Bonus DMG +15 %", sub1: "ATK +12 %", sub2: "Coefficient d'amplitude +15 %", sub3: "Multiplicateur d'amplitude +37,5 %", level: "Lv. 40", effect: "Augmente le coefficient d'amplitude du détenteur de 15 %. Lorsque leur coefficient d'amplitude dépasse 50 %, chaque 1 % supérieur à 50 % accorde 0,8 % d'ATK, jusqu'à un maximum de 40 %." },
    { name: "Le chien maudit", img: "../assets/images/weapon_lorin.webp", mainStat: "Exploit de rupture +100", sub1: "ATK +12 %", sub2: "DMG sans rupture +18,75 %", sub3: "Bonus DMG +9 %", level: "Lv. 40", effect: "Augmente l'exploit de rupture du détenteur de 60. Lorsque leur Break Exploit dépasse 180, chaque 1 point de Break Exploit supérieur à 180 accorde 0,2 % d'ATK, jusqu'à un maximum de 40 %." },
    { name: "La métamorphose", img: "../assets/images/weapon_grimm.webp", mainStat: "Efficacité de charge ultime +25 %", sub1: "HP max +12 %", sub2: "ATK +12%", sub3: "Taux CRIT +15 %", level: "Lv. 40", effect: "Augmente l'efficacité de charge ultime du titulaire de 25 %. Le titulaire accorde une augmentation de 50 % du multiplicateur d'amplitude à tous les personnages de l'équipe qui partagent le même attribut de réacteur." },
    { name: "La dernière feuille", img: "../assets/images/weapon_firtho.webp", mainStat: "HP max +20 %", sub1: "ATK +12 %", sub2: "Efficacité de charge ultime +15 %", sub3: "CRIT DMG +37,5 %", level: "Lv. 40", effect: "Augmente le Max HP du titulaire de 20 %. Lorsque l'efficacité de charge ultime du détenteur dépasse 140 %, la fourniture d'effets de guérison accorde à tous les personnages de l'équipe un multiplicateur d'amplitude de 25 % pendant 30 s." },
    { name: "L'épée en Silvernia", img: "../assets/images/silvernia.webp", mainStat: "Bonus DMG +18 %", sub1: "ATK +16 %", sub2: "Taux CRIT +20 %", sub3: "CRIT DMG +50 %", level: "Lv. 60", effect: "Augmente le taux CRIT du titulaire de 15 %. Lorsque leur taux CRIT dépasse 50 %, chaque 1 % supérieur à 50 % accorde 2,5 % CRIT DMG, jusqu'à un maximum de 125 %." },
    { name: "Bête blanche des profondeurs", img: "../assets/images/weapon_alf.webp", mainStat: "Exploit de rupture +120", sub1: "ATK +16 %", sub2: "DMG sans rupture +25 %", sub3: "Bonus DMG +12 %", level: "Lv. 60", effect: "Augmente l'exploit Break du détenteur de 60. Lorsque leur Break Exploit dépasse 180, chaque point de Break Exploit supérieur à 180 accorde un bonus DMG de 0,15 %, jusqu'à un maximum de 30 %." },
    { name: "L'épaule du héros", img: "../assets/images/EpauleDuHero.webp", mainStat: "Efficacité de charge ultime +30 %", sub1: "HP max +16 %", sub2: "ATK +16 %", sub3: "Taux CRIT +20 %", level: "Lv. 60", effect: "Augmente l'efficacité de charge ultime du détenteur de 25 %. Tous les personnages de l'équipe qui partagent l'attribut Reactor du détenteur voient le DMG de cet attribut augmenté (par l'attribut DMG du détenteur ×25 % + 5 %), jusqu'à un maximum de 10 %." },
    { name: "Le prêtre et le voleur de pain", img: "../assets/images/weapon_red_rose.webp", mainStat: "HP max +24 %", sub1: "Efficacité de charge ultime +20 %", sub2: "ATK +16 %", sub3: "CRIT DMG +50 %", level: "Lv. 60", effect: "Augmente le bonus de guérison du titulaire de 16 %. Une fois que le titulaire a assuré la guérison, tous les autres personnages de l'équipe gagnent du CRIT DMG (égal au CRIT DMG du titulaire ×6 % + 16 %) pendant 30 s, jusqu'à un maximum de 42 %." },
    { name: "Querelle sanglante", img: "../assets/images/weapon_rex.webp", mainStat: "Bonus DMG +19.5 %", sub1: "ATK +18 %", sub2: "Amplitude Coefficient +22.5%", sub3: "Multiplicateur d'amplitude +56,25 %", level: "Lv. 70", effect: "Augmente le coefficient d'amplitude du titulaire de 15 %. Lorsque leur coefficient d'amplitude dépasse 50 %, chaque 1 % supérieur à 50 % confère un multiplicateur d'amplitude de 2,5 %, jusqu'à un maximum de 125 %" },
    { name: "Couronne méchante", img: "../assets/images/CouronneMechante.webp", mainStat: "Exploit de rupture +130", sub1: "ATK +18 %", sub2: "DMG sans pause +28,13 %", sub3: "Bonus DMG +13,5 %", level: "Lv. 70", effect: "Effet descriptif pour Couronne méchante." },
    { name: "Le prix d'un passage sûr", img: "../assets/images/Lprix.webp", mainStat: "Efficacité de charge ultime +32,5 %", sub1: "HP max +18 %", sub2: "ATK +18%", sub3: "Taux CRIT +22,5 %", level: "Lv. 70", effect: "Augmente l'efficacité de charge ultime du détenteur de 25 %. Avec chaque 100 ATK gagnés, le titulaire accorde une augmentation de 1 % de l'ATK à tous les personnages de l'équipe qui partagent le même attribut de réacteur, jusqu'à un maximum de 30 %" },
    { name: "Le conte du naufragé", img: "../assets/images/Lnaufrage.webp", mainStat: "Max HP +26%", sub1: "Efficacité de charge ultime +22,5 % %", sub2: "ATK +18%", sub3: "CRIT DMG +56,25 %", level: "Lv. 70", effect: "Augmente le bonus de guérison du détenteur de 16 %. Une fois que le détenteur a fourni la guérison, tous les autres personnages de l'équipe gagnent le multiplicateur d'amplitude (égal au multiplicateur d'amplitude du détenteur ×6 % + 16 %) pendant 30 s, jusqu'à un maximum de 42 %." },
    { name: "Cendrillon", img: "../assets/images/Cendrillon.webp", mainStat: "ATK 24 %", sub1: "Taux CRIT +20 %", sub2: "CRIT DMG +50%", sub3: "Bonus DMG +12 %", level: "Lv. 60", effect: "Augmente le DMG d'attaque de base du détenteur de 80 %. Lorsque leur taux CRIT dépasse 100 %, chaque 1 % supérieur à 100 % accorde 0,8 % d'ATK. Leurs attaques de base infligent Miracle Fade en cas de coup. Traiter des DMG aux ennemis avec Miracle Fade augmente les DMG ATK chargés du détenteur de 40 % pendant 4 s." },
    { name: "Jusqu'à ce que la mort nous sépare", img: "../assets/images/Jmort.webp", mainStat: "ATK +24 %", sub1: "Multiplicateur d'amplitude +50 %", sub2: "Coefficient d'amplitude +20 %", sub3: "DMG sans rupture +25 %", level: "Lv. 60", effect: "Augmente le DMG Ignis du détenteur de 10 % et accorde l'effet Lovelark lorsque ses attaques de base, attaques chargées, compétences, attaques tactiques ou ultimes traitent du DMG. Lovelark augmente de 30 % la prochaine instance de DMG (d'un type différent) traité. Ne s'empile pas." },
    { name: "Le meurtre de morgue street", img: "../assets/images/Lmorgue.webp", mainStat: "ATK +24 %", sub1: "Taux CRIT +20 %", sub2: "CRIT DMG +50 %", sub3: "Bonus DMG +12 %", level: "Lv. 60", effect: "Augmente le DMG Gravitas du titulaire de 15 %. Ils gagnent Black Cat en utilisant leur assaut tactique, augmentant leur Gravitas DMG de 13 % pendant 16 s. Toutes les 3 compétences utilisées, ils gagnent 1 pile de masque cramoisi, d'une durée de 16 s et s'empilant jusqu'à 2 fois. Lors de l'utilisation de leurs piles Ultimate, Black Cat and Crimson Mask augmentent toutes deux cette instance d'Ultimate DMG de 8 %, jusqu'à un maximum de 24 %." },
    { name: "Décès d'un commis", img: "../assets/images/Dcommis.webp", mainStat: "ATK +24 %", sub1: "Exploit de rupture +80", sub2: "DMG sans rupture +25 %", sub3: "Taux CRIT +20 %", level: "Lv. 60", effect: "Augmente la Radiatio DMG du titulaire de 10 %. Ils gagnent 1 pile de Fatal Shadow en distribuant du DMG. Chaque pile de Fatal Shadow augmente le CRIT DMG de 25 % pendant 10 s, en empilant jusqu'à 5 fois." },
    { name: "Vengeance du vide", img: "../assets/images/Vvide.webp", mainStat: "Bonus DMG +18 %", sub1: "ATK +16 %", sub2: "Multiplicateur d'amplitude +50 %", sub3: "Coefficient d'amplitude +20 %", level: "Lv. 60", effect: "Augmente l'ATK du titulaire de 24 % et accorde Thunderclap. Thunderclap augmente le DMG comme suit : pour chaque 10 HP perdus, le DMG est augmenté de 0,022 % jusqu'à un maximum de 22 % ; pendant Thunderous Fury, l'augmentation du DMG de Thunderclap est calculée sur la base du Max HP jusqu'à un maximum de 22 %." },
    { name: "Adieu, l'âge chevaleresque", img: "../assets/images/Achevaleresque.webp", mainStat: "ATK +24 %", sub1: "DMG sans rupture +25 %", sub2: "Exploit de rupture +80", sub3: "Bonus DMG +12 %", level: "Lv. 60", effect: "Augmente l'exploit de rupture du détenteur de 100. Leurs attaques de base accordent 1 pile de rêve chevaleresque en cas de coup. À 5 piles, cela déclenche Fearless Blade, augmentant le bonus d'accumulation d'étourdissement de 50 % pendant 8 s. Esquiver ou parer les attaques confère immédiatement 5 piles de rêve chevaleresque." },
    { name: "Tuer ce que tu aimes", img: "../assets/images/weapon_bentham.webp", mainStat: "ATK +24 %", sub1: "Coefficient d'amplitude +20 %", sub2: "Multiplicateur d'amplitude +50 %", sub3: "Bonus DMG +12 %", level: "Lv. 60", effect: "Augmente le Glacies DMG du détenteur de 10 % et accorde 1 pile de Weave Dance chaque fois qu'il utilise une attaque ou une compétence de base. Chaque pile augmente les Glacies DMG distribués de 1,5 % pendant 16 s, s'empilant jusqu'à 10 fois. Avec 10 piles, le détenteur gagne également 1 pile de Pomegranate Kiss. Lors de l'atterrissage d'un Glacies Ultimate, 1 pile de Pomegranate Kiss est consommée pour distribuer 100 Glacies Resonance à la cible." },
    { name: "Chanson du Paladin", img: "../assets/images/weapon_gratia.webp", mainStat: "HP max +24 %", sub1: "Bonus de guérison +12,8 %", sub2: "Efficacité de charge ultime +20 %", sub3: "ATK +16 %", level: "Lv. 60", effect: "Augmente le HP du titulaire de 20 %. Lorsqu'ils fournissent un bouclier à une cible, ils obtiennent l'effet Kite Shield. Kite Shield augmente la prochaine instance d'Ultimate DMG distribuée de 20 % pendant 4 s, après quoi l'effet est perdu." },
    { name: "Les chaussures rouges", img: "../assets/images/weapon_alt_red_rose.webp", mainStat: "Efficacité de charge ultime +30 %", sub1: "Puissance maximale +16 %", sub2: "ATK +16 %", sub3: "DMG sans rupture +25 %", level: "Lv. 60", effect: "Augmente l'efficacité de charge ultime du titulaire de 20 %. Lorsqu'ils distribuent Ultimate DMG, tous les personnages de l'équipe gagnent 1 pile de Sanguine Step. Chaque pile de Sanguine Step augmente le CRIT DMG de 14 % pendant 40 s, en empilant jusqu'à 3 fois." },
    { name: "Flatterie et honnêteté", img: "../assets/images/Fhonnetete.webp", mainStat: "Efficacité de charge ultime +30 %", sub1: "Puissance maximale +16 %", sub2: "Coefficient d'amplitude +20 %", sub3: "Multiplicateur d'amplitude +50 %", level: "Lv. 60", effect: "Augmente l'efficacité de charge ultime du détenteur de 20 %. Lors du déclenchement d'un effet de résonance, pour chaque 1 % de leur coefficient d'amplitude gagné, tous les personnages de l'équipe gagnent 0,1 % de DMG pendant les années 40, jusqu'à un maximum de 10 %." },
    { name: "La tragédie de l'homme", img: "../assets/images/weapon_gucia.webp", mainStat: "Efficacité de charge ultime +30 %", sub1: "ATK +16 %", sub2: "Puissance maximale +16 %", sub3: "Bonus DMG +12 %", level: "Lv. 60", effect: "Augmente l'efficacité de charge ultime du détenteur de 20 %. Après avoir utilisé leur Ultimate, tous les personnages de l'équipe gagnent 10 % de Fulmen DMG pendant les années 40." },
    { name: "Retour des enfers", img: "../assets/images/Renfers.webp", mainStat: "Efficacité de charge ultime +30 %", sub1: "Puissance maximale +16 %", sub2: "ATK +16 %", sub3: "Bonus de guérison +12,8 %", level: "Lv. 60", effect: "Augmente l'efficacité de charge ultime du titulaire de 20 %. En déclenchant leur agression tactile, leur bonus de guérison est augmenté de 10 % pendant 6 s. Lorsque le titulaire assure la guérison, il accorde à la cible 1 pile d'élégie sincère. Chaque pile augmente l'ATK de 2 % pendant 36 s, s'empilant jusqu'à 6 fois." },
    { name: "Monstrosité ressuscitée", img: "../assets/images/weapon_alt1_gucia.webp", mainStat: "Efficacité de charge ultime +30 %", sub1: "Puissance maximale +16 %", sub2: "ATK +16 %", sub3: "Coefficient d'amplitude +20 %", level: "Lv. 60", effect: "Augmente l'efficacité de charge ultime du détenteur de 20 %. En déclenchant leur attaque tactile, leur compétence ou leur ultime, ils gagnent 1 pile d'enregistrements de test, d'une durée de 40 secondes et s'empilant jusqu'à 3 fois. Les piles d'enregistrements de test sont consommées lorsqu'un personnage déclenche son attaque tactile, augmentant ainsi son multiplicateur d'amplitude de 41,5 % pendant 16 s." },
    { name: "Le barbier de Meadow", img: "../assets/images/Bmeadow.webp", mainStat: "HP max +24 %", sub1: "Efficacité de charge ultime +20 %", sub2: "Exploit de rupture +80", sub3: "ATK +16 %", level: "Lv. 60", effect: "Augmente l'efficacité de charge ultime du détenteur de 20 %. Lorsqu'ils traitent DMG en dehors du champ de bataille, tous les personnages de l'équipe gagnent 1 pile d'Aria. Chaque pile d'Aria augmente le DMG de 2 % pendant 40 s, s'empilant jusqu'à 5 fois." }
  ];

  // ==========================================
  // 2. INJECTION AUTOMATIQUE DANS LES GRILLES HTML
  // ==========================================

  const gridTools = document.getElementById('grid-tools');
  if (gridTools) {
    gridTools.innerHTML = toolsData.map(tool => `
      <div class="card-item" data-name="${tool.name}" data-type="tools">
        <div class="thumb-box"><img src="${tool.img}" alt="${tool.name}" onerror="this.style.display='none'"></div>
        <h3 class="card-title-text">${tool.name}</h3>
      </div>
    `).join('');
  }

  const gridCatalysts = document.getElementById('grid-catalysts');
  if (gridCatalysts) {
    gridCatalysts.innerHTML = catalystsData.map(cat => `
      <div class="card-item" data-name="${cat.name}" data-type="catalysts" data-source="${cat.source}" data-desc="${cat.desc}">
        <div class="thumb-box"><img src="${cat.img}" alt="${cat.name}" onerror="this.style.display='none'"></div>
        <h3 class="card-title-text">${cat.name}</h3>
      </div>
    `).join('');
  }

  const gridMotives = document.getElementById('grid-motives');
  if (gridMotives) {
    gridMotives.innerHTML = motivesData.map(mot => `
      <div class="card-item" data-rarity="${mot.rarity}" data-name="${mot.name}" data-type="motives" data-identity="${mot.identity}" data-mobile="${mot.mobile}" data-hp="${mot.hp}" data-atk="${mot.atk}" data-crit="${mot.crit}">
        <div class="thumb-box-portrait"><img src="${mot.img}" alt="${mot.name}" onerror="this.style.display='none'"></div>
        <h3 class="card-title-text">${mot.name}</h3>
      </div>
    `).join('');
  }

  const gridEpiphanies = document.getElementById('grid-epiphanies');
  if (gridEpiphanies) {
    gridEpiphanies.innerHTML = epiphaniesData.map(epi => `
      <div class="card-item" data-name="${epi.name}" data-type="epiphanies" data-mainstat="${epi.mainStat}" data-sub1="${epi.sub1}" data-sub2="${epi.sub2}" data-sub3="${epi.sub3}" data-level="${epi.level}" data-effect="${epi.effect}">
        <div class="thumb-box-portrait"><img src="${epi.img}" alt="${epi.name}" onerror="this.style.display='none'"></div>
        <h3 class="card-title-text">${epi.name}</h3>
      </div>
    `).join('');
  }

  // ==========================================
  // 3. NAVIGATION PAR ONGLETS (Catégories)
  // ==========================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.eq-section');

  tabBtns.keyframes = tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      
      btn.classList.add('active');
      const targetSec = document.getElementById(`sec-${btn.dataset.tab}`);
      if (targetSec) targetSec.classList.add('active');
    });
  });

  // ==========================================
  // 4. MOTEUR DE RECHERCHE
  // ==========================================
  function setupSearch(inputId, gridId, counterId) {
    const input = document.getElementById(inputId);
    const grid = document.getElementById(gridId);
    const counter = document.getElementById(counterId);
    if (!input || !grid) return;

    input.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase().trim();
      const items = grid.querySelectorAll('.card-item');
      let visible = 0;

      items.forEach(item => {
        const name = item.dataset.name ? item.dataset.name.toLowerCase() : '';
        if (name.includes(val)) {
          item.style.display = 'flex';
          visible++;
        } else {
          item.style.display = 'none';
        }
      });

      if (counter) counter.textContent = `${visible} sur ${items.length}`;
    });
  }

  setupSearch('search-tools', 'grid-tools', 'count-tools');
  setupSearch('search-catalysts', 'grid-catalysts', 'count-catalysts');
  setupSearch('search-motives', 'grid-motives', 'count-motives');
  setupSearch('search-epiphanies', 'grid-epiphanies', 'count-epiphanies');

  // ==========================================
  // 5. GESTION DE LA MODALE & INTERACTIONS
  // ==========================================
  const modal = document.getElementById('eq-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const mImg = document.getElementById('m-img');
  const mTitle = document.getElementById('m-title');
  const mTag = document.getElementById('m-tag');
  const mDesc = document.getElementById('m-desc');
  const mStatsBlock = document.getElementById('m-stats-block');
  const mIdentity = document.getElementById('m-identity');
  const mMobile = document.getElementById('m-mobile');
  const mHp = document.getElementById('m-hp');
  const mAtk = document.getElementById('m-atk');
  const mCrit = document.getElementById('m-crit');
  const mEffectTabs = document.getElementById('m-effect-tabs');
  const mPiecesBlock = document.getElementById('m-pieces-block');
  const mPiecesContainer = document.getElementById('m-pieces-container');

  let currentItemData = null;

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.card-item');
    if (!card) return;

    const name = card.dataset.name;
    const type = card.dataset.type;
    const imgEl = card.querySelector('img');
    const imgSrc = imgEl ? imgEl.src : '';

    mTitle.textContent = name || "Détails";
    mImg.src = imgSrc;
    mPiecesBlock.style.display = 'none';
    mStatsBlock.style.display = 'none';
    mEffectTabs.style.display = 'none';

    if (type === 'tools') {
      const toolObj = toolsData.find(t => t.name === name);
      currentItemData = toolObj;
      mTag.textContent = "🛠️ Outil · Ensemble de 4 Pièces";
      mDesc.textContent = toolObj?.effect || "Aucun effet renseigné.";
      mPiecesContainer.innerHTML = '';
      
      if (toolObj?.pieces) {
        toolObj.pieces.forEach(p => {
          let statsHtml = '';
          for (const [sName, sVal] of Object.entries(p.stats)) {
            statsHtml += `<div class="stat-line"><span>${sName}</span><span>${sVal}</span></div>`;
          }
          const pCard = document.createElement('div');
          pCard.className = 'piece-card-item';
          pCard.innerHTML = `<div class="piece-title"><img src="${p.icon}"> ${p.name}</div>${statsHtml}`;
          mPiecesContainer.appendChild(pCard);
        });
        mPiecesBlock.style.display = 'block';
      }

    } else if (type === 'catalysts') {
      const catObj = catalystsData.find(c => c.name === name);
      currentItemData = catObj;
      mTag.textContent = `🧪 Catalyseur · Source: ${card.dataset.source || 'Inconnue'}`;
      mDesc.innerHTML = card.dataset.desc || "Aucune description.";

    } else if (type === 'motives') {
      const motObj = motivesData.find(m => m.name === name);
      currentItemData = motObj;

      mTag.textContent = `📜 Motive (${card.dataset.rarity}★) · ${card.dataset.identity || 'Commun'}`;
      mIdentity.textContent = card.dataset.identity || '-';
      mMobile.textContent = card.dataset.mobile || '-';
      mHp.textContent = card.dataset.hp || '-';
      mAtk.textContent = card.dataset.atk || '-';
      mCrit.textContent = card.dataset.crit || '-';
      mStatsBlock.style.display = 'block';
      mEffectTabs.style.display = 'flex';

      document.querySelectorAll('.effect-tab').forEach(t => t.classList.remove('active'));
      const firstTab = document.querySelector('.effect-tab[data-rank="1"]');
      if (firstTab) firstTab.classList.add('active');

      if (motObj && motObj.effects) {
        mDesc.textContent = motObj.effects[1] || "Description non disponible.";
      } else {
        mDesc.textContent = "Description non disponible.";
      }

    } else if (type === 'epiphanies') {
      currentItemData = null;
      mTag.textContent = ` Épiphanie (5★) · Niveau: ${card.dataset.level}`;
      
      mIdentity.textContent = card.dataset.mainstat || '-';
      mMobile.textContent = card.dataset.sub1 || '-';
      mHp.textContent = card.dataset.sub2 || '-';
      mAtk.textContent = card.dataset.sub3 || '-';
      mCrit.textContent = card.dataset.level || '-';
      
      mStatsBlock.style.display = 'block';
      mDesc.textContent = card.dataset.effect || "Description non disponible.";
    }

    if (modal) modal.classList.add('active');
  });

  const effectTabs = document.querySelectorAll('.effect-tab');
  effectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      effectTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const rank = tab.dataset.rank;
      
      if (currentItemData && currentItemData.effects) {
        mDesc.textContent = currentItemData.effects[rank] || "Effet non renseigné pour ce rang.";
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

});