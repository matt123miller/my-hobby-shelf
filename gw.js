const allPaints = [
    {
        "name": "Nuln Oil",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953017_shadeNulnOil.svg"
    },
    {
        "name": "Agrax Earthshade",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953018_shadeAgraxEarthshade.svg"
    },
    {
        "name": "Phoenician Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958110_airPhoenicianPurple.svg"
    },
    {
        "name": "Kakophoni Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958121_airKakophoniPurple.svg"
    },
    {
        "name": "Martian Ironearth",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956040_technicalMartianIronearth.svg"
    },
    {
        "name": "Reikland Fleshshade Gloss",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953035_shadeReiklandFleshshadeGloss.svg"
    },
    {
        "name": "Kantor Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958056_airKantorBlue.svg"
    },
    {
        "name": "Fyreslayer Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960022_contrastFyreslayerFlesh.svg"
    },
    {
        "name": "Phalanx Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958120_airPhalanxYellow.svg"
    },
    {
        "name": "Air Caste Thinner",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958086_airAirCasteThinner.svg"
    },
    {
        "name": "Balor Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958092_airBalorBrown.svg"
    },
    {
        "name": "Temple Guard Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958078_airTempleGuardBlue.svg"
    },
    {
        "name": "Tau Light Ochre",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958091_airTauLightOchre.svg"
    },
    {
        "name": "Sons of Horus Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958119_airSonsOfHorusGreen.svg"
    },
    {
        "name": "Valhallan Blizzard",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956048_technicalValhallanBlizzard.svg"
    },
    {
        "name": "Stormshield",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956052_technicalStormShield.svg"
    },
    {
        "name": "Averland Sunset",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958053_airAverlandSunset.svg"
    },
    {
        "name": "Iyanden Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960001_contrastIyandenYellow.svg"
    },
    {
        "name": "Fenrisian Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958103_airFenrisianGrey.svg"
    },
    {
        "name": "Gore-Grunta Fur",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960019_contrastGoreGruntaFur.svg"
    },
    {
        "name": "Chemos Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958117_airChemosPurple.svg"
    },
    {
        "name": "Khorne Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958055_airKhorneRed.svg"
    },
    {
        "name": "Mortarion Green Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958109_airMortarionGreenClear.svg"
    },
    {
        "name": "Space Wolves Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960027_contrastSpaceWolvesGrey.svg"
    },
    {
        "name": "Basilicanum Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960028_contrastBasilicanumGrey.svg"
    },
    {
        "name": "Word Bearers Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958125_airWordBearersRed.svg"
    },
    {
        "name": "Guilliman Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960023_contrastGuillimanFlesh.svg"
    },
    {
        "name": "Tuskgor Fur",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958093_airTuskgorFur.svg"
    },
    {
        "name": "Nocturne Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958122_airNocturneGreen.svg"
    },
    {
        "name": "Lupercal Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958123_airLupercalGreen.svg"
    },
    {
        "name": "Angron Red Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958105_airAngronRedClear.svg"
    },
    {
        "name": "Typhon Ash",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958118_airTyphonAsh.svg"
    },
    {
        "name": "Mechanicus Standard Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958066_airMechanicusStandardGrey.svg"
    },
    {
        "name": "White Scar",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958098_airWhiteScar.svg"
    },
    {
        "name": "Skeleton Horde",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960017_contrastSkeletonHorde.svg"
    },
    {
        "name": "Gal Vorbak Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958124_airGalVorbakRed.svg"
    },
    {
        "name": "Sigismund Yellow Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958112_airSigismundYellowClear.svg"
    },
    {
        "name": "Agrax Earthshade Gloss",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953034_shadeAgraxEarthshadeGloss.svg"
    },
    {
        "name": "Ardcoat",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956050_technicalArdcoat.svg"
    },
    {
        "name": "Caledor Sky",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958058_airCaledorSky.svg"
    },
    {
        "name": "Caliban Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958059_airCalibanGreen.svg"
    },
    {
        "name": "Nazdreg Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960012_contrastNazdregYellow.svg"
    },
    {
        "name": "Evil Sunz Scarlet",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958074_airEvilSunzScarlet.svg"
    },
    {
        "name": "Ulthuan Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958097_airUlthuanGrey.svg"
    },
    {
        "name": "Ork Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960013_contrastOrkFlesh.svg"
    },
    {
        "name": "Carroburg Crimson",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953016_shadeCarroburgCrimson.svg"
    },
    {
        "name": "Terradon Turquoise",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960034_contrastTerradonTurquoise.svg"
    },
    {
        "name": "Biel-Tan Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953022_shadeBielTanGreen.svg"
    },
    {
        "name": "Leviadon Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960008_contrastLeviadonBlue.svg"
    },
    {
        "name": "Death Korps Drab",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958114_airDeathKorpsDrab.svg"
    },
    {
        "name": "Akhelian Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960010_contrastAkhelianGreen.svg"
    },
    {
        "name": "Baneblade Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958094_airBanebladeBrown.svg"
    },
    {
        "name": "Mordant Earth",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956037_technicalMordantEarth.svg"
    },
    {
        "name": "Magos Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960007_contrastMagosPurple.svg"
    },
    {
        "name": "Flash Gitz Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958072_airFlashGitzYellow.svg"
    },
    {
        "name": "Relictor Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958101_airRelictorGold.svg"
    },
    {
        "name": "Astrogranite",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956046_technicalAstrogranite.svg"
    },
    {
        "name": "Balthasar Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958069_airBalthasarGold.svg"
    },
    {
        "name": "Shyish Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960006_contrastShyishPurple.svg"
    },
    {
        "name": "Aggaros Dunes",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960016_contrastAggarosDunes.svg"
    },
    {
        "name": "Castellax Bronze",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958126_airCastellaxBronze.svg"
    },
    {
        "name": "Cygor Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960020_contrastCygorBrown.svg"
    },
    {
        "name": "Pyroclast Orange Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958111_airPyroclastOrangeClear.svg"
    },
    {
        "name": "Karak Stone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958088_airKarakStone.svg"
    },
    {
        "name": "Administratum Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958096_airAdministratumGrey.svg"
    },
    {
        "name": "Coelia Greenshade",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953025_shadeCoeliaGreenshade.svg"
    },
    {
        "name": "Nuln Oil Gloss",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953033_shadeNulnOilGloss.svg"
    },
    {
        "name": "Ironbreaker",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958099_airIronbreaker.svg"
    },
    {
        "name": "Black Templar",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960029_contrastBlackTemplar.svg"
    },
    {
        "name": "Eidolon Purple Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958108_airEidolonPurpleClear.svg"
    },
    {
        "name": "Casandora Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953021_shadeCasandoraYellow.svg"
    },
    {
        "name": "Ultramarines Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960009_contrastUltramarineBlue.svg"
    },
    {
        "name": "Runefang Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958100_airRunefangSteel.svg"
    },
    {
        "name": "Kislev Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958089_airKislevFlesh.svg"
    },
    {
        "name": "Warboss Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958081_airWarbossGreen.svg"
    },
    {
        "name": "Wyldwood",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960021_contrastWyldwood.svg"
    },
    {
        "name": "Zandri Dust",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958062_airZandriDust.svg"
    },
    {
        "name": "Martian Ironcrust",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956041_technicalMartianIroncrust.svg"
    },
    {
        "name": "Mournfang Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958063_airMournfangBrown.svg"
    },
    {
        "name": "Creed Camo",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960014_contrastCreedCamo.svg"
    },
    {
        "name": "Castellan Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958060_airCastellanGreen.svg"
    },
    {
        "name": "Tesseract Glow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956053_technicalTesseractGlow.svg"
    },
    {
        "name": "Gryph-Hound Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960002_contrastGryphHoundOrange.svg"
    },
    {
        "name": "Darkoath Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960024_contrastDarkoathFlesh.svg"
    },
    {
        "name": "Agrellan Earth",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956038_technicalAgrellanEarth.svg"
    },
    {
        "name": "Militarum Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960015_contrastMilitarumGreen.svg"
    },
    {
        "name": "Dark Angels Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960011_contrastDarkAngelsGreen.svg"
    },
    {
        "name": "Reikland Fleshshade",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953027_shadeReiklandFleshshade.svg"
    },
    {
        "name": "Drakenhof Nightshade",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953020_shadeDrakenhofNightshade.svg"
    },
    {
        "name": "Calgar Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958076_airCalgarBlue.svg"
    },
    {
        "name": "The Fang",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958071_airTheFang.svg"
    },
    {
        "name": "Armageddon Dust",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956044_technicalArmageddonDust.svg"
    },
    {
        "name": "Flesh Tearers Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960004_contrastFleshTearersRed.svg"
    },
    {
        "name": "Lahmian Medium",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956049_technicalLahmianMedium.svg"
    },
    {
        "name": "Terminatus Stone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958104_airTerminatusStone.svg"
    },
    {
        "name": "Athonian Camoshade",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953024_shadeAthonianCamoshade.svg"
    },
    {
        "name": "Vulkan Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958115_airVulkanGreen.svg"
    },
    {
        "name": "Russ Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958102_airRussGrey.svg"
    },
    {
        "name": "Genestealer Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958075_airGenestealerPurple.svg"
    },
    {
        "name": "Druchii Violet",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953019_shadeDruchiiViolet.svg"
    },
    {
        "name": "Apothecary White",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960025_contrastApothecaryWhite.svg"
    },
    {
        "name": "Ogryn Camo",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958084_airOgrynCamo.svg"
    },
    {
        "name": "Stirland Mud",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956042_technicalStirlandMud.svg"
    },
    {
        "name": "Deathworld Forest",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958061_airDeathworldForest.svg"
    },
    {
        "name": "Lothern Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958077_airLothernBlue.svg"
    },
    {
        "name": "Tallarn Sand",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958087_airTallarnSand.svg"
    },
    {
        "name": "Macragge Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958057_airMacraggeBlue.svg"
    },
    {
        "name": "Contrast Medium",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956051_technicalContrastMedium.svg"
    },
    {
        "name": "Troll Slayer Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958073_airTrollSlayerOrange.svg"
    },
    {
        "name": "Leadbelcher",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958068_airLeadbelcher.svg"
    },
    {
        "name": "Armageddon Dunes",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956045_technicalArmageddonDunes.svg"
    },
    {
        "name": "Mephiston Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958054_airMephistonRed.svg"
    },
    {
        "name": "Deathshroud Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958107_airDeathshroudClear.svg"
    },
    {
        "name": "Cryptek Armourshade Gloss",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953038_shadeCryptekArmourshadeGloss.svg"
    },
    {
        "name": "Warp Lightning",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960031_contrastWarpLightning.svg"
    },
    {
        "name": "Iron Hands Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958128_airIronHandsSteel.svg"
    },
    {
        "name": "Elysian Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958083_airElysianGreen.svg"
    },
    {
        "name": "Stirland Battlemire",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956043_technicalStirlandBattlemire.svg"
    },
    {
        "name": "Agrellan Badland",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956039_technicalAgrellanBadland.svg"
    },
    {
        "name": "Corvus Black",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958116_airCorvusBlack.svg"
    },
    {
        "name": "Calth Blue Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958106_airCalthBlueClear.svg"
    },
    {
        "name": "Seraphim Sepia",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953026_shadeSeraphimSepia.svg"
    },
    {
        "name": "Talassar Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960030_contrastTalassarBlue.svg"
    },
    {
        "name": "Aethermatic Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960032_contrastAethermaticBlue.svg"
    },
    {
        "name": "Ushabti Bone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958085_airUshabtiBone.svg"
    },
    {
        "name": "Grey Knights Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958129_airGreyKnightsSteel.svg"
    },
    {
        "name": "Valdor Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958127_airValdorGold.svg"
    },
    {
        "name": "Dryad Bark",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958065_airDryadBark.svg"
    },
    {
        "name": "Volupus Pink",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960005_contrastVolupusPink.svg"
    },
    {
        "name": "Sybarite Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958079_airSybariteGreen.svg"
    },
    {
        "name": "Snakebite Leather",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960018_contrastSnakebiteLeather.svg"
    },
    {
        "name": "XV-88",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958064_airXV88.svg"
    },
    {
        "name": "Straken Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958082_airStrakenGreen.svg"
    },
    {
        "name": "Plaguebearer Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960033_contrastPlaguebearerFlesh.svg"
    },
    {
        "name": "Abaddon Black",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958067_airAbaddonBlack.svg"
    },
    {
        "name": "Astrogranite Debris",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956047_technicalAstrograniteDebris.svg"
    },
    {
        "name": "Blood Angels Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960003_contrastBloodAngelsRed.svg"
    },
    {
        "name": "Moot Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958080_airMootGreen.svg"
    },
    {
        "name": "Dawnstone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958095_airDawnstone.svg"
    },
    {
        "name": "Thallax Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958130_airThallaxGold.svg"
    },
    {
        "name": "Night Lords Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958113_airNightLordsBlue.svg"
    },
    {
        "name": "Gryph-Charger Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960026_contrastGryphChargerGrey.svg"
    },
    {
        "name": "Fuegan Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953023_shadeFueganOrange.svg"
    },
    {
        "name": "Deathclaw Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958090_airDeathclawBrown.svg"
    },
    {
        "name": "Steel Legion Drab",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958070_airSteelLegionDrab.svg"
    },
    {
        "name": "Canoptek Alloy",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951205_layerCanoptekAlloy.svg"
    },
    {
        "name": "Skullcrusher Brass",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951081_layerSkullcrusherBrass.svg"
    },
    {
        "name": "Runelord Brass",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950204_layerRunelordBrass.svg"
    },
    {
        "name": "Retributor Armour",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950039_baseRetributorArmour.svg"
    },
    {
        "name": "Liberator Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951073_layerLiberatorGold.svg"
    },
    {
        "name": "Stormhost Silver",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951083_layerStormhostSilver.svg"
    },
    {
        "name": "Fulgurite Copper",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951082_layerFulguriteCopper.svg"
    },
    {
        "name": "Loren Forest",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951027_layerLorenForest.svg"
    },
    {
        "name": "Naggaroth Night",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950005_baseNaggarothNight.svg"
    },
    {
        "name": "White Scar",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951057_layerWhiteScar.svg"
    },
    {
        "name": "Averland Sunset",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950001_baseAverlandSunset.svg"
    },
    {
        "name": "Skrag Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951040_layerSkragBrown.svg"
    },
    {
        "name": "Lugganath Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951109_layerLugganathOrange.svg"
    },
    {
        "name": "Altdorf Guard Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951015_layerAltdorfGuardBlue.svg"
    },
    {
        "name": "Pink Horror",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951069_layerPinkHorror.svg"
    },
    {
        "name": "Hexos Palesun",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952001_dryHexosPalesun.svg"
    },
    {
        "name": "Dryad Bark",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950023_baseDryadBark.svg"
    },
    {
        "name": "Troll Slayer Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951003_layerTrollSlayerOrange.svg"
    },
    {
        "name": "Golden Griffon",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952014_dryGoldenGriffon.svg"
    },
    {
        "name": "Grey Seer",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950174_baseGreySeer.svg"
    },
    {
        "name": "Warpfiend Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951011_layerWarpfiendGrey.svg"
    },
    {
        "name": "Grey Knights Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950129_baseGreyKnightsSteel.svg"
    },
    {
        "name": "Administratum Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952029_layerAdministratumGrey.svg"
    },
    {
        "name": "Dawnstone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952031_dryDawnstone.svg"
    },
    {
        "name": "Vulkan Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951114_layerVulkanGreen.svg"
    },
    {
        "name": "Sylvaneth Bark",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952030_drySylvanethBark.svg"
    },
    {
        "name": "Nurgling Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952027_dryNurglingGreen.svg"
    },
    {
        "name": "Soulstone Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956016_technicalSoulstoneBlue.svg"
    },
    {
        "name": "Cadian Fleshtone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951036_layerCadianFleshtone.svg"
    },
    {
        "name": "Gorthor Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951047_layerGorthorBrown.svg"
    },
    {
        "name": "Phalanx Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951112_layerPhalanxYellow.svg"
    },
    {
        "name": "Ogryn Camo",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951031_layerOgrynCamo.svg"
    },
    {
        "name": "Skavenblight Dinge",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951054_layerSkavenblightDinge.svg"
    },
    {
        "name": "Teclis Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951017_layerTeclisBlue.svg"
    },
    {
        "name": "Jokaero Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950002_baseJokaeroOrange.svg"
    },
    {
        "name": "Hoeth Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952022_dryHoethBlue.svg"
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
        "name": "Dechala Lilac",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951106_layerDechalaLilac.svg"
    },
    {
        "name": "Iron Hands Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950128_baseIronHandsSteel.svg"
    },
    {
        "name": "Sotek Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951019_layerSotekGreen.svg"
    },
    {
        "name": "Alaitoc Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951013_layerAlaitocBlue.svg"
    },
    {
        "name": "Corax White",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950172_baseCoraxWhite.svg"
    },
    {
        "name": "Fenrisian Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951068_layerFenrisianGrey.svg"
    },
    {
        "name": "Zamesi Desert",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951044_layerZamesiDesert.svg"
    },
    {
        "name": "Karak Stone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951035_layerKarakStone.svg"
    },
    {
        "name": "Zandri Dust",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950016_baseZandriDust.svg"
    },
    {
        "name": "Baharroth Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951103_layerBaharrothBlue.svg"
    },
    {
        "name": "Flash Gitz Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951002_layerFlashGitzYellow.svg"
    },
    {
        "name": "Astorath Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952021_dryAstorathRed.svg"
    },
    {
        "name": "Niblet Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952026_dryNibletGreen.svg"
    },
    {
        "name": "Skink Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952006_drySkinkBlue.svg"
    },
    {
        "name": "Nurgling Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951029_layerNurglingGreen.svg"
    },
    {
        "name": "Spiritstone Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956015_technicalSpiritstoneRed.svg"
    },
    {
        "name": "Longbeard Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952012_dryLongbeardGrey.svg"
    },
    {
        "name": "Blue Horror",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951108_layerBlueHorror.svg"
    },
    {
        "name": "Calgar Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951016_layerCalgarBlue.svg"
    },
    {
        "name": "Straken Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951028_layerStrakenGreen.svg"
    },
    {
        "name": "Moot Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951024_layerMootGreen.svg"
    },
    {
        "name": "Ungor Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951039_layerUngorFlesh.svg"
    },
    {
        "name": "Gauss Blaster Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951102_layerGaussBlasterGreen.svg"
    },
    {
        "name": "Balor Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951043_layerBalorBrown.svg"
    },
    {
        "name": "Gal Vorbak Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950123_baseGalVorbakRed.svg"
    },
    {
        "name": "Ushabti Bone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951032_layerUshabtiBone.svg"
    },
    {
        "name": "Screaming Skull",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951033_layerScreamingSkull.svg"
    },
    {
        "name": "Hashut Copper",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951116_layerHashutCopper.svg"
    },
    {
        "name": "Etherium Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952005_dryEtheriumBlue.svg"
    },
    {
        "name": "Bugman's Glow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950018_baseBugmansGlow.svg"
    },
    {
        "name": "Tallarn Sand",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951034_layerTallarnSand.svg"
    },
    {
        "name": "Gehenna's Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951061_layerGehennasGold.svg"
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
        "name": "Golgfag Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952028_dryGolgfagBrown.svg"
    },
    {
        "name": "Tau Light Ochre",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951042_layerTauLightOchre.svg"
    },
    {
        "name": "Wild Rider Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951006_layerWildRiderRed.svg"
    },
    {
        "name": "Lothern Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951018_layerLothernBlue.svg"
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
        "name": "Nurgles Rot",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956009_technicalNurglesRot.svg"
    },
    {
        "name": "Celestra Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950026_baseCelestraGrey.svg"
    },
    {
        "name": "Underhive Ash",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952010_dryUnderhiveAsh.svg"
    },
    {
        "name": "The Fang",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950032_baseTheFang.svg"
    },
    {
        "name": "Russ Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951067_layerRussGrey.svg"
    },
    {
        "name": "Deepkin Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951101_layerDeepkinFlesh.svg"
    },
    {
        "name": "Death Korps Drab",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950122_baseDeathKorpsDrab.svg"
    },
    {
        "name": "Typhus Corrosion",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956010_technicalTyphusCorrosion.svg"
    },
    {
        "name": "Slaanesh Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952033_drySlaaneshGrey.svg"
    },
    {
        "name": "Screamer Pink",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950033_baseScreamerPink.svg"
    },
    {
        "name": "Thunderhawk Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951053_layerThunderhawkBlue.svg"
    },
    {
        "name": "Brass Scorpion",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951065_layerBrassScorpion.svg"
    },
    {
        "name": "Rhinox Hide",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950022_baseRhinoxHide.svg"
    },
    {
        "name": "Sybarite Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951022_layerSybariteGreen.svg"
    },
    {
        "name": "Knight-Questor Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951195_layerKnightQuestorFlesh.svg"
    },
    {
        "name": "Slaanesh Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951012_layerSlaaneshGrey.svg"
    },
    {
        "name": "XV-88",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950021_baseXV88.svg"
    },
    {
        "name": "Hellion Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952007_dryHellionGreen.svg"
    },
    {
        "name": "Chronus Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952023_dryChronusBlue.svg"
    },
    {
        "name": "Xereus Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951009_layerXereusPurple.svg"
    },
    {
        "name": "Emperor's Children",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951070_layerEmperorsChildren.svg"
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
        "name": "Castellax Bronze",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951113_layerCastellaxBronze.svg"
    },
    {
        "name": "Dark Reaper",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951052_layerDarkReaper.svg"
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
        "name": "Verminlord Hide",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952008_dryVerminlordHide.svg"
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
        "name": "Terminatus Stone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952030_dryTerminatusStone.svg"
    },
    {
        "name": "Dawnstone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951049_layerDawnstone.svg"
    },
    {
        "name": "Auric Armour Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951062_layerAuricArmourGold.svg"
    },
    {
        "name": "Bloodreaver Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951194_layerBloodreaverFlesh.svg"
    },
    {
        "name": "Kislev Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951037_layerKislevFlesh.svg"
    },
    {
        "name": "Phoenician Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950121_basePhoenicianPurple.svg"
    },
    {
        "name": "Fire Dragon Bright",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951004_layerFireDragonBright.svg"
    },
    {
        "name": "Hoeth Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951014_layerHoethBlue.svg"
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
        "name": "Stormfang",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952025_dryStormfang.svg"
    },
    {
        "name": "Caledor Sky",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950009_baseCaledorSky.svg"
    },
    {
        "name": "Waystone Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956017_technicalWaystoneGreen.svg"
    },
    {
        "name": "Pallid Wych Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951058_layerPallidWychFlesh.svg"
    },
    {
        "name": "Fulgrim Pink",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951105_layerFulgrimPink.svg"
    },
    {
        "name": "Night Lords Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950124_baseNightLordsBlue.svg"
    },
    {
        "name": "Kakophoni Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951110_layerKakophoniPurple.svg"
    },
    {
        "name": "Lucius Lilac",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952003_dryLuciusLilac.svg"
    },
    {
        "name": "Warpstone Glow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951023_layerWarpstoneGlow.svg"
    },
    {
        "name": "Changeling Pink",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952017_dryChangelingPink.svg"
    },
    {
        "name": "Thunderhawk Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952011_dryThunderhawkBlue.svg"
    },
    {
        "name": "Baneblade Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951048_layerBanebladeBrown.svg"
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
        "name": "Dorn Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951104_layerDornYellow.svg"
    },
    {
        "name": "Squig Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951008_layerSquigOrange.svg"
    },
    {
        "name": "Ahriman Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951084_layerAhrimanBlue.svg"
    },
    {
        "name": "Deathworld Forest",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950015_baseDeathworldForest.svg"
    },
    {
        "name": "Ulthuan Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951056_layerUlthuanGrey.svg"
    },
    {
        "name": "Waaagh! Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950013_baseWaaaghFlesh.svg"
    },
    {
        "name": "Ryza Rust",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952018_dryRyzaRust.svg"
    },
    {
        "name": "Sycorax Bronze",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951064_layerSycoraxBronze.svg"
    },
    {
        "name": "Screaming Bell",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950030_baseScreamingBell.svg"
    },
    {
        "name": "Ironbreaker",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951059_layerIronbreaker.svg"
    },
    {
        "name": "Yriel Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951001_layerYrielYellow.svg"
    },
    {
        "name": "Imrik Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952024_dryImrikBlue.svg"
    },
    {
        "name": "Bestigor Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951038_layerBestigorFlesh.svg"
    },
    {
        "name": "Tuskgor Fur",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951046_layerTuskgorFur.svg"
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
        "name": "Genestealer Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951010_layerGenestealerPurple.svg"
    },
    {
        "name": "Praxeti White",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952004_dryPraxetiWhite.svg"
    },
    {
        "name": "Kantor Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950007_baseKantorBlue.svg"
    },
    {
        "name": "Tyrant Skull",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952034_dryTyrantSkull.svg"
    },
    {
        "name": "Sigmarite",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952032_drySigmarite.svg"
    },
    {
        "name": "Word Bearers Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951115_layerWordBearersRed.svg"
    },
    {
        "name": "Leadbelcher",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950028_baseLeadbelcher.svg"
    },
    {
        "name": "Wazdakka Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951007_layerWazdakkaRed.svg"
    },
    {
        "name": "Barak-Nar Burgundy",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950169_baseBarakNarBurgundy.svg"
    },
    {
        "name": "Stormvermin Fur",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951055_layerStormverminFur.svg"
    },
    {
        "name": "Elysian Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951030_layerElysianGreen.svg"
    },
    {
        "name": "Thousand Sons Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950071_baseThousandSonsBlue.svg"
    },
    {
        "name": "Doombull Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951045_layerDoombullBrown.svg"
    },
    {
        "name": "Skarsnik Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951026_layerSkarsnikGreen.svg"
    },
    {
        "name": "Necron Compound",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952013_dryNecronCompound.svg"
    },
    {
        "name": "Evil Sunz Scarlet",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951005_layerEvilSunzScarlet.svg"
    },
    {
        "name": "Eshin Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951051_layerEshinGrey.svg"
    },
    {
        "name": "Krieg Khaki",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951107_layerKriegKhaki.svg"
    },
    {
        "name": "Ratskin Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950019_baseRatskinFlesh.svg"
    },
    {
        "name": "Nihilakh Oxide",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956006_technicalNihilakhOxide.svg"
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
        "name": "Sons of Horus Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951111_layerSonsOfHorusGreen.svg"
    },
    {
        "name": "Kabalite Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951021_layerKabaliteGreen.svg"
    },
    {
        "name": "Mephiston Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950003_baseMephistonRed.svg"
    },
    {
        "name": "Warboss Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951025_layerWarbossGreen.svg"
    },
    {
        "name": "Deathclaw Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951041_layerDeathclawBrown.svg"
    },
    {
        "name": "Flayed One Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951074_layerFlayedOneFlesh.svg"
    },
    {
        "name": "Balthasar Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950130_baseBalthasarGold.svg"
    },
    {
        "name": "Runefang Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951060_layerRunefangSteel.svg"
    },
    {
        "name": "Temple Guard Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951020_layerTempleGuardBlue.svg"
    },
    {
        "name": "Kindleflame",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952002_dryKindleflame.svg"
    },
    {
        "name": "Eldar Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952009_dryEldarFlesh.svg"
    },
    {
        "name": "Wrack White",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952020_dryWrackWhite.svg"
    }
]
const layerPaints = [];
const basepaints = [
    {
        "name": "Runelord Brass",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950204_layerRunelordBrass.svg",
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
    allPaints
}