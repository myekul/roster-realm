const games = {
    dk: {
        name: 'Donkey Kong',
        series: "dk",
        console: "arcade",
        year: 1981
    },
    zelda: {
        name: 'The Legend of Zelda',
        series: "zelda",
        console: "nes",
        year: 1986
    },
    metroid: {
        name: 'Metroid',
        series: "metroid",
        console: "nes",
        year: 1986
    },
    metroidprime: {
        name: 'Metroid Prime',
        series: "metroid",
        console: "gamecube",
        year: 2002
    },
    smw: {
        name: 'Super Mario World',
        series: "yoshi",
        console: "snes",
        year: 1990
    },
    kirbysdreamland: {
        name: "Kirby's Dream Land",
        series: "kirby",
        console: "gb",
        year: 1992
    },
    starfox: {
        name: 'Star Fox',
        series: "starfox",
        console: "snes",
        year: 1993
    },
    pokemonrgb: {
        name: 'Pokémon R/G/B',
        series: "pokemon",
        console: "gb",
        year: 1996
    },
    mariobros: {
        name: 'Mario Bros.',
        series: "mario",
        console: "arcade",
        year: 1983
    },
    earthbound: {
        name: 'EarthBound',
        series: "mother",
        console: "snes",
        year: 1994
    },
    fzero: {
        name: 'F-Zero',
        series: "fzero",
        console: "snes",
        year: 1990
    },
    smb: {
        name: 'Super Mario Bros',
        series: "mario",
        console: "nes",
        year: 1996
    },
    sml: {
        name: 'Super Mario Land',
        series: "mario",
        console: "gb",
        year: 1989
    },
    iceclimber: {
        name: 'Ice Climber',
        series: "iceclimber",
        console: "arcade",
        year: 1984
    },
    zeldaoot: {
        name: 'The Legend of Zelda: Ocarina of Time',
        series: "zelda",
        console: "n64",
        year: 1998
    },
    drmario: {
        name: 'Dr. Mario',
        series: "mario",
        console: "various",
        year: 1986
    },
    pokemongs: {
        name: 'Pokémon G/S',
        series: "pokemon",
        console: "gbc",
        year: 1999
    },
    fe: {
        name: 'Fire Emblem',
        series: "fe",
        console: "nes",
        year: 1990
    },
    feawakening: {
        name: 'Fire Emblem: Awakening',
        series: "fe",
        console: "3ds",
        year: 2012
    },
    fepathofradiance: {
        name: 'Fire Emblem: Path of Radiance',
        series: "fe",
        console: "gcn",
        year: 2002
    },
    feradiantdawn: {
        name: 'Fire Emblem: Radiant Dawn',
        series: "fe",
        console: "wii",
        year: 2007
    },
    gameandwatch: {
        name: 'Game & Watch',
        series: "gameandwatch",
        console: "gameandwatch",
        year: 1980
    },
    kirbysadventure: {
        name: "Kirby's Adventure",
        series: "kirby",
        console: "nes",
        year: 1992
    },
    kidicarus: {
        name: 'Kid Icarus',
        series: "kidicarus",
        console: "nes",
        year: 1987
    },
    kidicarusuprising: {
        name: 'Kid Icarus Uprising',
        series: "kidicarus",
        console: "3ds",
        year: 2012
    },
    metroidzeromission: {
        name: 'Metroid: Zero Mission',
        series: "metroid",
        console: "gba",
        year: 2004,
    },
    sml2: {
        name: 'Super Mario Land 2: The 6 Golden Coins',
        series: "wario",
        console: "gb",
        year: 1992
    },
    metalgear: {
        name: 'Metal Gear',
        series: "metalgear",
        console: "msx2",
        year: 1987
    },
    dkc: {
        name: 'Donkey Kong Country',
        series: "dk",
        console: "snes",
        year: 1994
    },
    mother3: {
        name: 'Mother 3',
        series: "mother",
        console: "gba",
        year: 2006
    },
    sonic: {
        name: 'Sonic the Hedgehog',
        series: "sonic",
        console: "gen",
        year: 1991
    },
    pikmin: {
        name: 'Pikmin',
        series: "pikmin",
        console: "gcn",
        year: 2001
    },
    pokemondp: {
        name: 'Pokémon D/P',
        series: "pokemon",
        console: "ds",
        year: 2007
    },
    rob: {
        name: 'R.O.B.',
        series: "rob",
        console: "rob",
        year: 1985
    },
    zeldaww: {
        name: 'The Legend of Zelda: The Wind Waker',
        series: "zelda",
        console: "gcn",
        year: 2002
    },
    starfox64: {
        name: 'Star Fox 64',
        series: "starfox",
        console: "n64",
        year: 1997
    },
    animalcrossing: {
        name: 'Animal Crossing',
        series: "animalcrossing",
        console: "n64",
        year: 2001
    },
    megaman: {
        name: 'Mega Man',
        series: "megaman",
        console: "nes",
        year: 1987
    },
    wiifit: {
        name: 'Wii Fit',
        series: "wiifit",
        console: "wii",
        year: 2007
    },
    smg: {
        name: 'Super Mario Galaxy',
        series: "mario",
        console: "wii",
        year: 2007
    },
    punchout: {
        name: 'Punch Out!!',
        series: "punchout",
        console: "arcade",
        year: 1984
    },
    pokemonxy: {
        name: 'Pokémon X/Y',
        series: "pokemon",
        console: "3ds",
        year: 2013
    },
    smash: {
        name: 'Smash',
        series: "smash",
        console: "wii",
        year: 2006
    },
    pacman: {
        name: 'Pac-Man',
        series: "pacman",
        console: "arcade",
        year: 1980
    },
    xenoblade: {
        name: 'Xenoblade Chronicles',
        series: "xenoblade",
        console: "wii",
        year: 2010
    },
    sms: {
        name: 'Super Mario Sunshine',
        series: "mario",
        console: "gcn",
        year: 2002
    },
    duckhunt: {
        name: 'Duck Hunt',
        series: "duckhunt",
        console: "various",
        year: 1984
    },
    streetfighter: {
        name: 'Street Fighter',
        series: "streetfighter",
        console: "arcade",
        year: 1987
    },
    ff7: {
        name: 'Final Fantasy VII',
        series: "ff",
        console: "ps1",
        year: 1997
    },
    fefates: {
        name: 'Fire Emblem: Fates',
        series: "fe",
        console: "3ds",
        year: 2015
    },
    bayonetta: {
        name: 'Bayonetta',
        series: "bayonetta",
        console: "various",
        year: 2009
    },
    splatoon: {
        name: 'Splatoon',
        series: "splatoon",
        console: "wiiu",
        year: 2015
    },
    castlevania: {
        name: 'Castlevania',
        series: "castlevania",
        console: "nes",
        year: 1986
    },
    castlevaniarondoofblood: {
        name: 'Castlevania: Rondo of Blood',
        series: "castlevania",
        console: "tg16",
        year: 1993
    },
    acnl: {
        name: 'Animal Crossing: New Leaf',
        series: "animalcrossing",
        console: "3ds",
        year: 2012
    },
    pokemonsm: {
        name: 'Pokémon S/M',
        series: "pokemon",
        console: "3ds",
        year: 2016
    },
    persona5: {
        name: 'Persona 5',
        series: "persona",
        console: "various",
        year: 2016
    },
    dragonquestxi: {
        name: 'Dragon Quest XI: Echoes of an Elusive Age',
        series: "dragonquest",
        console: "nes",
        year: 2017
    },
    banjokazooie: {
        name: 'Banjo-Kazooie',
        series: "banjokazooie",
        console: "n64",
        year: 1998
    },
    fatalfury: {
        name: 'Fatal Fury: King of Fighters',
        series: "fatalfury",
        console: "arcade",
        year: 1991
    },
    fethreehouses: {
        name: 'Fire Emblem: Three Houses',
        series: "fe",
        console: "nsw",
        year: 2019
    },
    arms: {
        name: 'Arms',
        series: "arms",
        console: "nsw",
        year: 2017
    },
    minecraft: {
        name: 'Minecraft',
        series: "minecraft",
        console: "pc",
        year: 2011
    },
    xenoblade2: {
        name: 'Xenoblade Chronicles 2',
        series: "xenoblade",
        console: "nsw",
        year: 2017
    },
    tekken: {
        name: 'Tekken',
        series: "tekken",
        console: "arcade",
        year: 1994
    },
    kingdomhearts: {
        name: 'Kingdom Hearts',
        series: "kingdomhearts",
        console: "ps2",
        year: 2002
    }
};