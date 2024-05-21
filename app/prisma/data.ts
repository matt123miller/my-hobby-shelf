/* eslint-disable import/no-named-default */
import { parseColourInfo } from "utils/colors";
import type { ExtendedPaint } from "../src/types/index";

// you could probably precompute all the closest colours....
// Or presort the array by hue, saturation, lightness, add a sort field for each
// and then the DB can search those values

// @ts-expect-error I just haven't finished creating the data yet
const _citadelPaints: ExtendedPaint[] = [
  {
    name: "Nuln Oil",
    hexCode: "#101010",
  },
  {
    name: "Agrax Earthshade",
    hexCode: "#2D190C",
  },
  {
    name: "Phoenician Purple",
    hexCode: "#440052",
  },
  {
    name: "Kakophoni Purple",
    hexCode: "#8869AE",
  },
  {
    name: "Martian Ironearth",
    hexCode: "#CF705D",
  },
  {
    name: "Reikland Fleshshade Gloss",
    hexCode: "#311908",
  },
  {
    name: "Kantor Blue",
    hexCode: "#02134E",
  },
  {
    name: "Fyreslayer Flesh",
    hexCode: "#BD7866",
  },
  {
    name: "Phalanx Yellow",
    hexCode: "#FFE200",
  },
  {
    name: "Air Caste Thinner",
    hexCode: "#292929",
  },
  {
    name: "Balor Brown",
    hexCode: "#875408",
  },
  {
    name: "Temple Guard Blue",
    hexCode: "#239489",
  },
  {
    name: "Tau Light Ochre",
    hexCode: "#BC6B10",
  },
  {
    name: "Sons of Horus Green",
    hexCode: "#00545E",
  },
  {
    name: "Valhallan Blizzard",
    hexCode: "#E1E1E1",
  },
  {
    name: "Averland Sunset",
    hexCode: "#FBB81C",
  },
  {
    name: "Iyanden Yellow",
    hexCode: "#FBC827",
  },
  {
    name: "Fenrisian Grey",
    hexCode: "#6D94B3",
  },
  {
    name: "Gore-Grunta Fur",
    hexCode: "#8F4001",
  },
  {
    name: "Chemos Purple",
    hexCode: "#4F356C",
  },
  {
    name: "Khorne Red",
    hexCode: "#650001",
  },
  {
    name: "Mortarion Green Clear",
    hexCode: "#00832B",
  },
  {
    name: "Space Wolves Grey",
    hexCode: "#8FADC8",
  },
  {
    name: "Basilicanum Grey",
    hexCode: "#989897",
  },
  {
    name: "Word Bearers Red",
    hexCode: "#620104",
  },
  {
    name: "Guilliman Flesh",
    hexCode: "#D1A194",
  },
  {
    name: "Tuskgor Fur",
    hexCode: "#863231",
  },
  {
    name: "Nocturne Green",
    hexCode: "#162A29",
  },
  {
    name: "Lupercal Green",
    hexCode: "#002C2B",
  },
  {
    name: "Angron Red Clear",
    hexCode: "#E21823",
  },
  {
    name: "Typhon Ash",
    hexCode: "#E4D8C1",
  },
  {
    name: "Mechanicus Standard Grey",
    hexCode: "#39484A",
  },
  {
    name: "White Scar",
    hexCode: "#FFFFFF",
  },
  {
    name: "Skeleton Horde",
    hexCode: "#EBE2C2",
  },
  {
    name: "Gal Vorbak Red",
    hexCode: "#4B213C",
  },
  {
    name: "Sigismund Yellow Clear",
    hexCode: "#FFE32F",
  },
  {
    name: "Agrax Earthshade Gloss",
    hexCode: "#2D190C",
  },

  {
    name: "Caledor Sky",
    hexCode: "#366699",
  },
  {
    name: "Caliban Green",
    hexCode: "#003D15",
  },
  {
    name: "Nazdreg Yellow",
    hexCode: "#D99A00",
  },
  {
    name: "Evil Sunz Scarlet",
    hexCode: "#C01411",
  },
  {
    name: "Ulthuan Grey",
    hexCode: "#C4DDD5",
  },
  {
    name: "Ork Flesh",
    hexCode: "#00832B",
  },
  {
    name: "Carroburg Crimson",
    hexCode: "#310808",
  },
  {
    name: "Terradon Turquoise",
    hexCode: "#008DA5",
  },
  {
    name: "Biel-Tan Green",
    hexCode: "#132E21",
  },
  {
    name: "Leviadon Blue",
    hexCode: "#002D59",
  },
  {
    name: "Death Korps Drab",
    hexCode: "#3D4539",
  },
  {
    name: "Akhelian Green",
    hexCode: "#007B9B",
  },
  {
    name: "Baneblade Brown",
    hexCode: "#8F7C68",
  },
  {
    name: "Mordant Earth",
    hexCode: "#171314",
  },
  {
    name: "Magos Purple",
    hexCode: "#C2A7C3",
  },
  {
    name: "Flash Gitz Yellow",
    hexCode: "#FFF300",
  },
  {
    name: "Relictor Gold",
    hexCode: "#886625",
  },
  {
    name: "Astrogranite",
    hexCode: "#9D9D9D",
  },
  {
    name: "Balthasar Gold",
    hexCode: "#1D0F07",
  },
  {
    name: "Shyish Purple",
    hexCode: "#573F6A",
  },
  {
    name: "Aggaros Dunes",
    hexCode: "#D0BF6D",
  },
  {
    name: "Castellax Bronze",
    hexCode: "#3D0700",
  },
  {
    name: "Cygor Brown",
    hexCode: "#754A47",
  },
  {
    name: "Pyroclast Orange Clear",
    hexCode: "#ED8022",
  },
  {
    name: "Karak Stone",
    hexCode: "#B7945C",
  },
  {
    name: "Administratum Grey",
    hexCode: "#8F9690",
  },
  {
    name: "Coelia Greenshade",
    hexCode: "#113431",
  },
  {
    name: "Nuln Oil Gloss",
    hexCode: "#101010",
  },
  {
    name: "Ironbreaker",
    hexCode: "#414141",
  },
  {
    name: "Black Templar",
    hexCode: "#6A6A69",
  },
  {
    name: "Eidolon Purple Clear",
    hexCode: "#7D4D99",
  },
  {
    name: "Casandora Yellow",
    hexCode: "#E78035",
  },
  {
    name: "Ultramarines Blue",
    hexCode: "#294F86",
  },
  {
    name: "Runefang Steel",
    hexCode: "#797F82",
  },
  {
    name: "Kislev Flesh",
    hexCode: "#D1A570",
  },
  {
    name: "Warboss Green",
    hexCode: "#317E57",
  },
  {
    name: "Wyldwood",
    hexCode: "#6A504B",
  },
  {
    name: "Zandri Dust",
    hexCode: "#988E56",
  },
  {
    name: "Martian Ironcrust",
    hexCode: "#CF705D",
  },
  {
    name: "Mournfang Brown",
    hexCode: "#490F06",
  },
  {
    name: "Creed Camo",
    hexCode: "#5D9272",
  },
  {
    name: "Castellan Green",
    hexCode: "#264715",
  },
  {
    name: "Tesseract Glow",
    hexCode: "#49ad33",
  },
  {
    name: "Gryph-Hound Orange",
    hexCode: "#E96134",
  },
  {
    name: "Darkoath Flesh",
    hexCode: "#D89987",
  },
  {
    name: "Agrellan Earth",
    hexCode: "#B39E80",
  },
  {
    name: "Militarum Green",
    hexCode: "#989C4D",
  },
  {
    name: "Dark Angels Green",
    hexCode: "#004E45",
  },
  {
    name: "Reikland Fleshshade",
    hexCode: "#311908",
  },
  {
    name: "Drakenhof Nightshade",
    hexCode: "#0A131B",
  },
  {
    name: "Calgar Blue",
    hexCode: "#2A497F",
  },
  {
    name: "The Fang",
    hexCode: "#405B71",
  },
  {
    name: "Armageddon Dust",
    hexCode: "#E8D36F",
  },
  {
    name: "Flesh Tearers Red",
    hexCode: "#880E0B",
  },

  {
    name: "Terminatus Stone",
    hexCode: "#C8B79D",
  },
  {
    name: "Athonian Camoshade",
    hexCode: "#1C1C10",
  },
  {
    name: "Vulkan Green",
    hexCode: "#223C2E",
  },
  {
    name: "Russ Grey",
    hexCode: "#507085",
  },
  {
    name: "Genestealer Purple",
    hexCode: "#7658A5",
  },
  {
    name: "Druchii Violet",
    hexCode: "#250B27",
  },
  {
    name: "Apothecary White",
    hexCode: "#F6FBFF",
  },
  {
    name: "Ogryn Camo",
    hexCode: "#96A648",
  },
  {
    name: "Stirland Mud",
    hexCode: "#70490D",
  },
  {
    name: "Deathworld Forest",
    hexCode: "#556229",
  },
  {
    name: "Lothern Blue",
    hexCode: "#2C9BCC",
  },
  {
    name: "Tallarn Sand",
    hexCode: "#A07409",
  },
  {
    name: "Macragge Blue",
    hexCode: "#0F3D7C",
  },

  {
    name: "Troll Slayer Orange",
    hexCode: "#F16C23",
  },
  {
    name: "Armageddon Dunes",
    hexCode: "#E8D36F",
  },
  {
    name: "Mephiston Red",
    hexCode: "#960C09",
  },
  {
    name: "Deathshroud Clear",
    hexCode: "#1C1C1B",
  },
  {
    name: "Cryptek Armourshade Gloss",
    hexCode: "#532724",
  },
  {
    name: "Warp Lightning",
    hexCode: "#00964E",
  },
  {
    name: "Elysian Green",
    hexCode: "#6B8C37",
  },
  {
    name: "Stirland Battlemire",
    hexCode: "#70490D",
  },
  {
    name: "Agrellan Badland",
    hexCode: "#B39E80",
  },
  {
    name: "Corvus Black",
    hexCode: "#171314",
  },
  {
    name: "Calth Blue Clear",
    hexCode: "#0087D1",
  },
  {
    name: "Seraphim Sepia",
    hexCode: "#2E1F08",
  },
  {
    name: "Talassar Blue",
    hexCode: "#0073C2",
  },
  {
    name: "Aethermatic Blue",
    hexCode: "#82BCC8",
  },
  {
    name: "Ushabti Bone",
    hexCode: "#ABA173",
  },
  {
    name: "Grey Knights Steel",
    hexCode: "#465863",
  },
  {
    name: "Valdor Gold",
    hexCode: "#6D2711",
  },
  {
    name: "Dryad Bark",
    hexCode: "#2B2A24",
  },
  {
    name: "Volupus Pink",
    hexCode: "#8F0243",
  },
  {
    name: "Sybarite Green",
    hexCode: "#17A166",
  },
  {
    name: "Snakebite Leather",
    hexCode: "#B26B0C",
  },
  {
    name: "XV-88",
    hexCode: "#6C4811",
  },
  {
    name: "Straken Green",
    hexCode: "#597F1C",
  },
  {
    name: "Plaguebearer Flesh",
    hexCode: "#C8CEA3",
  },
  {
    name: "Abaddon Black",
    hexCode: "#000000",
  },
  {
    name: "Astrogranite Debris",
    hexCode: "#9D9D9D",
  },
  {
    name: "Blood Angels Red",
    hexCode: "#C11519",
  },
  {
    name: "Moot Green",
    hexCode: "#3DAF44",
  },
  {
    name: "Dawnstone",
    hexCode: "#697068",
  },
  {
    name: "Thallax Gold",
    hexCode: "#722A0B",
  },
  {
    name: "Night Lords Blue",
    hexCode: "#002B5C",
  },
  {
    name: "Gryph-Charger Grey",
    hexCode: "#AAC9DA",
  },
  {
    name: "Fuegan Orange",
    hexCode: "#6C1C03",
  },
  {
    name: "Deathclaw Brown",
    hexCode: "#AF634F",
  },
  {
    name: "Steel Legion Drab",
    hexCode: "#584E2D",
  },
  {
    name: "Canoptek Alloy",
    hexCode: "#967F7A",
  },
  {
    name: "Skullcrusher Brass",
    hexCode: "#C38841",
  },
  {
    name: "Runelord Brass",
    hexCode: "#190E07",
  },
  {
    name: "Retributor Armour",
    hexCode: "#89571D",
  },
  {
    name: "Liberator Gold",
    hexCode: "#886625",
  },
  {
    name: "Stormhost Silver",
    hexCode: "#9DA3A7",
  },
  {
    name: "Fulgurite Copper",
    hexCode: "#6D2711",
  },
  {
    name: "Loren Forest",
    hexCode: "#486C25",
  },
  {
    name: "Naggaroth Night",
    hexCode: "#3B2B50",
  },
  {
    name: "White Scar",
    hexCode: "#FFFFFF",
  },
  {
    name: "Averland Sunset",
    hexCode: "#FBB81C",
  },
  {
    name: "Skrag Brown",
    hexCode: "#8B4806",
  },
  {
    name: "Lugganath Orange",
    hexCode: "#F69B82",
  },
  {
    name: "Altdorf Guard Blue",
    hexCode: "#2D4696",
  },
  {
    name: "Pink Horror",
    hexCode: "#8E2757",
  },
  {
    name: "Hexos Palesun",
    hexCode: "#FFF55A",
  },
  {
    name: "Dryad Bark",
    hexCode: "#2B2A24",
  },
  {
    name: "Troll Slayer Orange",
    hexCode: "#F16C23",
  },
  {
    name: "Golden Griffon",
    hexCode: "#886625",
  },
  {
    name: "Grey Seer",
    hexCode: "#A2A5A7",
  },
  {
    name: "Warpfiend Grey",
    hexCode: "#66656E",
  },
  {
    name: "Grey Knights Steel",
    hexCode: "#465863",
  },
  {
    name: "Administratum Grey",
    hexCode: "#989C94",
  },
  {
    name: "Dawnstone",
    hexCode: "#697068",
  },
  {
    name: "Vulkan Green",
    hexCode: "#223C2E",
  },
  {
    name: "Sylvaneth Bark",
    hexCode: "#4E483B",
  },
  {
    name: "Nurgling Green",
    hexCode: "#7E975E",
  },
  {
    name: "Soulstone Blue",
    hexCode: "#01458F",
  },
  {
    name: "Cadian Fleshtone",
    hexCode: "#C47652",
  },
  {
    name: "Gorthor Brown",
    hexCode: "#5F463F",
  },
  {
    name: "Phalanx Yellow",
    hexCode: "#FFE200",
  },
  {
    name: "Ogryn Camo",
    hexCode: "#96A648",
  },
  {
    name: "Skavenblight Dinge",
    hexCode: "#45413B",
  },
  {
    name: "Teclis Blue",
    hexCode: "#3877BF",
  },
  {
    name: "Jokaero Orange",
    hexCode: "#ED3814",
  },
  {
    name: "Hoeth Blue",
    hexCode: "#4C78AF",
  },
  {
    name: "Morghast Bone",
    hexCode: "#C0A973",
  },
  {
    name: "Mechanicus Standard Grey",
    hexCode: "#39484A",
  },
  {
    name: "Castellan Green",
    hexCode: "#264715",
  },
  {
    name: "Dechala Lilac",
    hexCode: "#B598C9",
  },
  {
    name: "Iron Hands Steel",
    hexCode: "#44423F",
  },
  {
    name: "Sotek Green",
    hexCode: "#0B6371",
  },
  {
    name: "Alaitoc Blue",
    hexCode: "#2F4F85",
  },
  {
    name: "Corax White",
    hexCode: "#FFFFFF",
  },
  {
    name: "Fenrisian Grey",
    hexCode: "#6D94B3",
  },
  {
    name: "Zamesi Desert",
    hexCode: "#D89D1B",
  },
  {
    name: "Karak Stone",
    hexCode: "#B7945C",
  },
  {
    name: "Zandri Dust",
    hexCode: "#988E56",
  },
  {
    name: "Baharroth Blue",
    hexCode: "#54BDCA",
  },
  {
    name: "Flash Gitz Yellow",
    hexCode: "#FFF300",
  },
  {
    name: "Astorath Red",
    hexCode: "#A9311E",
  },
  {
    name: "Niblet Green",
    hexCode: "#378C35",
  },
  {
    name: "Skink Blue",
    hexCode: "#54BDCA",
  },
  {
    name: "Nurgling Green",
    hexCode: "#7E975E",
  },
  {
    name: "Spiritstone Red",
    hexCode: "#DA2308",
  },
  {
    name: "Longbeard Grey",
    hexCode: "#DBDCC6",
  },
  {
    name: "Blue Horror",
    hexCode: "#9EB5CE",
  },
  {
    name: "Calgar Blue",
    hexCode: "#2A497F",
  },
  {
    name: "Straken Green",
    hexCode: "#597F1C",
  },
  {
    name: "Moot Green",
    hexCode: "#3DAF44",
  },
  {
    name: "Ungor Flesh",
    hexCode: "#D1A560",
  },
  {
    name: "Gauss Blaster Green",
    hexCode: "#7FC1A5",
  },
  {
    name: "Balor Brown",
    hexCode: "#875408",
  },
  {
    name: "Gal Vorbak Red",
    hexCode: "#4B213C",
  },
  {
    name: "Ushabti Bone",
    hexCode: "#ABA173",
  },
  {
    name: "Screaming Skull",
    hexCode: "#B9C099",
  },
  {
    name: "Hashut Copper",
    hexCode: "#492109",
  },
  {
    name: "Etherium Blue",
    hexCode: "#9EB5CE",
  },
  {
    name: "Bugman's Glow",
    hexCode: "#804C43",
  },
  {
    name: "Tallarn Sand",
    hexCode: "#A07409",
  },
  {
    name: "Gehenna's Gold",
    hexCode: "#722A0B",
  },
  {
    name: "Incubi Darkness",
    hexCode: "#082E32",
  },
  {
    name: "Caliban Green",
    hexCode: "#003D15",
  },
  {
    name: "Golgfag Brown",
    hexCode: "#8F502A",
  },
  {
    name: "Tau Light Ochre",
    hexCode: "#BC6B10",
  },
  {
    name: "Wild Rider Red",
    hexCode: "#E82E1B",
  },
  {
    name: "Lothern Blue",
    hexCode: "#2C9BCC",
  },
  {
    name: "Wraithbone",
    hexCode: "#DBD1B2",
  },
  {
    name: "Corvus Black",
    hexCode: "#171314",
  },
  {
    name: "Nurgles Rot",
    hexCode: "#9D8B16",
  },
  {
    name: "Celestra Grey",
    hexCode: "#8BA3A3",
  },
  {
    name: "Underhive Ash",
    hexCode: "#BCBB7E",
  },
  {
    name: "Russ Grey",
    hexCode: "#507085",
  },
  {
    name: "Deepkin Flesh",
    hexCode: "#A9B79F",
  },
  {
    name: "Death Korps Drab",
    hexCode: "#3D4539",
  },
  {
    name: "Typhus Corrosion",
    hexCode: "#373A22",
  },
  {
    name: "Slaanesh Grey",
    hexCode: "#8B8893",
  },
  {
    name: "Screamer Pink",
    hexCode: "#7A0E44",
  },
  {
    name: "Thunderhawk Blue",
    hexCode: "#396A70",
  },
  {
    name: "Brass Scorpion",
    hexCode: "#3D0700",
  },
  {
    name: "Rhinox Hide",
    hexCode: "#462F30",
  },
  {
    name: "Sybarite Green",
    hexCode: "#17A166",
  },
  {
    name: "Knight-Questor Flesh",
    hexCode: "#996563",
  },
  {
    name: "Slaanesh Grey",
    hexCode: "#8B8893",
  },
  {
    name: "XV-88",
    hexCode: "#6C4811",
  },
  {
    name: "Hellion Green",
    hexCode: "#7FC1A5",
  },
  {
    name: "Chronus Blue",
    hexCode: "#4B90CF",
  },
  {
    name: "Xereus Purple",
    hexCode: "#47125A",
  },
  {
    name: "Emperor's Children",
    hexCode: "#B74073",
  },
  {
    name: "Ionrach Skin",
    hexCode: "#97A384",
  },
  {
    name: "Iron Warriors",
    hexCode: "#292725",
  },
  {
    name: "Castellax Bronze",
    hexCode: "#3D0700",
  },
  {
    name: "Dark Reaper",
    hexCode: "#354D4C",
  },
  {
    name: "Daemonette Hide",
    hexCode: "#655F81",
  },
  {
    name: "Warplock Bronze",
    hexCode: "#440808",
  },
  {
    name: "Verminlord Hide",
    hexCode: "#7E3331",
  },
  {
    name: "Mournfang Brown",
    hexCode: "#490F06",
  },
  {
    name: "Steel Legion Drab",
    hexCode: "#584E2D",
  },
  {
    name: "Terminatus Stone",
    hexCode: "#C8B79D",
  },
  {
    name: "Dawnstone",
    hexCode: "#697068",
  },
  {
    name: "Auric Armour Gold",
    hexCode: "#B05A25",
  },
  {
    name: "Bloodreaver Flesh",
    hexCode: "#6A4848",
  },
  {
    name: "Kislev Flesh",
    hexCode: "#D1A570",
  },
  {
    name: "Phoenician Purple",
    hexCode: "#440052",
  },
  {
    name: "Fire Dragon Bright",
    hexCode: "#F4874E",
  },
  {
    name: "Hoeth Blue",
    hexCode: "#4C78AF",
  },
  {
    name: "Catachan Fleshtone",
    hexCode: "#442B25",
  },
  {
    name: "Stegadon Scale Green",
    hexCode: "#06455D",
  },
  {
    name: "Stormfang",
    hexCode: "#5A7FA3",
  },
  {
    name: "Caledor Sky",
    hexCode: "#366699",
  },
  {
    name: "Waystone Green",
    hexCode: "#007958",
  },
  {
    name: "Pallid Wych Flesh",
    hexCode: "#CACCBB",
  },
  {
    name: "Fulgrim Pink",
    hexCode: "#F3ABCA",
  },
  {
    name: "Night Lords Blue",
    hexCode: "#002B5C",
  },
  {
    name: "Kakophoni Purple",
    hexCode: "#8869AE",
  },
  {
    name: "Lucius Lilac",
    hexCode: "#B598C9",
  },
  {
    name: "Warpstone Glow",
    hexCode: "#0F702A",
  },
  {
    name: "Changeling Pink",
    hexCode: "#F3ABCA",
  },
  {
    name: "Thunderhawk Blue",
    hexCode: "#396A70",
  },
  {
    name: "Baneblade Brown",
    hexCode: "#8F7C68",
  },
  {
    name: "Rakarth Flesh",
    hexCode: "#9C998D",
  },
  {
    name: "Abaddon Black",
    hexCode: "#000000",
  },
  {
    name: "Dorn Yellow",
    hexCode: "#FFF55A",
  },
  {
    name: "Squig Orange",
    hexCode: "#A74D42",
  },
  {
    name: "Ahriman Blue",
    hexCode: "#00708A",
  },
  {
    name: "Deathworld Forest",
    hexCode: "#556229",
  },
  {
    name: "Ulthuan Grey",
    hexCode: "#C4DDD5",
  },
  {
    name: "Waaagh! Flesh",
    hexCode: "#0B3B36",
  },
  {
    name: "Ryza Rust",
    hexCode: "#F16C23",
  },
  {
    name: "Sycorax Bronze",
    hexCode: "#59322D",
  },
  {
    name: "Screaming Bell",
    hexCode: "#642F1F",
  },
  {
    name: "Ironbreaker",
    hexCode: "#414141",
  },
  {
    name: "Yriel Yellow",
    hexCode: "#FFD900",
  },
  {
    name: "Imrik Blue",
    hexCode: "#208ABF",
  },
  {
    name: "Bestigor Flesh",
    hexCode: "#D08951",
  },
  {
    name: "Tuskgor Fur",
    hexCode: "#863231",
  },
  {
    name: "Khorne Red",
    hexCode: "#650001",
  },
  {
    name: "Nocturne Green",
    hexCode: "#162A29",
  },
  {
    name: "Genestealer Purple",
    hexCode: "#7658A5",
  },
  {
    name: "Praxeti White",
    hexCode: "#FFFFFF",
  },
  {
    name: "Kantor Blue",
    hexCode: "#02134E",
  },
  {
    name: "Tyrant Skull",
    hexCode: "#C8C483",
  },
  {
    name: "Sigmarite",
    hexCode: "#C6863A",
  },
  {
    name: "Word Bearers Red",
    hexCode: "#620104",
  },
  {
    name: "Leadbelcher",
    hexCode: "#151E24",
  },
  {
    name: "Wazdakka Red",
    hexCode: "#880804",
  },
  {
    name: "Barak-Nar Burgundy",
    hexCode: "#451636",
  },
  {
    name: "Stormvermin Fur",
    hexCode: "#6D655F",
  },
  {
    name: "Elysian Green",
    hexCode: "#6B8C37",
  },
  {
    name: "Thousand Sons Blue",
    hexCode: "#00506F",
  },
  {
    name: "Doombull Brown",
    hexCode: "#570003",
  },
  {
    name: "Skarsnik Green",
    hexCode: "#588F6B",
  },
  {
    name: "Necron Compound",
    hexCode: "#9DA3A7",
  },
  {
    name: "Evil Sunz Scarlet",
    hexCode: "#C01411",
  },
  {
    name: "Eshin Grey",
    hexCode: "#484B4E",
  },
  {
    name: "Krieg Khaki",
    hexCode: "#BCBB7E",
  },
  {
    name: "Ratskin Flesh",
    hexCode: "#A86648",
  },
  {
    name: "Nihilakh Oxide",
    hexCode: "#66B39A",
  },
  {
    name: "Macragge Blue",
    hexCode: "#0F3D7C",
  },
  {
    name: "Lupercal Green",
    hexCode: "#002C2B",
  },
  {
    name: "Sons of Horus Green",
    hexCode: "#00545E",
  },
  {
    name: "Kabalite Green",
    hexCode: "#008962",
  },
  {
    name: "Mephiston Red",
    hexCode: "#960C09",
  },
  {
    name: "Warboss Green",
    hexCode: "#317E57",
  },
  {
    name: "Deathclaw Brown",
    hexCode: "#AF634F",
  },
  {
    name: "Flayed One Flesh",
    hexCode: "#EEC483",
  },
  {
    name: "Balthasar Gold",
    hexCode: "#1D0F07",
  },
  {
    name: "Runefang Steel",
    hexCode: "#797F82",
  },
  {
    name: "Kindleflame",
    hexCode: "#F69C82",
  },
  {
    name: "Eldar Flesh",
    hexCode: "#E8C07F",
  },
  {
    name: "Wrack White",
    hexCode: "#D3D0CF",
  },
]
  // @ts-expect-error I just haven't finished creating the data yet
  .reduce((accumulator: ExtendedPaint[], paint: ExtendedPaint) => {
    // Remove duplicate paints (via name) and assign a colorjs.io instance to each.

    if (accumulator.find((p) => p.name === paint.name)) {
      return accumulator;
    }

    // Do any extra formatting and parsing before adding to array.

    // Assign a random paint range to each paint.
    // paint.range = ["contrast", "layer", "base"][Math.floor(Math.random() * 3)];

    paint = parseColourInfo(paint);

    accumulator.push(paint);

    return accumulator;
  }, []);

export const allPaints = [..._citadelPaints];
export const citadelPaints = _citadelPaints;
