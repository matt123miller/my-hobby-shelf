
const basepaints = [
    {
        "name": "Runelord Brass",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950204_layerRunelordBrass.svg"
    },
    {
        "name": "Retributor Armour",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950039_baseRetributorArmour.svg"
    },
    {
        "name": "Naggaroth Night",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950005_baseNaggarothNight.svg"
    },
    {
        "name": "Averland Sunset",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950001_baseAverlandSunset.svg"
    },
    {
        "name": "Dryad Bark",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950023_baseDryadBark.svg"
    },
    {
        "name": "Grey Seer",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950174_baseGreySeer.svg"
    },
    {
        "name": "Grey Knights Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950129_baseGreyKnightsSteel.svg"
    },
    {
        "name": "Jokaero Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950002_baseJokaeroOrange.svg"
    },
    {
        "name": "Morghast Bone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950171_baseMorghastBone.svg"
    },
    {
        "name": "Mechanicus Standard Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950024_baseMechanicusStandardGrey.svg"
    },
    {
        "name": "Castellan Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950014_baseCastellanGreen.svg"
    },
    {
        "name": "Iron Hands Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950128_baseIronHandsSteel.svg"
    },
    {
        "name": "Corax White",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950172_baseCoraxWhite.svg"
    },
    {
        "name": "Zandri Dust",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950016_baseZandriDust.svg"
    },
    {
        "name": "Gal Vorbak Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950123_baseGalVorbakRed.svg"
    },
    {
        "name": "Bugman's Glow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950018_baseBugmansGlow.svg"
    },
    {
        "name": "Incubi Darkness",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950011_baseIncubiDarkness.svg"
    },
    {
        "name": "Caliban Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950012_baseCalibanGreen.svg"
    },
    {
        "name": "Wraithbone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950173_baseWraithBone.svg"
    },
    {
        "name": "Corvus Black",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950126_baseCorvusBlack.svg"
    },
    {
        "name": "Celestra Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950026_baseCelestraGrey.svg"
    },
    {
        "name": "The Fang",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950032_baseTheFang.svg"
    },
    {
        "name": "Death Korps Drab",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950122_baseDeathKorpsDrab.svg"
    },
    {
        "name": "Screamer Pink",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950033_baseScreamerPink.svg"
    },
    {
        "name": "Rhinox Hide",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950022_baseRhinoxHide.svg"
    },
    {
        "name": "XV-88",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950021_baseXV88.svg"
    },
    {
        "name": "Ionrach Skin",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950082_baseIonrachSkin.svg"
    },
    {
        "name": "Iron Warriors",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950168_baseIronWarriors.svg"
    },
    {
        "name": "Daemonette Hide",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950006_baseDaemonetteHide.svg"
    },
    {
        "name": "Warplock Bronze",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950031_baseWarplockBronze.svg"
    },
    {
        "name": "Mournfang Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950020_baseMournfangBrown.svg"
    },
    {
        "name": "Steel Legion Drab",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950017_baseSteelLegionDrab.svg"
    },
    {
        "name": "Phoenician Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950121_basePhoenicianPurple.svg"
    },
    {
        "name": "Catachan Fleshtone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950170_baseCatachanFleshtone.svg"
    },
    {
        "name": "Stegadon Scale Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950010_baseStegadonScaleGreen.svg"
    },
    {
        "name": "Caledor Sky",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950009_baseCaledorSky.svg"
    },
    {
        "name": "Night Lords Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950124_baseNightLordsBlue.svg"
    },
    {
        "name": "Rakarth Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950027_baseRakarthFlesh.svg"
    },
    {
        "name": "Abaddon Black",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950025_baseAbaddonBlack.svg"
    },
    {
        "name": "Deathworld Forest",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950015_baseDeathworldForest.svg"
    },
    {
        "name": "Waaagh! Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950013_baseWaaaghFlesh.svg"
    },
    {
        "name": "Screaming Bell",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950030_baseScreamingBell.svg"
    },
    {
        "name": "Khorne Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950004_baseKhorneRed.svg"
    },
    {
        "name": "Nocturne Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950125_baseNocturneGreen.svg"
    },
    {
        "name": "Kantor Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950007_baseKantorBlue.svg"
    },
    {
        "name": "Leadbelcher",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950028_baseLeadbelcher.svg"
    },
    {
        "name": "Barak-Nar Burgundy",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950169_baseBarakNarBurgundy.svg"
    },
    {
        "name": "Thousand Sons Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950071_baseThousandSonsBlue.svg"
    },
    {
        "name": "Ratskin Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950019_baseRatskinFlesh.svg"
    },
    {
        "name": "Macragge Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950008_baseMacraggeBlue.svg"
    },
    {
        "name": "Lupercal Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950127_baseLupercalGreen.svg"
    },
    {
        "name": "Mephiston Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950003_baseMephistonRed.svg"
    },
    {
        "name": "Balthasar Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950130_baseBalthasarGold.svg"
    }
]


module.exports = {
    basepaints
}