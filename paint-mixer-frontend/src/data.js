

const rawData = [
    {
        "name": "Nuln Oil",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953017_shadeNulnOil.svg",
        "hexCode": "#101010",
        "filePath": "./paintimages/gw/Nuln Oil.svg"
    },
    {
        "name": "Agrax Earthshade",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953018_shadeAgraxEarthshade.svg",
        "hexCode": "#2D190C",
        "filePath": "./paintimages/gw/Agrax Earthshade.svg"
    },
    {
        "name": "Phoenician Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958110_airPhoenicianPurple.svg",
        "hexCode": "#440052",
        "filePath": "./paintimages/gw/Phoenician Purple.svg"
    },
    {
        "name": "Kakophoni Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958121_airKakophoniPurple.svg",
        "hexCode": "#8869AE",
        "filePath": "./paintimages/gw/Kakophoni Purple.svg"
    },
    {
        "name": "Martian Ironearth",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956040_technicalMartianIronearth.svg",
        "hexCode": "#CF705D",
        "filePath": "./paintimages/gw/Martian Ironearth.svg"
    },
    {
        "name": "Reikland Fleshshade Gloss",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953035_shadeReiklandFleshshadeGloss.svg",
        "hexCode": "#311908",
        "filePath": "./paintimages/gw/Reikland Fleshshade Gloss.svg"
    },
    {
        "name": "Kantor Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958056_airKantorBlue.svg",
        "hexCode": "#02134E",
        "filePath": "./paintimages/gw/Kantor Blue.svg"
    },
    {
        "name": "Fyreslayer Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960022_contrastFyreslayerFlesh.svg",
        "hexCode": "#BD7866",
        "filePath": "./paintimages/gw/Fyreslayer Flesh.svg"
    },
    {
        "name": "Phalanx Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958120_airPhalanxYellow.svg",
        "hexCode": "#FFE200",
        "filePath": "./paintimages/gw/Phalanx Yellow.svg"
    },
    {
        "name": "Air Caste Thinner",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958086_airAirCasteThinner.svg",
        "hexCode": "#292929",
        "filePath": "./paintimages/gw/Air Caste Thinner.svg"
    },
    {
        "name": "Balor Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958092_airBalorBrown.svg",
        "hexCode": "#875408",
        "filePath": "./paintimages/gw/Balor Brown.svg"
    },
    {
        "name": "Temple Guard Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958078_airTempleGuardBlue.svg",
        "hexCode": "#239489",
        "filePath": "./paintimages/gw/Temple Guard Blue.svg"
    },
    {
        "name": "Tau Light Ochre",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958091_airTauLightOchre.svg",
        "hexCode": "#BC6B10",
        "filePath": "./paintimages/gw/Tau Light Ochre.svg"
    },
    {
        "name": "Sons of Horus Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958119_airSonsOfHorusGreen.svg",
        "hexCode": "#00545E",
        "filePath": "./paintimages/gw/Sons of Horus Green.svg"
    },
    {
        "name": "Valhallan Blizzard",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956048_technicalValhallanBlizzard.svg",
        "hexCode": "#E1E1E1",
        "filePath": "./paintimages/gw/Valhallan Blizzard.svg"
    },
    {
        "name": "Stormshield",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956052_technicalStormShield.svg",
        "hexCode": "#d=\"991",
        "filePath": "./paintimages/gw/Stormshield.svg"
    },
    {
        "name": "Averland Sunset",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958053_airAverlandSunset.svg",
        "hexCode": "#FBB81C",
        "filePath": "./paintimages/gw/Averland Sunset.svg"
    },
    {
        "name": "Iyanden Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960001_contrastIyandenYellow.svg",
        "hexCode": "#FBC827",
        "filePath": "./paintimages/gw/Iyanden Yellow.svg"
    },
    {
        "name": "Fenrisian Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958103_airFenrisianGrey.svg",
        "hexCode": "#6D94B3",
        "filePath": "./paintimages/gw/Fenrisian Grey.svg"
    },
    {
        "name": "Gore-Grunta Fur",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960019_contrastGoreGruntaFur.svg",
        "hexCode": "#8F4001",
        "filePath": "./paintimages/gw/Gore-Grunta Fur.svg"
    },
    {
        "name": "Chemos Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958117_airChemosPurple.svg",
        "hexCode": "#4F356C",
        "filePath": "./paintimages/gw/Chemos Purple.svg"
    },
    {
        "name": "Khorne Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958055_airKhorneRed.svg",
        "hexCode": "#650001",
        "filePath": "./paintimages/gw/Khorne Red.svg"
    },
    {
        "name": "Mortarion Green Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958109_airMortarionGreenClear.svg",
        "hexCode": "#00832B",
        "filePath": "./paintimages/gw/Mortarion Green Clear.svg"
    },
    {
        "name": "Space Wolves Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960027_contrastSpaceWolvesGrey.svg",
        "hexCode": "#8FADC8",
        "filePath": "./paintimages/gw/Space Wolves Grey.svg"
    },
    {
        "name": "Basilicanum Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960028_contrastBasilicanumGrey.svg",
        "hexCode": "#989897",
        "filePath": "./paintimages/gw/Basilicanum Grey.svg"
    },
    {
        "name": "Word Bearers Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958125_airWordBearersRed.svg",
        "hexCode": "#620104",
        "filePath": "./paintimages/gw/Word Bearers Red.svg"
    },
    {
        "name": "Guilliman Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960023_contrastGuillimanFlesh.svg",
        "hexCode": "#D1A194",
        "filePath": "./paintimages/gw/Guilliman Flesh.svg"
    },
    {
        "name": "Tuskgor Fur",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958093_airTuskgorFur.svg",
        "hexCode": "#863231",
        "filePath": "./paintimages/gw/Tuskgor Fur.svg"
    },
    {
        "name": "Nocturne Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958122_airNocturneGreen.svg",
        "hexCode": "#162A29",
        "filePath": "./paintimages/gw/Nocturne Green.svg"
    },
    {
        "name": "Lupercal Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958123_airLupercalGreen.svg",
        "hexCode": "#002C2B",
        "filePath": "./paintimages/gw/Lupercal Green.svg"
    },
    {
        "name": "Angron Red Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958105_airAngronRedClear.svg",
        "hexCode": "#E21823",
        "filePath": "./paintimages/gw/Angron Red Clear.svg"
    },
    {
        "name": "Typhon Ash",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958118_airTyphonAsh.svg",
        "hexCode": "#E4D8C1",
        "filePath": "./paintimages/gw/Typhon Ash.svg"
    },
    {
        "name": "Mechanicus Standard Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958066_airMechanicusStandardGrey.svg",
        "hexCode": "#39484A",
        "filePath": "./paintimages/gw/Mechanicus Standard Grey.svg"
    },
    {
        "name": "White Scar",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958098_airWhiteScar.svg",
        "hexCode": "#FFFFFF",
        "filePath": "./paintimages/gw/White Scar.svg"
    },
    {
        "name": "Skeleton Horde",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960017_contrastSkeletonHorde.svg",
        "hexCode": "#EBE2C2",
        "filePath": "./paintimages/gw/Skeleton Horde.svg"
    },
    {
        "name": "Gal Vorbak Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958124_airGalVorbakRed.svg",
        "hexCode": "#4B213C",
        "filePath": "./paintimages/gw/Gal Vorbak Red.svg"
    },
    {
        "name": "Sigismund Yellow Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958112_airSigismundYellowClear.svg",
        "hexCode": "#FFE32F",
        "filePath": "./paintimages/gw/Sigismund Yellow Clear.svg"
    },
    {
        "name": "Agrax Earthshade Gloss",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953034_shadeAgraxEarthshadeGloss.svg",
        "hexCode": "#2D190C",
        "filePath": "./paintimages/gw/Agrax Earthshade Gloss.svg"
    },
    {
        "name": "Ardcoat",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956050_technicalArdcoat.svg",
        "hexCode": "#d=\"991",
        "filePath": "./paintimages/gw/Ardcoat.svg"
    },
    {
        "name": "Caledor Sky",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958058_airCaledorSky.svg",
        "hexCode": "#366699",
        "filePath": "./paintimages/gw/Caledor Sky.svg"
    },
    {
        "name": "Caliban Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958059_airCalibanGreen.svg",
        "hexCode": "#003D15",
        "filePath": "./paintimages/gw/Caliban Green.svg"
    },
    {
        "name": "Nazdreg Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960012_contrastNazdregYellow.svg",
        "hexCode": "#D99A00",
        "filePath": "./paintimages/gw/Nazdreg Yellow.svg"
    },
    {
        "name": "Evil Sunz Scarlet",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958074_airEvilSunzScarlet.svg",
        "hexCode": "#C01411",
        "filePath": "./paintimages/gw/Evil Sunz Scarlet.svg"
    },
    {
        "name": "Ulthuan Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958097_airUlthuanGrey.svg",
        "hexCode": "#C4DDD5",
        "filePath": "./paintimages/gw/Ulthuan Grey.svg"
    },
    {
        "name": "Ork Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960013_contrastOrkFlesh.svg",
        "hexCode": "#00832B",
        "filePath": "./paintimages/gw/Ork Flesh.svg"
    },
    {
        "name": "Carroburg Crimson",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953016_shadeCarroburgCrimson.svg",
        "hexCode": "#310808",
        "filePath": "./paintimages/gw/Carroburg Crimson.svg"
    },
    {
        "name": "Terradon Turquoise",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960034_contrastTerradonTurquoise.svg",
        "hexCode": "#008DA5",
        "filePath": "./paintimages/gw/Terradon Turquoise.svg"
    },
    {
        "name": "Biel-Tan Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953022_shadeBielTanGreen.svg",
        "hexCode": "#132E21",
        "filePath": "./paintimages/gw/Biel-Tan Green.svg"
    },
    {
        "name": "Leviadon Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960008_contrastLeviadonBlue.svg",
        "hexCode": "#002D59",
        "filePath": "./paintimages/gw/Leviadon Blue.svg"
    },
    {
        "name": "Death Korps Drab",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958114_airDeathKorpsDrab.svg",
        "hexCode": "#3D4539",
        "filePath": "./paintimages/gw/Death Korps Drab.svg"
    },
    {
        "name": "Akhelian Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960010_contrastAkhelianGreen.svg",
        "hexCode": "#007B9B",
        "filePath": "./paintimages/gw/Akhelian Green.svg"
    },
    {
        "name": "Baneblade Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958094_airBanebladeBrown.svg",
        "hexCode": "#8F7C68",
        "filePath": "./paintimages/gw/Baneblade Brown.svg"
    },
    {
        "name": "Mordant Earth",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956037_technicalMordantEarth.svg",
        "hexCode": "#171314",
        "filePath": "./paintimages/gw/Mordant Earth.svg"
    },
    {
        "name": "Magos Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960007_contrastMagosPurple.svg",
        "hexCode": "#C2A7C3",
        "filePath": "./paintimages/gw/Magos Purple.svg"
    },
    {
        "name": "Flash Gitz Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958072_airFlashGitzYellow.svg",
        "hexCode": "#FFF300",
        "filePath": "./paintimages/gw/Flash Gitz Yellow.svg"
    },
    {
        "name": "Relictor Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958101_airRelictorGold.svg",
        "hexCode": "#886625",
        "filePath": "./paintimages/gw/Relictor Gold.svg"
    },
    {
        "name": "Astrogranite",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956046_technicalAstrogranite.svg",
        "hexCode": "#9D9D9D",
        "filePath": "./paintimages/gw/Astrogranite.svg"
    },
    {
        "name": "Balthasar Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958069_airBalthasarGold.svg",
        "hexCode": "#1D0F07",
        "filePath": "./paintimages/gw/Balthasar Gold.svg"
    },
    {
        "name": "Shyish Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960006_contrastShyishPurple.svg",
        "hexCode": "#573F6A",
        "filePath": "./paintimages/gw/Shyish Purple.svg"
    },
    {
        "name": "Aggaros Dunes",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960016_contrastAggarosDunes.svg",
        "hexCode": "#D0BF6D",
        "filePath": "./paintimages/gw/Aggaros Dunes.svg"
    },
    {
        "name": "Castellax Bronze",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958126_airCastellaxBronze.svg",
        "hexCode": "#3D0700",
        "filePath": "./paintimages/gw/Castellax Bronze.svg"
    },
    {
        "name": "Cygor Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960020_contrastCygorBrown.svg",
        "hexCode": "#754A47",
        "filePath": "./paintimages/gw/Cygor Brown.svg"
    },
    {
        "name": "Pyroclast Orange Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958111_airPyroclastOrangeClear.svg",
        "hexCode": "#ED8022",
        "filePath": "./paintimages/gw/Pyroclast Orange Clear.svg"
    },
    {
        "name": "Karak Stone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958088_airKarakStone.svg",
        "hexCode": "#B7945C",
        "filePath": "./paintimages/gw/Karak Stone.svg"
    },
    {
        "name": "Administratum Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958096_airAdministratumGrey.svg",
        "hexCode": "#8F9690",
        "filePath": "./paintimages/gw/Administratum Grey.svg"
    },
    {
        "name": "Coelia Greenshade",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953025_shadeCoeliaGreenshade.svg",
        "hexCode": "#113431",
        "filePath": "./paintimages/gw/Coelia Greenshade.svg"
    },
    {
        "name": "Nuln Oil Gloss",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953033_shadeNulnOilGloss.svg",
        "hexCode": "#101010",
        "filePath": "./paintimages/gw/Nuln Oil Gloss.svg"
    },
    {
        "name": "Ironbreaker",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958099_airIronbreaker.svg",
        "hexCode": "#414141",
        "filePath": "./paintimages/gw/Ironbreaker.svg"
    },
    {
        "name": "Black Templar",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960029_contrastBlackTemplar.svg",
        "hexCode": "#6A6A69",
        "filePath": "./paintimages/gw/Black Templar.svg"
    },
    {
        "name": "Eidolon Purple Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958108_airEidolonPurpleClear.svg",
        "hexCode": "#7D4D99",
        "filePath": "./paintimages/gw/Eidolon Purple Clear.svg"
    },
    {
        "name": "Casandora Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953021_shadeCasandoraYellow.svg",
        "hexCode": "#E78035",
        "filePath": "./paintimages/gw/Casandora Yellow.svg"
    },
    {
        "name": "Ultramarines Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960009_contrastUltramarineBlue.svg",
        "hexCode": "#294F86",
        "filePath": "./paintimages/gw/Ultramarines Blue.svg"
    },
    {
        "name": "Runefang Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958100_airRunefangSteel.svg",
        "hexCode": "#797F82",
        "filePath": "./paintimages/gw/Runefang Steel.svg"
    },
    {
        "name": "Kislev Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958089_airKislevFlesh.svg",
        "hexCode": "#D1A570",
        "filePath": "./paintimages/gw/Kislev Flesh.svg"
    },
    {
        "name": "Warboss Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958081_airWarbossGreen.svg",
        "hexCode": "#317E57",
        "filePath": "./paintimages/gw/Warboss Green.svg"
    },
    {
        "name": "Wyldwood",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960021_contrastWyldwood.svg",
        "hexCode": "#6A504B",
        "filePath": "./paintimages/gw/Wyldwood.svg"
    },
    {
        "name": "Zandri Dust",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958062_airZandriDust.svg",
        "hexCode": "#988E56",
        "filePath": "./paintimages/gw/Zandri Dust.svg"
    },
    {
        "name": "Martian Ironcrust",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956041_technicalMartianIroncrust.svg",
        "hexCode": "#CF705D",
        "filePath": "./paintimages/gw/Martian Ironcrust.svg"
    },
    {
        "name": "Mournfang Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958063_airMournfangBrown.svg",
        "hexCode": "#490F06",
        "filePath": "./paintimages/gw/Mournfang Brown.svg"
    },
    {
        "name": "Creed Camo",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960014_contrastCreedCamo.svg",
        "hexCode": "#5D9272",
        "filePath": "./paintimages/gw/Creed Camo.svg"
    },
    {
        "name": "Castellan Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958060_airCastellanGreen.svg",
        "hexCode": "#264715",
        "filePath": "./paintimages/gw/Castellan Green.svg"
    },
    {
        "name": "Tesseract Glow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956053_technicalTesseractGlow.svg",
        "hexCode": "#49ad33",
        "filePath": "./paintimages/gw/Tesseract Glow.svg"
    },
    {
        "name": "Gryph-Hound Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960002_contrastGryphHoundOrange.svg",
        "hexCode": "#E96134",
        "filePath": "./paintimages/gw/Gryph-Hound Orange.svg"
    },
    {
        "name": "Darkoath Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960024_contrastDarkoathFlesh.svg",
        "hexCode": "#D89987",
        "filePath": "./paintimages/gw/Darkoath Flesh.svg"
    },
    {
        "name": "Agrellan Earth",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956038_technicalAgrellanEarth.svg",
        "hexCode": "#B39E80",
        "filePath": "./paintimages/gw/Agrellan Earth.svg"
    },
    {
        "name": "Militarum Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960015_contrastMilitarumGreen.svg",
        "hexCode": "#989C4D",
        "filePath": "./paintimages/gw/Militarum Green.svg"
    },
    {
        "name": "Dark Angels Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960011_contrastDarkAngelsGreen.svg",
        "hexCode": "#004E45",
        "filePath": "./paintimages/gw/Dark Angels Green.svg"
    },
    {
        "name": "Reikland Fleshshade",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953027_shadeReiklandFleshshade.svg",
        "hexCode": "#311908",
        "filePath": "./paintimages/gw/Reikland Fleshshade.svg"
    },
    {
        "name": "Drakenhof Nightshade",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953020_shadeDrakenhofNightshade.svg",
        "hexCode": "#0A131B",
        "filePath": "./paintimages/gw/Drakenhof Nightshade.svg"
    },
    {
        "name": "Calgar Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958076_airCalgarBlue.svg",
        "hexCode": "#2A497F",
        "filePath": "./paintimages/gw/Calgar Blue.svg"
    },
    {
        "name": "The Fang",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958071_airTheFang.svg",
        "hexCode": "#405B71",
        "filePath": "./paintimages/gw/The Fang.svg"
    },
    {
        "name": "Armageddon Dust",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956044_technicalArmageddonDust.svg",
        "hexCode": "#E8D36F",
        "filePath": "./paintimages/gw/Armageddon Dust.svg"
    },
    {
        "name": "Flesh Tearers Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960004_contrastFleshTearersRed.svg",
        "hexCode": "#880E0B",
        "filePath": "./paintimages/gw/Flesh Tearers Red.svg"
    },
    {
        "name": "Lahmian Medium",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956049_technicalLahmianMedium.svg",
        "hexCode": "#d=\"991",
        "filePath": "./paintimages/gw/Lahmian Medium.svg"
    },
    {
        "name": "Terminatus Stone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958104_airTerminatusStone.svg",
        "hexCode": "#C8B79D",
        "filePath": "./paintimages/gw/Terminatus Stone.svg"
    },
    {
        "name": "Athonian Camoshade",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953024_shadeAthonianCamoshade.svg",
        "hexCode": "#1C1C10",
        "filePath": "./paintimages/gw/Athonian Camoshade.svg"
    },
    {
        "name": "Vulkan Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958115_airVulkanGreen.svg",
        "hexCode": "#223C2E",
        "filePath": "./paintimages/gw/Vulkan Green.svg"
    },
    {
        "name": "Russ Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958102_airRussGrey.svg",
        "hexCode": "#507085",
        "filePath": "./paintimages/gw/Russ Grey.svg"
    },
    {
        "name": "Genestealer Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958075_airGenestealerPurple.svg",
        "hexCode": "#7658A5",
        "filePath": "./paintimages/gw/Genestealer Purple.svg"
    },
    {
        "name": "Druchii Violet",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953019_shadeDruchiiViolet.svg",
        "hexCode": "#250B27",
        "filePath": "./paintimages/gw/Druchii Violet.svg"
    },
    {
        "name": "Apothecary White",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960025_contrastApothecaryWhite.svg",
        "hexCode": "#F6FBFF",
        "filePath": "./paintimages/gw/Apothecary White.svg"
    },
    {
        "name": "Ogryn Camo",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958084_airOgrynCamo.svg",
        "hexCode": "#96A648",
        "filePath": "./paintimages/gw/Ogryn Camo.svg"
    },
    {
        "name": "Stirland Mud",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956042_technicalStirlandMud.svg",
        "hexCode": "#70490D",
        "filePath": "./paintimages/gw/Stirland Mud.svg"
    },
    {
        "name": "Deathworld Forest",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958061_airDeathworldForest.svg",
        "hexCode": "#556229",
        "filePath": "./paintimages/gw/Deathworld Forest.svg"
    },
    {
        "name": "Lothern Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958077_airLothernBlue.svg",
        "hexCode": "#2C9BCC",
        "filePath": "./paintimages/gw/Lothern Blue.svg"
    },
    {
        "name": "Tallarn Sand",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958087_airTallarnSand.svg",
        "hexCode": "#A07409",
        "filePath": "./paintimages/gw/Tallarn Sand.svg"
    },
    {
        "name": "Macragge Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958057_airMacraggeBlue.svg",
        "hexCode": "#0F3D7C",
        "filePath": "./paintimages/gw/Macragge Blue.svg"
    },
    {
        "name": "Contrast Medium",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956051_technicalContrastMedium.svg",
        "hexCode": "#d=\"991",
        "filePath": "./paintimages/gw/Contrast Medium.svg"
    },
    {
        "name": "Troll Slayer Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958073_airTrollSlayerOrange.svg",
        "hexCode": "#F16C23",
        "filePath": "./paintimages/gw/Troll Slayer Orange.svg"
    },
    {
        "name": "Leadbelcher",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958068_airLeadbelcher.svg",
        "hexCode": "#",
        "filePath": "./paintimages/gw/Leadbelcher.svg"
    },
    {
        "name": "Armageddon Dunes",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956045_technicalArmageddonDunes.svg",
        "hexCode": "#E8D36F",
        "filePath": "./paintimages/gw/Armageddon Dunes.svg"
    },
    {
        "name": "Mephiston Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958054_airMephistonRed.svg",
        "hexCode": "#960C09",
        "filePath": "./paintimages/gw/Mephiston Red.svg"
    },
    {
        "name": "Deathshroud Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958107_airDeathshroudClear.svg",
        "hexCode": "#1C1C1B",
        "filePath": "./paintimages/gw/Deathshroud Clear.svg"
    },
    {
        "name": "Cryptek Armourshade Gloss",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953038_shadeCryptekArmourshadeGloss.svg",
        "hexCode": "#532724",
        "filePath": "./paintimages/gw/Cryptek Armourshade Gloss.svg"
    },
    {
        "name": "Warp Lightning",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960031_contrastWarpLightning.svg",
        "hexCode": "#00964E",
        "filePath": "./paintimages/gw/Warp Lightning.svg"
    },
    {
        "name": "Iron Hands Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958128_airIronHandsSteel.svg",
        "hexCode": "#",
        "filePath": "./paintimages/gw/Iron Hands Steel.svg"
    },
    {
        "name": "Elysian Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958083_airElysianGreen.svg",
        "hexCode": "#6B8C37",
        "filePath": "./paintimages/gw/Elysian Green.svg"
    },
    {
        "name": "Stirland Battlemire",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956043_technicalStirlandBattlemire.svg",
        "hexCode": "#70490D",
        "filePath": "./paintimages/gw/Stirland Battlemire.svg"
    },
    {
        "name": "Agrellan Badland",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956039_technicalAgrellanBadland.svg",
        "hexCode": "#B39E80",
        "filePath": "./paintimages/gw/Agrellan Badland.svg"
    },
    {
        "name": "Corvus Black",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958116_airCorvusBlack.svg",
        "hexCode": "#171314",
        "filePath": "./paintimages/gw/Corvus Black.svg"
    },
    {
        "name": "Calth Blue Clear",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958106_airCalthBlueClear.svg",
        "hexCode": "#0087D1",
        "filePath": "./paintimages/gw/Calth Blue Clear.svg"
    },
    {
        "name": "Seraphim Sepia",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953026_shadeSeraphimSepia.svg",
        "hexCode": "#2E1F08",
        "filePath": "./paintimages/gw/Seraphim Sepia.svg"
    },
    {
        "name": "Talassar Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960030_contrastTalassarBlue.svg",
        "hexCode": "#0073C2",
        "filePath": "./paintimages/gw/Talassar Blue.svg"
    },
    {
        "name": "Aethermatic Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960032_contrastAethermaticBlue.svg",
        "hexCode": "#82BCC8",
        "filePath": "./paintimages/gw/Aethermatic Blue.svg"
    },
    {
        "name": "Ushabti Bone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958085_airUshabtiBone.svg",
        "hexCode": "#ABA173",
        "filePath": "./paintimages/gw/Ushabti Bone.svg"
    },
    {
        "name": "Grey Knights Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958129_airGreyKnightsSteel.svg",
        "hexCode": "#465863",
        "filePath": "./paintimages/gw/Grey Knights Steel.svg"
    },
    {
        "name": "Valdor Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958127_airValdorGold.svg",
        "hexCode": "#6D2711",
        "filePath": "./paintimages/gw/Valdor Gold.svg"
    },
    {
        "name": "Dryad Bark",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958065_airDryadBark.svg",
        "hexCode": "#2B2A24",
        "filePath": "./paintimages/gw/Dryad Bark.svg"
    },
    {
        "name": "Volupus Pink",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960005_contrastVolupusPink.svg",
        "hexCode": "#8F0243",
        "filePath": "./paintimages/gw/Volupus Pink.svg"
    },
    {
        "name": "Sybarite Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958079_airSybariteGreen.svg",
        "hexCode": "#17A166",
        "filePath": "./paintimages/gw/Sybarite Green.svg"
    },
    {
        "name": "Snakebite Leather",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960018_contrastSnakebiteLeather.svg",
        "hexCode": "#B26B0C",
        "filePath": "./paintimages/gw/Snakebite Leather.svg"
    },
    {
        "name": "XV-88",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958064_airXV88.svg",
        "hexCode": "#6C4811",
        "filePath": "./paintimages/gw/XV-88.svg"
    },
    {
        "name": "Straken Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958082_airStrakenGreen.svg",
        "hexCode": "#597F1C",
        "filePath": "./paintimages/gw/Straken Green.svg"
    },
    {
        "name": "Plaguebearer Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960033_contrastPlaguebearerFlesh.svg",
        "hexCode": "#C8CEA3",
        "filePath": "./paintimages/gw/Plaguebearer Flesh.svg"
    },
    {
        "name": "Abaddon Black",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958067_airAbaddonBlack.svg",
        "hexCode": "#000000",
        "filePath": "./paintimages/gw/Abaddon Black.svg"
    },
    {
        "name": "Astrogranite Debris",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956047_technicalAstrograniteDebris.svg",
        "hexCode": "#9D9D9D",
        "filePath": "./paintimages/gw/Astrogranite Debris.svg"
    },
    {
        "name": "Blood Angels Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960003_contrastBloodAngelsRed.svg",
        "hexCode": "#C11519",
        "filePath": "./paintimages/gw/Blood Angels Red.svg"
    },
    {
        "name": "Moot Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958080_airMootGreen.svg",
        "hexCode": "#3DAF44",
        "filePath": "./paintimages/gw/Moot Green.svg"
    },
    {
        "name": "Dawnstone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958095_airDawnstone.svg",
        "hexCode": "#697068",
        "filePath": "./paintimages/gw/Dawnstone.svg"
    },
    {
        "name": "Thallax Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958130_airThallaxGold.svg",
        "hexCode": "#722A0B",
        "filePath": "./paintimages/gw/Thallax Gold.svg"
    },
    {
        "name": "Night Lords Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958113_airNightLordsBlue.svg",
        "hexCode": "#002B5C",
        "filePath": "./paintimages/gw/Night Lords Blue.svg"
    },
    {
        "name": "Gryph-Charger Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189960026_contrastGryphChargerGrey.svg",
        "hexCode": "#AAC9DA",
        "filePath": "./paintimages/gw/Gryph-Charger Grey.svg"
    },
    {
        "name": "Fuegan Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953023_shadeFueganOrange.svg",
        "hexCode": "#6C1C03",
        "filePath": "./paintimages/gw/Fuegan Orange.svg"
    },
    {
        "name": "Deathclaw Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958090_airDeathclawBrown.svg",
        "hexCode": "#AF634F",
        "filePath": "./paintimages/gw/Deathclaw Brown.svg"
    },
    {
        "name": "Steel Legion Drab",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189958070_airSteelLegionDrab.svg",
        "hexCode": "#584E2D",
        "filePath": "./paintimages/gw/Steel Legion Drab.svg"
    },
    {
        "name": "Canoptek Alloy",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951205_layerCanoptekAlloy.svg",
        "hexCode": "#967F7A",
        "filePath": "./paintimages/gw/Canoptek Alloy.svg"
    },
    {
        "name": "Skullcrusher Brass",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951081_layerSkullcrusherBrass.svg",
        "hexCode": "#C38841",
        "filePath": "./paintimages/gw/Skullcrusher Brass.svg"
    },
    {
        "name": "Runelord Brass",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950204_layerRunelordBrass.svg",
        "hexCode": "#190E07",
        "filePath": "./paintimages/gw/Runelord Brass.svg"
    },
    {
        "name": "Retributor Armour",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950039_baseRetributorArmour.svg",
        "hexCode": "#89571D",
        "filePath": "./paintimages/gw/Retributor Armour.svg"
    },
    {
        "name": "Liberator Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951073_layerLiberatorGold.svg",
        "hexCode": "#886625",
        "filePath": "./paintimages/gw/Liberator Gold.svg"
    },
    {
        "name": "Stormhost Silver",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951083_layerStormhostSilver.svg",
        "hexCode": "#9DA3A7",
        "filePath": "./paintimages/gw/Stormhost Silver.svg"
    },
    {
        "name": "Fulgurite Copper",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951082_layerFulguriteCopper.svg",
        "hexCode": "#6D2711",
        "filePath": "./paintimages/gw/Fulgurite Copper.svg"
    },
    {
        "name": "Loren Forest",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951027_layerLorenForest.svg",
        "hexCode": "#486C25",
        "filePath": "./paintimages/gw/Loren Forest.svg"
    },
    {
        "name": "Naggaroth Night",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950005_baseNaggarothNight.svg",
        "hexCode": "#3B2B50",
        "filePath": "./paintimages/gw/Naggaroth Night.svg"
    },
    {
        "name": "White Scar",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951057_layerWhiteScar.svg",
        "hexCode": "#FFFFFF",
        "filePath": "./paintimages/gw/White Scar.svg"
    },
    {
        "name": "Averland Sunset",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950001_baseAverlandSunset.svg",
        "hexCode": "#FBB81C",
        "filePath": "./paintimages/gw/Averland Sunset.svg"
    },
    {
        "name": "Skrag Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951040_layerSkragBrown.svg",
        "hexCode": "#8B4806",
        "filePath": "./paintimages/gw/Skrag Brown.svg"
    },
    {
        "name": "Lugganath Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951109_layerLugganathOrange.svg",
        "hexCode": "#F69B82",
        "filePath": "./paintimages/gw/Lugganath Orange.svg"
    },
    {
        "name": "Altdorf Guard Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951015_layerAltdorfGuardBlue.svg",
        "hexCode": "#2D4696",
        "filePath": "./paintimages/gw/Altdorf Guard Blue.svg"
    },
    {
        "name": "Pink Horror",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951069_layerPinkHorror.svg",
        "hexCode": "#8E2757",
        "filePath": "./paintimages/gw/Pink Horror.svg"
    },
    {
        "name": "Hexos Palesun",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952001_dryHexosPalesun.svg",
        "hexCode": "#FFF55A",
        "filePath": "./paintimages/gw/Hexos Palesun.svg"
    },
    {
        "name": "Dryad Bark",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950023_baseDryadBark.svg",
        "hexCode": "#2B2A24",
        "filePath": "./paintimages/gw/Dryad Bark.svg"
    },
    {
        "name": "Troll Slayer Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951003_layerTrollSlayerOrange.svg",
        "hexCode": "#F16C23",
        "filePath": "./paintimages/gw/Troll Slayer Orange.svg"
    },
    {
        "name": "Golden Griffon",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952014_dryGoldenGriffon.svg",
        "hexCode": "#886625",
        "filePath": "./paintimages/gw/Golden Griffon.svg"
    },
    {
        "name": "Grey Seer",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950174_baseGreySeer.svg",
        "hexCode": "#A2A5A7",
        "filePath": "./paintimages/gw/Grey Seer.svg"
    },
    {
        "name": "Warpfiend Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951011_layerWarpfiendGrey.svg",
        "hexCode": "#66656E",
        "filePath": "./paintimages/gw/Warpfiend Grey.svg"
    },
    {
        "name": "Grey Knights Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950129_baseGreyKnightsSteel.svg",
        "hexCode": "#465863",
        "filePath": "./paintimages/gw/Grey Knights Steel.svg"
    },
    {
        "name": "Administratum Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952029_layerAdministratumGrey.svg",
        "hexCode": "#989C94",
        "filePath": "./paintimages/gw/Administratum Grey.svg"
    },
    {
        "name": "Dawnstone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952031_dryDawnstone.svg",
        "hexCode": "#697068",
        "filePath": "./paintimages/gw/Dawnstone.svg"
    },
    {
        "name": "Vulkan Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951114_layerVulkanGreen.svg",
        "hexCode": "#223C2E",
        "filePath": "./paintimages/gw/Vulkan Green.svg"
    },
    {
        "name": "Sylvaneth Bark",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952030_drySylvanethBark.svg",
        "hexCode": "#4E483B",
        "filePath": "./paintimages/gw/Sylvaneth Bark.svg"
    },
    {
        "name": "Nurgling Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952027_dryNurglingGreen.svg",
        "hexCode": "#7E975E",
        "filePath": "./paintimages/gw/Nurgling Green.svg"
    },
    {
        "name": "Soulstone Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956016_technicalSoulstoneBlue.svg",
        "hexCode": "#01458F",
        "filePath": "./paintimages/gw/Soulstone Blue.svg"
    },
    {
        "name": "Cadian Fleshtone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951036_layerCadianFleshtone.svg",
        "hexCode": "#C47652",
        "filePath": "./paintimages/gw/Cadian Fleshtone.svg"
    },
    {
        "name": "Gorthor Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951047_layerGorthorBrown.svg",
        "hexCode": "#5F463F",
        "filePath": "./paintimages/gw/Gorthor Brown.svg"
    },
    {
        "name": "Phalanx Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951112_layerPhalanxYellow.svg",
        "hexCode": "#FFE200",
        "filePath": "./paintimages/gw/Phalanx Yellow.svg"
    },
    {
        "name": "Ogryn Camo",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951031_layerOgrynCamo.svg",
        "hexCode": "#96A648",
        "filePath": "./paintimages/gw/Ogryn Camo.svg"
    },
    {
        "name": "Skavenblight Dinge",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951054_layerSkavenblightDinge.svg",
        "hexCode": "#45413B",
        "filePath": "./paintimages/gw/Skavenblight Dinge.svg"
    },
    {
        "name": "Teclis Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951017_layerTeclisBlue.svg",
        "hexCode": "#3877BF",
        "filePath": "./paintimages/gw/Teclis Blue.svg"
    },
    {
        "name": "Jokaero Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950002_baseJokaeroOrange.svg",
        "hexCode": "#ED3814",
        "filePath": "./paintimages/gw/Jokaero Orange.svg"
    },
    {
        "name": "Hoeth Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952022_dryHoethBlue.svg",
        "hexCode": "#4C78AF",
        "filePath": "./paintimages/gw/Hoeth Blue.svg"
    },
    {
        "name": "Morghast Bone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950171_baseMorghastBone.svg",
        "hexCode": "#C0A973",
        "filePath": "./paintimages/gw/Morghast Bone.svg"
    },
    {
        "name": "Mechanicus Standard Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950024_baseMechanicusStandardGrey.svg",
        "hexCode": "#39484A",
        "filePath": "./paintimages/gw/Mechanicus Standard Grey.svg"
    },
    {
        "name": "Castellan Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950014_baseCastellanGreen.svg",
        "hexCode": "#264715",
        "filePath": "./paintimages/gw/Castellan Green.svg"
    },
    {
        "name": "Dechala Lilac",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951106_layerDechalaLilac.svg",
        "hexCode": "#B598C9",
        "filePath": "./paintimages/gw/Dechala Lilac.svg"
    },
    {
        "name": "Iron Hands Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950128_baseIronHandsSteel.svg",
        "hexCode": "#44423F",
        "filePath": "./paintimages/gw/Iron Hands Steel.svg"
    },
    {
        "name": "Sotek Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951019_layerSotekGreen.svg",
        "hexCode": "#0B6371",
        "filePath": "./paintimages/gw/Sotek Green.svg"
    },
    {
        "name": "Alaitoc Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951013_layerAlaitocBlue.svg",
        "hexCode": "#2F4F85",
        "filePath": "./paintimages/gw/Alaitoc Blue.svg"
    },
    {
        "name": "Corax White",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950172_baseCoraxWhite.svg",
        "hexCode": "#FFFFFF",
        "filePath": "./paintimages/gw/Corax White.svg"
    },
    {
        "name": "Fenrisian Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951068_layerFenrisianGrey.svg",
        "hexCode": "#6D94B3",
        "filePath": "./paintimages/gw/Fenrisian Grey.svg"
    },
    {
        "name": "Zamesi Desert",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951044_layerZamesiDesert.svg",
        "hexCode": "#D89D1B",
        "filePath": "./paintimages/gw/Zamesi Desert.svg"
    },
    {
        "name": "Karak Stone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951035_layerKarakStone.svg",
        "hexCode": "#B7945C",
        "filePath": "./paintimages/gw/Karak Stone.svg"
    },
    {
        "name": "Zandri Dust",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950016_baseZandriDust.svg",
        "hexCode": "#988E56",
        "filePath": "./paintimages/gw/Zandri Dust.svg"
    },
    {
        "name": "Baharroth Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951103_layerBaharrothBlue.svg",
        "hexCode": "#54BDCA",
        "filePath": "./paintimages/gw/Baharroth Blue.svg"
    },
    {
        "name": "Flash Gitz Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951002_layerFlashGitzYellow.svg",
        "hexCode": "#FFF300",
        "filePath": "./paintimages/gw/Flash Gitz Yellow.svg"
    },
    {
        "name": "Astorath Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952021_dryAstorathRed.svg",
        "hexCode": "#A9311E",
        "filePath": "./paintimages/gw/Astorath Red.svg"
    },
    {
        "name": "Niblet Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952026_dryNibletGreen.svg",
        "hexCode": "#378C35",
        "filePath": "./paintimages/gw/Niblet Green.svg"
    },
    {
        "name": "Skink Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952006_drySkinkBlue.svg",
        "hexCode": "#54BDCA",
        "filePath": "./paintimages/gw/Skink Blue.svg"
    },
    {
        "name": "Nurgling Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951029_layerNurglingGreen.svg",
        "hexCode": "#7E975E",
        "filePath": "./paintimages/gw/Nurgling Green.svg"
    },
    {
        "name": "Spiritstone Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956015_technicalSpiritstoneRed.svg",
        "hexCode": "#DA2308",
        "filePath": "./paintimages/gw/Spiritstone Red.svg"
    },
    {
        "name": "Longbeard Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952012_dryLongbeardGrey.svg",
        "hexCode": "#DBDCC6",
        "filePath": "./paintimages/gw/Longbeard Grey.svg"
    },
    {
        "name": "Blue Horror",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951108_layerBlueHorror.svg",
        "hexCode": "#9EB5CE",
        "filePath": "./paintimages/gw/Blue Horror.svg"
    },
    {
        "name": "Calgar Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951016_layerCalgarBlue.svg",
        "hexCode": "#2A497F",
        "filePath": "./paintimages/gw/Calgar Blue.svg"
    },
    {
        "name": "Straken Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951028_layerStrakenGreen.svg",
        "hexCode": "#597F1C",
        "filePath": "./paintimages/gw/Straken Green.svg"
    },
    {
        "name": "Moot Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951024_layerMootGreen.svg",
        "hexCode": "#3DAF44",
        "filePath": "./paintimages/gw/Moot Green.svg"
    },
    {
        "name": "Ungor Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951039_layerUngorFlesh.svg",
        "hexCode": "#D1A560",
        "filePath": "./paintimages/gw/Ungor Flesh.svg"
    },
    {
        "name": "Gauss Blaster Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951102_layerGaussBlasterGreen.svg",
        "hexCode": "#7FC1A5",
        "filePath": "./paintimages/gw/Gauss Blaster Green.svg"
    },
    {
        "name": "Balor Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951043_layerBalorBrown.svg",
        "hexCode": "#875408",
        "filePath": "./paintimages/gw/Balor Brown.svg"
    },
    {
        "name": "Gal Vorbak Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950123_baseGalVorbakRed.svg",
        "hexCode": "#4B213C",
        "filePath": "./paintimages/gw/Gal Vorbak Red.svg"
    },
    {
        "name": "Ushabti Bone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951032_layerUshabtiBone.svg",
        "hexCode": "#ABA173",
        "filePath": "./paintimages/gw/Ushabti Bone.svg"
    },
    {
        "name": "Screaming Skull",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951033_layerScreamingSkull.svg",
        "hexCode": "#B9C099",
        "filePath": "./paintimages/gw/Screaming Skull.svg"
    },
    {
        "name": "Hashut Copper",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951116_layerHashutCopper.svg",
        "hexCode": "#492109",
        "filePath": "./paintimages/gw/Hashut Copper.svg"
    },
    {
        "name": "Etherium Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952005_dryEtheriumBlue.svg",
        "hexCode": "#9EB5CE",
        "filePath": "./paintimages/gw/Etherium Blue.svg"
    },
    {
        "name": "Bugman's Glow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950018_baseBugmansGlow.svg",
        "hexCode": "#804C43",
        "filePath": "./paintimages/gw/Bugman's Glow.svg"
    },
    {
        "name": "Tallarn Sand",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951034_layerTallarnSand.svg",
        "hexCode": "#A07409",
        "filePath": "./paintimages/gw/Tallarn Sand.svg"
    },
    {
        "name": "Gehenna's Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951061_layerGehennasGold.svg",
        "hexCode": "#722A0B",
        "filePath": "./paintimages/gw/Gehenna's Gold.svg"
    },
    {
        "name": "Incubi Darkness",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950011_baseIncubiDarkness.svg",
        "hexCode": "#082E32",
        "filePath": "./paintimages/gw/Incubi Darkness.svg"
    },
    {
        "name": "Caliban Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950012_baseCalibanGreen.svg",
        "hexCode": "#003D15",
        "filePath": "./paintimages/gw/Caliban Green.svg"
    },
    {
        "name": "Golgfag Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952028_dryGolgfagBrown.svg",
        "hexCode": "#8F502A",
        "filePath": "./paintimages/gw/Golgfag Brown.svg"
    },
    {
        "name": "Tau Light Ochre",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951042_layerTauLightOchre.svg",
        "hexCode": "#BC6B10",
        "filePath": "./paintimages/gw/Tau Light Ochre.svg"
    },
    {
        "name": "Wild Rider Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951006_layerWildRiderRed.svg",
        "hexCode": "#E82E1B",
        "filePath": "./paintimages/gw/Wild Rider Red.svg"
    },
    {
        "name": "Lothern Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951018_layerLothernBlue.svg",
        "hexCode": "#2C9BCC",
        "filePath": "./paintimages/gw/Lothern Blue.svg"
    },
    {
        "name": "Wraithbone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950173_baseWraithBone.svg",
        "hexCode": "#DBD1B2",
        "filePath": "./paintimages/gw/Wraithbone.svg"
    },
    {
        "name": "Corvus Black",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950126_baseCorvusBlack.svg",
        "hexCode": "#171314",
        "filePath": "./paintimages/gw/Corvus Black.svg"
    },
    {
        "name": "Nurgles Rot",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956009_technicalNurglesRot.svg",
        "hexCode": "#9D8B16",
        "filePath": "./paintimages/gw/Nurgles Rot.svg"
    },
    {
        "name": "Celestra Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950026_baseCelestraGrey.svg",
        "hexCode": "#8BA3A3",
        "filePath": "./paintimages/gw/Celestra Grey.svg"
    },
    {
        "name": "Underhive Ash",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952010_dryUnderhiveAsh.svg",
        "hexCode": "#BCBB7E",
        "filePath": "./paintimages/gw/Underhive Ash.svg"
    },
    {
        "name": "The Fang",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950032_baseTheFang.svg",
        "hexCode": "#",
        "filePath": "./paintimages/gw/The Fang.svg"
    },
    {
        "name": "Russ Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951067_layerRussGrey.svg",
        "hexCode": "#507085",
        "filePath": "./paintimages/gw/Russ Grey.svg"
    },
    {
        "name": "Deepkin Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951101_layerDeepkinFlesh.svg",
        "hexCode": "#A9B79F",
        "filePath": "./paintimages/gw/Deepkin Flesh.svg"
    },
    {
        "name": "Death Korps Drab",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950122_baseDeathKorpsDrab.svg",
        "hexCode": "#3D4539",
        "filePath": "./paintimages/gw/Death Korps Drab.svg"
    },
    {
        "name": "Typhus Corrosion",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956010_technicalTyphusCorrosion.svg",
        "hexCode": "#373A22",
        "filePath": "./paintimages/gw/Typhus Corrosion.svg"
    },
    {
        "name": "Slaanesh Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952033_drySlaaneshGrey.svg",
        "hexCode": "#8B8893",
        "filePath": "./paintimages/gw/Slaanesh Grey.svg"
    },
    {
        "name": "Screamer Pink",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950033_baseScreamerPink.svg",
        "hexCode": "#7A0E44",
        "filePath": "./paintimages/gw/Screamer Pink.svg"
    },
    {
        "name": "Thunderhawk Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951053_layerThunderhawkBlue.svg",
        "hexCode": "#396A70",
        "filePath": "./paintimages/gw/Thunderhawk Blue.svg"
    },
    {
        "name": "Brass Scorpion",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951065_layerBrassScorpion.svg",
        "hexCode": "#3D0700",
        "filePath": "./paintimages/gw/Brass Scorpion.svg"
    },
    {
        "name": "Rhinox Hide",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950022_baseRhinoxHide.svg",
        "hexCode": "#462F30",
        "filePath": "./paintimages/gw/Rhinox Hide.svg"
    },
    {
        "name": "Sybarite Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951022_layerSybariteGreen.svg",
        "hexCode": "#17A166",
        "filePath": "./paintimages/gw/Sybarite Green.svg"
    },
    {
        "name": "Knight-Questor Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951195_layerKnightQuestorFlesh.svg",
        "hexCode": "#996563",
        "filePath": "./paintimages/gw/Knight-Questor Flesh.svg"
    },
    {
        "name": "Slaanesh Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951012_layerSlaaneshGrey.svg",
        "hexCode": "#8B8893",
        "filePath": "./paintimages/gw/Slaanesh Grey.svg"
    },
    {
        "name": "XV-88",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950021_baseXV88.svg",
        "hexCode": "#6C4811",
        "filePath": "./paintimages/gw/XV-88.svg"
    },
    {
        "name": "Hellion Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952007_dryHellionGreen.svg",
        "hexCode": "#7FC1A5",
        "filePath": "./paintimages/gw/Hellion Green.svg"
    },
    {
        "name": "Chronus Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952023_dryChronusBlue.svg",
        "hexCode": "#4B90CF",
        "filePath": "./paintimages/gw/Chronus Blue.svg"
    },
    {
        "name": "Xereus Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951009_layerXereusPurple.svg",
        "hexCode": "#47125A",
        "filePath": "./paintimages/gw/Xereus Purple.svg"
    },
    {
        "name": "Emperor's Children",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951070_layerEmperorsChildren.svg",
        "hexCode": "#B74073",
        "filePath": "./paintimages/gw/Emperor's Children.svg"
    },
    {
        "name": "Ionrach Skin",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950082_baseIonrachSkin.svg",
        "hexCode": "#97A384",
        "filePath": "./paintimages/gw/Ionrach Skin.svg"
    },
    {
        "name": "Iron Warriors",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950168_baseIronWarriors.svg",
        "hexCode": "#292725",
        "filePath": "./paintimages/gw/Iron Warriors.svg"
    },
    {
        "name": "Castellax Bronze",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951113_layerCastellaxBronze.svg",
        "hexCode": "#3D0700",
        "filePath": "./paintimages/gw/Castellax Bronze.svg"
    },
    {
        "name": "Dark Reaper",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951052_layerDarkReaper.svg",
        "hexCode": "#354D4C",
        "filePath": "./paintimages/gw/Dark Reaper.svg"
    },
    {
        "name": "Daemonette Hide",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950006_baseDaemonetteHide.svg",
        "hexCode": "#655F81",
        "filePath": "./paintimages/gw/Daemonette Hide.svg"
    },
    {
        "name": "Warplock Bronze",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950031_baseWarplockBronze.svg",
        "hexCode": "#440808",
        "filePath": "./paintimages/gw/Warplock Bronze.svg"
    },
    {
        "name": "Verminlord Hide",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952008_dryVerminlordHide.svg",
        "hexCode": "#7E3331",
        "filePath": "./paintimages/gw/Verminlord Hide.svg"
    },
    {
        "name": "Mournfang Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950020_baseMournfangBrown.svg",
        "hexCode": "#490F06",
        "filePath": "./paintimages/gw/Mournfang Brown.svg"
    },
    {
        "name": "Steel Legion Drab",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950017_baseSteelLegionDrab.svg",
        "hexCode": "#584E2D",
        "filePath": "./paintimages/gw/Steel Legion Drab.svg"
    },
    {
        "name": "Terminatus Stone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952030_dryTerminatusStone.svg",
        "hexCode": "#C8B79D",
        "filePath": "./paintimages/gw/Terminatus Stone.svg"
    },
    {
        "name": "Dawnstone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951049_layerDawnstone.svg",
        "hexCode": "#697068",
        "filePath": "./paintimages/gw/Dawnstone.svg"
    },
    {
        "name": "Auric Armour Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951062_layerAuricArmourGold.svg",
        "hexCode": "#B05A25",
        "filePath": "./paintimages/gw/Auric Armour Gold.svg"
    },
    {
        "name": "Bloodreaver Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951194_layerBloodreaverFlesh.svg",
        "hexCode": "#6A4848",
        "filePath": "./paintimages/gw/Bloodreaver Flesh.svg"
    },
    {
        "name": "Kislev Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951037_layerKislevFlesh.svg",
        "hexCode": "#D1A570",
        "filePath": "./paintimages/gw/Kislev Flesh.svg"
    },
    {
        "name": "Phoenician Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950121_basePhoenicianPurple.svg",
        "hexCode": "#440052",
        "filePath": "./paintimages/gw/Phoenician Purple.svg"
    },
    {
        "name": "Fire Dragon Bright",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951004_layerFireDragonBright.svg",
        "hexCode": "#F4874E",
        "filePath": "./paintimages/gw/Fire Dragon Bright.svg"
    },
    {
        "name": "Hoeth Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951014_layerHoethBlue.svg",
        "hexCode": "#4C78AF",
        "filePath": "./paintimages/gw/Hoeth Blue.svg"
    },
    {
        "name": "Catachan Fleshtone",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950170_baseCatachanFleshtone.svg",
        "hexCode": "#442B25",
        "filePath": "./paintimages/gw/Catachan Fleshtone.svg"
    },
    {
        "name": "Stegadon Scale Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950010_baseStegadonScaleGreen.svg",
        "hexCode": "#06455D",
        "filePath": "./paintimages/gw/Stegadon Scale Green.svg"
    },
    {
        "name": "Stormfang",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952025_dryStormfang.svg",
        "hexCode": "#5A7FA3",
        "filePath": "./paintimages/gw/Stormfang.svg"
    },
    {
        "name": "Caledor Sky",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950009_baseCaledorSky.svg",
        "hexCode": "#366699",
        "filePath": "./paintimages/gw/Caledor Sky.svg"
    },
    {
        "name": "Waystone Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956017_technicalWaystoneGreen.svg",
        "hexCode": "#007958",
        "filePath": "./paintimages/gw/Waystone Green.svg"
    },
    {
        "name": "Pallid Wych Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951058_layerPallidWychFlesh.svg",
        "hexCode": "#CACCBB",
        "filePath": "./paintimages/gw/Pallid Wych Flesh.svg"
    },
    {
        "name": "Fulgrim Pink",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951105_layerFulgrimPink.svg",
        "hexCode": "#F3ABCA",
        "filePath": "./paintimages/gw/Fulgrim Pink.svg"
    },
    {
        "name": "Night Lords Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950124_baseNightLordsBlue.svg",
        "hexCode": "#002B5C",
        "filePath": "./paintimages/gw/Night Lords Blue.svg"
    },
    {
        "name": "Kakophoni Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951110_layerKakophoniPurple.svg",
        "hexCode": "#8869AE",
        "filePath": "./paintimages/gw/Kakophoni Purple.svg"
    },
    {
        "name": "Lucius Lilac",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952003_dryLuciusLilac.svg",
        "hexCode": "#B598C9",
        "filePath": "./paintimages/gw/Lucius Lilac.svg"
    },
    {
        "name": "Warpstone Glow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951023_layerWarpstoneGlow.svg",
        "hexCode": "#0F702A",
        "filePath": "./paintimages/gw/Warpstone Glow.svg"
    },
    {
        "name": "Changeling Pink",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952017_dryChangelingPink.svg",
        "hexCode": "#F3ABCA",
        "filePath": "./paintimages/gw/Changeling Pink.svg"
    },
    {
        "name": "Thunderhawk Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952011_dryThunderhawkBlue.svg",
        "hexCode": "#396A70",
        "filePath": "./paintimages/gw/Thunderhawk Blue.svg"
    },
    {
        "name": "Baneblade Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951048_layerBanebladeBrown.svg",
        "hexCode": "#8F7C68",
        "filePath": "./paintimages/gw/Baneblade Brown.svg"
    },
    {
        "name": "Rakarth Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950027_baseRakarthFlesh.svg",
        "hexCode": "#9C998D",
        "filePath": "./paintimages/gw/Rakarth Flesh.svg"
    },
    {
        "name": "Abaddon Black",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950025_baseAbaddonBlack.svg",
        "hexCode": "#000000",
        "filePath": "./paintimages/gw/Abaddon Black.svg"
    },
    {
        "name": "Dorn Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951104_layerDornYellow.svg",
        "hexCode": "#FFF55A",
        "filePath": "./paintimages/gw/Dorn Yellow.svg"
    },
    {
        "name": "Squig Orange",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951008_layerSquigOrange.svg",
        "hexCode": "#A74D42",
        "filePath": "./paintimages/gw/Squig Orange.svg"
    },
    {
        "name": "Ahriman Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951084_layerAhrimanBlue.svg",
        "hexCode": "#00708A",
        "filePath": "./paintimages/gw/Ahriman Blue.svg"
    },
    {
        "name": "Deathworld Forest",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950015_baseDeathworldForest.svg",
        "hexCode": "#556229",
        "filePath": "./paintimages/gw/Deathworld Forest.svg"
    },
    {
        "name": "Ulthuan Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951056_layerUlthuanGrey.svg",
        "hexCode": "#C4DDD5",
        "filePath": "./paintimages/gw/Ulthuan Grey.svg"
    },
    {
        "name": "Waaagh! Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950013_baseWaaaghFlesh.svg",
        "hexCode": "#0B3B36",
        "filePath": "./paintimages/gw/Waaagh! Flesh.svg"
    },
    {
        "name": "Ryza Rust",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952018_dryRyzaRust.svg",
        "hexCode": "#F16C23",
        "filePath": "./paintimages/gw/Ryza Rust.svg"
    },
    {
        "name": "Sycorax Bronze",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951064_layerSycoraxBronze.svg",
        "hexCode": "#59322D",
        "filePath": "./paintimages/gw/Sycorax Bronze.svg"
    },
    {
        "name": "Screaming Bell",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950030_baseScreamingBell.svg",
        "hexCode": "#642F1F",
        "filePath": "./paintimages/gw/Screaming Bell.svg"
    },
    {
        "name": "Ironbreaker",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951059_layerIronbreaker.svg",
        "hexCode": "#414141",
        "filePath": "./paintimages/gw/Ironbreaker.svg"
    },
    {
        "name": "Yriel Yellow",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951001_layerYrielYellow.svg",
        "hexCode": "#FFD900",
        "filePath": "./paintimages/gw/Yriel Yellow.svg"
    },
    {
        "name": "Imrik Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952024_dryImrikBlue.svg",
        "hexCode": "#208ABF",
        "filePath": "./paintimages/gw/Imrik Blue.svg"
    },
    {
        "name": "Bestigor Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951038_layerBestigorFlesh.svg",
        "hexCode": "#D08951",
        "filePath": "./paintimages/gw/Bestigor Flesh.svg"
    },
    {
        "name": "Tuskgor Fur",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951046_layerTuskgorFur.svg",
        "hexCode": "#863231",
        "filePath": "./paintimages/gw/Tuskgor Fur.svg"
    },
    {
        "name": "Khorne Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950004_baseKhorneRed.svg",
        "hexCode": "#650001",
        "filePath": "./paintimages/gw/Khorne Red.svg"
    },
    {
        "name": "Nocturne Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950125_baseNocturneGreen.svg",
        "hexCode": "#162A29",
        "filePath": "./paintimages/gw/Nocturne Green.svg"
    },
    {
        "name": "Genestealer Purple",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951010_layerGenestealerPurple.svg",
        "hexCode": "#7658A5",
        "filePath": "./paintimages/gw/Genestealer Purple.svg"
    },
    {
        "name": "Praxeti White",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952004_dryPraxetiWhite.svg",
        "hexCode": "#FFFFFF",
        "filePath": "./paintimages/gw/Praxeti White.svg"
    },
    {
        "name": "Kantor Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950007_baseKantorBlue.svg",
        "hexCode": "#02134E",
        "filePath": "./paintimages/gw/Kantor Blue.svg"
    },
    {
        "name": "Tyrant Skull",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952034_dryTyrantSkull.svg",
        "hexCode": "#C8C483",
        "filePath": "./paintimages/gw/Tyrant Skull.svg"
    },
    {
        "name": "Sigmarite",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952032_drySigmarite.svg",
        "hexCode": "#C6863A",
        "filePath": "./paintimages/gw/Sigmarite.svg"
    },
    {
        "name": "Word Bearers Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951115_layerWordBearersRed.svg",
        "hexCode": "#620104",
        "filePath": "./paintimages/gw/Word Bearers Red.svg"
    },
    {
        "name": "Leadbelcher",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950028_baseLeadbelcher.svg",
        "hexCode": "#151E24",
        "filePath": "./paintimages/gw/Leadbelcher.svg"
    },
    {
        "name": "Wazdakka Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951007_layerWazdakkaRed.svg",
        "hexCode": "#880804",
        "filePath": "./paintimages/gw/Wazdakka Red.svg"
    },
    {
        "name": "Barak-Nar Burgundy",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950169_baseBarakNarBurgundy.svg",
        "hexCode": "#451636",
        "filePath": "./paintimages/gw/Barak-Nar Burgundy.svg"
    },
    {
        "name": "Stormvermin Fur",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951055_layerStormverminFur.svg",
        "hexCode": "#6D655F",
        "filePath": "./paintimages/gw/Stormvermin Fur.svg"
    },
    {
        "name": "Elysian Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951030_layerElysianGreen.svg",
        "hexCode": "#6B8C37",
        "filePath": "./paintimages/gw/Elysian Green.svg"
    },
    {
        "name": "Thousand Sons Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950071_baseThousandSonsBlue.svg",
        "hexCode": "#00506F",
        "filePath": "./paintimages/gw/Thousand Sons Blue.svg"
    },
    {
        "name": "Doombull Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951045_layerDoombullBrown.svg",
        "hexCode": "#570003",
        "filePath": "./paintimages/gw/Doombull Brown.svg"
    },
    {
        "name": "Skarsnik Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951026_layerSkarsnikGreen.svg",
        "hexCode": "#588F6B",
        "filePath": "./paintimages/gw/Skarsnik Green.svg"
    },
    {
        "name": "Necron Compound",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952013_dryNecronCompound.svg",
        "hexCode": "#9DA3A7",
        "filePath": "./paintimages/gw/Necron Compound.svg"
    },
    {
        "name": "Evil Sunz Scarlet",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951005_layerEvilSunzScarlet.svg",
        "hexCode": "#C01411",
        "filePath": "./paintimages/gw/Evil Sunz Scarlet.svg"
    },
    {
        "name": "Eshin Grey",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951051_layerEshinGrey.svg",
        "hexCode": "#484B4E",
        "filePath": "./paintimages/gw/Eshin Grey.svg"
    },
    {
        "name": "Krieg Khaki",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951107_layerKriegKhaki.svg",
        "hexCode": "#BCBB7E",
        "filePath": "./paintimages/gw/Krieg Khaki.svg"
    },
    {
        "name": "Ratskin Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950019_baseRatskinFlesh.svg",
        "hexCode": "#A86648",
        "filePath": "./paintimages/gw/Ratskin Flesh.svg"
    },
    {
        "name": "Nihilakh Oxide",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189956006_technicalNihilakhOxide.svg",
        "hexCode": "#66B39A",
        "filePath": "./paintimages/gw/Nihilakh Oxide.svg"
    },
    {
        "name": "Macragge Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950008_baseMacraggeBlue.svg",
        "hexCode": "#0F3D7C",
        "filePath": "./paintimages/gw/Macragge Blue.svg"
    },
    {
        "name": "Lupercal Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950127_baseLupercalGreen.svg",
        "hexCode": "#002C2B",
        "filePath": "./paintimages/gw/Lupercal Green.svg"
    },
    {
        "name": "Sons of Horus Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951111_layerSonsOfHorusGreen.svg",
        "hexCode": "#00545E",
        "filePath": "./paintimages/gw/Sons of Horus Green.svg"
    },
    {
        "name": "Kabalite Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951021_layerKabaliteGreen.svg",
        "hexCode": "#008962",
        "filePath": "./paintimages/gw/Kabalite Green.svg"
    },
    {
        "name": "Mephiston Red",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950003_baseMephistonRed.svg",
        "hexCode": "#960C09",
        "filePath": "./paintimages/gw/Mephiston Red.svg"
    },
    {
        "name": "Warboss Green",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951025_layerWarbossGreen.svg",
        "hexCode": "#317E57",
        "filePath": "./paintimages/gw/Warboss Green.svg"
    },
    {
        "name": "Deathclaw Brown",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951041_layerDeathclawBrown.svg",
        "hexCode": "#AF634F",
        "filePath": "./paintimages/gw/Deathclaw Brown.svg"
    },
    {
        "name": "Flayed One Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951074_layerFlayedOneFlesh.svg",
        "hexCode": "#EEC483",
        "filePath": "./paintimages/gw/Flayed One Flesh.svg"
    },
    {
        "name": "Balthasar Gold",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189950130_baseBalthasarGold.svg",
        "hexCode": "#1D0F07",
        "filePath": "./paintimages/gw/Balthasar Gold.svg"
    },
    {
        "name": "Runefang Steel",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951060_layerRunefangSteel.svg",
        "hexCode": "#797F82",
        "filePath": "./paintimages/gw/Runefang Steel.svg"
    },
    {
        "name": "Temple Guard Blue",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189951020_layerTempleGuardBlue.svg",
        "hexCode": "#",
        "filePath": "./paintimages/gw/Temple Guard Blue.svg"
    },
    {
        "name": "Kindleflame",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952002_dryKindleflame.svg",
        "hexCode": "#F69C82",
        "filePath": "./paintimages/gw/Kindleflame.svg"
    },
    {
        "name": "Eldar Flesh",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952009_dryEldarFlesh.svg",
        "hexCode": "#E8C07F",
        "filePath": "./paintimages/gw/Eldar Flesh.svg"
    },
    {
        "name": "Wrack White",
        "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189952020_dryWrackWhite.svg",
        "hexCode": "#D3D0CF",
        "filePath": "./paintimages/gw/Wrack White.svg"
    }
]
.map(d => {

    d.rgb =  {
        r: parseInt(d.hexCode.slice(1, 3), 16),
        g: parseInt(d.hexCode.slice(3, 5), 16),
        b: parseInt(d.hexCode.slice(5), 16)
    };
    
    return d;
})


export default rawData;