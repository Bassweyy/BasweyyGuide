const charactersData = [
    {
        id: "cinderella",
        name: "Cinderella",
        star: 5,
        role: "striker",
        roleLabel: "Striker",
        elem: "ignis",
        image: "../assets/images/cinderellafull.webp",
        link: "character.html?id=cinderella",
        fullImage: "../assets/images/cinderella.webp",

        quote: "« Tu as eu ce que tu méritais, et je suis coupable comme accusé... Hahaha, on est faits l’un pour l’autre ! »",
        epithete: "La Fourmi Vengeuse",
        especes: "Humain",
        genre: "Femme",
        profession: " Cendrillon ",
        affiliation: "Fableborn",
        arme: "Épée à flammes + mitrailleuse",
        version: "A déterminer",
        introduction: "Un jour où le froid cède la place à la chaleur. La lueur d’espoir brille à nouveau. « Cendrillon » est une femme de secrets et une planificatrice de vengeance des plus méticuleuses — perspicace, économe et observatrice. Une explosion de magma enflammée longtemps réprimée, un corps aussi résistant que la pierre.",
        personnalite: "Perspicace, économe et observatrice, Cendrillon planifie sa vengeance avec un soin méticuleux. Son identité cachée a longtemps été une source d’insécurité,...",

        playstyle: "Construis Vengeful Flame, entres en état amélioré Quenched, inflige d'énormes dégâts, puis termine avec un énorme Ultime. Son passif accorde +35 % de taux critique, rendant 100 % de critique beaucoup plus facile à atteindre.",

        // --- ÉQUIPEMENT & ARMES AVEC IMAGES ---
        equipment: {
            statsPriority: {
                main: "1. Taux critique | 2. Dégâts critiques",
                sub: "Taux CRIT > Dégâts CRIT > ATK %"
            },
            motif: {
                name: "Le Mystère de la Pierre Brûlante",
                star: 5,
                image: "../assets/images/motif_cinderella.webp", // Mets ton chemin d'image ici
                desc: "Le personnage utilisant ce Motif gagne 30 % de CRIT Rate. Quand leurs attaques de base touchent un ennemi, leur dégât CRIT augmente de 18 % pendant 5 secondes, pouvant s'accumuler jusqu'à 10 fois. En libérant un Ultime, cet effet gagne instantanément 10 stacks."
            },
            echoSets: [
                {
                    name: "Braises et Flammes (Ensemble de 4)",
                    star: 5,
                    image: "../assets/images/braiseflammes.webp", // Mets ton chemin d'image ici
                    effect: "Augmente le taux CRIT du titulaire de 15 %. Lorsque le taux CRIT du personnage dépasse 70 %, chaque utilisation d'Ultime augmente aussi ses dégâts d'attaque de base de 15 % pendant 16 secondes."
                }
            ],
            weapon: {
                name: "Cendrillon (Recommandé)",
                star: 5,
                image: "../assets/images/cendrillon.webp", // Mets ton chemin d'image ici
                addendum: "ATK de base personnalisé de Cendrillon +3",
                type: "Épiphanie",
                desc: "Augmente les dégâts d'attaque de base du porteur de 80 %. Lorsque leur taux CRIT dépasse 100 %, chaque 1 % au-dessus de 100 % accorde 0,8 % d'ATK. Leurs attaques de base infligent un Déclin Miracle au toucher. Infliger des dégâts aux ennemis avec Miracle Fade augmente les dégâts d'attaque chargée du porteur de 40 % pendant 4 secondes."
            },
            weaponAlternative: {
                name: "L'Épée à Silvernia (Alternative)",
                star: 5,
                image: "../assets/images/silvernia.webp", // Mets ton chemin d'image ici
                type: "Épiphanie",
                desc: "Augmente le taux CRIT du titulaire de 15 %. Lorsque leur taux CRIT dépasse 50 %, chaque taux de 1 % dépassant 50 % accorde 2,5 % de dégâts CRIT, jusqu'à un maximum de 125 %."
            }
        },

        // --- Compétences spécifiques à Cinderella ---
        skills: {
            normal: {
                title: "Lame doublement trempée",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 5 coups, infligeant des dégâts d'Ignis. Accorde 2/3/5/5/5 Flamme Vengeure à chaque coup respectif. Après avoir paré une attaque ennemie, cela peut enchaîner le 3e coup du combo Attaque de base. Appuyez sur le bouton Attaque de base après le 4e coup pour déclencher un tir chargé.\n\nAprès une Esquive Parfaite, appuyez sur le bouton Attaque de base pour lancer une rafale longue distance, accordant 25 de Surchauffe au toucher.\n\nATTAQUE DE BASE : ÉTEINTE\nPendant le Calme, appuyez sur le bouton Attaque de base pour un combo allant jusqu'à 4 coups, infligeant des dégâts Ignis et accordant 15/15/30/60 Surchauffe par coup. Lors du 4e coup, tous les dégâts entrants sont annulés.\n\nATTAQUE DE POURSUITE\nAprès avoir esquivé, appuyez sur le bouton Attaque de base pour effectuer une attaque de poursuite, infligeant des dégâts d'ignis et accordant 2 Flammes vengeresse au coup.\n\nATTAQUE CHARGÉE\nMaintenez le bouton Attaque de base pour déclencher une attaque lourde, infligeant des dégâts d'Ignis et gagnant 10 de Flamme Vengeresse. Il enchaîne directement le 3e coup du combo Attaque de base. Ne peut pas être utilisé pendant qu'il est trempé.\n\nATTAQUE CHARGÉE AMÉLIORÉE\nUne fois la surchauffe complète, maintenez le bouton Attaque de base pour tout consommer, infligeant des dégâts d'Ignis.\n\nSurchauffe maximale : 120",
                scaling: "• DMG du premier coup : 124%\n• DMG au deuxième coup : 167%\n• Dégâts au 3e coup : 171.8%\n• DMG au 4e coup : 195.6%\n• DMG au 5e coup : 338.7%\n• DMG de barrage à longue portée : 152.7%\n• Dégâts d'attaque de poursuite : 143.1%\n• Attaque chargée niveau 1 : 179.8%\n• Dégâts d'attaque chargée améliorés : 834.7%\n• Extinction du DMG du premier coup : 222%\n• DMG au deuxième coup éteint : 291.4%\n• Damage de 3e coup éteint : 388.6%\n• Damage au 4e coup éteint : 624.5%"
            },
            skill: {
                title: "Re-Smelt",
                desc: "À 20 Flammes Vengeresse ou plus, appuyez sur le bouton Compétence pour tirer dans une grande zone devant vous, infligeant des dégâts Ignis. Chaque tir consomme 4 Flammes Vengeresse et accorde 4,5 de Surchauffe. Peu de temps après, la cadence de tir augmente considérablement, pendant quoi les dégâts entrants sont annulés. Finir déclenche automatiquement un Tir Chargé infligeant des dégâts d'Ignis.\n\nTIR CHARGÉ\nAppuie sur le bouton Compétence après la 4e attaque de base pour déclencher un tir chargé, infligeant des dégâts d'Ignis et gagnant 25 de Flamme Vengeresse.\n\nFlamme Vengeresse maximale : 80\nVengeful Flame gagné par seconde en activité : 1\n\nCOMPÉTENCE : ÉTEINTE\nPendant le Trempe, appuyez sur le bouton Compétence pour reculer tout en tirant une rafale de tirs vers l'avant, infligeant des dégâts Ignis et accordant 15 Surchauffe au toucher. Les dégâts entrants sont annulés jusqu'à ce que l'atterrissage au sol.\n\nMOUVEMENT SIGNATURE\nAppuie sur le bouton Attaque de base après Compétence : Éteinte, avant d'atterrir, pour déclencher une attaque de poursuite infligeant des dégâts d'Ignis et accordant 30 de Surchauffe au coup. Les dégâts entrants sont annulés pendant l'attaque. Enchaîne directement le 4e coup du combo Attaque de base.",
                scaling: "• Dégâts totals de surchauffe totale : 863.2%\n• Dégâts de tir puissant : 110.1%\n• Dégâts de compétence en état d'extinction : 381.6%\n• Dégâts d'attaque de poursuite : 360.8%"
            },
            ult: {
                title: "Transport de cendres",
                desc: "À pleine charge, appuyez sur le bouton Ultime pour activer Quenched, qui dure 12 secondes. Pendant Quenched, tous les ennemis prennent des dégâts d'Ignis par seconde, et les capacités d'Ashley sont grandement améliorées.\n\nULTIME : ÉTEINT\nPendant Quenched, appuyez sur le bouton Ultime pour invoquer un char qui fonce devant lui, puis explose pour infliger un dégât devastateur d'Ignis. Quenched se termine après ce déménagement. Si elle n'est pas utilisée pendant Quenched, elle se déclenche automatiquement une fois Quenched terminée.",
                scaling: "• DMG Éteint : 34.2%\n• DMG/s de brûlure trempée : 34.2%\n• Ultime : Dégâts Éteints : 1251.6%"
            },
            dodge: {
                title: "Contact thermique",
                desc: "Changez le personnage sélectionné tout en ayant assez d'énergie du réacteur pour s'envoler, puis lâchez un coup de pied volant, infligeant des dégâts Ignis et gagnant 30 de surchauffe.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 524.8%"
            },
            passive: {
                title: "Dévasion thermique",
                desc: "Pendant Quenched, Ashley gagne un taux CRIT de +35 %.",
                scaling: "• Effet passif en combat"
            }
        },


        // --- COMPOSITIONS D'ÉQUIPES DE CENDRILLON ---
        teams: [
            {
                name: "Épreuve par le feu",
                description: "Elle accumule Vengeful Flame et Surchauffe, puis son Ultime s'active Quenched pendant 12 secondes. Son passif donne +35 % de taux critique lorsqu'elle est éteinte et ses attaques sont grandement améliorées. C'est sa fenêtre de dégâts.",
                members: [
                    { id: "cinderella", name: "Cinderella", role: "Porter", image: "../assets/images/cinderellaFull.webp", isMain: true },
                    { id: "alf", name: "Alf", role: "Ignis DPS", image:  "../assets/images/alf.webp" },
                    { id: "red-rose", name: "Rose Rouge", role: "Soutien", image: "../assets/images/red-rose.webp" },
                    { id: "argos", name: "Argos", role: "Soutien", image: "../assets/images/argos.webp" }
                ]
            },
            {
                name: "Verdict brûlant",
                description: "Sa fenêtre Éteinte est la récompense : +35 % de taux critique grâce à sa passive et ses attaques grandement améliorées pendant 12 secondes.",
                members: [
                    { id: "the-detective", name: "Le Détective", role: "Porter", image: "../assets/images/Detective.webp", isMain: true },
                    { id: "cinderella", name: "Cinderella", role: "Ignis DPS", image: "../assets/images/cinderellaFull.webp" },
                    { id: "alf", name: "Alf", role: "Ignis DPS", image: "../assets/images/alf.webp" },
                    { id: "argos", name: "Argos", role: "Tampon", image: "../assets/images/argos.webp" }
                ]
            },
            {
                name: "Slow Burn",
                description: "Cycle Surchauffe en Éteinte pour +35 % de taux critique et ses attaques les plus puissantes, sa fenêtre principale de dégâts.",
                members: [
                    { id: "cinderella", name: "Cinderella", role: "Porter", image: "../assets/images/cinderellaFull.webp", isMain: true },
                    { id: "the-detective", name: "Le Détective", role: "Sub-DPS", image: "../assets/images/Detective.webp" },
                    { id: "firtho", name: "Firtho", role: "Sustain", image: "../assets/images/firtho.webp" },
                    { id: "alf", name: "Alf", role: "Ignis DPS", image: "../assets/images/alf.webp" }
                ]
            }
        ],
    },
    {
        id: "the-detective",
        name: "Détective",
        star: 5,
        elem: "Gravitas",
        role: "dps",
        roleLabel: "Héros",
        image: "../assets/images/Detective.webp",
        fullImage: "../assets/images/DetectiveFull.webp",
        
        quote: "La vérité finit toujours par triompher, peu importe les ombres qui tentent de l'ensevelir.",
        epithete: "Les Griffes du Corbeau & Le Bec du Corbeau",
        especes: "Humain",
        genre: "Homme / Femme (choix du joueur)",
        profession: "Détective",
        affiliation: "S.T.A.T.S.",
        arme: "Épée + Revolver",
        version: "Version 1.0",
        introduction: "Le protagoniste de Silver Palace. Après avoir quitté Silvernia pendant trois ans à la suite d'un désastre, le détective revient en ville la troisième année du règne de la reine Feliana. Sous l'illusion de la paix, des conspirations prennent racine...",
        personnalite: "Le détective est rationnel, fiable, lucide d'esprit et efficace — à la recherche de la vérité derrière la mort d'un être cher...",

        // --- Compétences spécifiques au personnage ---
        skills: {
            normal: {
                title: "Épée à double tranchant : Vérité et Tromperie",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 5 coups, infligeant des dégâts de gravité.\n\nLe 3e tir accorde 1 munition ; le cinquième tir accorde 2 munitions. Le 5e coup peut directement s'enchaîner au 3e coup de Raven Slayer en consommant 1 munition et en appuyant sur le bouton Compétence.\n\nParer une attaque ennemie ne brisera pas la combinaison d'attaque de base.\n\nLors de l'activation d'une Esquive Parfaite, appuyez sur le bouton Attaque de base pour déclencher immédiatement le 5e coup du combo Attaque de base, interrompant ainsi les coups des ennemis.\n\nATTAQUE CHARGÉE\nMaintenez le bouton Attaque de base pour déclencher une rafale d'attaques, infligeant des dégâts de gravité. À un niveau supérieur, il accorde aussi 1 munition et 15 de Gravity Overdrive au toucher.\n\nATTAQUE DE POURSUITE\nAprès avoir esquivé ou pendant un Dash, appuyez sur le bouton Attaque de base pour déclencher une Attaque de poursuite, infligeant des dégâts de gravité.",
                scaling: "• DMG du premier coup : 113.4%\n• DMG au deuxième coup : 144.3%\n• Dégâts au 3e coup : 164.9%\n• DMG au 4e coup : 288.5%\n• DMG au 5e coup : 494.6%\n• Attaque chargée niveau 1 : 257.6%\n• Attaque chargée niveau 2 : 618.3%\n• Contre d'esquive parfait : 412.2%\n• Dégâts d'attaque de poursuite : 206.1%"
            },
            skill: {
                title: "Tueuse de Corbeaux",
                desc: "Appuyez sur le bouton Compétence pour consommer 1 munition et tirer un coup infligeant des dégâts de gravité. Jusqu'à 3 coups de suite peuvent être tirés, accumulant respectivement 10/20/30 de Gravity Overdrive.\n\nLe deuxième tir peut être directement enchaîné au cinquième coup d'un combo d'Attaque de Base en appuyant sur le bouton Attaque de base.\n\nUne fois la surcharge de gravité à pleine capacité, maintenez le bouton Compétence pour tout consommer et lâchez un Tir Chargé qui transperce tous les ennemis sur son passage, infligeant des dégâts de gravité et augmentant les dégâts ultimes de 6 % pendant 10 secondes.\n\nMunitions maximales : 6\nSurmultiplication maximale de la gravité : 100",
                scaling: "• Dégâts de compétence : 963.5%\n• DMG du premier coup : 113.4%\n• DMG au deuxième coup : 200.9%\n• Dégâts au 3e coup : 309.1%"
            },
            ult: {
                title: "Ainsi parla le corbeau",
                desc: "Une fois la charge maximale atteinte, appuyez sur le bouton Ultime pour sauter dans les airs et déclencher une attaque puissante, infligeant des dégâts de gravité et créant un champ gravitationnel.\n\nLe champ gravitationnel applique la dilatation temporelle et inflige des dégâts de gravité aux ennemis à l'intérieur, durant 3 secondes.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 1676.7%"
            },
            dodge: {
                title: "Demi-représailles",
                desc: "Changez le personnage sélectionné tout en ayant suffisamment d'énergie de réacteur pour déclencher une rafale d'attaques infligeant des dégâts de gravité et accordant jusqu'à 100 de Surpuissance de gravité.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 602.8%"
            },
            passive: {
                title: "Le rasoir d'Occam",
                desc: "Frapper un ennemi avec le Tir Chargé du Tueur de Corbeau augmente les Dégâts Ultimes de 10 %, s'accumulant jusqu'à 2 fois et durant 6 secondes.\n\nParer une attaque accorde 5 de Surmultiplication de Gravité.",
                scaling: "• Effet passif en combat"
            }
        },

        // --- COMPOSITIONS D'ÉQUIPES DU DÉTECTIVE ---
        teams: [
            {
                name: "Spectre complet",
                description: "Ajoute des munitions en Tueur de Corbeaux et un Tir Chargé perçant, et son Ultime lance un Champ de Gravité qui applique la Dilatation du Temps aux ennemis coincés à l'intérieur.",
                members: [
                    { id: "the-detective", name: "Le Détective", role: "Porter", image: "../assets/images/Detective.webp", isMain: true },
                    { id: "cynthia-ii", name: "Cynthia II", role: "Soutien", image:  "../assets/images/cynthia-ii.webp" },
                    { id: "lorin", name: "Lorin", role: "Disrupteur", image: "../assets/images/lorin.webp" },
                    { id: "firtho", name: "Firtho", role: "Sustain", image: "../assets/images/firtho.webp" }
                ]
            },
            {
                name: "Verdict brûlant",
                description: "Commence avec la surmultiplication de la gravité et un champ gravitationnel qui immobilise les ennemis en dilatation temporelle pendant que la paire d'Ignis s'intensifie.",
                members: [
                    { id: "the-detective", name: "Le Détective", role: "Porter", image: "../assets/images/Detective.webp", isMain: true },
                    { id: "cinderella", name: "Cendrillon", role: "Ignis DPS", image: "../assets/images/cinderellaFull.webp" },
                    { id: "alf", name: "Alf", role: "Ignis DPS", image: "../assets/images/alf.webp" },
                    { id: "argos", name: "Argos", role: "Tampon", image: "../assets/images/argos.webp" }
                ]
            },
            {
                name: "Slow Burn",
                description: "Ajoute une seconde source de dégâts avec Raven Slayer et un champ gravitationnel qui applique la dilatation du temps entre les cycles trempés de Cendrillon.",
                members: [
                    { id: "cinderella", name: "Cendrillon", role: "Porter", image: "../assets/images/cinderellaFull.webp" },
                    { id: "the-detective", name: "Le Détective", role: "Sub-DPS", image: "../assets/images/Detective.webp", isMain: true },
                    { id: "firtho", name: "Firtho", role: "Sustain", image: "../assets/images/firtho.webp" },
                    { id: "alf", name: "Alf", role: "Ignis DPS", image: "../assets/images/alf.webp" }
                ]
            }
        ]
    },
    {
        id: "red-rose",
        name: "Red Rose",
        star: 5,
        role: "support",
        roleLabel: "Combat Support",
        elem: "ignis",
        image: "../assets/images/red-rose.webp",
        link: "character.html?id=red-rose",
        fullImage: "../assets/images/red-roseFull.webp",


        quote: " Le rideau tombe ; ainsi je suis venu à toi. Séparés depuis longtemps, à quel point sera brève notre rencontre ? »",
        epithete: "La Rose comme Moteur de Guerre",
        especes: "Florian",
        genre: "Femme",
        profession: " Danseur ",
        affiliation: "Royauté et aristocratie",
        arme: "Armes à feu dissimulées",
        version: "A déterminer",
        introduction: "Maître de la salle de bal de la nuit d’été, Red Rose est une danseuse qui ne s’arrête jamais — une chasseuse et une assassine. Superstar des Hauts Pair et fournisseur d’informations avec de nombreux contacts, une compétence exceptionnelle en infiltration et espionnage, et un intérêt direct pour le détective.",
        personnalite: "Une rose cramoisie qui prospère dans un sol ensanglanté, son éclat brillant à travers son extérieur épineux. Pourtant, une faible lumière de lune et des brumes toxiques imprégnent, l’enveloppant et marquant son âme même.",


        playstyle: "Le soutien ultime pour une équipe DPS Striker, surtout une équipe Ignis. Elle place des pétales explosifs sur le terrain, et sa compétence augmente les dégâts critiques de l'équipe de 50 % pendant 40 secondes. Chaque explosion de Pétale ajoute 3 % de dégâts Ignis à l'échelle de l'équipe pendant 40 secondes, jusqu'à 5 fois.",

        // --- ÉQUIPEMENT & ARMES AVEC IMAGES ---
        equipment: {
            statsPriority: {
                main: "1. Taux critique | 2. Dégâts critiques",
                sub: "Taux CRIT > Dégâts CRIT > ATK %"
            },
            motif: {
                name: "Le Mystère du Bain de Sang",
                star: 5,
                image: "../assets/images/motif_red_rose.webp", // Remplace par ton chemin d'image
                desc: "Le personnage utilisant ce Motif gagne 24 % d'ATK. En utilisant une compétence, le dégât d'Ignis de tous les personnages de l'équipe augmente de 7 % pour 40 secondes, pouvant s'accumuler jusqu'à 2 fois."
            },
            echoSets: [
                {
                    name: "La lumière pré-argent (Ensemble de 4)",
                    star: 5,
                    image: "../assets/images/echo_red_rose.webp", // Remplace par ton chemin d'image
                    effect: "Augmente l'efficacité ultime de charge du détenteur de 15 %. Lorsque le GRT CRIT du personnage dépasse 150 %, tous les autres membres de l'équipe gagnent 18 % de DÉM CRIT."
                }
            ],
            weapon: {
                name: "Le Prêtre et le Voleur de Pain (Recommandé)",
                star: 5,
                image: "../assets/images/weapon_red_rose.webp", // Remplace par ton chemin d'image
                addendum: "Dégâts critiques +43,75 %",
                type: "Épiphanie",
                desc: "Augmente le bonus de soin du détenteur de 16 %. Après que le porteur ait soigné, tous les autres personnages de l'équipe gagnent des dégâts CRIT (équivalents au dégât CRIT du porteur × 6 % + 16 %) pendant 30 secondes, jusqu'à un maximum de 42 %."
            },
            weaponAlternative: {
                name: "Les Chaussures Rouges (Alternative)",
                star: 5,
                image: "../assets/images/weapon_alt_red_rose.webp", // Remplace par ton chemin d'image
                type: "Épiphanie",
                desc: "Augmente l'efficacité ultime de charge du titulaire de 20 %. Lorsqu'ils infligent des Dégâts Ultimes, tous les personnages de l'équipe gagnent 1 stack de Pas Sanguin."
            }
        },

        // --- COMPOSITIONS D'ÉQUIPES DE RED ROSE ---
        teams: [
            {
                name: "Épreuve par le feu",
                description: "Le troisième corps d'Ignis qui complète la pile de résonance, et un buffer d'équipe : son attaque améliorée par Rythme Lumineux augmente le GRA CRIT de toute l'équipe, et son passif fait que les explosions de Rose Bloom renforcent le dégât d'Ignis de l'équipe.",
                members: [
                    { id: "cinderella", name: "Cendrillon", role: "Porter", image:"../assets/images/cinderellafull.webp"},
                    { id: "alf", name: "Alf", role: "Ignis DPS", image:"../assets/images/alf.webp" },
                    { id: "red-rose", name: "Rose Rouge", role: "Soutien", image: "../assets/images/red-rose.webp", isMain: true },
                    { id: "argos", name: "Argos", role: "Soutien", image: "../assets/images/argos.webp" }
                ]
            }
        ],

        // --- COMPÉTENCES DE RED ROSE ---
        skills: {
            normal: {
                title: "Ouverture Akim...",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 5 coups, infligeant des dégâts d'Ignis.\n\nLes 3e et 5e touches donnent Rose Petals.\n\nATTAQUE CHARGÉE\nNiveau 1 : Maintenez le bouton Attaque de base pour déclencher une rafale d'attaques lourdes, infligeant des dégâts d'Ignis.\nNiveau 2 : Maintenez le bouton Attaque de base pour déclencher une attaque lourde tournante, infligeant des dégâts d'Ignis et obtenant des pétales de rose.\n\nATTAQUE DE POURSUITE\nAprès avoir esquivé ou pendant un Dash, appuyez sur le bouton Attaque de base pour déclencher une Attaque de poursuite, infligeant des dégâts d'Ignis.",
                scaling: "• DMG du premier coup : 63.1%\n• DMG au deuxième coup : 81.8%\n• Dégâts au 3e coup : 102.9%\n• DMG au 4e coup : 140.3%\n• DMG au 5e coup : 163.6%\n• Attaque chargée niveau 1 : 94.9%\n• Attaque chargée niveau 2 : 368.3%\n• Dégâts d'attaque de poursuite : 63.1%"
            },
            skill: {
                title: "Guerre des De...",
                desc: "En atteignant le plein de Pétales de Rose, appuyez sur le bouton Compétence pour tout consommer et lancez une rafale d'attaques infligeant des Dégâts d'Ignis et accordant Rythme Éclatant.\n\nPendant Rythme Lumineux, maintenez le bouton Attaque de base pour déclencher une attaque puissante qui inflige des dégâts d'Ignis, fait apparaître des Fleurs de Rose et augmente les dégâts CRIT de toute l'équipe.",
                scaling: "• Dégâts de compétence : 209.9%\n• Compétence : Boost de dégâts : 243%"
            },
            ult: {
                title: "Grand Finale",
                desc: "Une fois en charge maximale, appuyez sur le bouton Ultime pour lancer un cercle d'épines, infligeant d'énormes dégâts d'Ignis et faisant apparaître des Fleurs de Rose.",
                scaling: "• Dégâts de compétence : 206.4%\n• Fleurs de rosier : 21.6%"
            },
            dodge: {
                title: "Débuts épiques",
                desc: "Changez de personnage sélectionné tout en ayant assez d'énergie de réacteur pour infliger des dégâts d'Ignis et gagner des pétales de rose.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 233.8%"
            },
            passive: {
                title: "Préparation s...",
                desc: "Quand les Rose Blooms explosent, tous les personnages de l'équipe infligent un Ignis de dégâts augmenté.",
                scaling: "• Effet passif en combat"
            }
        }
    },
    
    {
        id: "argos",
        name: "Argos",
        star: 4,
        role: "support",
        roleLabel: "Combat Support",
        elem: "glacies",
        image: "../assets/images/argos.webp",
        link: "character.html?id=argos",
        fullImage: "../assets/images/argosFull.webp",

        quote: "À votre service, patron. Que ce soit pour jeter la main ou passer des notes à un test—comptez sur moi.",
        epithete: "L’Œil d’Argos",
        especes: "Inconnu",
        genre: "Homme ",
        profession: "Barman",
        affiliation: "MADEMOISELLE",
        arme: "Épée à canne",
        version: "A déterminer",
        introduction: "Mémoires, livres d’anciens élèves et dossiers — des mots comme des reflets dans le vin. Argos est un jeune barman à la langue d’argent. Il a rejoint MISS pour être au sommet, mais les choses ne se sont pas passées comme prévu. Chacun doit gagner sa place : il rôde maintenant derrière le bar, écoutant... et attendre.",
        personnalite: "Argos sait exactement quand charmer avec les mots et quand laisser le silence faire le travail. Autodérisoire volontaire — « Tout le monde n’est pas comme toi, mon cher patron. Je suis plutôt un rôle secondaire. » — il préfère converser avec ses shakers, mais ne manque jamais un mot prononcé à son bar....",

        playstyle: "Tampon de soutien d'équipe : après son Ultime, toute l'équipe gagne un énorme bonus d'ATK, et son attaque chargée Regard Perçant ajoute des dégâts d'équipe supplémentaires.",

        

        teams: [
            {
                name: "Épreuve par le feu",
                description: "Le tampon dans le quatrième siège : après son Ultime, toute l'équipe gagne jusqu'à +1150 d'ATK pour 40 secondes, et son attaque chargée Regard Perçant ajoute +10 % de dégâts d'équipe en plus de la résonance triple Ignis.",
                members: [
                    { id: "cinderella", name: "Cendrillon", role: "Porter", image:"../assets/images/cinderellafull.webp" },
                    { id: "alf", name: "Alf", role: "Ignis DPS", image: "../assets/images/alf.webp" },
                    { id: "red-rose", name: "Rose Rouge", role: "Soutien", image: "../assets/images/red-rose.webp" },
                    { id: "argos", name: "Argos", role: "Soutien", image:"../assets/images/argos.webp" },
                ]
            },
            {
                name: "Verdict brûlant",
                description: "Le buffer : après son Ultime, toute l'équipe gagne jusqu'à +1150 d'ATK pendant 40 secondes, et son attaque chargée Regard Perçant ajoute +10 % de dégâts à l'équipe.",
                members: [
                    { id: "the-detective", name: "Le Détective", role: "Porter", image: "../assets/images/Detective.webp" },
                    { id: "cinderella", name: "Cendrillon", role: "Ignis DPS", image: "../assets/images/Cinderellafull.webp" },
                    { id: "alf", name: "Alf", role: "Ignis DPS", image: "../assets/images/alf.webp" },
                    { id: "argos", name: "Argos", role: "Tampon", image: "../assets/images/argos.webp" },
                ]
            }
        ],

        skills: {
            normal: {
                title: "Canne et spiritueux",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 4 coups, infligeant des dégâts Glacies.\n\nPendant Regard Perçant, le 4e coup devient automatiquement une attaque de déchaînement.\n\nPendant Regard Perçant, appuyer sur l'Attaque de base juste après avoir paré une attaque ennemie déclenche immédiatement une attaque de déchaînement.\n\nATTAQUE CHARGÉE\nMaintenez le bouton Attaque de base pour lancer un coup de dépouillement vers le haut, infligeant des dégâts aux Glacies et accordant l'invincibilité. Si vous réussissez à éviter une attaque ennemie pendant cette période, appuyez sur le bouton Attaque de base pour déclencher immédiatement l'Attaque Chargée de niveau supérieur, un dégainage à triple coup. Si elle touche alors qu'Argos est sous Regard Perçant, tous les personnages de l'équipe infligent aussi +10 % de dégâts pendant 40 secondes.\n\nAprès une Esquive Parfaite, appuyez sur le bouton Attaque de base pour déclencher immédiatement l'Attaque Chargée de niveau supérieur.\n\nATTAQUE DE POURSUITE\nAprès avoir esquivé, appuyez sur le bouton Attaque de base pour déclencher une attaque de poursuite, infligeant des dégâts Glacies.",
                scaling: "• DMG du premier coup : 42.1%\n• DMG au deuxième coup : 93.5%\n• Dégâts au 3e coup : 121.6%\n• DMG au 4e coup : 182.3%\n• Coup de Coup Spécial : 210.4%\n• Attaque chargée niveau 1 : 67.6%\n• Attaque chargée niveau 2 : 179.8%\n• Dégâts d'attaque de poursuite : 77.1%"
            },
            skill: {
                title: "Champagne d'Argent",
                desc: "Appuyez sur le bouton Compétence tout en ayant assez de Confession pour tout consommer et tirez avec le Cane Gun, infligeant des dégâts aux Glacies.\nUtiliser cette compétence donne Regard Perçant pendant 10 secondes.\n\nConfession maximale : 12\nConfession gagnée par seconde : 1",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 221.5%"
            },
            ult: {
                title: "L'Œil d'Argos",
                desc: "Une fois en charge maximale, appuyez sur le bouton Ultime pour mélanger un esprit spécial et brisez-le en plein vol avec le Cane Gun, laissant derrière lui un Domaine Tout-Voyant. Les ennemis dans le Domaine Omniscient subissent des dégâts Glacies continus. Le Domaine Omniprésent dure 6 secondes.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 466.8%"
            },
            dodge: {
                title: "Tournevis",
                desc: "Changez le personnage sélectionné tout en ayant assez d'énergie de réacteur pour charger à distance, puis lâchez une attaque de dépouillement avec le canne canon, infligeant des dégâts Glacies.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 267.6%"
            },
            passive: {
                title: "Analyse du barman",
                desc: "Après avoir lancé un Ultime, tous les personnages de l'équipe gagnent 1000 d'ATK augmenté. Pour chaque point de PV max d'Argos, chaque personnage gagne 10 ATK supplémentaires, jusqu'à un maximum de 150. Ça dure 40 secondes.",
                scaling: "• Effet passif en combat"
            }
        }
    },
    
    {
        id: "rex",
        name: "Rex",
        star: 5,
        role: "dps",
        roleLabel: "Resonance DPS",
        elem: "fulmen",
        image: "../assets/images/rex.webp",
        link: "character.html?id=rex",
        fullImage: "../assets/images/rexFull.webp",


        quote: "Les exécuteurs de la loi ne doivent faire preuve d’aucune clémence pour maintenir son autorité.",
        epithete: "Les Écailles du Noir et du Blanc",
        especes: "Inconnu",
        genre: "Homme ",
        profession: "Surintendant",
        affiliation: "Police de la rivière",
        arme: "Composite Club",
        version: "A déterminer",
        introduction: "Un jeune surintendant prompt à intervenir en temps de crise, avec une conviction en l’ordre qui frôle le fanatique. Juste et faux. Noir et blanc. La loi ne connaît aucun compromis. Pour faire respecter la loi, il faut rejeter toute notion de miséricorde — car à ses yeux, le mal n’a aucune nuance de gris.",
        personnalite: "Rex peut rester calme et concentré quand la situation l’exige, mais son duel avec le Détective révèle un guerrier qui aime vraiment se lâcher au combat — sa massue composite lourde existe en partie pour contenir son agilité déjà folle.....",

        playstyle: "Accumule la rage en attaquant, puis dépense-la. Accumulez des charges de tension et dépensez-les pour de grosses attaques. Gagne en invulnérabilité en utilisant beaucoup de ses compétences.",
        

        // --- ÉQUIPEMENT & ARMES AVEC IMAGES ---
        equipment: {
            statsPriority: {
                main: "1. Coefficient d'amplitude | 2. Multiplicateur d'amplitude",
                sub: "Coefficient d'amplitude > Multiplicateur d'amplitude > ATK %"
            },
            motif: {
                name: "Le mystère de l'ordonnance",
                star: 5,
                image: "../assets/images/motif_rex.webp", // Remplace par ton chemin d'image
                desc: "Le personnage utilisant ce Motif gagne un coefficient d'amplitude de 25 %. Lorsqu'ils déclenchent leur Assaut Tactique, ils gagnent 73 % de multiplicateur d'amplitude pendant 18 secondes. En combat, leur multiplicateur d'amplitude est encore augmenté de 73 %."
            },
            echoSets: [
                {
                    name: "Servir et protéger (Ensemble de 4)",
                    star: 5,
                    image: "../assets/images/echo_rex.webp", // Remplace par ton chemin d'image
                    effect: "Ensemble de 4 : Augmente le multiplicateur d'amplitude du détenteur de 42 %. Lorsque le coefficient d'amplitude du détenteur dépasse 50 %, il gagne également Fureur Tonitruante, augmentant encore son multiplicateur d'amplitude de 42 %."
                }
            ],
            weapon: {
                name: "Querelle de lignée (Recommandé)",
                star: 5,
                image: "../assets/images/weapon_rex.webp", // Remplace par ton chemin d'image
                addendum: "Niveau de compétence Rex personnalisé +3",
                type: "Épiphanie",
                desc: "Augmente le coefficient d'amplitude du détenteur de 15 %. Lorsque leur coefficient d'amplitude dépasse 50 %, chaque 1 % au-dessus de 50 % accorde un multiplicateur d'amplitude de 2,5 %, jusqu'à un maximum de 125 %."
            },
            weaponAlternative: {
                name: "La Chute de la Maison de la Pourriture (Alternative)",
                star: 5,
                image: "../assets/images/weapon_alt_rex.webp", // Remplace par ton chemin d'image
                type: "Épiphanie",
                desc: "Augmente le coefficient d'amplitude du détenteur de 15 %. Lorsque leur coefficient d'amplitude dépasse 50 %, chaque 1 % au-dessus de 50 % accorde 0,8 % d'ATK, jusqu'à un maximum de 40 %."
            }
        },

        // --- COMPOSITIONS D'ÉQUIPES DE REX ---
        teams: [
            {
                name: "Long bras de la loi",
                description: "Fulmen carry qui alterne la Rage en Double Matraque et Charge de Volt pour la Loi du Nunchuk, et son passif fait que les Effets de Résonance Fulmen infligent deux instances supplémentaires, le moteur de la pile.",
                members: [
                    { id: "rex", name: "Rex", role: "Porter", image: "../assets/images/rex.webp" },
                    { id: "grimm", name: "Grimm", role: "Soutien Ful...", image:"../assets/images/grimm.webp" },
                    { id: "lorin", name: "Lorin", role: "Break", image: "../assets/images/lorin.webp" },
                    { id: "gucia", name: "Gucia", role: "Soutien", image: "../assets/images/gucia.webp" }
                ]
            }
        ],

        // --- COMPÉTENCES DE REX ---
        skills: {
            normal: {
                title: "Composite Club",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 4 coups, infligeant des dégâts Fulmen. Toucher un ennemi rapporte 4/12/14/20 de Rage à chaque coup respectif.\n\nParer une attaque ennemie conserve la combinaison d'attaque de base actuelle atteinte.\n\nAprès une Esquive Parfaite, appuyez sur le bouton Attaque de base pour balancer rapidement la matraque, infligeant des dégâts Fulmen et accordant 10 de rage. Cela enchaîne directement le troisième coup du combo Attaque de base.\n\nATTAQUE DE POURSUITE\nAprès avoir esquivé, appuyez sur le bouton Attaque de base pour déclencher une Attaque de poursuite, infligeant des dégâts Fulmen et accordant 4 de rage.\n\nMOUVEMENT SIGNATURE\nAprès avoir utilisé Compétence : Matraques doubles, appuyez sur le bouton Attaque de base pour un combo de matraque à 2 coups, infligeant des dégâts Fulmen et accordant 15 de Rage par coup. Les dégâts entrants sont réduits de 20 % pendant l'attaque. Enchaîne le 3e coup du combo Attaque de base.\n\nCOUP DE SIGNATURE CHARGÉE\nAprès avoir utilisé Compétence : Matraques Doubles, maintenez le bouton Attaque de base pour foncer et balancez la matraque vers le haut, infligeant des dégâts Fulmen et accordant 20 de rage. Les dégâts entrants sont réduits de 20 % pendant l'attaque. Enchaîne le 3e coup du combo Attaque de base.",
                scaling: "• DMG du premier coup : 124.9%\n• DMG au deuxième coup : 301.8%\n• Dégâts au 3e coup : 369.5%\n• DMG au 4e coup : 286.2%\n• Dégâts d'attaque de poursuite : 140.5%\n• Dégâts de coup signature du premier coup : 249.8%\n• Dégâts de 2e coup de la Signature Move : 349.7%\n• Dégâts de Coup de Signature Chargée : 568.3%"
            },
            skill: {
                title: "Règle adaptative",
                desc: "COMPÉTENCE : MATRAQUES DOUBLES\nAppuie sur le bouton Compétence tout en ayant assez de Rage pour consommer 60 de Rage et déclencher une attaque de matraque à saltos roulants, infligeant des dégâts Fulmen et gagnant 1 Charge Volt. Les dégâts entrants sont annulés pendant l'attaque. À la fin, appuyez sur Attaque de base pour un mouvement signature, maintenez Attaque de base pour un mouvement signature chargé, ou appuyez sur Compétence pour la compétence : Matraque étendue.\n\nCOMPÉTENCE : MATRAQUE ALLONGÉE\nAppuyez sur le bouton Compétence tout en ayant assez de Rage juste après Compétence : Matraques Doubles pour consommer 60 de Rage et balancez la matraque dans une rafale d'attaques, infligeant des dégâts Fulmen et gagnant 1 Charge Volt. Les dégâts entrants sont annulés. Enchaîne le 4e coup du combo Attaque de base.\n\nCOMPÉTENCE : LOI DES NUNCHAKUS\nUne fois la charge de tension pleine, appuyez sur le bouton Compétence pour déclencher une tempête de nunchakus et un puissant éclair, infligeant des dégâts Fulmen. Les dégâts entrants sont annulés pendant l'attaque.\n\nRage maximale : 120\nRage gagné par seconde : 1",
                scaling: "• Compétence : Double Matraque de Dégâts : 312.2%\n• Compétence : Dégâts étendus de la matraque : 372.1%\n• Compétence : Loi des nunchakus DMG : 730.8%"
            },
            ult: {
                title: "Jugement toni...",
                desc: "Une fois la charge maximale atteinte, appuyez sur le bouton Ultime pour libérer deux chiens policiers dans une attaque coordonnée avant d'invoquer un énorme éclair, infligeant d'énormes dégâts Fulmen et gagnant 120 de Rage.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 1561.3%"
            },
            dodge: {
                title: "Exécuteur exe...",
                desc: "Changez le personnage sélectionné tout en ayant suffisamment d'énergie du réacteur pour infliger des dégâts Fulmen en appelant des éclairs de matraque et en libérant des chiens policiers.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 618.2%"
            },
            passive: {
                title: "Esprit Juste",
                desc: "Infliger des dégâts avec des mouvements signature accorde 7 % d'ATK pendant 16 secondes, cumulant jusqu'à 4 fois. La durée est rafraîchie à chaque activation de cet effet.\n\nLes Effets de Résonance de Fulmen causent 2 instances supplémentaires de Fulmen DMG.",
                scaling: "• Effet passif en combat"
            }
        }
    },
    
    {
        id: "alf",
        name: "Alf",
        star: 4,
        role: "suppressor",
        roleLabel: "Break Support",
        elem: "ignis",
        image: "../assets/images/alf.webp",
        link: "character.html?id=alf",
        fullImage: "../assets/images/alfFull.webp",


        quote: "Le travail le plus important d’une femme de chambre est de protéger son employeur ! ",
        epithete: "Une histoire qui vous appartient vraiment",
        especes: "Inconnu",
        genre: "Femme ",
        profession: "Bonne de chambre (n° 49)",
        affiliation: "MADEMOISELLE",
        arme: "Fusil à pompe + Lance-flammes",
        version: "A déterminer",
        introduction: "Une maison sans tache, une âme sans tache. Alf est la Bonne n° 49 de l’Institut des Femmes de Ménage, de la Société et des Services (MISS). Cette fille désorientée mais déterminée a d’une manière ou d’une autre découvert la gentillesse du détective et a choisi de rester.",
        personnalite: "Alf n’a aucun bon sens, de mauvaises compétences ménagères et d’une incompréhension de la situation — elle prend le sel et le sucre en préparant du thé et ne peut pas être digne de confiance pour nettoyer sans supervision. Dans un monde débordant de connaissances à apprendre, elle ne porte que deux armes : un lance-flammes et un cœur innocent pare-balles......",

        playstyle: "Utilise ses attaques de mêlée, fusil à pompe et lance-flammes pour accumuler Étourdissement et Briser l’ennemi.",
        

        // --- ÉQUIPEMENT & ARMES AVEC IMAGES ---
        equipment: {
            statsPriority: {
                main: "1. Exploit de rupture | 2. Bonus d'accumulation d'étourdissement",
                sub: "Exploit de rupture > Bonus d'étourdissement > ATK %"
            },
            motif: {
                name: "Le Mystère de la Curiosité",
                star: 4,
                image: "../assets/images/motif_alf.webp", // Remplace par ton chemin d'image
                desc: "Le personnage utilisant ce Motif gagne 10 % d'ATK. Lorsque leur Attaque de base, Attaque chargée, Compétence, Assaut tactique ou Ultime infligent des dégâts, chaque type d'attaque augmente son bonus d'accumulation d'étourdissement de 8 % pendant 16 secondes, pouvant s'accumuler jusqu'à 5 fois."
            },
            echoSets: [
                {
                    name: "Les rouages de la ville (Ensemble de 4)",
                    star: 5,
                    image: "../assets/images/echo_alf.webp", // Remplace par ton chemin d'image
                    effect: "Set de 4 : Augmente l'exploit de rupture du détenteur de 60. Lorsque l'exploit de rupture du personnage dépasse 200, il gagne également 25 % de bonus d'accumulation d'étourdissement pendant 14 secondes chaque fois qu'il effectue une attaque chargée."
                }
            ],
            weapon: {
                name: "Bête Blanche des Profondeurs (Recommandé)",
                star: 5,
                image: "../assets/images/weapon_alf.webp", // Remplace par ton chemin d'image
                addendum: "Exploit de rupture 70",
                type: "Épiphanie",
                desc: "Augmente l'exploit de rupture du détenteur de 60. Lorsque leur Exploit de Casse dépasse 180, chaque Exploit de Casse de 1 point au-dessus de 180 accorde un bonus de 0,15 % de Dégâts, jusqu'à un maximum de 30 %."
            }
        },

        // --- COMPOSITIONS D'ÉQUIPES D'ALF ---
        teams: [
            {
                name: "Épreuve par le feu",
                description: "Ignis est un DPS de fusil à pompe et lance-flammes qui dépense des munitions de réserve sur ses tirs, et son Ultime pose un mur de flammes de zone.",
                members: [
                    { id: "cinderella", name: "Cendrillon", role: "Porter", image: "../assets/images/Cinderellafull.webp" },
                    { id: "alf", name: "Alf", role: "Ignis DPS", image: "../assets/images/alf.webp" },
                    { id: "red-rose", name: "Rose Rouge", role: "Soutien", image: "../assets/images/red-rose.webp" },
                    { id: "argos", name: "Argos", role: "Soutien", image: "../assets/images/argos.webp" }
                ]
            },
            {
                name: "Verdict brûlant",
                description: "Second corps Ignis pour la résonance, en ajoutant la pression du fusil à pompe et du lance-flammes qui dépense les munitions de réserve.",
                members: [
                    { id: "the-detective", name: "Le Détective", role: "Porter", image: "../assets/images/Detective.webp" },
                    { id: "cinderella", name: "Cendrillon", role: "Ignis DPS", image: "../assets/images/Cinderellafull.webp" },
                    { id: "alf", name: "Alf", role: "Ignis DPS", image: "../assets/images/alf.webp" },
                    { id: "argos", name: "Argos", role: "Tampon", image: "../assets/images/argos.webp" }
                ]
            },
            {
                name: "Slow Burn",
                description: "Second corps Ignis pour double résonance, dépensant des munitions de réserve pour des attaques de fusil à pompe et de lance-flammes.",
                members: [
                    { id: "cinderella", name: "Cendrillon", role: "Porter", image: "../assets/images/Cinderellafull.webp" },
                    { id: "the-detective", name: "Le Détective", role: "Sub-DPS", image: "../assets/images/Detective.webp" },
                    { id: "firtho", name: "Firtho", role: "Sustain", image: "../assets/images/firtho.webp" },
                    { id: "alf", name: "Alf", role: "Ignis DPS", image: "../assets/images/alf.webp" }
                ]
            }
        ],

        // --- COMPÉTENCES D'ALF ---
        skills: {
            normal: {
                title: "Fusil à pompe débutant",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 3 coups, infligeant des dégâts Ignis.\n\nLe troisième coup consomme 1 munition de réserve. Si aucune munition de réserve n'est disponible, le tir du troisième tir est remplacé par une charge avant, infligeant des dégâts d'Ignis et accordant 3 munitions de réserve.\n\nATTAQUE CHARGÉE\nMaintenez le bouton Attaque de base, consommant toutes les munitions de réserve pour marcher sur l'ennemi et sauter dans les airs, tirant des balles infligeant des dégâts Ignis. Chaque munition de réserve consommée augmente les dégâts des balles de 40 %. Si aucune munition de réserve n'est disponible, les tirs sont remplacés par une charge avant, infligeant des dégâts d'Ignis et accordant 3 munitions de réserve.\n\nATTAQUE DE POURSUITE\nAprès avoir esquivé ou pendant un Dash, appuyez sur le bouton Attaque de base pour déclencher une Attaque de poursuite, infligeant des dégâts d'Ignis.",
                scaling: "• DMG du premier coup : 63.1%\n• DMG au deuxième coup : 98.2%\n• Dégâts au 3e coup : 170.2%\n• Coup de tête : 56.1%\n• Slide : 129.5%\n• Tir glissé : 171.5%\n• Dégâts d'attaque de poursuite : 93.5%"
            },
            skill: {
                title: "Zeroth Shell",
                desc: "Appuyez sur le bouton Compétence pour décocher un tir de fusil à pompe qui consomme des munitions de réserve pour infliger des dégâts d'Ignis.\n\nMunitions de réserve maximales : 6\nMunitions de réserve gagnées par seconde : 0,2",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 175.2%"
            },
            ult: {
                title: "Éclat d'Illumination",
                desc: "Quand l'Ultime est prêt, appuyez sur le bouton Ultime pour diriger un lance-flammes vers l'ennemi, libérant un mur de flammes dans la direction cible, infligeant des dégâts Ignis en zone et gagnant 6 munitions de réserve.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 880.4%"
            },
            dodge: {
                title: "Magazine Dust proof",
                desc: "Changez le personnage sélectionné tout en ayant suffisamment d'énergie du réacteur pour infliger des dégâts d'Ignis et gagner 3 munitions de réserve.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 356.1%"
            },
            passive: {
                title: "Femme de chambre",
                desc: "Appuyez sur le bouton Esquive ou Parade juste après une attaque au fusil à pompe pour consommer 1 munition de réserve et déclencher un tir de suivi. Lorsqu'il frappe un ennemi avec ses attaques de mêlée, fusil à pompe ou lance-flammes, Alf gagne 14 bonus d'accumulation d'étourdissement pour 16 secondes.",
                scaling: "• Effet passif en combat"
            }
        }
    },
    
    {
        id: "gratia",
        name: "Gratia",
        star: 5,
        role: "survivalist",
        roleLabel: "Survivalist",
        elem: "glacies",
        image: "../assets/images/gratia.webp",
        link: "character.html?id=gratia",
        fullImage: "../assets/images/gratiafull.webp",


        quote: " L’entraînement de routine rendra les chevaliers plus forts... Ainsi parla Sa Majesté la Reine !  ",
        epithete: "Le protégé de Sa Majesté",
        especes: "Inconnu",
        genre: "Femme ",
        profession: "Chevalier",
        affiliation: "Royauté et aristocratie",
        arme: "Épée + Bouclier",
        version: "A déterminer",
        introduction: "Chevalier farouchement loyal et fidèle (quoique insensé), Gratia lève son épée et son bouclier au nom de l’honneur chevaleresque et de la grâce de la Reine.",
        personnalite: "ratia est bien élevé, amical, et considéré comme un peu naïf par certains — un chevalier qui prend chaque mot de Sa Majesté pour une évangile. Ne confondez pas la gentillesse avec la faiblesse : c’est une chevalière pleinement entraînée, assez forte pour briser le cou d’une Harpie deux fois plus grande que elle.",

        playstyle: "Le kit est basé sur l’interruption des attaques et la fourniture de boucliers d’équipe. Ajouter le Catalyseur d’étain la transforme aussi en Guérisseuse.",

        // --- ÉQUIPEMENT & ARMES AVEC IMAGES ---
        equipment: {
            statsPriority: {
                main: "1. Efficacité ultime de charge",
                sub: "PV % > Efficacité ultime de charge > Défense %"
            },
            motif: {
                name: "Le Mystère de la Chevalerie",
                star: 5,
                image: "../assets/images/motif_gratia.webp", // Remplace par ton chemin d'image
                desc: "Le personnage utilisant ce Motif gagne 20 % de PV Max. Chaque fois qu'il accorde un Bouclier, l'ATK de tous les personnages de l'équipe augmente de 16 % pendant 40 secondes."
            },
            echoSets: [
                {
                    name: "Code du Serviteur (Ensemble de 4)",
                    star: 5,
                    image: "../assets/images/echo_gratia.webp", // Remplace par ton chemin d'image
                    effect: "Set de 4 : Augmente les PV du détenteur de 12 %. Lorsque l'efficacité ultime de charge du personnage dépasse 150 %, tous les autres membres de l'équipe gagnent 6 % de dégâts."
                }
            ],
            weapon: {
                name: "Le Chant du Paladin (Recommandé)",
                star: 5,
                image: "../assets/images/weapon_gratia.webp", // Remplace par ton chemin d'image
                addendum: "Efficacité ultime de charge",
                type: "Épiphanie",
                desc: "Augmente les PV du détenteur de 20 %. Lorsqu'on fournit un Bouclier à une cible, elle obtient l'effet Bouclier Cerf-volant. Bouclier Cerf-volant augmente la prochaine instance de Dégâts Ultimes infligée de 20 % pendant 4 secondes, après quoi l'effet est perdu."
            }
        },

        // --- COMPOSITIONS D'ÉQUIPES DE GRATIA ---
        teams: [],

        // --- COMPÉTENCES DE GRATIA ---
        skills: {
            normal: {
                title: "Lame émoussée",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 5 coups, infligeant des dégâts Glacies. Les 4e et 5e coups développent rapidement la mémoire musculaire.\n\nEn déclenchant une Esquive Parfaite, appuyez sur le bouton Attaque de base pour déclencher immédiatement le 4e coup d'un combo d'Attaque de base.\n\nAprès avoir paré une attaque, appuyez sur le bouton Attaque de base pour déclencher immédiatement le troisième coup d'un combo d'Attaque de base.\n\nATTAQUE CHARGÉE\nMaintenez le bouton Attaque de base pour trancher, puis frappez le sol au niveau supérieur, infligeant des dégâts aux Glacies. Appuyez sur le bouton Attaque de Base avant que l'Attaque Chargée de niveau supérieur ne se termine pour déclencher immédiatement le 4e coup d'un combo d'Attaque de Base.\n\nATTAQUE DE POURSUITE\nAprès esquive, appuyez sur le bouton Attaque de base pour effectuer une Attaque de poursuite, infligeant des dégâts Glacies.\n\nBLOC SPÉCIAL\nMaintenez le bouton de parade pour lever un bouclier et construisez Fureur Inébranlable, pendant laquelle les dégâts subis sont réduits de 50 %. En atteignant la Fureur Fortifiante à fond, appuyez ou relâchez le bouton Parade pour déclencher une Ruée de Bouclier infligeant des dégâts aux Glacies et interrompant tout ennemi touché. Augmenter le Bouclier draine l'endurance, et subir des attaques accélère la vitesse à laquelle la Fureur Inébranlable augmente.",
                scaling: "• DMG du premier coup : 95%\n• DMG au deuxième coup : 175%\n• Dégâts au 3e coup : 100%\n• DMG au 4e coup : 75%\n• DMG au 5e coup : 275%\n• Attaque chargée niveau 1 : 185%\n• Attaque chargée niveau 2 : 322.1%\n• Dégâts d'attaque de poursuite : 115%\n• Contre d'esquive parfait : 112.5%\n• Ruée de bouclier : 150%"
            },
            skill: {
                title: "Bouclier fluide",
                desc: "Appuyez sur le bouton Compétence pour consommer toute la Mémoire Musculaire et écraser le Bouclier au sol, infligeant des Dégâts Glaciaux et accordant un Bouclier équivalent à 40 % des PV Max de Gratia à tous les personnages de l'équipe, durant 20 secondes.\n\nMémoire musculaire maximale : 100\nMémoire musculaire gagnée par seconde : 5",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 189.9%"
            },
            ult: {
                title: "Lance de la Gloire",
                desc: "Une fois la charge maximale atteinte, appuyez sur le bouton Ultime pour concentrer du Silverium dans votre main droite, meulez-le en une lance spirale avec votre Réacteur, puis lancez-le en avant. Inflige des dégâts Glacies continus à l'impact, explosant après un temps imparti pour infliger d'énormes dégâts aux Glacies.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 517.8%"
            },
            dodge: {
                title: "Dissuasion sévère",
                desc: "Changez de personnage sélectionné tout en ayant suffisamment d'énergie du réacteur pour infliger des dégâts aux Glacies. Pendant l'attaque, tout ennemi attaquant sera contre-attaqué et interrompu.",
                scaling: "• Dégâts de compétence : 125%\n• Contre-dégâts : 647.4%"
            },
            passive: {
                title: "Bénédiction d'Argentium",
                desc: "Lors de l'activation d'un effet de résonance Glacies, tous les autres personnages de l'équipe gagnent 12 % d'ATK, durant 40 secondes.",
                scaling: "• Effet passif en combat"
            }
        }
    },
    
    {
        id: "bentham",
        name: "Bentham",
        star: 4,
        role: "dps",
        roleLabel: "Resonance DPS",
        elem: "glacies",
        image: "../assets/images/bentham.webp",
        link: "character.html?id=bentham",
        fullImage: "../assets/images/benthamfull.webp",

        quote: " Cela pourrait-il être le sommet du pouvoir ? C’est tout ce qu’il y a ? Eh bien, la question maintenant est : comment puis-je me libérer de ce système trivial ?",
        epithete: "Le Réseau de Quartz",
        especes: "Inconnu",
        genre: "Femme ",
        profession: "Secrétaire",
        affiliation: "Industrie Minière Unie",
        arme: "Fouet",
        version: "A déterminer",
        introduction: "Secrétaire du bureau du conseil d’administration de l’UMI. Professionnelle gentille et bien élevée, Bentham détient un grand pouvoir en coulisses en tirant les ficelles de l’Industrie Minière Unie.",
        personnalite: "Extérieurement gentille et d’une impeccablement bien élevée, Bentham est une professionnelle jusqu’au bout des doigts — et ambitieuse. Ses rêves d’enfance sont désormais une force motrice qui la pousse à s’élever toujours plus haut, et la pourriture de l’ambition n’épargne personne.",

        playstyle: "Son passif accorde 40 % de multiplicateur d’ampère lorsqu’elle utilise Assaut tactique et 10 % supplémentaires lorsqu’elle utilise une compétence, donc elle est conçue de façon unique pour un style de jeu Quickswap.",

        // --- ÉQUIPEMENT & ARMES AVEC IMAGES ---
        equipment: {
            statsPriority: {
                main: "1. Coefficient d'amplitude | 2. Multiplicateur d'amplitude",
                sub: "Coefficient d'amplitude > Multiplicateur d'amplitude > ATK %"
            },
            motif: {
                name: "Le Mystère du Bureau",
                star: 4,
                image: "../assets/images/motif_bentham.webp", // Remplace par ton chemin d'image
                desc: "Le personnage utilisant ce Motif gagne 10 % d'ATK. Lorsqu'une compétence est déclenchée, son coefficient d'amplitude augmente de 15 % pendant 12 secondes, pouvant s'accumuler jusqu'à 2 fois."
            },
            echoSets: [
                {
                    name: "Servir et protéger (Ensemble de 4)",
                    star: 5,
                    image: "../assets/images/echo_rex.webp", // Remplace par ton chemin d'image
                    effect: "Ensemble de 4 : Augmente le multiplicateur d'amplitude du détenteur de 42 %. Lorsque le coefficient d'amplitude du détenteur dépasse 50 %, il gagne également Fureur Tonitruante, augmentant encore son multiplicateur d'amplitude de 42 %."
                }
            ],
            weapon: {
                name: "Tuer ce que tu aimes (Recommandé)",
                star: 5,
                image: "../assets/images/weapon_bentham.webp", // Remplace par ton chemin d'image
                addendum: "Niveau Ultime personnalisé Bentham +3",
                type: "Épiphanie",
                desc: "Augmente les dégâts de Glace du détenteur de 10 % et accorde 1 stack de Danse Tissée chaque fois qu'il utilise une attaque ou une compétence de base. Chaque stack augmente les dégâts de Glacies infligés de 1,5 % pendant 16 secondes, pouvant s'empiler jusqu'à 10 fois. À 10 piles, le détenteur gagne aussi 1 pile de Baiser de grenade. En atterrissant un Ultime Glacies, une pile de Pomegranate Kiss est consommée pour infliger 100 Glacies Resonance à la cible."
            }
        },

        // --- COMPOSITIONS D'ÉQUIPES DE BENTHAM ---
        teams: [
            {
                name: "Actifs gelés",
                description: "Ajoute des fonds et des actifs liquides dans son combo Cercle Contractuel, et son passif fait que ses effets de résonance Glacies s'accordent à deux instances supplémentaires.",
                members: [
                    { id: "bentham", name: "Bentham", role: "Porter", image: "../assets/images/bentham.webp" },
                    { id: "gucia", name: "Gucia", role: "Soutien", image: "../assets/images/gucia.webp" },
                    { id: "lorin", name: "Lorin", role: "Break", image: "../assets/images/lorin.webp" },
                    { id: "grimm", name: "Grimm", role: "Disrupteur", image: "../assets/images/grimm.webp" }
                ]
            }
        ],

        // --- COMPÉTENCES DE BENTHAM ---
        skills: {
            normal: {
                title: "Lame Cachée",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 4 coups, infligeant des dégâts Glacies. Subventions 1,5/3,2/6/10 Fonds à chaque impact respectif.\n\nAprès avoir paré une attaque ennemie, cela peut être enchaîné directement au deuxième coup du combo Attaque de base.\n\nAprès une Esquive Parfaite, appuyez sur le bouton Attaque de base pour lancer une attaque lourde, accordant 4 Fonds au toucher. Cela peut enchaîner directement le 3e coup du combo Attaque de Basique.\n\nATTAQUE CHARGÉE\nMaintenez le bouton Esquive ou Attaque de base pour dessiner un Cercle Contractuel.\n\nMOUVEMENT SIGNATURE\nPendant que vous êtes dans le Cercle Contractuel, maintenez le bouton Attaque de base pour déclencher un combo Multi-Coups, infligeant des dégâts Glacies et accordant 0,3 Fonds par coup. Si des Actifs Liquides sont disponibles, l'attaque consomme 1 pour infliger un dégât accru aux Glacies. Si 6 Actifs Liquides sont consommés consécutivement, une attaque supplémentaire se déclenche après le combo, infligeant des dégâts Glacies.\n\nATTAQUE DE PARADE\nPendant que vous êtes dans le Cercle Contractuel avec plus d'un Actif Liquide disponible, appuyez ou maintenez le bouton Parry pour déclencher une combinaison allant jusqu'à 3 coups, chacun consommant 1 Actif Liquide et accordant 1 Fonds. Les dégâts entrants sont annulés pendant l'attaque.\n\nATTAQUE DE POURSUITE\nAprès avoir esquivé, appuyez sur le bouton Attaque de base pour effectuer une attaque de poursuite, infligeant des dégâts Glacies et accordant 2 fonds au coup.",
                scaling: "• DMG du premier coup : 85.2%\n• DMG au deuxième coup : 178.8%\n• Dégâts au 3e coup : 178.8%\n• DMG au 4e coup : 447.1%\n• Dégâts d'attaque de poursuite : 149%\n• Attaque signature Parade, attaque de 1er coup, dégâts : 447.9%\n• Attaque de parade signature Attaque de 2e coup dégâts : 415.6%\n• Attaque signature Parade, attaque 3e coup, dégâts : 415.6%\n• Attaque de base du mouvement signature : 80.8%\n• Bonus de dégâts : 80.8%\n• Contre d'esquive parfait : 127.7%\n• Attaque signature Poursuite d'attaque de base : 277%"
            },
            skill: {
                title: "Contrôle ponctuel",
                desc: "Appuyez sur le bouton Compétence tout en ayant assez de Fonds pour consommer 40 Fonds et planer rapidement, infligeant des Glaciers aux ennemis tout en gagnant 2 Actifs Liquides.\n\nSi suffisamment de fonds restent, appuyez de nouveau sur le bouton Compétence pour consommer 40 fonds supplémentaires et lancez une attaque de suivi, infligeant des dégâts Glacies et gagnant 2 actifs liquides. Cette attaque peut enchaîner directement le 3e coup du combo Attaque de base.\n\nFonds max : 80\nFonds gagnés par seconde : 1\nActifs liquides maximaux : 6",
                scaling: "• DMG du premier coup : 403%\n• DMG au deuxième coup : 557.3%"
            },
            ult: {
                title: "Ordre inébranlable",
                desc: "Une fois en charge maximale, appuyez sur le bouton Ultime pour appeler plusieurs membres de la Sécurité et déchaîner une salve de tirs indiscriminés, infligeant d'énormes dégâts Glacies.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 1415.7%"
            },
            dodge: {
                title: "Réunion d'urgence",
                desc: "Changez de personnage sélectionné tout en ayant suffisamment d'énergie de réacteur pour déclencher une rafale de coups de lames, infligeant des dégâts aux Glacies.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 468.4%"
            },
            passive: {
                title: "Planning fixe",
                desc: "Accorde 40 % de multiplicateur d'amplitude lors d'une attaque tactique, plus 10 % supplémentaires lors d'une compétence. Le multiplicateur d'amplitude peut être augmenté jusqu'à un maximum de 40 % et dure 6 secondes.\n\nLes effets de résonance des Glacies causent 2 instances supplémentaires de dégâts de résonance des Glacies.",
                scaling: "• Effet passif en combat"
            }
        }
    },
    
    {
        id: "grimm",
        name: "Grimm",
        star: 4,
        role: "support",
        roleLabel: "Combat Support",
        elem: "fulmen",
        image: "../assets/images/grimm.webp",
        link: "character.html?id=grimm",
        fullImage: "../assets/images/grimmFull.webp",

        quote: " La vérité non documentée est vraiment fragile. La confrontation directe n’est pas mon truc. Je mène mes batailles ailleurs.",
        epithete: "Tête d’affiche à la langue argentée",
        especes: "Inconnu",
        genre: "Homme ",
        profession: "Journaliste",
        affiliation: "S.T.A.T.S.",
        arme: "Fouet",
        version: "A déterminer",
        introduction: "eune journaliste né dans les couches inférieures de la société, Grimm est un homme ambitieux à l’esprit aussi vif que sa langue. Chroniqueur de la société moderne, il n’hésite jamais à risquer le danger lorsque l’occasion frappe — que ce soit pour dénoncer les scandales ou donner une voix aux défunts dans le doute. Il croit que la vérité est toute-puissante, et qu’elle doit être entendue.",
        personnalite: "Grimm est l’ambition incarnée : vif d’esprit, au langage acéré, et n’a pas peur des dangers que ses titres envoient. La confrontation directe n’est pas son style — il mène ses batailles dans la presse, où une vérité non documentée est fragile mais qu’une vérité publiée est une arme.",

        playstyle: "Le soutien ultime de Fulmen Resonance, conçu pour améliorer un DPS de Resonance. Preuves photographiques et Exposition complète réduisent la résistance Fulmen de l’ennemi, et Exposition complète ajoute aussi un buff de dégâts Fulmen. P3 donne un bonus de 45 % de multiplicateur d’ampère à l’ensemble de l’équipe au début du combat, et P5 donne un bonus de 15 % de dégâts Fulmen pendant 40 secondes.",

        // --- ÉQUIPEMENT & ARMES AVEC IMAGES ---
        equipment: {
            statsPriority: {
                main: "1. PV | 2. Efficacité ultime de charge",
                sub: "PV % > Efficacité ultime de charge > Recharge d'énergie"
            },
            motif: {
                name: "Le mystère du flash",
                star: 4,
                image: "../assets/images/motif_grimm.webp", // Remplace par ton chemin d'image
                desc: "Le personnage utilisant ce Motif gagne 12,5 % d'Efficacité de Charge Ultime. Lors de la libération d'un Ultime, le coefficient d'amplitude de tous les personnages de l'équipe augmente de 10 % pendant 40 secondes."
            },
            echoSets: [
                {
                    name: "City Grime Alliance (Ensemble de 4)",
                    star: 5,
                    image: "../assets/images/echo_grimm.webp", // Remplace par ton chemin d'image
                    effect: "Set de 4 : Le détenteur accorde une augmentation de 8 % des dégâts à tous les personnages de l'équipe partageant le même attribut de réacteur."
                }
            ],
            weapon: {
                name: "La Métamorphose (Recommandé)",
                star: 5,
                image: "../assets/images/weapon_grimm.webp", // Remplace par ton chemin d'image
                addendum: "Addendum ultime sur l'efficacité de charge",
                type: "Épiphanie",
                desc: "Cela augmente l'efficacité ultime de charge du titulaire de 25 %. Le détenteur accorde une augmentation de 50 % du multiplicateur d'amplitude à tous les personnages de l'équipe partageant le même attribut de réacteur."
            }
        },

        // --- COMPOSITIONS D'ÉQUIPES DE GRIMM ---
        teams: [
            {
                name: "Long bras de la loi",
                description: "Le troisième corps Fulmen : sa compétence caméra applique Full Exposé pour retirer jusqu'à 15 % de la résurgence Fulmen d'un ennemi, et son passif offre à toute l'équipe un bonus de dégâts Fulmen.",
                members: [
                    { id: "rex", name: "Rex", role: "Porter", image: "../assets/images/rex.webp" },
                    { id: "grimm", name: "Grimm", role: "Soutien Ful...", image: "../assets/images/grimm.webp" },
                    { id: "lorin", name: "Lorin", role: "Break", image: "../assets/images/lorin.webp" },
                    { id: "gucia", name: "Gucia", role: "Soutien", image: "../assets/images/gucia.webp" }
                ]
            },
            {
                name: "Actifs gelés",
                description: "Soutien au contrôle de Fulmen : sa compétence caméra applique Full Exposé pour déchirer Fulmen RES et interrompre, ajoutant une seconde menace de disruption aux côtés de Lorin.",
                members: [
                    { id: "bentham", name: "Bentham", role: "Porter", image: "../assets/images/bentham.webp" },
                    { id: "gucia", name: "Gucia", role: "Soutien", image: "../assets/images/gucia.webp" },
                    { id: "lorin", name: "Lorin", role: "Break", image: "../assets/images/lorin.webp" },
                    { id: "grimm", name: "Grimm", role: "Disrupteur", image: "../assets/images/grimm.webp" }
                ]
            }
        ],

        // --- COMPÉTENCES DE GRIMM ---
        skills: {
            normal: {
                title: "Pistolet compact",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 5 coups, infligeant des dégâts Fulmen. Accorde une batterie de caméra de 2/2/2/5/5 à chaque coup correspondant.\nLe 5e coup du combo Attaque de base appliquera Nouvelle Cible aux cibles touchées.\n\nEn déclenchant une Esquive Parfaite, appuyez sur le bouton Attaque de base pour déclencher immédiatement le 5e coup du combo Attaque de base. Cette attaque peut interrompre les ennemis.\nAprès avoir utilisé le mouvement d'ouverture, appuyez sur le bouton Attaque de base pour enchaîner directement le 5e coup du combo Attaque de base.\nAprès avoir paré une attaque, appuyez sur le bouton Attaque de Base pour enchaîner directement le 3e coup du combo Attaque de Base.\n\nATTAQUE CHARGÉE\nNiveau 1 : inflige des dégâts Fulmen et accorde 5 batteries de caméra.\nNiveau 2 : inflige des dégâts Fulmen et accorde 6 batteries de caméra. De plus, applique la Cible de Nouvelles aux cibles touchées.\n\nATTAQUE DE POURSUITE\nAprès esquive, appuyez sur le bouton Attaque de base pour effectuer une attaque de poursuite, infligeant des dégâts Fulmen et gagnant 2 batteries de caméra.",
                scaling: "• DMG du premier coup : 67.5%\n• DMG au deuxième coup : 97.8%\n• Dégâts au 3e coup : 137.3%\n• DMG au 4e coup : 125.7%\n• DMG au 5e coup : 232.8%\n• Dégâts d'attaque de poursuite : 111.8%\n• Attaque chargée niveau 1 : 246.8%\n• Attaque chargée niveau 2 : 407.4%"
            },
            skill: {
                title: "Preuve photographique",
                desc: "Une fois la batterie de caméra à pleine capacité, appuyez sur le bouton Compétence pour consommer 20 batteries d'appareil photo et commencez à prendre rapidement des photos de chaque cible à portée, infligeant des dégâts Fulmen.\nÀ la batterie de la caméra au maximum, maintenez le bouton Compétence pour orienter la caméra. Relâchez le bouton pour consommer toute la batterie de l'appareil, prenez des photos rapides et infligez des dégâts Fulmen à toutes les cibles à portée.\n\nLes ennemis touchés sont infligés avec des preuves photographiques pendant 15 secondes. Si la cible a News Target, elle est remplacée par un Full Exposé qui dure 15 secondes.\nLes preuves photographiques réduisent la résistance Fulmen des ennemis de 5 %. L'Exposé complet réduit le Fulmen RES des ennemis de 15 %.\n\nBatterie maximale de la caméra : 40\nBatterie de l'appareil photo gagnée par seconde : 4",
                scaling: "• Dégâts de compétence : 118.9%\n• Dégâts de compétence non chargés : 186.2%\n• Dégâts de compétence entièrement chargés : 372.3%"
            },
            ult: {
                title: "Scoop aéroporté",
                desc: "Une fois en charge maximale, appuyez sur le bouton Ultime pour sauter dans les airs et réaliser une série de snapshots difficiles, infligeant d'énormes dégâts Fulmen.\n\nToucher un ennemi rafraîchit la durée de sa Preuve Photographique ou de son Exposé Complet à 40 secondes.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 190.6%"
            },
            dodge: {
                title: "Enquête Infiltrée",
                desc: "Changez le personnage sélectionné tout en ayant suffisamment d'énergie du réacteur pour infliger des dégâts Fulmen. S'il est attaqué pendant ce temps, Grimm contre-attaque et interrompt l'ennemi, gagnant 40 Batterie de Caméra.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 277%"
            },
            passive: {
                title: "Enregistrement live",
                desc: "Appliquer Full Exposé avec des compétences accorde un bonus de 5 % de Fulmen aux dégâts à toute l'équipe pendant 40 secondes.",
                scaling: "• Effet passif en combat"
            }
        }
    },

    
    {
        id: "lorin",
        name: "Lorin",
        star: 4,
        role: "suppressor",
        roleLabel: "Break Support",
        elem: "fulmen",
        image: "../assets/images/lorin.webp",
        link: "character.html?id=lorin",
        fullImage: "../assets/images/lorinfull.webp",

        quote: "Gardons ces gamins en ordre, et ensuite nous pourrons passer nos vacances en paix.",
        epithete: "L’indispensable",
        especes: "Inconnu",
        genre: "Homme ",
        profession: "Inspecteur en chef",
        affiliation: "Police de la rivière",
        arme: "Gants de boxe électriques",
        version: "A déterminer",
        introduction: "aissez le garçon trébucher, repérer l’écart et montrer une bonne posture. Lorin est l’inspecteur en chef de la police fluviale — un gentil homme dévoué mais fatigué qui combat les criminels avec un gant de boxe électrique réglé sur une tension non létale.",
        personnalite: "Lorin est affable, dévoué et perpétuellement fatigué. La police est une organisation jeune et faire respecter la loi a été extrêmement ardu, le laissant perplexe face à son propre travail.",

        playstyle: "LSimple en théorie : échangez et accumulez rapidement l’étourdissement sur l’ennemi. Son P5 donne un bonus d’ATK de 20 % à l’échelle de l’équipe pendant 40 secondes lorsqu’il exécute un ennemi, ce qui fonctionne bien avec le Catalyseur Alcalin qui réduit la Défense de l’ennemi de 12 % en Exécutant.",

        // --- ÉQUIPEMENT & ARMES AVEC IMAGES ---
        equipment: {
            statsPriority: {
                main: "1. Exploit de rupture | 2. Bonus d'accumulation d'étourdissement",
                sub: "Exploit de rupture > Bonus d'étourdissement > ATK %"
            },
            motif: {
                name: "Le mystère du formalisme",
                star: 4,
                image: "../assets/images/motif_lorin.webp", // Remplace par ton chemin d'image
                desc: "Le personnage utilisant ce Motif gagne 10 % d'ATK. Lors de la libération d'un Assaut Tactique, leur bonus d'accumulation d'étourdissement est augmenté de 42 % pendant 15 secondes."
            },
            echoSets: [
                {
                    name: "Les rouages de la ville (Ensemble de 4)",
                    star: 5,
                    image: "../assets/images/echo_alf.webp", // Remplace par ton chemin d'image
                    effect: "Set de 4 : Augmente l'exploit de rupture du détenteur de 60. Lorsque l'exploit de rupture du personnage dépasse 200, il gagne également 25 % de bonus d'accumulation d'étourdissement pendant 14 secondes chaque fois qu'il effectue une attaque chargée."
                }
            ],
            weapon: {
                name: "Le Chien Maudit (Recommandé)",
                star: 5,
                image: "../assets/images/weapon_lorin.webp", // Remplace par ton chemin d'image
                addendum: "Exploit de rupture 70",
                type: "Épiphanie",
                desc: "Augmente l'exploit de rupture du détenteur de 60. Lorsque leur Exploit de Casse dépasse 180, chaque Exploit de Casse de 1 point au-dessus de 180 accorde 0,2 % d'ATK, jusqu'à un maximum de 40 %."
            },
            weaponAlternative: {
                name: "Bête Blanche des Profondeurs (Alternative)",
                star: 5,
                image: "../assets/images/weapon_alt_lorin.webp", // Remplace par ton chemin d'image
                type: "Épiphanie",
                desc: "Augmente l'exploit de rupture du détenteur de 60. Lorsque leur Exploit de Casse dépasse 180, chaque Exploit de Casse de 1 point au-dessus de 180 accorde un bonus de 0,15 % de Dégâts, jusqu'à un maximum de 30 %."
            }
        },

        // --- COMPOSITIONS D'ÉQUIPES DE LORIN ---
        teams: [
            {
                name: "Spectre complet",
                description: "Fulmen Break Suppressor qui charge Street Smarts en un uppercut puissant de Retraite stratégique et son Ultime Courant Non-Létal, interrompant les ennemis et infligeant des coups tout en complétant la dispersion de quatre attributs.",
                members: [
                    { id: "the-detective", name: "Le Détective", role: "Porter", image: "../assets/images/Detective.webp" },
                    { id: "cynthia-ii", name: "Cynthia II", role: "Soutien", image: "../assets/images/cynthia-ii.webp" },
                    { id: "lorin", name: "Lorin", role: "Disrupteur", image: "../assets/images/lorin.webp" },
                    { id: "firtho", name: "Firtho", role: "Sustain", image: "../assets/images/firtho.webp" }
                ]
            },
            {
                name: "Long bras de la loi",
                description: "Fulmen Break Suppressor : charge Street Smarts dans un uppercut puissant de Retraite stratégique et son ultime Courant Non-Létal, interrompant les ennemis et infligeant des coups tout en complétant le trio de résonance.",
                members: [
                    { id: "rex", name: "Rex", role: "Porter", image: "../assets/images/rex.webp" },
                    { id: "grimm", name: "Grimm", role: "Soutien Ful...", image: "../assets/images/grimm.webp" },
                    { id: "lorin", name: "Lorin", role: "Break", image: "../assets/images/lorin.webp" },
                    { id: "gucia", name: "Gucia", role: "Soutien", image: "../assets/images/gucia.webp" }
                ]
            },
            {
                name: "Actifs gelés",
                description: "Fulmen Break Suppressor : charge Street Smarts en un uppercut lourd et son Ultime Non-Lethal Current, interrompant les ennemis et absorbant les coups pour que Bentham puisse construire librement.",
                members: [
                    { id: "bentham", name: "Bentham", role: "Porter", image: "../assets/images/bentham.webp" },
                    { id: "gucia", name: "Gucia", role: "Soutien", image: "../assets/images/gucia.webp" },
                    { id: "lorin", name: "Lorin", role: "Break", image: "../assets/images/lorin.webp" },
                    { id: "grimm", name: "Grimm", role: "Disrupteur", image: "../assets/images/grimm.webp" }
                ]
            }
        ],

        // --- COMPÉTENCES DE LORIN ---
        skills: {
            normal: {
                title: "Poing Réflexe",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 5 coups, infligeant des dégâts Fulmen. L'attaque construit 5/5/20/10/20 Street Smarts à chaque coup respectif.\nDéclencher une Esquive Parfaite avec Balancement donne 5 Intelligence de la rue.\n\nAprès une esquive parfaite classique, appuyez sur le bouton Attaque de base pour déclencher immédiatement une attaque chargée et interrompre l'ennemi. Appuyez sur le bouton Esquive avant la fin de l'attaque pour effectuer un Balancement. Appuyez sur le bouton Attaque de base avant la fin de Balancement pour revenir en chaîne dans le combo Attaque de base.\nLe balancement déclenché par le 1er/2e/5e coup de l'Attaque de base peut s'enchaîner en 3e coup. Le balancement déclenché par les compétences, les ultimes, et le 3e/4e coup de l'attaque de base peut enchaîner le 5e coup. Déclencher une Esquive Parfaite avec Balancement accorde 20 Intelligence de la rue.\n\nATTAQUE CHARGÉE\nMaintenez le bouton Attaque de base pour lancer un crochet, infligeant des dégâts Fulmen et gagnant 12 Intelligence de la rue. Au niveau supérieur, cela devient une rafale de coups de poing infligeant des dégâts Fulmen et gagnant 20 de Ruses.\n\nATTAQUE DE POURSUITE\nAprès esquive ou lors d'une Course, appuyez sur le bouton Attaque de base pour déclencher une Attaque de Poursuite, infligeant des Dégâts Fulmen et gagnant 5 Intelligence de la Rue.",
                scaling: "• DMG du premier coup : 45.9%\n• DMG au deuxième coup : 73.9%\n• Dégâts au 3e coup : 140%\n• DMG au 4e coup : 43.1%\n• DMG au 5e coup : 195.4%\n• Attaque chargée niveau 1 : 100.8%\n• Attaque chargée niveau 2 : 167.9%\n• Dégâts d'attaque de poursuite : 114.8%"
            },
            skill: {
                title: "Retraite stratégique",
                desc: "Une fois en pleine Intelligence de la rue, appuyez sur le bouton Compétence pour tout consommer et lâcher un puissant uppercut qui inflige des dégâts Fulmen.\n\nIntelligence de rue maximale : 80\nIntelligence de la rue gagnée par seconde : 1",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 447%"
            },
            ult: {
                title: "Courant non létal",
                desc: "Une fois la charge maximale atteinte, appuyez sur le bouton Ultime pour activer les Réacteurs fixés aux gants de boxe électriques de Lorin, les écrabouillant contre le sol pour infliger d'énormes dégâts Fulmen.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 596%"
            },
            dodge: {
                title: "Interception de conflits",
                desc: "Changez le personnage sélectionné tout en ayant suffisamment d'énergie de réacteur pour déchaîner un coup chargé, infliger des dégâts Fulmen et restaurer complètement la Intelligence de la Rue.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 243.5%"
            },
            passive: {
                title: "Intuition jugeante",
                desc: "Utiliser la retraite stratégique accorde un bonus de 40 % de dégâts d'attaque de base pour 5 secondes. Déclencher cet effet à nouveau rafraîchit sa durée.",
                scaling: "• Effet passif en combat"
            }
        }


    },
    
    {
        id: "firtho",
        name: "Firtho",
        star: 4,
        role: "survivalist",
        roleLabel: "Survivalist",
        elem: "radiatio",
        image: "../assets/images/firtho.webp",
        link: "character.html?id=firtho",
        fullImage: "../assets/images/firthofull.webp",

        quote: "La vie n’a pas été clémente avec moi. La mort, en revanche... a été un ami plus fidèle",
        epithete: "The Medical Lancet",
        especes: "Inconnu",
        genre: "Femme ",
        profession: "Docteur",
        affiliation: "La Clinique du Coin",
        arme: "Couperet à tronçonneuse + Seringues",
        version: "A déterminer",
        introduction: "Retrace les pas du Faucheur, et laisse le défunt révéler la vérité. Firtho est une médecin froide et méchante qui mène des recherches médicales dans des chambres secrètes au sein de sa clinique, capable d’appliquer son expertise médicale au combat pour porter un coup fatal à ses adversaires.",
        personnalite: "Froid et direct en surface, Firtho ne veut aucune pitié et déteste être un fardeau. En raison d’une maladie congénitale, elle doit porter en permanence un dispositif de maintien de la vie — le réacteur en forme de cœur battant sur son dos. « Dans la rivière sans fin de la mort, la vie n’est qu’une coïncidence en chemin. »",

        // --- ÉQUIPEMENT & ARMES AVEC IMAGES ---
        equipment: {
            statsPriority: {
                main: "1. HP | 2. Efficacité ultime de charge",
                sub: "PV % > Efficacité ultime de charge > Soin %"
            },
            motif: {
                name: "Le mystère du rythme cardiaque",
                star: 4,
                image: "../assets/images/motif_firtho.webp", // Remplace par ton chemin d'image
                desc: "Le personnage utilisant ce Motif gagne 10 % de PV max. Lors de la soin, l'ATK de tous les personnages de l'équipe augmente de 2 % pendant 40 secondes, pouvant s'accumuler jusqu'à 5 fois."
            },
            echoSets: [
                {
                    name: "Serment d'Hippocrate (Ensemble de 4)",
                    star: 5,
                    image: "../assets/images/echo_firtho.webp", // Remplace par ton chemin d'image
                    effect: "Set de 4 : Augmente le bonus de soin du détenteur de 12 %. Lorsque l'efficacité de charge ultime du personnage dépasse 150 %, tous les autres membres de l'équipe gagnent 8 % d'ATK."
                }
            ],
            weapon: {
                name: "La Dernière Feuille (Recommandé)",
                star: 5,
                image: "../assets/images/weapon_firtho.webp", // Remplace par ton chemin d'image
                addendum: "Addendum ultime sur l'efficacité de charge",
                type: "Épiphanie",
                desc: "Cela augmente les PV maximaux du détenteur de 20 %. Lorsque l'efficacité de charge ultime du détenteur dépasse 140 %, fournir des effets de soin accorde à tous les personnages de l'équipe un multiplicateur d'amplitude de 25 % pendant 30 secondes."
            },
            weaponAlternative: {
                name: "Collier de diamants (Alternative)",
                star: 5,
                image: "../assets/images/weapon_alt_firtho.webp", // Remplace par ton chemin d'image
                type: "Épiphanie",
                desc: "Cela augmente les PV maximaux du détenteur de 20 %. Lorsque l'efficacité de charge ultime du détenteur dépasse 140 %, fournir des effets de soin accorde à tous les personnages de l'équipe 25 % de dégâts."
            }
        },

        // --- COMPOSITIONS D'ÉQUIPES DE FIRTHO ---
        teams: [
            {
                name: "Spectre complet",
                description: "Le soigneur : sa Deuxième Compétence Cœur soigne toute l'équipe au fil du temps tout en accumulant +12 % d'ATK de l'équipe, et son passif réduit de 20 % les dégâts subis par l'équipe pendant que ce buff est actif.",
                members: [
                    { id: "the-detective", name: "Le Détective", role: "Porter", image: "../assets/images/Detective.webp" },
                    { id: "cynthia-ii", name: "Cynthia II", role: "Soutien", image: "../assets/images/cynthia-ii.webp" },
                    { id: "lorin", name: "Lorin", role: "Disrupteur", image: "../assets/images/Lorin.webp" },
                    { id: "firtho", name: "Firtho", role: "Sustain", image: "../assets/images/Firtho.webp" }
                ]
            },
            {
                name: "Slow Burn",
                description: "Ça maintient la partie vivante grâce au contenu plus difficile : Second Heart soigne l'équipe au fil du temps, accumule l'ATK de l'équipe, et son passif réduit les dégâts subis par l'équipe de 20 % tant que le buff tient.",
                members: [
                    { id: "cinderella", name: "Cendrillon", role: "Porter", image: "../assets/images/CinderellaFull.webp" },
                    { id: "the-detective", name: "Le Détective", role: "Sub-DPS", image: "../assets/images/Detective.webp" },
                    { id: "firtho", name: "Firtho", role: "Sustain", image: "../assets/images/Firtho.webp" },
                    { id: "alf", name: "Alf", role: "Ignis DPS", image: "../assets/images/alf.webp" }
                ]
            }
        ],

        // --- COMPÉTENCES DE FIRTHO ---
        skills: {
            normal: {
                title: "Scie d'amputation",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 4 coups, infligeant des dégâts de radiation.\nDès que vous déclenchez une Esquive Parfaite, appuyez sur le bouton Attaque de base pour déclencher immédiatement une Attaque Chargée niveau 2, infligeant des dégâts et interrompant les ennemis.\n\nATTAQUE CHARGÉE\nNiveau 1 : Maintenez le bouton Attaque de base pour déclencher une attaque infligeant des dégâts de radiation.\nNiveau 2 : Maintenez le bouton Attaque de base pour déclencher une attaque puissante infligeant des dégâts de radiation.\n\nATTAQUE DE POURSUITE\nAprès avoir esquivé ou pendant un Dash, appuyez sur le bouton Attaque de base pour déclencher une Attaque de poursuite, infligeant des dégâts de radiation.",
                scaling: "• DMG du premier coup : 81%\n• DMG au deuxième coup : 129.6%\n• Dégâts au 3e coup : 75.6%\n• DMG au 4e coup : 270.1%\n• Dégâts d'attaque de poursuite : 143.1%\n• Attaque chargée niveau 1 : 124.2%\n• Attaque chargée niveau 2 : 283.6%\n• Contre d'esquive parfait : 121.5%"
            },
            skill: {
                title: "Second Cœur",
                desc: "Appuyez sur le bouton Compétence pour consommer 2,5 Sérum Spécial, infligeant des dégâts de radiation.\n\nMaintenez le bouton Compétence pour consommer 10 sérums spéciaux, drainant les PV tous les 0,2 s ; relâcher le bouton Compétence inflige des dégâts de radiation et augmente l'ATK de tous les personnages de l'équipe de 1,5 %. Ça s'empile jusqu'à 8 fois et ça dure 40 secondes. Pendant ce temps, tous les personnages de l'équipe sont soignés au fil du temps, et tous sauf Firtho reçoivent aussi une guérison instantanée.\n\nParer tout en maintenant le bouton de compétence et en drainant les PV déclenche immédiatement une compétence entièrement chargée, consommant tout le Sérum Spécial.\n\nSérum spécial max : 10\nSérum spécial gagné par seconde : 1",
                scaling: "• Maintenir le DMG : 230.9%\n• Appuyez sur DMG : 60.8%"
            },
            ult: {
                title: "Visage de la mort",
                desc: "Une fois la charge maximale atteinte, appuyez sur le bouton Ultime pour balancer la scie d'amputation d'un coup puissant, infligeant un dégât de radiation.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 731.9%"
            },
            dodge: {
                title: "Loi de l'échange",
                desc: "Changez le personnage sélectionné tout en ayant suffisamment d'énergie du réacteur pour infliger des dégâts de radiation.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 361.9%"
            },
            passive: {
                title: "Gestion de la douleur",
                desc: "Réduit les dégâts subis par l'équipe de 20 % lors du buff de Second Heart.",
                scaling: "• Effet passif en combat"
            }
        }
    },
    
    {
        id: "cynthia-ii",
        name: "Cynthia II",
        star: 5,
        role: "support",
        roleLabel: "Combat Support",
        elem: "alba",
        image: "../assets/images/cynthia-ii.webp",
        link: "character.html?id=cynthia-ii",
        fullImage: "../assets/images/cynthia-iifull.webp",

        quote: "Quelques parents nobles plus âgés doivent encore m’appeler leur tante ! Détective, vous voulez vous joindre à eux ?",
        epithete: "Le Goldbud",
        especes: "Inconnu",
        genre: "Femme ",
        profession: "L’Héritier de Luna",
        affiliation: "Royauté et aristocratie",
        arme: "Automates Bread Kitty",
        version: "A déterminer",
        introduction: "e croissant ascendant symbolise l’avenir des familles royales et de la ville. Cynthia II est la très aimée descendante de la maison Luna, une jeune aristocrate innocente — et la logeuse du détective.",
        personnalite: "Cynthia est une farceur coquine, bien que ses actes de malice soient pour la plupart inoffensifs. Une noble acuité et une perspicacité coulent naturellement dans ses veines : formée au leadership depuis sa jeunesse, elle est sage bien au-delà de son âge, gérant l’entretien de la résidence et du bureau du détective tout en trouvant le temps de jouer.»",

       
        // --- COMPOSITIONS D'ÉQUIPES DE CYNTHIA II ---
        teams: [
            {
                name: "Spectre complet",
                description: "Applique Surcharge de Douceur pour que les ennemis subissent +10 % de dégâts en plus, et son Boomerang Ultime les rassemble alors qu'il reste sur le terrain en infligeant des dégâts d'Albe.",
                members: [
                    { id: "the-detective", name: "Le Détective", role: "Porter", image: "../assets/images/Detective.webp" },
                    { id: "cynthia-ii", name: "Cynthia II", role: "Soutien", image: "../assets/images/cynthia-ii.webp" },
                    { id: "lorin", name: "Lorin", role: "Disrupteur", image: "../assets/images/lorin.webp" },
                    { id: "firtho", name: "Firtho", role: "Sustain", image: "../assets/images/firtho.webp" }
                ]
            }
        ],

        // --- COMPÉTENCES DE CYNTHIA II ---
        skills: {
            normal: {
                title: "Vassaux en peluche",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 3 coups, infligeant des dégâts Alba (Alba Damage).\n\nLors de l'activation d'une esquive parfaite, appuyez sur le bouton Attaque de base pour exécuter une attaque sautée. Les cibles affectées par la Surcharge de Douceur sont interrompues et prennent des dégâts Alba supplémentaires.\n\nATTAQUE CHARGÉE\nMaintenez le bouton Attaque de base pour exécuter une attaque roulante, infligeant des dégâts Alba et augmentant le taux d'accumulation de Douceur. En courant, relâchez le bouton Attaque de base pour déclencher une attaque sautée. Les cibles affectées par la Surcharge de Douceur sont interrompues et prennent des dégâts Alba supplémentaires.\n\nATTAQUE DE POURSUITE\nEn courant, appuyez sur le bouton Attaque de base pour exécuter une Attaque de poursuite, infligeant des dégâts Alba (Alba Damage).",
                scaling: "• DMG du premier coup : 45%\n• DMG au deuxième coup : 75%\n• Dégâts au 3e coup : 150%\n• Dégâts d'attaque chargée : 737.5%\n• Dégâts de compétence au deuxième coup : 250%\n• Dégâts d'attaque de poursuite : 100%"
            },
            skill: {
                title: "Fronde Douce",
                desc: "Maintenez le bouton Compétence pour consommer de la Douceur et lance une bombe de sucre sur l'ennemi, infligeant des dégâts Alba en zone de zone. La charger plus longtemps élargit la zone d'effet et applique Surcharge de douceur aux cibles touchées.\n\nDouceur maximale : 100\nDouceur gagnée par seconde : 6\n\nLes cibles avec Surcharge de Douceur prennent +10 % de dégâts pendant 40 secondes.",
                scaling: "• Dégâts de compétence chargée niveau 1 : 65.9%\n• Niveau 2 des dégâts de compétence chargée : 290.9%"
            },
            ult: {
                title: "Compassion du Croissant",
                desc: "Une fois en charge maximale, appuyez sur le bouton Ultime pour lancer un boomerang croissant avec ses chevaliers-chats. Le boomerang tourne sur le champ de bataille, attirant les ennemis et infligeant des dégâts Alba (Alba Damage). Elle reste même si Cynthia quitte le champ de bataille.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 184.6%"
            },
            dodge: {
                title: "Le cadeau du Cakeball",
                desc: "Changez le personnage sélectionné tout en ayant assez d'énergie du réacteur pour infliger des dégâts Alba.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 348%"
            },
            passive: {
                title: "La Lamentation de Toast",
                desc: "Chaque fois que Cynthia s'apprête à prendre des dégâts, son fidèle Sir Toast le Chevalier subira le coup à sa place. Sir Toast doit alors se reposer un moment après son sacrifice courageux et tragique (cet effet peut s'activer toutes les 10 secondes).",
                scaling: "• Effet passif en combat"
            }
        }
    },
    
    {
        id: "gucia",
        name: "Gucia",
        star: 4,
        role: "support",
        roleLabel: "Combat Support",
        elem: "alba",
        image: "../assets/images/gucia.webp",
        link: "character.html?id=gucia",
        fullImage: "../assets/images/guciafull.webp",

        quote: "",
        epithete: "",
        especes: "Inconnu",
        genre: "Femme ",
        profession: "Apprenti",
        affiliation: "Guilde des Chasseurs",
        arme: "Fléau",
        version: "A déterminer",
        introduction: "",
        personnalite: "»",

        playstyle: "Kit conçu pour augmenter le coefficient d'amplitude à l'échelle de l'équipe lors de l'échange et de l'utilisation de son Ultime. Dans une équipe d'Alba, ses Compétences réduisent la Résistance Alba de l'ennemi.",

        // --- ÉQUIPEMENT & ARMES AVEC IMAGES ---
        equipment: {
            statsPriority: {
                main: "1. HP | 2. Efficacité ultime de charge",
                sub: "PV % > Efficacité ultime de charge > Recharge d'énergie"
            },
            motif: {
                name: "Le Mystère de la Tour d'Ivoire",
                star: 4,
                image: "../assets/images/motif_gucia.webp", // Remplace par ton chemin d'image
                desc: "Le personnage utilisant ce Motif gagne 12,5 % d'Efficacité de Charge Ultime. En déclenchant une Attaque Tactique ou une compétence, ils gagnent 1 stack de Concentration. Chaque stack augmente le coefficient d'amplitude de tous les personnages de l'équipe de 6 % pendant 40 secondes, en s'empilant jusqu'à 2 fois."
            },
            echoSets: [
                {
                    name: "Code du Serviteur",
                    star: 5,
                    image: "../assets/images/echo_gucia.webp", // Remplace par ton chemin d'image
                    effect: "Set de 4 : Augmente les PV du détenteur de 12 %. Lorsque l'efficacité ultime de charge du personnage dépasse 150 %, tous les autres membres de l'équipe gagnent 6 % de dégâts."
                }
            ],
            weapon: {
                name: "La Tragédie de l'Homme (Recommandé)",
                star: 5,
                image: "../assets/images/weapon_gucia.webp", // Remplace par ton chemin d'image
                addendum: "Addendum ultime sur l'efficacité de charge",
                type: "Épiphanie",
                desc: "Augmente l'efficacité ultime de charge du titulaire de 20 %. Après avoir utilisé leur Ultime, tous les personnages de l'équipe gagnent 10 % de dégâts Fulmen pendant 40 secondes."
            },
            weaponAlternatives: [
                {
                    name: "Monstruosité ressuscitée",
                    star: 5,
                    image: "../assets/images/weapon_alt1_gucia.webp", // Remplace par ton chemin d'image
                    type: "Épiphanie",
                    desc: "Augmente l'efficacité ultime de charge du titulaire de 20 %. En déclenchant leur Assaut Tactique, Compétence ou Ultime, ils gagnent 1 stack de Records de Test, durant 40 secondes et..."
                },
                {
                    name: "La Dernière Feuille (Seulement avec Tin Catalyst équipé)",
                    star: 5,
                    image: "../assets/images/weapon_alt2_gucia.webp", // Remplace par ton chemin d'image
                    type: "Épiphanie",
                    desc: "Cela augmente les PV maximaux du détenteur de 20 %. Lorsque l'efficacité de charge ultime du détenteur dépasse 140 %, fournir des effets de soin accorde à tous les personnages de l'équipe..."
                }
            ]
        },

        // --- COMPOSITIONS D'ÉQUIPES DE GUCIA ---
        teams: [
            {
                name: "Long bras de la loi",
                description: "Soutien d'amplitude d'Alba : son Ultime augmente le coefficient d'amplitude de toute l'équipe de 10 % pendant 40 secondes, et son passif donne plus d'Amplitude aux alliés lorsqu'ils font un Assaut Tactique.",
                members: [
                    { id: "rex", name: "Rex", role: "Porter", image: "../assets/images/rex.webp" },
                    { id: "grimm", name: "Grimm", role: "Soutien Ful...", image: "../assets/images/grimm.webp" },
                    { id: "lorin", name: "Lorin", role: "Break", image: "../assets/images/lorin.webp" },
                    { id: "gucia", name: "Gucia", role: "Soutien", image: "../assets/images/gucia.webp" }
                ]
            },
            {
                name: "Actifs gelés",
                description: "Alba support d'amplitude dont le buff aide n'importe quel attribut : son Ultime augmente le coefficient d'amplitude de toute l'équipe de 10 % pendant 40 secondes, et son passif donne plus d'Amplitude aux alliés lorsqu'ils font Assaut Tactique.",
                members: [
                    { id: "bentham", name: "Bentham", role: "Porter", image: "../assets/images/bentham.webp" },
                    { id: "gucia", name: "Gucia", role: "Soutien", image: "../assets/images/gucia.webp" },
                    { id: "lorin", name: "Lorin", role: "Break", image: "../assets/images/lorin.webp" },
                    { id: "grimm", name: "Grimm", role: "Disrupteur", image: "../assets/images/grimm.webp" }
                ]
            }
        ],

        // --- COMPÉTENCES DE GUCIA ---
        skills: {
            normal: {
                title: "Lumière d'extraction de l'échantillon",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 4 coups, infligeant des dégâts Alba et obtenant Érudition.\n\nLe 1er et le 3e coup du combo donnent 10 d'Érudition, tandis que les 2e et 4e donnent 20.\n\nAvant la fin du 4e coup, appuyer sur le bouton Compétence, Parade ou Esquive accorde 40 d'Érudition.\n\nDès que vous déclenchez une Esquive Parfaite, appuyez sur le bouton Attaque de base pour déclencher immédiatement une Attaque Chargée niveau 2. Cette attaque peut interrompre les ennemis.\n\nATTAQUE CHARGÉE\nNiveau 1 : Maintenez le bouton Attaque de base pour déclencher un coup de lanterne qui inflige des dégâts d'Alba et 5 d'Érudition.\nNv 2 : Maintenez le bouton Attaque de base pour déclencher un coup de lanterne qui inflige des dégâts d'Alba et accorde 60 d'Érudition.\n\nAvant la fin de l'attaque chargée niveau 2, appuyer sur le bouton Compétence, Parade ou Esquive donne 40 d'Érudition.\n\nATTAQUE DE POURSUITE\nAprès esquive ou lors d'un Dash, appuyez sur le bouton Attaque de base pour déclencher une Attaque de poursuite, infligeant des dégâts Alba (Alba Damage).",
                scaling: "• DMG du premier coup : 60.3%\n• DMG au deuxième coup : 115.7%\n• Dégâts au 3e coup : 144.7%\n• DMG au 4e coup : 217%\n• Dégâts d'attaque de poursuite : 74.7%\n• Attaque chargée niveau 1 : 144.7%\n• Attaque chargée niveau 2 : 329.1%"
            },
            skill: {
                title: "Cherche le Surnaturel",
                desc: "Maintenez le bouton Compétence pour faire tourner la lanterne et commencez à charger jusqu'à 2 secondes, gagnant jusqu'à 120 d'Érudition au fil du temps. En relâchant le bouton ou en atteignant la charge maximale, toute l'Érudition est consommée pour déclencher une attaque puissante.\n\nMoins de 100 d'Érudition consommée : brandir la lanterne pour infliger Alba DMG.\n\nMoins de 200 d'Érudition consommés : En plus, lâchez une petite luciole sur l'ennemi pour infliger des dégâts Alba et réduire leur RES Alba de 5 % pendant 40 secondes.\n\n300 d'Érudition consommée : Libérez une grande luciole pour infliger des dégâts d'Alba et réduisez la résistance d'énergie d'Alba de la cible de 10 % pendant 40 secondes.\n\nÉrudition maximale : 300",
                scaling: "• Dégâts de compétence : 54.3%\n• Petit DMG de luciole : 126.6%\n• Grand DMG de luciole : 171.5%"
            },
            ult: {
                title: "Espèce inconnue détectée",
                desc: "Une fois la charge pleine, appuyez sur le bouton Ultime pour soulever la lanterne, libérant des rayons brillants infligeant d'énormes dégâts Alba et augmentant le coefficient d'amplitude de tous les personnages de l'équipe de 10 % pendant 40 secondes.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 410.9%"
            },
            dodge: {
                title: "Interdisciplinaire",
                desc: "Changez le personnage sélectionné tout en ayant assez d'énergie du réacteur pour déclencher une rafale d'attaques de lanterne, infligeant des dégâts Alba et gagnant 140 d'Érudition.\n\nAppuyer sur le bouton Compétence, Parade ou Esquive pendant l'attaque rapporte 40 d'Érudition.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 243.5%"
            },
            passive: {
                title: "Académite",
                desc: "Gucia gagne 1 stack d'Illumination à chaque fois qu'elle utilise son Assaut Tactique ou sa Compétence. Bien que Gucia soit un personnage secondaire, chaque fois qu'un autre personnage utilise son Assaut Tactique, il consomme 1 stack d'Illumination pour gagner 10 % de coefficient d'amplitude pendant 16 secondes. Cet effet est supprimé lorsque ce personnage quitte le terrain.\n\nÉclairage maximal : 2",
                scaling: "• Effet passif en combat"
            }
        }
    },
    
    {
        id: "captain-kaboom",
        name: "Captain Kaboom",
        star: 4,
        role: "suppressor",
        roleLabel: "Break Support",
        elem: "radiatio",
        image: "../assets/images/captain-kaboom.webp",
        link: "character.html?id=captain-kaboom",
        fullImage: "../assets/images/captain-kaboomfull.webp",

        quote: "« Capitaine Kaboom, prêt au service ! Réparations, boîtes à fusibles brûlées, poêles cassées, méchants, tout ce que vous voulez ! »",
        epithete: "De bricolages et de mélodies",
        especes: "Inconnu",
        genre: "Femme ",
        profession: "Technicien",
        affiliation: "Équipe Kaboom",
        arme: "Clé à molette",
        version: "A déterminer",
        introduction: "apitaine de l’équipe Kaboom — une équipe de techniciens décrite comme une ruche d’abeilles industrieuses, bourdonnant sans relâche autour de Silvernia. Réparations, boîtes à fusibles brûlées, poêles cassés, méchants : quel que soit le métier, le capitaine Kaboom se présente pour le service.Elle est l’un des personnages les plus récemment révélés, et ses statistiques de combat — Attribut Réacteur, rareté et rôle — n’ont pas encore été officiellement annoncées. Cette page sera mise à jour dès qu’ils seront confirmés.",
        personnalite: "",

        playstyle: "Construisez Courant et Pression sur l'ennemi pour augmenter sa propre ATK, avec un kit axé sur les Attaques Chargées. Son P5 donne un bonus d'ATK de 20 % à l'échelle de l'équipe lors de l'exécution des ennemis, bien associé à Alkali (réduit la Défense ennemie lors d'Exécution). P6 lui donne aux Attaques Chargées, 10 % de Défense Ignorée et un effet de Ramasser.",

        // --- ÉQUIPEMENT & ARMES AVEC IMAGES ---
        equipment: {
            statsPriority: {
                main: "1. Exploit de rupture | 2. Bonus d'accumulation d'étourdissement",
                sub: "Exploit de rupture > Bonus d'étourdissement > ATK % > Dégâts CRIT"
            },
            motif: {
                name: "Le mystère des futurs adultes",
                star: 4,
                image: "../assets/images/motif_capitaine_kaboom.webp",
                desc: "Le personnage utilisant ce Motif gagne 31,25 % de dégâts de CRIT. En déclenchant leur Assaut Tactique, ils gagnent 24 % d'ATK pendant 15 secondes."
            },
            echoSets: [
                {
                    name: "Les rouages de la ville (Ensemble de 4)",
                    star: 5,
                    image: "../assets/images/echo_alf.webp",
                    effect: "Set de 4 : Augmente l'exploit de rupture du détenteur de 60. Lorsque l'exploit de rupture du personnage dépasse 200, il gagne également 25 % de bonus d'accumulation d'étourdissement pendant 14 secondes chaque fois qu'il effectue une attaque chargée."
                }
            ],
            weapon: {
                name: "Bête Blanche des Profondeurs (Recommandé)",
                star: 5,
                image: "../assets/images/weapon_alt_lorin.webp",
                addendum: "Exploit de rupture 70",
                type: "Épiphanie",
                desc: "Augmente l'exploit de rupture du détenteur de 60. Lorsque leur Exploit de Casse dépasse 180, chaque Exploit de Casse de 1 point au-dessus de 180 accorde un bonus de 0,15 % de Dégâts, jusqu'à un maximum de 30 %."
            }
        },

       

        // --- COMPÉTENCES ---
        skills: {
            normal: {
                title: "Chemise d'entretien",
                desc: "Appuyez sur le bouton Attaque de base pour effectuer un combo allant jusqu'à 4 coups, infligeant des dégâts de radiation. Accorde 5/10/10/40 de pression en touchant un ennemi.\n\nEn déclenchant une Esquive Parfaite, appuyez sur le bouton Attaque de base pour déclencher immédiatement un Coup de Grâce chargé. Cette attaque peut interrompre les ennemis.\nAprès avoir paré une attaque, appuyez sur le bouton Attaque de base pour enchaîner directement le 3e coup du combo d'attaque de base.\n\nATTAQUE CHARGÉE\nBien que la Pression soit inférieure à 30, effectuez une attaque lourde infligeant des Dégâts de Radiation et accordant 5 de Pression.\n\nATTAQUE CHARGÉE AMÉLIORÉE\nLorsque la pression dépasse 30, maintenez le bouton Attaque de base pour consommer la Pression et déclencher une Attaque Chargée Améliorée. Le niveau de charge augmente pour chaque 30 de Pression consommée. Lors de la rotation chargée, les dégâts subis sont réduits de 50 %, et chaque niveau déclenche une attaque de zone plus large infligeant un dégât de radiation.\n\nPression maximale : 90\n\nATTAQUE DE POURSUITE\nAprès avoir esquivé ou lors d'un Dash, appuyez sur le bouton Attaque de base pour déclencher une Attaque de poursuite, infligeant des dégâts de radiation et gagnant 5 points de Pression.",
                scaling: "• DMG du premier coup : 132.9%\n• DMG au deuxième coup : 213.8%\n• Dégâts au 3e coup : 158.9%\n• DMG au 4e coup : 494.2%\n• Dégâts d'attaque de poursuite : 156.1%\n• Dégâts de compétence non chargés : 196.5%\n• Dégât de rotation chargée : 146.5%\n• Coup de grâce chargé niveau 1 DMG : 250.2%\n• DMG Coup de grâce chargé niveau 2 : 448.4%\n• Niveau 3 Coup de grâce chargé DMG : 585.9%"
            },
            skill: {
                title: "L'embuscade du capitaine",
                desc: "À l'atteindre Courant Maximal complet, appuyez sur le bouton Compétence pour tout consommer et lance une attaque de ballon qui inflige des Dégâts de Radiation et accorde 45 de Pression.\n\nCourant maximal maximal : 60\nCourant maximal gagné par seconde : 10",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 488.4%"
            },
            ult: {
                title: "Ours Explosif",
                desc: "Une fois la charge maximale atteinte, appuyez sur le bouton Ultime pour remonter un ours mécanique et le lancer sur l'ennemi. L'ours explose à l'atterrissage, infligeant un énorme dégât de radiation.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 668.2%"
            },
            dodge: {
                title: "Soutien à la maintenance",
                desc: "Changez le personnage sélectionné tout en ayant suffisamment d'énergie du réacteur pour entrer sur le champ de bataille à l'aide d'un ballon. Le ballon explose alors, infligeant un dégât de radiation.",
                scaling: "• DÉGÂTS DE COMPÉTENCE : 274.6%"
            },
            passive: {
                title: "Boîte à outils de réparation",
                desc: "Augmente l'ATK de 15 % pendant 4 secondes à chaque consommation de pression. Ça peut s'accumuler jusqu'à 2 fois.",
                scaling: "• Effet passif en combat"
            }
        }
    },
    
    {
        id: "xxx",
        name: "XXX",
        star: 5,
        role: "dps",
        roleLabel: "Resonance DPS",
        elem: "fulmen",
        image: "../assets/images/xxx.webp",
        link: "character.html?id=xxx"
    }
];

const elementIcons = {
    ignis: "image/ignis.png",
    glacies: "image/glacies.png",
    gravitas: "image/gravitas.png",
    fulmen: "image/fulmen.png",
    radiatio: "image/radiatio.png",
    alba: "image/alba.webp"
};