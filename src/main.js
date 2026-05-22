const GAME_WIDTH = 390;
const GAME_HEIGHT = 844;
const BARRICADE_Y = 640;
const BARRICADE_HP_Y = 682;
const STAGES_PER_MAP = 5;
const TEST_ONE_HIT_KILL = false;
const KILL_REWARD_INTERVAL = 20;

const mapSequence = [
  {
    slug: "forest",
    title: "숲",
    mapKey: "mapForest",
    mapPath: "assets/map-bg.png",
    enemyKey: "enemiesForest",
    enemyPath: "assets/enemies-forest-sheet.png",
  },
  {
    slug: "desert",
    title: "사막",
    mapKey: "mapDesert",
    mapPath: "assets/map-desert.png",
    enemyKey: "enemiesDesert",
    enemyPath: "assets/enemies-desert-sheet.png",
  },
  {
    slug: "jungle",
    title: "정글",
    mapKey: "mapJungle",
    mapPath: "assets/map-jungle.png",
    enemyKey: "enemiesJungle",
    enemyPath: "assets/enemies-jungle-sheet.png",
  },
  {
    slug: "frozen",
    title: "추운지방",
    mapKey: "mapFrozen",
    mapPath: "assets/map-frozen.png",
    enemyKey: "enemiesFrozen",
    enemyPath: "assets/enemies-frozen-sheet.png",
  },
  {
    slug: "lava-dungeon",
    title: "용암던전",
    mapKey: "mapLavaDungeon",
    mapPath: "assets/map-lava-dungeon.png",
    enemyKey: "enemiesLavaDungeon",
    enemyPath: "assets/enemies-lava-dungeon-sheet.png",
  },
  {
    slug: "city-road",
    title: "도로",
    mapKey: "mapCityRoad",
    mapPath: "assets/map-city-road.png",
    enemyKey: "enemiesCityRoad",
    enemyPath: "assets/enemies-city-road-sheet.png",
  },
  {
    slug: "schoolyard",
    title: "학교",
    mapKey: "mapSchoolyard",
    mapPath: "assets/map-schoolyard.png",
    enemyKey: "enemiesSchoolyard",
    enemyPath: "assets/enemies-schoolyard-sheet.png",
  },
  {
    slug: "house-alley",
    title: "주택",
    mapKey: "mapHouseAlley",
    mapPath: "assets/map-house-alley.png",
    enemyKey: "enemiesHouseAlley",
    enemyPath: "assets/enemies-house-alley-sheet.png",
  },
  {
    slug: "apartment-alley",
    title: "아파트",
    mapKey: "mapApartmentAlley",
    mapPath: "assets/map-apartment-alley.png",
    enemyKey: "enemiesApartmentAlley",
    enemyPath: "assets/enemies-apartment-alley-sheet.png",
  },
  {
    slug: "han-river",
    title: "한강",
    mapKey: "mapHanRiver",
    mapPath: "assets/map-han-river.png",
    enemyKey: "enemiesHanRiver",
    enemyPath: "assets/enemies-han-river-sheet.png",
  },
];

const bossDefinitions = {
  forest: { key: "bossForest", path: "assets/boss-forest.png" },
  desert: { key: "bossDesert", path: "assets/boss-desert.png" },
  jungle: { key: "bossJungle", path: "assets/boss-jungle.png" },
  frozen: { key: "bossFrozen", path: "assets/boss-frozen.png" },
  "lava-dungeon": { key: "bossLavaDungeon", path: "assets/boss-lava-dungeon.png" },
  "city-road": { key: "bossCityRoad", path: "assets/boss-city-road.png" },
  schoolyard: { key: "bossSchoolyard", path: "assets/boss-schoolyard.png" },
  "house-alley": { key: "bossHouseAlley", path: "assets/boss-house-alley.png" },
  "apartment-alley": { key: "bossApartmentAlley", path: "assets/boss-apartment-alley.png" },
  "han-river": { key: "bossHanRiver", path: "assets/boss-han-river.png" },
};

const allyDefinitions = [
  {
    id: "desert",
    sheetKey: "allyDesertDust",
    animKey: "ally-desert-dust",
    path: "assets/ally-desert-dust-strip.png",
    unlockMapIndex: 1,
    x: 132,
    y: 732,
    scale: 0.58,
    fireDelay: 620,
    projectileColor: 0xd9b26c,
  },
  {
    id: "jungle",
    sheetKey: "allyJungleWhip",
    animKey: "ally-jungle-whip",
    path: "assets/ally-jungle-whip-strip.png",
    unlockMapIndex: 2,
    x: 240,
    y: 732,
    scale: 0.58,
    fireDelay: 650,
    projectileColor: 0x7bd35b,
  },
  {
    id: "frozen",
    sheetKey: "allyFrozenSnowball",
    animKey: "ally-frozen-snowball",
    path: "assets/ally-frozen-snowball-strip.png",
    unlockMapIndex: 3,
    x: 310,
    y: 732,
    scale: 0.56,
    fireDelay: 700,
    projectileColor: 0xd9f6ff,
  },
  {
    id: "schoolgirl",
    sheetKey: "allySchoolgirlRifle",
    animKey: "ally-schoolgirl-rifle",
    path: "assets/ally-schoolgirl-rifle-strip.png",
    unlockMapIndex: 5,
    x: 145,
    y: 796,
    scale: 0.72,
    fireDelay: 560,
    projectileColor: 0xfff0a8,
  },
  {
    id: "schoolboy",
    sheetKey: "allySchoolboyRifle",
    animKey: "ally-schoolboy-rifle",
    path: "assets/ally-schoolboy-rifle-strip.png",
    unlockMapIndex: 6,
    x: 275,
    y: 796,
    scale: 0.72,
    fireDelay: 420,
    projectileColor: 0xfff0a8,
  },
];

const characterDefinitions = [
  {
    id: "mage",
    name: "마법사",
    sheetKey: "heroCast",
    animKey: "hero-cast",
    faction: "fantasy",
    homeMap: "forest",
    scale: 0.72,
    fireDelay: 430,
    projectileColor: 0xffe189,
    damageRate: 1,
  },
  {
    id: "desert",
    name: "사막",
    sheetKey: "allyDesertDust",
    animKey: "ally-desert-dust",
    faction: "fantasy",
    homeMap: "desert",
    scale: 0.58,
    fireDelay: 620,
    projectileColor: 0xd9b26c,
    damageRate: 0.75,
  },
  {
    id: "jungle",
    name: "정글",
    sheetKey: "allyJungleWhip",
    animKey: "ally-jungle-whip",
    faction: "fantasy",
    homeMap: "jungle",
    scale: 0.58,
    fireDelay: 650,
    projectileColor: 0x7bd35b,
    damageRate: 0.75,
  },
  {
    id: "frozen",
    name: "추운지방",
    sheetKey: "allyFrozenSnowball",
    animKey: "ally-frozen-snowball",
    faction: "fantasy",
    homeMap: "frozen",
    scale: 0.56,
    fireDelay: 700,
    projectileColor: 0xd9f6ff,
    damageRate: 0.75,
  },
  {
    id: "schoolgirl",
    name: "여학생",
    sheetKey: "allySchoolgirlRifle",
    animKey: "ally-schoolgirl-rifle",
    faction: "modern",
    homeMap: "schoolyard",
    scale: 0.72,
    fireDelay: 420,
    projectileColor: 0xfff0a8,
    damageRate: 0.75,
  },
  {
    id: "schoolboy",
    name: "남학생",
    sheetKey: "allySchoolboyRifle",
    animKey: "ally-schoolboy-rifle",
    faction: "modern",
    homeMap: "schoolyard",
    scale: 0.72,
    fireDelay: 560,
    projectileColor: 0xfff0a8,
    damageRate: 0.75,
  },
];

const partySlots = [
  { x: 70, y: 732 },
  { x: 135, y: 732 },
  { x: 200, y: 732 },
  { x: 265, y: 732 },
  { x: 145, y: 796 },
  { x: 275, y: 796 },
];

const fantasyMapOrder = ["forest", "desert", "jungle", "frozen", "lava-dungeon"];
const modernMapOrder = ["schoolyard", "house-alley", "city-road", "apartment-alley", "han-river"];
const fantasyToModernMapOrder = ["city-road", "schoolyard", "house-alley", "apartment-alley", "han-river"];
const visualPartyOrder = ["mage", "desert", "jungle", "frozen", "schoolgirl", "schoolboy"];

const vfxDefinitions = {
  mage: {
    key: "mageVfx",
    path: "assets/mage-vfx-sheet.png",
    basicScale: 0.2,
    trailColor: 0xffe189,
    skillNames: ["파이어볼", "메테오"],
  },
  desert: {
    key: "desertVfx",
    path: "assets/desert-vfx-sheet.png",
    basicScale: 0.2,
    trailColor: 0xd9b26c,
    skillNames: ["모래폭풍", "모래대폭풍"],
  },
  jungle: {
    key: "jungleVfx",
    path: "assets/jungle-vfx-sheet.png",
    basicScale: 0.22,
    trailColor: 0x7bd35b,
    skillNames: ["덩굴속박", "산성비"],
  },
  frozen: {
    key: "frozenVfx",
    path: "assets/frozen-vfx-sheet.png",
    basicScale: 0.2,
    trailColor: 0xd9f6ff,
    skillNames: ["빙결", "큰눈덩이"],
  },
  schoolgirl: {
    key: "schoolgirlVfx",
    path: "assets/schoolgirl-vfx-sheet.png",
    basicScale: 0.24,
    trailColor: 0xbefaff,
    skillNames: ["유도탄", "광폭레이저"],
  },
  schoolboy: {
    key: "schoolboyVfx",
    path: "assets/schoolboy-vfx-sheet.png",
    basicScale: 0.3,
    trailColor: 0xffb15a,
    skillNames: ["박격포", "공중지원"],
  },
};

const skillConfigs = {
  mage: {
    1: { type: "projectile", cooldown: 5000, scale: 0.34, speed: 500, damageRate: 2.8, blastRadius: 46 },
    2: { type: "meteorStorm", cooldown: 20000, scale: 0.72, damageRate: 5, radius: 96, duration: 820, count: 5, delayStep: 260 },
  },
  desert: {
    1: { type: "projectile", cooldown: 5000, scale: 0.42, speed: 430, damageRate: 2.2, blastRadius: 38, fixedRotation: true },
    2: { type: "lane", cooldown: 20000, scale: 0.56, speed: 300, damageRate: 3.2, blastRadius: 54, count: 5, delayStep: 230 },
  },
  jungle: {
    1: { type: "area", cooldown: 5000, scale: 0.44, damageRate: 1.8, radius: 58, duration: 780, slowMs: 3000 },
    2: { type: "area", cooldown: 20000, scale: 0.58, damageRate: 3.2, radius: 92, duration: 1100 },
  },
  frozen: {
    1: { type: "area", cooldown: 5000, scale: 0.48, damageRate: 1.8, radius: 58, duration: 760, slowMs: 3000 },
    2: { type: "lane", cooldown: 20000, scale: 0.62, speed: 330, damageRate: 3.2, blastRadius: 58, count: 5, delayStep: 260 },
  },
  schoolgirl: {
    1: { type: "spread", cooldown: 5000, scale: 0.24, speed: 720, damageRate: 1.5, blastRadius: 22, count: 3 },
    2: { type: "frenzyLaser", cooldown: 20000, damageRate: 4.2, duration: 3000, beamWidth: 92 },
  },
  schoolboy: {
    1: { type: "area", cooldown: 5000, scale: 0.44, damageRate: 2.4, radius: 70, duration: 760 },
    2: { type: "airSupport", cooldown: 20000, scale: 0.82, damageRate: 4.4, radius: 999, duration: 4200 },
  },
};

const chatterLines = {
  mage: ["마력 흐름이 이상해.", "큰 주문 준비 중.", "틈을 만들겠다.", "균열을 막아야 해.", "조금만 버텨줘."],
  desert: ["모래가 길을 연다.", "시야를 가려볼게.", "뜨거운 바람이 온다.", "뒤는 내가 맡지.", "흔들리지 마."],
  jungle: ["덩굴이 움직인다.", "발을 묶어둘게.", "숲의 숨결이 느껴져.", "가까이 오면 끝이야.", "길을 막아보지."],
  frozen: ["눈덩이 간다.", "잠깐 얼려둘게.", "너무 더운 곳이야.", "차갑게 식혀줄게.", "천천히 오게 만들자."],
  schoolgirl: ["왼쪽 조심해.", "레이저 맞춰볼게.", "도와줘서 고마워.", "탄창 확인했어.", "아직 버틸 수 있어."],
  schoolboy: ["지원 사격 간다.", "뒤쪽은 내가 볼게.", "도와줘, 몰려온다.", "장전 끝났어.", "폭격 준비할게."],
};

const chatterOffsets = {
  mage: { x: 2, y: -48 },
  desert: { x: 2, y: -42 },
  jungle: { x: 2, y: -42 },
  frozen: { x: -10, y: -46 },
  schoolgirl: { x: 0, y: -38 },
  schoolboy: { x: -8, y: -38 },
};

const cutsceneDefinitions = {
  mage: {
    key: "cutsceneMage",
    path: "assets/cutscene-mage.png",
    side: "left",
    title: "마법사",
    line: "균열의 마력이 이 길까지 번졌어. 내가 길을 열 테니, 함께 막아보자.",
  },
  desert: {
    key: "cutsceneDesert",
    path: "assets/cutscene-desert.png",
    side: "right",
    title: "사막 방랑자",
    line: "모래바람을 따라 여기까지 왔다. 이 싸움은 내 세계와도 이어져 있어.",
  },
  jungle: {
    key: "cutsceneJungle",
    path: "assets/cutscene-jungle.png",
    side: "left",
    title: "정글 수호자",
    line: "숲이 균열의 냄새를 기억하고 있다. 덩굴로 적의 발을 묶어주지.",
  },
  frozen: {
    key: "cutsceneFrozen",
    path: "assets/cutscene-frozen.png",
    side: "right",
    title: "설원 수호자",
    line: "차가운 바람이 이상한 길을 보여줬어. 잠깐 얼려두는 건 내가 맡을게.",
  },
  schoolgirl: {
    key: "cutsceneSchoolgirl",
    path: "assets/cutscene-schoolgirl.png",
    side: "left",
    title: "여학생",
    line: "무섭지만 도망치진 않을 거야. 레이저로 길을 뚫어볼게.",
  },
  schoolboy: {
    key: "cutsceneSchoolboy",
    path: "assets/cutscene-schoolboy.png",
    side: "right",
    title: "남학생",
    line: "지원 사격은 내가 맡을게. 몰려오면 한 번에 날려버리자.",
  },
};

const introScenes = [
  {
    bgKey: "mapSchoolyard",
    imageKey: "cutsceneSchoolgirl",
    side: "left",
    title: "현대의 붕괴",
    line: "평범한 운동장 위에 낯선 균열이 열렸다. 사람들은 변했고, 방어선은 하루 만에 무너졌다.",
  },
  {
    bgKey: "mapForest",
    imageKey: "cutsceneMage",
    side: "right",
    title: "판타지 세계의 요청",
    line: "같은 균열은 다른 세계에도 나타났다. 마법사는 두 세계가 함께 무너지기 전에 수비대를 모으기 시작했다.",
  },
  {
    bgKey: "mapCityRoad",
    imageKey: "cutsceneSchoolboy",
    side: "left",
    title: "첫 번째 수비대",
    line: "길은 하나뿐이다. 바리케이트가 부서지기 전에 몰려오는 적을 막아야 한다.",
  },
];

const audioDefinitions = {
  bgmTitle: "assets/sounds/title-bgm.mp3",
  bgmBattle: "assets/sounds/battle-bgm.mp3",
  sfxClick: "assets/sounds/click.mp3",
  sfxHit: "assets/sounds/hit.mp3",
  sfxBarrierHit: "assets/sounds/barrier-hit.mp3",
  sfxAttackMage: "assets/sounds/attack-mage.mp3",
  sfxAttackDesert: "assets/sounds/attack-desert.mp3",
  sfxAttackJungle: "assets/sounds/attack-jungle.mp3",
  sfxAttackFrozen: "assets/sounds/attack-frozen.mp3",
  sfxAttackSchoolgirl: "assets/sounds/attack-schoolgirl-laser.mp3",
  sfxAttackSchoolboy: "assets/sounds/attack-schoolboy.mp3",
  sfxSkillMage1: "assets/sounds/skill-mage-1.mp3",
  sfxSkillMage2: "assets/sounds/skill-mage-2.mp3",
  sfxSkillDesert1: "assets/sounds/skill-desert-1.mp3",
  sfxSkillDesert2: "assets/sounds/skill-desert-2.mp3",
  sfxSkillJungle1: "assets/sounds/skill-jungle-1.mp3",
  sfxSkillJungle2: "assets/sounds/skill-jungle-2.mp3",
  sfxSkillFrozen1: "assets/sounds/skill-frozen-1.mp3",
  sfxSkillFrozen2: "assets/sounds/skill-frozen-2.mp3",
  sfxSkillSchoolgirl1: "assets/sounds/skill-schoolgirl-1.mp3",
  sfxSkillSchoolgirl2: "assets/sounds/skill-schoolgirl-2.mp3",
  sfxSkillSchoolboy1: "assets/sounds/skill-schoolboy-1.mp3",
  sfxSkillSchoolboy2: "assets/sounds/skill-schoolboy-2.mp3",
};

const attackSfxByCharacter = {
  mage: "sfxAttackMage",
  desert: "sfxAttackDesert",
  jungle: "sfxAttackJungle",
  frozen: "sfxAttackFrozen",
  schoolgirl: "sfxAttackSchoolgirl",
  schoolboy: "sfxAttackSchoolboy",
};

const skillSfxByCharacter = {
  mage: { 1: "sfxSkillMage1", 2: "sfxSkillMage2" },
  desert: { 1: "sfxSkillDesert1", 2: "sfxSkillDesert2" },
  jungle: { 1: "sfxSkillJungle1", 2: "sfxSkillJungle2" },
  frozen: { 1: "sfxSkillFrozen1", 2: "sfxSkillFrozen2" },
  schoolgirl: { 1: "sfxSkillSchoolgirl1", 2: "sfxSkillSchoolgirl2" },
  schoolboy: { 1: "sfxSkillSchoolboy1", 2: "sfxSkillSchoolboy2" },
};

const cardPool = [
  {
    title: "화력 강화",
    desc: "총알 피해 +8",
    apply: (scene) => {
      scene.stats.damage += 8;
    },
  },
  {
    title: "빠른 장전",
    desc: "공격 속도 +18%",
    apply: (scene) => {
      scene.stats.fireDelay = Math.max(120, Math.floor(scene.stats.fireDelay * 0.82));
    },
  },
  {
    title: "관통탄",
    desc: "탄환 관통 +1",
    apply: (scene) => {
      scene.stats.pierce += 1;
    },
  },
  {
    title: "둔화탄",
    desc: "명중 시 25% 둔화",
    apply: (scene) => {
      scene.stats.slowChance = Math.min(0.8, scene.stats.slowChance + 0.25);
    },
  },
  {
    title: "폭발탄",
    desc: "탄환 폭발 범위 +18",
    apply: (scene) => {
      scene.stats.blastRadius += 18;
    },
  },
  {
    title: "응급 수리",
    desc: "바리케이트 HP +45 회복",
    apply: (scene) => {
      scene.barricadeHp = Math.min(scene.barricadeMaxHp, scene.barricadeHp + 45);
    },
  },
  {
    title: "강화 목책",
    desc: "최대 HP +35",
    apply: (scene) => {
      scene.barricadeMaxHp += 35;
      scene.barricadeHp += 35;
    },
  },
];

class DefenseScene extends Phaser.Scene {
  constructor() {
    super("DefenseScene");
  }

  preload() {
    mapSequence.forEach((map) => {
      this.load.image(map.mapKey, map.mapPath);
      this.load.spritesheet(map.enemyKey, map.enemyPath, { frameWidth: 160, frameHeight: 160 });
    });
    Object.values(bossDefinitions).forEach((boss) => {
      this.load.image(boss.key, boss.path);
    });
    this.load.spritesheet("characterPortraits", "assets/character-portraits-sheet.png", { frameWidth: 362, frameHeight: 724 });
    Object.values(cutsceneDefinitions).forEach((cutscene) => {
      this.load.image(cutscene.key, cutscene.path);
    });
    Object.values(vfxDefinitions).forEach((vfx) => {
      this.load.spritesheet(vfx.key, vfx.path, { frameWidth: 256, frameHeight: 256 });
    });
    this.load.image("schoolgirlFrenzyLaser", "assets/schoolgirl-frenzy-laser.png");
    this.load.spritesheet("heroCast", "assets/hero-cast-strip.png", { frameWidth: 192, frameHeight: 192 });
    allyDefinitions.forEach((ally) => {
      this.load.spritesheet(ally.sheetKey, ally.path, { frameWidth: 192, frameHeight: 192 });
    });
    Object.entries(audioDefinitions).forEach(([key, path]) => {
      this.load.audio(key, path);
    });
  }

  create() {
    this.stage = 1;
    this.score = 0;
    this.stats = {
      damage: 22,
      fireDelay: 430,
      bulletSpeed: 650,
      pierce: 0,
      slowChance: 0,
      blastRadius: 0,
    };
    this.barricadeMaxHp = 120;
    this.barricadeHp = this.barricadeMaxHp;
    this.activeMapSequence = mapSequence;
    this.partyOrder = [];
    this.joinMapIndexByCharacter = {};
    this.unlockedSkills = {};
    this.pendingSkillEvents = [];
    this.killsSinceReward = 0;
    this.stageKillCount = 0;
    this.pendingKillReward = false;
    this.rewardHoldUntil = 0;
    this.shownJoinCutscenes = new Set();
    this.currentBgm = null;
    this.currentBgmKey = null;
    this.sfxLastPlayed = {};

    this.mapImage = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, mapSequence[0].mapKey).setDisplaySize(GAME_WIDTH, GAME_HEIGHT);

    this.monsters = this.add.group();
    this.bullets = this.add.group();
    this.effects = this.add.group();

    this.makeHud();
    this.makeBarricade();
    this.makeAnimations();
    this.setBattleUiVisible(false);
    this.showStartScreen();
  }

  makeAnimations() {
    mapSequence.forEach((map) => {
      for (let row = 0; row < STAGES_PER_MAP; row += 1) {
        const key = this.getEnemyAnimKey(map.slug, row);
        if (this.anims.exists(key)) {
          continue;
        }
        this.anims.create({
          key,
          frames: this.anims.generateFrameNumbers(map.enemyKey, { start: row * 8, end: row * 8 + 7 }),
          frameRate: 8,
          repeat: -1,
        });
      }
    });

    if (!this.anims.exists("hero-cast")) {
      this.anims.create({
        key: "hero-cast",
        frames: this.anims.generateFrameNumbers("heroCast", { start: 0, end: 7 }),
        frameRate: 14,
        repeat: 0,
      });
    }

    allyDefinitions.forEach((ally) => {
      if (this.anims.exists(ally.animKey)) {
        return;
      }
      this.anims.create({
        key: ally.animKey,
        frames: this.anims.generateFrameNumbers(ally.sheetKey, { start: 0, end: 7 }),
        frameRate: 14,
        repeat: 0,
      });
    });

    Object.entries(vfxDefinitions).forEach(([characterId, vfx]) => {
      ["basic", "skill1", "skill2"].forEach((type, row) => {
        const key = this.getVfxAnimKey(characterId, type);
        if (this.anims.exists(key)) {
          return;
        }
        this.anims.create({
          key,
          frames: this.anims.generateFrameNumbers(vfx.key, { start: row * 8, end: row * 8 + 7 }),
          frameRate: 14,
          repeat: -1,
        });
      });
    });
  }

  makeHud() {
    this.uiPanel = this.add
      .rectangle(GAME_WIDTH / 2, 24, GAME_WIDTH - 20, 42, 0x14201a, 0.78)
      .setStrokeStyle(1, 0x89a875, 0.6);

    this.stageText = this.add.text(20, 14, "", {
      fontSize: "14px",
      color: "#f2f0db",
      fontStyle: "700",
    });
    this.timerText = this.add.text(176, 14, "", {
      fontSize: "13px",
      color: "#f8d36f",
      fontStyle: "700",
    });
    this.monsterText = this.add.text(254, 14, "", {
      fontSize: "13px",
      color: "#ffd0b0",
      fontStyle: "700",
    });
    this.pointText = this.add.text(322, 14, "", {
      fontSize: "13px",
      color: "#d9f0c0",
      fontStyle: "700",
    });
    [this.uiPanel, this.stageText, this.timerText, this.monsterText, this.pointText].forEach((object) => object.setDepth(45));
  }

  makeBarricade() {
    this.barricadeHitbox = this.add.rectangle(GAME_WIDTH / 2, BARRICADE_Y, 310, 58, 0xffffff, 0);
    this.hpBack = this.add.rectangle(GAME_WIDTH / 2, BARRICADE_HP_Y, 260, 12, 0x241914, 0.88);
    this.hpBack.setStrokeStyle(2, 0x5d4028, 0.9);
    this.hpBar = this.add.rectangle(GAME_WIDTH / 2 - 130, BARRICADE_HP_Y, 260, 12, 0xe34f42, 1).setOrigin(0, 0.5);
    this.hpText = this.add.text(GAME_WIDTH / 2, BARRICADE_HP_Y + 13, "", {
      fontSize: "12px",
      color: "#fff6e0",
      fontStyle: "700",
    }).setOrigin(0.5, 0);
  }

  setBattleUiVisible(visible) {
    [
      this.uiPanel,
      this.stageText,
      this.timerText,
      this.monsterText,
      this.pointText,
      this.barricadeHitbox,
      this.hpBack,
      this.hpBar,
      this.hpText,
    ].forEach((object) => object?.setVisible(visible));
  }

  unlockAudio() {
    const context = this.sound?.context;
    if (context?.state === "suspended") {
      context.resume();
    }
  }

  playBgm(key) {
    if (!this.cache.audio.exists(key) || this.currentBgmKey === key) {
      return;
    }

    const previous = this.currentBgm;
    if (previous) {
      this.tweens.add({
        targets: previous,
        volume: 0,
        duration: 420,
        onComplete: () => previous.stop(),
      });
    }

    const next = this.sound.add(key, { loop: true, volume: 0 });
    next.play();
    this.currentBgm = next;
    this.currentBgmKey = key;
    this.tweens.add({
      targets: next,
      volume: key === "bgmBattle" ? 0.24 : 0.28,
      duration: 520,
    });
  }

  playSfx(key, options = {}) {
    if (!this.cache.audio.exists(key)) {
      return;
    }
    const now = this.time.now;
    const throttle = options.throttle ?? 0;
    if ((this.sfxLastPlayed[key] ?? -Infinity) + throttle > now) {
      return;
    }
    this.sfxLastPlayed[key] = now;
    this.sound.play(key, {
      volume: options.volume ?? 0.48,
      detune: options.detune ?? 0,
    });
  }

  playAttackSfx(combatant) {
    const key = attackSfxByCharacter[combatant.meta.id];
    if (!key) {
      return;
    }
    this.playSfx(key, {
      throttle: combatant.meta.id === "schoolgirl" ? 80 : 70,
      volume: combatant.meta.id === "schoolboy" ? 0.32 : 0.26,
    });
  }

  playSkillSfx(combatant, skillNumber) {
    const key = skillSfxByCharacter[combatant.meta.id]?.[skillNumber];
    if (!key) {
      return;
    }
    this.playSfx(key, {
      throttle: skillNumber === 2 ? 650 : 220,
      volume: skillNumber === 2 ? 0.5 : 0.42,
    });
  }

  showStartScreen() {
    this.state = "title";
    this.clearOverlay();
    this.mapImage.setTexture("mapForest");
    this.overlay = this.add.group();

    const shade = this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, 0x050706, 0.62).setDepth(60);
    const mage = this.add.image(66, 538, "cutsceneMage").setScale(0.28).setAlpha(0.94).setDepth(61);
    const schoolgirl = this.add.image(324, 548, "cutsceneSchoolgirl").setScale(0.27).setFlipX(true).setAlpha(0.92).setDepth(61);
    const title = this.add.text(GAME_WIDTH / 2, 126, "균열 방어선", {
      fontSize: "42px",
      color: "#fff1bf",
      fontStyle: "900",
      stroke: "#15100b",
      strokeThickness: 7,
    }).setOrigin(0.5).setDepth(62);
    const subtitle = this.add.text(GAME_WIDTH / 2, 184, "두 세계를 잇는 1차선 방어전", {
      fontSize: "16px",
      color: "#dcebc9",
      fontStyle: "800",
      stroke: "#10150f",
      strokeThickness: 4,
    }).setOrigin(0.5).setDepth(62);
    const button = this.add
      .rectangle(GAME_WIDTH / 2, 704, 220, 58, 0xe3c06a, 0.96)
      .setStrokeStyle(3, 0x2c2117, 1)
      .setInteractive({ useHandCursor: true })
      .setDepth(62);
    const buttonText = this.add.text(GAME_WIDTH / 2, 704, "시작", {
      fontSize: "22px",
      color: "#241a11",
      fontStyle: "900",
    }).setOrigin(0.5).setDepth(63);
    const hint = this.add.text(GAME_WIDTH / 2, 752, "인트로 후 캐릭터를 선택합니다", {
      fontSize: "12px",
      color: "#fff1bf",
      fontStyle: "800",
      stroke: "#15100b",
      strokeThickness: 3,
    }).setOrigin(0.5).setDepth(63);

    [shade, mage, schoolgirl, title, subtitle, button, buttonText, hint].forEach((object) => this.overlay.add(object));
    button.on("pointerdown", () => {
      this.unlockAudio();
      this.playSfx("sfxClick", { volume: 0.52 });
      this.playBgm("bgmTitle");
      this.showIntroScene(0);
    });
  }

  showIntroScene(index) {
    const scene = introScenes[index];
    if (!scene) {
      this.clearOverlay();
      this.showCharacterSelect();
      return;
    }

    this.state = "intro";
    this.clearOverlay();
    this.mapImage.setTexture(scene.bgKey);
    this.overlay = this.add.group();

    const shade = this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, 0x050706, 0.58).setDepth(60);
    const fromLeft = scene.side === "left";
    const startX = fromLeft ? -112 : GAME_WIDTH + 112;
    const endX = fromLeft ? 112 : 278;
    const art = this.add.image(startX, 452, scene.imageKey).setDepth(62);
    art.setScale(590 / art.height);
    if (!fromLeft) {
      art.setFlipX(true);
    }

    const title = this.add.text(28, 118, scene.title, {
      fontSize: "28px",
      color: "#fff1bf",
      fontStyle: "900",
      stroke: "#15100b",
      strokeThickness: 6,
    }).setDepth(63);
    const captionBack = this.add.rectangle(GAME_WIDTH / 2, 686, GAME_WIDTH, 112, 0x050505, 0.52).setDepth(63);
    const line = this.add.text(30, 648, scene.line, {
      fontSize: "18px",
      color: "#fff4d0",
      fontStyle: "900",
      stroke: "#17120d",
      strokeThickness: 4,
      wordWrap: { width: 330, useAdvancedWrap: true },
      lineSpacing: 7,
    }).setDepth(64);
    const nextLabel = index >= introScenes.length - 1 ? "캐릭터 선택" : "다음";
    const next = this.add
      .rectangle(GAME_WIDTH / 2, 772, 158, 42, 0xe3c06a, 0.96)
      .setStrokeStyle(2, 0x2c2117, 1)
      .setDepth(64);
    const nextText = this.add.text(GAME_WIDTH / 2, 772, nextLabel, {
      fontSize: "16px",
      color: "#241a11",
      fontStyle: "900",
    }).setOrigin(0.5).setDepth(65);

    [shade, art, title, captionBack, line, next, nextText].forEach((object) => this.overlay.add(object));
    [title, captionBack, line, next, nextText].forEach((object) => object.setAlpha(0));
    this.tweens.add({ targets: art, x: endX, duration: 360, ease: "Back.easeOut" });
    this.tweens.add({ targets: [title, captionBack, line, next, nextText], alpha: 1, duration: 220, delay: 180 });

    const enableNext = this.time.delayedCall(420, () => {
      next.setInteractive({ useHandCursor: true });
      next.on("pointerdown", () => {
        this.playSfx("sfxClick", { volume: 0.46 });
        this.showIntroScene(index + 1);
      });
    });
    this.pendingSkillEvents.push(enableNext);
  }

  showCharacterSelect() {
    this.state = "selecting";
    this.clearOverlay();
    this.selectOverlay = this.add.group();

    const shade = this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, 0x08100d, 0.78);
    this.selectOverlay.add(shade);
    this.selectOverlay.add(
      this.add.text(GAME_WIDTH / 2, 54, "캐릭터 선택", {
        fontSize: "26px",
        color: "#fff0c9",
        fontStyle: "900",
      }).setOrigin(0.5)
    );
    this.selectOverlay.add(
      this.add.text(GAME_WIDTH / 2, 84, "시작 캐릭터에 따라 첫 세계와 동료 합류가 바뀝니다", {
        fontSize: "12px",
        color: "#cfe5bb",
        fontStyle: "700",
      }).setOrigin(0.5)
    );

    const columns = [104, 286];
    const rows = [190, 392, 594];
    characterDefinitions.forEach((character, index) => {
      const x = columns[index % 2];
      const y = rows[Math.floor(index / 2)];
      const card = this.add
        .rectangle(x, y, 150, 166, 0xf0dfb8, 0.96)
        .setStrokeStyle(3, character.faction === "modern" ? 0x315a76 : 0x5b4128, 1)
        .setInteractive({ useHandCursor: true });
      const portrait = this.add.sprite(x, y - 20, "characterPortraits", index).setScale(0.18);
      const name = this.add.text(x, y + 50, character.name, {
        fontSize: "17px",
        color: "#2e2117",
        fontStyle: "900",
      }).setOrigin(0.5);
      const world = this.add.text(x, y + 72, character.faction === "modern" ? "현대 시작" : "판타지 시작", {
        fontSize: "12px",
        color: character.faction === "modern" ? "#24516e" : "#5c4228",
        fontStyle: "800",
      }).setOrigin(0.5);

      card.on("pointerdown", () => this.selectStarter(character.id));
      portrait.setInteractive({ useHandCursor: true }).on("pointerdown", () => this.selectStarter(character.id));
      [card, portrait, name, world].forEach((object) => this.selectOverlay.add(object));
    });
  }

  selectStarter(starterId) {
    this.unlockAudio();
    this.playSfx("sfxClick", { volume: 0.48 });
    this.clearSelectOverlay();
    this.selectedCharacterId = starterId;
    this.activeMapSequence = this.buildRoute(starterId);
    this.joinMapIndexByCharacter = this.buildJoinMapIndexes(starterId);
    this.unlockedSkills = Object.fromEntries(characterDefinitions.map((character) => [character.id, new Set()]));
    this.makePartyCombatants(starterId);
    this.setBattleUiVisible(true);
    this.stage = 1;
    this.score = 0;
    this.barricadeMaxHp = 120;
    this.barricadeHp = this.barricadeMaxHp;
    this.killsSinceReward = 0;
    this.stageKillCount = 0;
    this.pendingKillReward = false;
    this.rewardHoldUntil = 0;
    this.shownJoinCutscenes = new Set();
    this.startStage();
  }

  clearSelectOverlay() {
    if (this.selectOverlay) {
      this.selectOverlay.destroy(true);
      this.selectOverlay = null;
    }
  }

  makePartyCombatants(starterId) {
    this.destroyPartyCombatants();
    this.partyOrder = this.buildPartyOrder();
    const combatants = this.partyOrder.map((characterId, index) => {
      const definition = this.getCharacterDefinition(characterId);
      const slot = partySlots[index];
      const shadow = this.add.ellipse(slot.x, slot.y + 42, 74, 20, 0x050605, 0.26).setVisible(false);
      const sprite = this.add.sprite(slot.x, slot.y, definition.sheetKey, 0).setScale(definition.scale).setVisible(false);
      const skillIndicators = this.makeSkillIndicators(slot.x, slot.y - 42);
      sprite.meta = {
        ...definition,
        shadow,
        skillIndicators,
        fireTimer: 0,
        chatterTimer: 2600 + index * 900,
        chatterBubble: null,
        skillTimers: { 1: 1600 + index * 180, 2: 6200 + index * 420 },
        joinMapIndex: this.joinMapIndexByCharacter[characterId] ?? 0,
      };
      sprite.on(`animationcomplete-${definition.animKey}`, () => {
        sprite.setFrame(0);
      });
      return sprite;
    });

    this.defender = combatants.find((combatant) => combatant.meta.id === starterId);
    this.allies = combatants.filter((combatant) => combatant !== this.defender);
  }

  destroyPartyCombatants() {
    const combatants = [this.defender, ...(this.allies ?? [])].filter(Boolean);
    combatants.forEach((combatant) => {
      combatant.meta?.shadow?.destroy();
      combatant.meta?.skillIndicators?.forEach((indicator) => {
        indicator.box.destroy();
        indicator.cooldown.destroy();
        indicator.label.destroy();
      });
      this.destroyChatterBubble(combatant);
      combatant.destroy();
    });
    this.defender = null;
    this.allies = [];
  }

  getCharacterDefinition(characterId) {
    return characterDefinitions.find((character) => character.id === characterId);
  }

  makeSkillIndicators(x, y) {
    return [1, 2].map((skillNumber, index) => {
      const box = this.add
        .rectangle(x - 11 + index * 22, y, 18, 18, 0x161d19, 0.88)
        .setStrokeStyle(1, 0xf2e8b8, 0.9)
        .setVisible(false)
        .setDepth(20);
      const cooldown = this.add
        .rectangle(x - 11 + index * 22, y + 9, 18, 18, 0x050807, 0.72)
        .setOrigin(0.5, 1)
        .setVisible(false)
        .setDepth(20.5);
      const label = this.add.text(x - 11 + index * 22, y - 1, `${skillNumber}`, {
        fontSize: "11px",
        color: "#fff4c5",
        fontStyle: "900",
      }).setOrigin(0.5).setVisible(false).setDepth(21);
      return { skillNumber, box, cooldown, label };
    });
  }

  isSkillUnlocked(characterId, skillNumber) {
    return this.unlockedSkills?.[characterId]?.has(skillNumber) ?? false;
  }

  unlockSkill(characterId, skillNumber) {
    if (!this.unlockedSkills[characterId]) {
      this.unlockedSkills[characterId] = new Set();
    }
    this.unlockedSkills[characterId].add(skillNumber);
    [this.defender, ...this.allies].filter(Boolean).forEach((combatant) => this.updateSkillIndicators(combatant));
  }

  updateSkillIndicators(combatant) {
    const joined = combatant.visible;
    combatant.meta.skillIndicators.forEach((indicator) => {
      const unlocked = joined && this.isSkillUnlocked(combatant.meta.id, indicator.skillNumber);
      indicator.box.setVisible(unlocked);
      indicator.cooldown.setVisible(false);
      indicator.label.setVisible(unlocked);
      if (!unlocked) {
        return;
      }

      const config = skillConfigs[combatant.meta.id]?.[indicator.skillNumber];
      const cooldownLeft = combatant.meta.skillTimers[indicator.skillNumber] ?? 0;
      const ready = !config || cooldownLeft <= 0;
      const cooldownRate = config ? Phaser.Math.Clamp(cooldownLeft / config.cooldown, 0, 1) : 0;
      indicator.box.setFillStyle(ready ? 0x4f6d38 : 0x1d2525, ready ? 0.94 : 0.68);
      indicator.cooldown.setVisible(!ready);
      indicator.cooldown.setScale(1, cooldownRate);
      indicator.label.setAlpha(ready ? 1 : 0.55);
    });
  }

  buildPartyOrder() {
    return visualPartyOrder;
  }

  buildRoute(starterId) {
    const starter = this.getCharacterDefinition(starterId);
    const mapBySlug = Object.fromEntries(mapSequence.map((map) => [map.slug, map]));
    if (starter.faction === "modern") {
      return [...modernMapOrder, ...fantasyMapOrder].map((slug) => mapBySlug[slug]);
    }

    const fantasyRoute = [starter.homeMap, ...fantasyMapOrder.filter((slug) => slug !== starter.homeMap)];
    return [...fantasyRoute, ...fantasyToModernMapOrder].map((slug) => mapBySlug[slug]);
  }

  buildJoinMapIndexes(starterId) {
    const route = this.activeMapSequence;
    const indexOfMap = (mapSlug) => route.findIndex((map) => map.slug === mapSlug);
    const starter = this.getCharacterDefinition(starterId);
    const joins = { [starterId]: 0 };

    if (starter.faction === "modern") {
      joins[starterId === "schoolgirl" ? "schoolboy" : "schoolgirl"] = 1;
      joins.desert = 2;
      joins.jungle = 3;
      joins.frozen = 4;
      joins.mage = 5;
      return joins;
    }

    characterDefinitions
      .filter((character) => character.faction === "fantasy" && character.id !== starterId)
      .forEach((character) => {
        joins[character.id] = Math.max(0, indexOfMap(character.homeMap));
      });
    joins.schoolgirl = Math.max(0, indexOfMap("schoolyard"));
    joins.schoolboy = Math.max(0, indexOfMap("house-alley"));
    return joins;
  }

  startStage() {
    const maxStage = this.activeMapSequence.length * STAGES_PER_MAP;
    if (this.stage > maxStage) {
      this.showEndOverlay("모든 테스트 스테이지 완료");
      return;
    }
    this.cleanupStageObjects();
    this.state = "preparing";
    this.currentStageInfo = this.getStageInfo();
    this.mapImage.setTexture(this.currentStageInfo.map.mapKey);
    this.updateAllyVisibility();
    this.stageTime = 95;
    this.stageClock = this.stageTime;
    this.spawned = 0;
    this.stageKillCount = 0;
    this.pendingKillReward = false;
    this.rewardHoldUntil = 0;
    this.totalMonsters = 42 + this.currentStageInfo.enemyTier * 6 + this.currentStageInfo.mapIndex * 2;
    this.spawnDelay = Math.max(360, 560 - this.currentStageInfo.enemyTier * 28);
    this.spawnTimer = this.spawnDelay;
    this.clearOverlay();
    const joinCutscene = this.getPendingJoinCutscene();
    if (joinCutscene) {
      this.showJoinCutscene(joinCutscene, () => this.beginStageCombat());
      return;
    }
    this.beginStageCombat();
  }

  beginStageCombat() {
    this.state = "playing";
    this.clearOverlay();
    this.playBgm("bgmBattle");
    this.spawnMonsterWave();
  }

  getPendingJoinCutscene() {
    const currentMapIndex = this.currentStageInfo?.mapIndex ?? 0;
    return [this.defender, ...this.allies]
      .filter((combatant) => combatant?.visible)
      .find((combatant) => combatant.meta.joinMapIndex === currentMapIndex && !this.shownJoinCutscenes.has(combatant.meta.id));
  }

  showJoinCutscene(combatant, onComplete) {
    const definition = cutsceneDefinitions[combatant.meta.id];
    if (!definition) {
      onComplete();
      return;
    }

    this.shownJoinCutscenes.add(combatant.meta.id);
    this.state = "cutscene";
    this.clearOverlay();
    this.overlay = this.add.group();

    const shade = this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, 0x050706, 0.58).setDepth(80);
    const bandBack = this.add.rectangle(GAME_WIDTH / 2, 472, GAME_WIDTH + 120, 142, 0x060606, 0.92).setRotation(-0.12).setDepth(81);
    const band = this.add.rectangle(GAME_WIDTH / 2, 476, GAME_WIDTH + 130, 108, 0xe0a521, 0.96).setRotation(-0.12).setDepth(82);
    const lineA = this.add.rectangle(GAME_WIDTH / 2, 430, GAME_WIDTH + 130, 4, 0xfff0a0, 0.72).setRotation(-0.12).setDepth(83);
    const lineB = this.add.rectangle(GAME_WIDTH / 2, 522, GAME_WIDTH + 130, 4, 0x6d3b08, 0.72).setRotation(-0.12).setDepth(83);

    const fromLeft = definition.side === "left";
    const startX = fromLeft ? -120 : GAME_WIDTH + 120;
    const endX = fromLeft ? 128 : 268;
    const art = this.add.image(startX, 404, definition.key).setDepth(86);
    art.setScale(640 / art.height);
    if (!fromLeft) {
      art.setFlipX(true);
    }

    const nameX = fromLeft ? 26 : GAME_WIDTH - 26;
    const nameText = this.add.text(nameX, 116, definition.title, {
      fontSize: "21px",
      color: "#fff1c0",
      fontStyle: "900",
      stroke: "#16110c",
      strokeThickness: 5,
    }).setOrigin(fromLeft ? 0 : 1, 0.5).setDepth(88);

    const captionBack = this.add.rectangle(GAME_WIDTH / 2, 690, GAME_WIDTH, 92, 0x050505, 0.46).setDepth(87);
    const line = this.add.text(28, 662, definition.line, {
      fontSize: "17px",
      color: "#fff4d0",
      fontStyle: "900",
      stroke: "#17120d",
      strokeThickness: 4,
      wordWrap: { width: 334, useAdvancedWrap: true },
      lineSpacing: 6,
    }).setDepth(90);
    const next = this.add.triangle(344, 724, 0, 0, 18, 0, 9, 10, 0xfff4d0, 0.88).setDepth(90);
    const hint = this.add.text(GAME_WIDTH / 2, 746, "터치해서 계속", {
      fontSize: "12px",
      color: "#fff0bd",
      fontStyle: "800",
      stroke: "#17120d",
      strokeThickness: 3,
    }).setOrigin(0.5).setAlpha(0.86).setDepth(90);

    [shade, bandBack, band, lineA, lineB, art, nameText, captionBack, line, next, hint].forEach((object) => this.overlay.add(object));
    [nameText, captionBack, line, next, hint].forEach((object) => object.setAlpha(0));

    this.tweens.add({
      targets: art,
      x: endX,
      duration: 360,
      ease: "Back.easeOut",
    });
    this.tweens.add({
      targets: [nameText, captionBack, line, next, hint],
      alpha: 1,
      duration: 220,
      delay: 220,
    });

    let closing = false;
    const closeCutscene = () => {
      if (closing) {
        return;
      }
      closing = true;
      this.input.off("pointerdown", closeCutscene);
      this.tweens.add({
        targets: [nameText, captionBack, line, next, hint],
        alpha: 0,
        duration: 140,
      });
      this.tweens.add({
        targets: art,
        x: startX,
        duration: 300,
        ease: "Back.easeIn",
        onComplete: () => {
          this.clearOverlay();
          onComplete();
        },
      });
    };

    const inputEvent = this.time.delayedCall(650, () => {
      if (!closing && this.state === "cutscene") {
        this.input.once("pointerdown", closeCutscene);
      }
    });
    const autoCloseEvent = this.time.delayedCall(5200, closeCutscene);
    this.pendingSkillEvents.push(inputEvent, autoCloseEvent);
  }

  updateAllyVisibility() {
    [this.defender, ...this.allies].filter(Boolean).forEach((combatant) => {
      const joined = this.currentStageInfo.mapIndex >= combatant.meta.joinMapIndex;
      combatant.setVisible(joined);
      combatant.meta.shadow.setVisible(joined);
      combatant.meta.fireTimer = 180 + combatant.meta.joinMapIndex * 40;
      combatant.meta.chatterTimer = Phaser.Math.Between(2400, 6200) + combatant.meta.joinMapIndex * 180;
      combatant.meta.skillTimers[1] = Math.min(combatant.meta.skillTimers[1], 1300 + combatant.meta.joinMapIndex * 220);
      combatant.meta.skillTimers[2] = Math.min(combatant.meta.skillTimers[2], 5600 + combatant.meta.joinMapIndex * 520);
      if (!joined) {
        combatant.setFrame(0);
        this.destroyChatterBubble(combatant);
      }
      this.updateSkillIndicators(combatant);
    });
  }

  destroyGroupObjects(group) {
    group.getChildren().slice().forEach((child) => {
      if (child.meta?.parts) {
        child.meta.parts.forEach((part) => part.destroy());
      }
      this.tweens.killTweensOf(child);
      child.destroy();
    });
    group.clear(false, false);
  }

  cleanupStageObjects() {
    (this.pendingSkillEvents ?? []).forEach((event) => event.remove(false));
    this.pendingSkillEvents = [];
    this.destroyGroupObjects(this.monsters);
    this.destroyGroupObjects(this.bullets);
    this.destroyGroupObjects(this.effects);
    [this.defender, ...this.allies].filter(Boolean).forEach((combatant) => {
      combatant.stop();
      combatant.setFrame(0);
      this.destroyChatterBubble(combatant);
    });
  }

  getStageInfo() {
    const route = this.activeMapSequence ?? mapSequence;
    const maxStage = route.length * STAGES_PER_MAP;
    const stageIndex = Math.min(Math.max(this.stage - 1, 0), maxStage - 1);
    const mapIndex = Math.floor(stageIndex / STAGES_PER_MAP);
    const enemyTier = stageIndex % STAGES_PER_MAP;
    return {
      maxStage,
      mapIndex,
      enemyTier,
      map: route[mapIndex],
    };
  }

  update(time, delta) {
    if (this.state !== "playing") {
      return;
    }

    const dt = delta / 1000;
    this.stageClock -= dt;
    this.spawnTimer -= delta;

    if (this.spawned < this.totalMonsters && this.spawnTimer <= 0) {
      this.spawnMonsterWave();
      this.spawnTimer = this.spawnDelay;
    }

    this.updateMonsters(dt, delta);
    if (this.state !== "playing") {
      this.updateHud();
      return;
    }

    this.updateBullets(dt);
    if (this.state !== "playing") {
      this.updateHud();
      return;
    }

    this.updateCombatants(delta);
    if (this.state !== "playing") {
      this.updateHud();
      return;
    }

    if (this.barricadeHp <= 0) {
      this.gameOver("바리케이트 파괴");
    } else if (this.stageClock <= 0 && this.monsters.countActive(true) > 0) {
      this.gameOver("시간 초과");
    } else if (this.spawned >= this.totalMonsters && this.monsters.countActive(true) === 0) {
      this.stageClear();
    } else if (this.pendingKillReward && this.time.now >= this.rewardHoldUntil) {
      this.showKillReward();
    }

    this.updateHud();
  }

  spawnMonster(forcedX = null, forcedY = null, isBoss = false) {
    const info = this.currentStageInfo ?? this.getStageInfo();
    const type = this.getMonsterType(isBoss);
    const x = forcedX ?? Phaser.Math.Between(145, 245);
    const y = forcedY ?? 58;
    const baseHp = Math.round((34 + this.stage * 10 + Phaser.Math.Between(0, this.stage * 6)) * type.hpRate);
    const hp = TEST_ONE_HIT_KILL ? 1 : Math.round(baseHp * (isBoss ? 7.5 : 1));
    const useMapBossArt = isBoss && info.enemyTier === STAGES_PER_MAP - 1;
    const boss = useMapBossArt ? bossDefinitions[info.map.slug] : null;
    const body = boss
      ? this.add.image(x, y, boss.key)
      : this.add.sprite(x, y, type.sheet, 0);
    if (boss) {
      body.setDisplaySize(118, 118 * (body.height / body.width));
    } else {
      body.setScale(type.scale);
      body.play(type.anim);
    }
    if (isBoss && !boss) {
      body.setTint(0xffdf9b);
    }
    const hpWidth = isBoss ? 70 : 44;
    const hpBack = this.add.rectangle(x, y - 34, hpWidth, isBoss ? 9 : 7, 0x17110f, 0.85);
    const hpBar = this.add.rectangle(x - hpWidth / 2, y - 34, hpWidth, isBoss ? 9 : 7, isBoss ? 0xffd15c : 0x5cff65, 1).setOrigin(0, 0.5);
    const rawSpeed = Phaser.Math.Between(type.minSpeed, type.maxSpeed) + info.mapIndex * 4 + info.enemyTier * 3;
    const speed = rawSpeed * 0.34 * (isBoss ? 0.55 : 1);

    body.meta = {
      isBoss,
      hp,
      maxHp: hp,
      speed,
      attackTimer: 0,
      slowTimer: 0,
      radius: type.radius * (isBoss ? 1.48 : 1),
      hpWidth,
      barricadeDamage: isBoss ? 7 + this.stage : Math.ceil((7 + this.stage) * 0.5),
      reachedBarricade: false,
      parts: [hpBack, hpBar],
      hpBar,
    };
    body.refresh = () => this.refreshMonster(body);
    this.monsters.add(body);
    this.spawned += 1;
  }

  spawnMonsterWave() {
    const remaining = this.totalMonsters - this.spawned;
    const info = this.currentStageInfo ?? this.getStageInfo();
    const activePressure = this.monsters.countActive(true);
    const baseCount = 2 + Math.floor(info.enemyTier / 2);
    const pressureBonus = activePressure < 6 ? 1 : 0;
    const count = Math.min(remaining, baseCount + pressureBonus);

    for (let index = 0; index < count; index += 1) {
      const isBoss = this.spawned === this.totalMonsters - 1;
      const x = Phaser.Math.Between(122, 268);
      const y = 44 - index * Phaser.Math.Between(18, 34);
      this.spawnMonster(x, y, isBoss);
    }
  }

  getMonsterType(forceBossTier = false) {
    const info = this.currentStageInfo ?? this.getStageInfo();
    const scaleByTier = [0.48, 0.5, 0.52, 0.54, 0.58];
    const speedByTier = [
      { min: 38, max: 54 },
      { min: 42, max: 58 },
      { min: 46, max: 64 },
      { min: 50, max: 70 },
      { min: 54, max: 76 },
    ];
    const tier = forceBossTier ? info.enemyTier : Phaser.Math.Between(0, info.enemyTier);
    const speed = speedByTier[tier];
    return {
      sheet: info.map.enemyKey,
      anim: this.getEnemyAnimKey(info.map.slug, tier),
      scale: scaleByTier[tier],
      radius: 22 + tier * 2,
      hpRate: 1 + tier * 0.25,
      minSpeed: speed.min,
      maxSpeed: speed.max,
    };
  }

  getEnemyAnimKey(mapSlug, tier) {
    return `enemy-${mapSlug}-${tier}`;
  }

  getVfxAnimKey(characterId, type) {
    return `${characterId}-vfx-${type}`;
  }

  updateMonsters(dt, delta) {
    this.monsters.getChildren().forEach((monster) => {
      if (monster.meta.slowTimer > 0) {
        monster.meta.slowTimer -= delta;
      }

      if (monster.y < BARRICADE_Y - 36 && !monster.meta.reachedBarricade) {
        const slowRate = monster.meta.slowTimer > 0 ? 0.48 : 1;
        monster.y += monster.meta.speed * slowRate * dt;
        this.moveMonsterParts(monster);
        return;
      }

      monster.meta.reachedBarricade = true;
      monster.meta.attackTimer -= delta;
      if (monster.meta.attackTimer <= 0) {
        this.damageBarricade(monster.meta.barricadeDamage);
        monster.meta.attackTimer = 760;
      }
    });
  }

  moveMonsterParts(monster) {
    const [hpBack, hpBar] = monster.meta.parts;
    const hpWidth = monster.meta.hpWidth ?? 44;
    hpBack.setPosition(monster.x, monster.y - 34);
    hpBar.setPosition(monster.x - hpWidth / 2, monster.y - 34);
  }

  refreshMonster(monster) {
    const hpRate = Math.max(0, monster.meta.hp / monster.meta.maxHp);
    if (monster.meta.slowTimer > 0) {
      monster.setTint(0x86aaff);
    } else if (monster.meta.isBoss) {
      monster.setTint(0xffdf9b);
    } else {
      monster.clearTint();
    }
    monster.meta.hpBar.width = (monster.meta.hpWidth ?? 44) * hpRate;
    this.moveMonsterParts(monster);
  }

  updateCombatants(delta) {
    [this.defender, ...this.allies].filter(Boolean).forEach((combatant) => {
      if (!combatant.visible) {
        return;
      }
      combatant.meta.fireTimer -= delta;
      if (combatant.meta.fireTimer <= 0) {
        this.fireAtNearest(combatant, combatant.meta.animKey);
        const fireDelay = typeof combatant.meta.fireDelay === "function" ? combatant.meta.fireDelay() : combatant.meta.fireDelay;
        combatant.meta.fireTimer = fireDelay;
      }
      this.updateCombatantSkills(combatant, delta);
      this.updateSkillIndicators(combatant);
      this.updateCombatantChatter(combatant, delta);
    });
  }

  updateCombatantChatter(combatant, delta) {
    if (combatant.meta.chatterBubble) {
      return;
    }
    combatant.meta.chatterTimer -= delta;
    if (combatant.meta.chatterTimer > 0) {
      return;
    }

    const lines = chatterLines[combatant.meta.id] ?? [];
    if (lines.length === 0) {
      return;
    }
    this.showChatterBubble(combatant, Phaser.Utils.Array.GetRandom(lines));
    combatant.meta.chatterTimer = Phaser.Math.Between(7000, 12500);
  }

  showChatterBubble(combatant, message) {
    this.destroyChatterBubble(combatant);
    const offset = chatterOffsets[combatant.meta.id] ?? { x: 0, y: -42 };
    const bubbleX = Phaser.Math.Clamp(combatant.x + offset.x, 12, GAME_WIDTH - 118);
    const bubbleY = Phaser.Math.Clamp(combatant.y + offset.y, 76, GAME_HEIGHT - 70);
    const bubble = this.add.container(bubbleX, bubbleY).setDepth(34).setAlpha(0);
    const text = this.add.text(8, 7, message, {
      fontSize: "10px",
      color: "#2a2118",
      fontStyle: "800",
      wordWrap: { width: 90, useAdvancedWrap: true },
      lineSpacing: 1,
    });
    const width = Math.max(68, Math.min(108, text.width + 16));
    const height = Math.max(28, text.height + 14);
    const graphics = this.add.graphics();
    graphics.fillStyle(0xfff1c7, 0.94);
    graphics.lineStyle(2, 0x5c452c, 0.82);
    graphics.fillRoundedRect(0, 0, width, height, 6);
    graphics.strokeRoundedRect(0, 0, width, height, 6);
    graphics.fillStyle(0xfff1c7, 0.94);
    graphics.fillTriangle(12, height - 1, 28, height - 1, 14, height + 10);
    graphics.lineStyle(2, 0x5c452c, 0.82);
    graphics.lineBetween(12, height - 1, 14, height + 10);
    graphics.lineBetween(28, height - 1, 14, height + 10);
    bubble.add([graphics, text]);
    this.effects.add(bubble);
    combatant.meta.chatterBubble = bubble;
    this.tweens.add({
      targets: bubble,
      alpha: 1,
      y: bubbleY - 4,
      duration: 160,
      ease: "Sine.easeOut",
    });
    const hideEvent = this.time.delayedCall(2300, () => {
      if (!bubble.scene) {
        return;
      }
      this.tweens.add({
        targets: bubble,
        alpha: 0,
        y: bubble.y - 6,
        duration: 180,
        onComplete: () => {
          if (combatant.meta?.chatterBubble === bubble) {
            combatant.meta.chatterBubble = null;
          }
          bubble.destroy();
        },
      });
    });
    this.pendingSkillEvents.push(hideEvent);
  }

  destroyChatterBubble(combatant) {
    const bubble = combatant?.meta?.chatterBubble;
    if (!bubble) {
      return;
    }
    if (bubble.scene) {
      this.tweens.killTweensOf(bubble);
      bubble.destroy();
    }
    combatant.meta.chatterBubble = null;
  }

  fireAtNearest(combatant, animKey) {
    const target = this.findNearestMonster(combatant);
    if (!target) {
      return;
    }

    if (combatant.meta.id === "schoolgirl") {
      this.fireLaserAtNearest(combatant, target);
      this.playAttackSfx(combatant);
      combatant.play(animKey, true);
      return;
    }

    this.spawnProjectile(combatant, target, 0);
    this.playAttackSfx(combatant);
    combatant.play(animKey, true);
  }

  fireLaserAtNearest(combatant, target) {
    const startX = combatant.x;
    const startY = combatant.y - 78;
    const targetAngle = Phaser.Math.Angle.Between(startX, startY, target.x, target.y);
    const endX = startX + Math.cos(targetAngle) * 900;
    const endY = startY + Math.sin(targetAngle) * 900;
    const angle = Phaser.Math.Angle.Between(startX, startY, endX, endY);
    const length = Phaser.Math.Distance.Between(startX, startY, endX, endY);
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    const glow = this.add.rectangle(midX, midY, length, 10, 0x61f5ff, 0.32).setRotation(angle).setDepth(8);
    const core = this.add.rectangle(midX, midY, length, 3, 0xeaffff, 0.96).setRotation(angle).setDepth(9);
    this.effects.add(glow);
    this.effects.add(core);
    this.damageMonstersOnLine(startX, startY, endX, endY, 22, this.stats.damage * (combatant.meta.damageRate ?? 1));
    [glow, core].forEach((beam) => {
      this.tweens.add({
        targets: beam,
        alpha: 0,
        duration: 120,
        onComplete: () => beam.destroy(),
      });
    });
  }

  updateCombatantSkills(combatant, delta) {
    [1, 2].forEach((skillNumber) => {
      if (!this.isSkillUnlocked(combatant.meta.id, skillNumber)) {
        return;
      }
      combatant.meta.skillTimers[skillNumber] -= delta;
      if (combatant.meta.skillTimers[skillNumber] > 0) {
        return;
      }

      const casted = this.castSkill(combatant, skillNumber);
      const config = skillConfigs[combatant.meta.id]?.[skillNumber];
      combatant.meta.skillTimers[skillNumber] = casted ? config.cooldown : 400;
    });
  }

  castSkill(combatant, skillNumber) {
    const config = skillConfigs[combatant.meta.id]?.[skillNumber];
    const target = this.findNearestMonster(combatant);
    if (!config || !target) {
      return false;
    }

    combatant.play(combatant.meta.animKey, true);
    this.playSkillSfx(combatant, skillNumber);
    this.holdRewardsForSkill(config);
    if (config.type === "area") {
      this.spawnAreaSkillEffect(combatant, target.x, target.y, skillNumber, config);
      return true;
    }

    if (config.type === "spread") {
      const count = config.count ?? 3;
      const offsets = Array.from({ length: count }, (_, index) => (index - (count - 1) / 2) * 0.12);
      offsets.forEach((angleOffset) => this.spawnProjectile(combatant, target, angleOffset, { skillNumber, ...config }));
      return true;
    }

    if (config.type === "lane") {
      this.spawnLaneSkill(combatant, skillNumber, config);
      return true;
    }

    if (config.type === "meteorStorm") {
      this.spawnMeteorStorm(combatant, skillNumber, config);
      return true;
    }

    if (config.type === "airSupport") {
      this.spawnAirSupport(combatant, skillNumber, config);
      return true;
    }

    if (config.type === "frenzyLaser") {
      this.spawnFrenzyLaser(combatant, config);
      return true;
    }

    this.spawnProjectile(combatant, target, 0, { skillNumber, ...config });
    return true;
  }

  holdRewardsForSkill(config) {
    let duration = 520;
    if (config.type === "frenzyLaser") {
      duration = (config.duration ?? 3000) + 260;
    } else if (config.type === "airSupport") {
      duration = (config.duration ?? 4200) + 360;
    } else if (config.type === "lane") {
      duration = ((config.count ?? 3) - 1) * (config.delayStep ?? 220) + 2800;
    } else if (config.type === "meteorStorm") {
      duration = ((config.count ?? 5) - 1) * (config.delayStep ?? 260) + (config.duration ?? 820) + 420;
    } else if (config.type === "area") {
      duration = (config.duration ?? 760) + 240;
    } else if (config.type === "spread" || config.type === "projectile") {
      duration = 900;
    }
    this.rewardHoldUntil = Math.max(this.rewardHoldUntil, this.time.now + duration);
  }

  spawnProjectile(combatant, target, angleOffset, options = {}) {
    const characterId = combatant.meta.id;
    const vfx = vfxDefinitions[characterId];
    const skillNumber = options.skillNumber ?? 0;
    const rowType = skillNumber === 0 ? "basic" : `skill${skillNumber}`;
    const frame = skillNumber * 8;
    const color = vfx?.trailColor ?? combatant.meta.projectileColor ?? 0xffe189;
    const scale = options.scale ?? vfx?.basicScale ?? 0.2;
    const spawnX = options.startX ?? combatant.x;
    const spawnY = options.startY ?? combatant.y - 76;
    const bullet = this.add.sprite(spawnX, spawnY, vfx.key, frame).setScale(scale).setDepth(8);
    const startAngle = Phaser.Math.Angle.Between(bullet.x, bullet.y, target.x, target.y) + angleOffset;
    if (options.rotation !== undefined) {
      bullet.setRotation(options.rotation);
    } else if (!options.fixedRotation) {
      bullet.setRotation(startAngle);
    }
    bullet.play(this.getVfxAnimKey(characterId, rowType));
    bullet.meta = {
      target,
      targetX: target.x,
      targetY: target.y,
      speed: options.speed ?? this.stats.bulletSpeed,
      vx: Math.cos(startAngle) * (options.speed ?? this.stats.bulletSpeed),
      vy: Math.sin(startAngle) * (options.speed ?? this.stats.bulletSpeed),
      homing: options.homing ?? true,
      fixedRotation: options.fixedRotation ?? false,
      damage: this.stats.damage * (combatant.meta.damageRate ?? 1) * (options.damageRate ?? 1),
      pierceLeft: options.pierceLeft ?? this.stats.pierce,
      blastRadius: options.blastRadius ?? 0,
      slowMs: options.slowMs ?? 0,
      hitSet: new Set(),
      lifeMs: options.lifeMs ?? 1300,
      color,
    };
    this.bullets.add(bullet);
  }

  spawnLaneSkill(combatant, skillNumber, config) {
    const count = config.count ?? 3;
    const startY = BARRICADE_Y + 18;
    Array.from({ length: count }).forEach((_, index) => {
      const event = this.time.delayedCall(index * (config.delayStep ?? 220), () => {
        if (this.state !== "playing") {
          return;
        }
        const x = Phaser.Math.Between(126, 264);
        const target = { x, y: -80 };
        this.spawnProjectile(combatant, target, 0, {
          skillNumber,
          ...config,
          homing: false,
          fixedRotation: true,
          rotation: config.rotation ?? 0,
          pierceLeft: 999,
          lifeMs: 2600,
          startX: x,
          startY,
        });
        const children = this.bullets.getChildren();
        const bullet = children[children.length - 1];
        if (bullet) {
          bullet.meta.targetX = x;
          bullet.meta.targetY = -80;
          bullet.meta.vx = 0;
          bullet.meta.vy = -config.speed;
        }
      });
      this.pendingSkillEvents.push(event);
    });
  }

  spawnAirSupport(combatant, skillNumber, config) {
    const characterId = combatant.meta.id;
    const vfx = vfxDefinitions[characterId];
    const planes = [-128, -64, 0, 64, 128].map((offset, index) => {
      const planeFrame = skillNumber * 8 + 3;
      const effect = this.add
        .sprite(GAME_WIDTH / 2 + offset, GAME_HEIGHT + 116 - index * 18, vfx.key, planeFrame)
        .setScale((config.scale ?? 0.82) * 1.22)
        .setAlpha(0.98)
        .setDepth(12);
      this.effects.add(effect);
      return effect;
    });
    const impactDamage = this.stats.damage * (combatant.meta.damageRate ?? 1) * (config.damageRate ?? 1) * 0.42;
    planes.forEach((plane, planeIndex) => {
      [0, 1, 2].forEach((_, dropIndex) => {
        const event = this.time.delayedCall(520 + planeIndex * 160 + dropIndex * 760, () => {
          this.spawnAirSupportMissile(plane, combatant, config, impactDamage);
        });
        this.pendingSkillEvents.push(event);
      });
    });
    const hitEventA = this.time.delayedCall(Math.floor((config.duration ?? 3200) * 0.4), () => {
      if (this.state === "playing") {
        this.damageMonstersInRadius(GAME_WIDTH / 2, GAME_HEIGHT / 2, config.radius ?? 999, this.stats.damage * (combatant.meta.damageRate ?? 1) * 0.9);
      }
    });
    const hitEventB = this.time.delayedCall(Math.floor((config.duration ?? 3200) * 0.72), () => {
      if (this.state === "playing") {
        this.damageMonstersInRadius(GAME_WIDTH / 2, GAME_HEIGHT / 2, config.radius ?? 999, this.stats.damage * (combatant.meta.damageRate ?? 1) * 0.9);
      }
    });
    this.pendingSkillEvents.push(hitEventA, hitEventB);
    planes.forEach((plane, index) => {
      this.tweens.add({
        targets: plane,
        y: -150,
        duration: config.duration ?? 4200,
        delay: index * 130,
        ease: "Linear",
        onComplete: () => {
          this.tweens.add({
            targets: plane,
            alpha: 0,
            duration: 220,
            onComplete: () => plane.destroy(),
          });
        },
      });
    });
  }

  spawnAirSupportMissile(plane, combatant, config, damage) {
    if (this.state !== "playing" || !plane.scene) {
      return;
    }
    const vfx = vfxDefinitions[combatant.meta.id];
    const startX = plane.x + Phaser.Math.Between(-10, 10);
    const startY = plane.y - 22;
    const impactX = Phaser.Math.Clamp(startX + Phaser.Math.Between(-18, 18), 108, 282);
    const impactY = Phaser.Math.Clamp(startY - Phaser.Math.Between(88, 132), 76, BARRICADE_Y - 34);
    const missile = this.add
      .sprite(startX, startY, vfx.key, 8)
      .setScale(0.34)
      .setRotation(0)
      .setDepth(13);
    missile.play(this.getVfxAnimKey(combatant.meta.id, "skill1"));
    this.effects.add(missile);
    this.tweens.add({
      targets: missile,
      x: impactX,
      y: impactY,
      scale: 0.42,
      duration: 260,
      ease: "Quad.easeIn",
      onComplete: () => {
        missile.destroy();
        const blast = this.add.sprite(impactX, impactY, vfx.key, 11).setScale(0.48).setDepth(12);
        blast.play(this.getVfxAnimKey(combatant.meta.id, "skill1"));
        this.effects.add(blast);
        this.damageMonstersInRadius(impactX, impactY, 74, damage);
        this.tweens.add({
          targets: blast,
          alpha: 0,
          scale: 0.64,
          duration: 520,
          onComplete: () => blast.destroy(),
        });
      },
    });
  }

  spawnMeteorStorm(combatant, skillNumber, config) {
    const characterId = combatant.meta.id;
    const vfx = vfxDefinitions[characterId];
    const count = config.count ?? 5;
    Array.from({ length: count }).forEach((_, index) => {
      const event = this.time.delayedCall(index * (config.delayStep ?? 260), () => {
        if (this.state !== "playing") {
          return;
        }
        const x = Phaser.Math.Between(112, 278);
        const y = Phaser.Math.Between(96, BARRICADE_Y - 120);
        const meteor = this.add
          .sprite(x - 34, y - 190, vfx.key, skillNumber * 8)
          .setScale(config.scale ?? 0.72)
          .setRotation(0.65)
          .setDepth(12);
        meteor.play(this.getVfxAnimKey(characterId, `skill${skillNumber}`));
        this.effects.add(meteor);
        this.tweens.add({
          targets: meteor,
          x,
          y,
          duration: 260,
          ease: "Quad.easeIn",
          onComplete: () => {
            this.damageMonstersInRadius(x, y, config.radius ?? 96, this.stats.damage * (combatant.meta.damageRate ?? 1) * (config.damageRate ?? 1));
            this.flashAt(x, y, 0xff8e3d, config.radius ?? 96);
            this.tweens.add({
              targets: meteor,
              alpha: 0,
              scale: (config.scale ?? 0.72) * 1.12,
              duration: config.duration ?? 620,
              onComplete: () => meteor.destroy(),
            });
          },
        });
      });
      this.pendingSkillEvents.push(event);
    });
  }

  spawnFrenzyLaser(combatant, config) {
    const duration = config.duration ?? 3000;
    const beamWidth = config.beamWidth ?? 92;
    const beam = this.add
      .image(GAME_WIDTH / 2, 336, "schoolgirlFrenzyLaser")
      .setDisplaySize(154, 650)
      .setAlpha(0)
      .setDepth(11);
    const core = this.add
      .rectangle(GAME_WIDTH / 2, 336, 22, 618, 0xf7fbff, 0)
      .setDepth(12);
    this.effects.add(beam);
    this.effects.add(core);
    const tickDamage = this.stats.damage * (combatant.meta.damageRate ?? 1) * (config.damageRate ?? 1) * 0.18;
    const tickLaser = () => {
      if (this.state !== "playing") {
        return;
      }
      this.damageMonstersInVerticalBeam(GAME_WIDTH / 2, beamWidth, tickDamage);
      this.makeLaserFlowSpark();
    };
    tickLaser();
    for (let t = 220; t < duration; t += 220) {
      const event = this.time.delayedCall(t, tickLaser);
      this.pendingSkillEvents.push(event);
    }
    this.tweens.add({
      targets: beam,
      alpha: { from: 0, to: 0.96 },
      duration: 180,
      yoyo: true,
      hold: duration,
      onComplete: () => {
        beam.destroy();
      },
    });
    this.tweens.add({
      targets: beam,
      scaleX: beam.scaleX * 1.08,
      scaleY: beam.scaleY * 1.015,
      alpha: 0.78,
      duration: 90,
      yoyo: true,
      repeat: Math.floor(duration / 180),
    });
    this.tweens.add({
      targets: core,
      alpha: { from: 0, to: 0.24 },
      duration: 180,
      yoyo: true,
      hold: duration,
      onComplete: () => {
        core.destroy();
      },
    });
    this.tweens.add({
      targets: core,
      width: 34,
      alpha: 0.42,
      duration: 70,
      yoyo: true,
      repeat: Math.floor(duration / 140),
    });
  }

  spawnAreaSkillEffect(combatant, x, y, skillNumber, config) {
    const characterId = combatant.meta.id;
    const vfx = vfxDefinitions[characterId];
    const effect = this.add
      .sprite(x, y, vfx.key, skillNumber * 8)
      .setScale(config.scale ?? 0.5)
      .setDepth(9);
    effect.play(this.getVfxAnimKey(characterId, `skill${skillNumber}`));
    this.effects.add(effect);
    this.damageMonstersInRadius(x, y, config.radius ?? 70, this.stats.damage * (combatant.meta.damageRate ?? 1) * (config.damageRate ?? 1), config.slowMs ?? 0);
    this.tweens.add({
      targets: effect,
      alpha: 0,
      scale: (config.scale ?? 0.5) * 1.08,
      duration: config.duration ?? 760,
      onComplete: () => effect.destroy(),
    });
  }

  findNearestMonster(combatant = this.defender) {
    let nearest = null;
    let nearestDist = Infinity;
    this.monsters.getChildren().forEach((monster) => {
      if (monster.y > BARRICADE_Y + 10) {
        return;
      }
      const dist = Phaser.Math.Distance.Between(combatant.x, combatant.y, monster.x, monster.y);
      if (dist < nearestDist) {
        nearest = monster;
        nearestDist = dist;
      }
    });
    return nearest;
  }

  updateBullets(dt) {
    this.bullets.getChildren().slice().forEach((bullet) => {
      if (!bullet.scene) {
        return;
      }
      bullet.meta.lifeMs -= dt * 1000;

      if (bullet.meta.homing && this.monsters.contains(bullet.meta.target)) {
        bullet.meta.targetX = bullet.meta.target.x;
        bullet.meta.targetY = bullet.meta.target.y;
      }

      if (bullet.meta.homing) {
        const angle = Phaser.Math.Angle.Between(bullet.x, bullet.y, bullet.meta.targetX, bullet.meta.targetY);
        bullet.meta.vx = Math.cos(angle) * bullet.meta.speed;
        bullet.meta.vy = Math.sin(angle) * bullet.meta.speed;
        if (!bullet.meta.fixedRotation) {
          bullet.setRotation(angle);
        }
      }
      bullet.x += bullet.meta.vx * dt;
      bullet.y += bullet.meta.vy * dt;

      if (bullet.meta.lifeMs <= 0 || bullet.x < -20 || bullet.x > GAME_WIDTH + 20 || bullet.y < -20 || bullet.y > GAME_HEIGHT + 20) {
        bullet.destroy();
        this.bullets.remove(bullet, false);
        return;
      }

      const reachedLastTarget = Phaser.Math.Distance.Between(bullet.x, bullet.y, bullet.meta.targetX, bullet.meta.targetY) < 8;
      if (reachedLastTarget && !this.monsters.contains(bullet.meta.target)) {
        bullet.destroy();
        this.bullets.remove(bullet, false);
        return;
      }

      for (const monster of this.monsters.getChildren().slice()) {
        if (bullet.meta.hitSet.has(monster)) {
          continue;
        }
        const hit = Phaser.Math.Distance.Between(bullet.x, bullet.y, monster.x, monster.y) < monster.meta.radius + 5;
        if (!hit) {
          continue;
        }

        bullet.meta.hitSet.add(monster);
        const killed = this.hitMonster(monster, bullet.meta.damage);

        if (!killed && (bullet.meta.slowMs > 0 || Math.random() < this.stats.slowChance)) {
          monster.meta.slowTimer = bullet.meta.slowMs || 1200;
          monster.refresh();
        }
        if (this.stats.blastRadius > 0 || bullet.meta.blastRadius > 0) {
          const blastRadius = Math.max(this.stats.blastRadius, bullet.meta.blastRadius);
          this.blast(bullet.x, bullet.y, blastRadius, bullet.meta.damage * 0.45);
        }

        if (bullet.meta.pierceLeft <= 0) {
          bullet.destroy();
          this.bullets.remove(bullet, false);
        } else {
          bullet.meta.pierceLeft -= 1;
        }
        break;
      }
    });
  }

  damageMonstersInRadius(x, y, radius, damage, slowMs = 0) {
    this.monsters.getChildren().forEach((monster) => {
      if (Phaser.Math.Distance.Between(x, y, monster.x, monster.y) > radius) {
        return;
      }
      const killed = this.hitMonster(monster, damage);
      if (!killed && slowMs > 0) {
        monster.meta.slowTimer = slowMs;
        monster.refresh();
      }
    });
  }

  damageMonstersInVerticalBeam(centerX, width, damage) {
    this.monsters.getChildren().slice().forEach((monster) => {
      if (monster.y > BARRICADE_Y + 8 || Math.abs(monster.x - centerX) > width / 2 + monster.meta.radius * 0.45) {
        return;
      }
      const killed = this.hitMonster(monster, damage);
      if (!killed) {
        this.flashAt(monster.x, monster.y, 0x8df7ff, 12);
      }
    });
  }

  makeLaserFlowSpark() {
    const x = GAME_WIDTH / 2 + Phaser.Math.Between(-38, 38);
    const spark = this.add.rectangle(x, BARRICADE_Y + 4, Phaser.Math.Between(3, 8), Phaser.Math.Between(30, 64), 0xeaffff, 0.76).setDepth(13);
    this.effects.add(spark);
    this.tweens.add({
      targets: spark,
      y: Phaser.Math.Between(80, 220),
      alpha: 0,
      duration: Phaser.Math.Between(360, 520),
      onComplete: () => spark.destroy(),
    });
  }

  damageMonstersOnLine(startX, startY, endX, endY, thickness, damage) {
    const dx = endX - startX;
    const dy = endY - startY;
    const lenSq = dx * dx + dy * dy || 1;
    this.monsters.getChildren().forEach((monster) => {
      const t = Phaser.Math.Clamp(((monster.x - startX) * dx + (monster.y - startY) * dy) / lenSq, 0, 1);
      const nearestX = startX + dx * t;
      const nearestY = startY + dy * t;
      const dist = Phaser.Math.Distance.Between(monster.x, monster.y, nearestX, nearestY);
      if (dist <= thickness + monster.meta.radius * 0.4) {
        this.hitMonster(monster, damage);
      }
    });
  }

  hitMonster(monster, damage) {
    monster.meta.hp -= damage;
    if (monster.meta.hp <= 0) {
      this.score += (monster.meta.isBoss ? 25 : 5) + this.stage;
      this.flashAt(monster.x, monster.y, 0xf6d365);
      this.playSfx("sfxHit", { throttle: 55, volume: monster.meta.isBoss ? 0.5 : 0.34, detune: monster.meta.isBoss ? -280 : 0 });
      monster.meta.parts.forEach((part) => part.destroy());
      monster.destroy();
      this.stageKillCount += 1;
      this.killsSinceReward += 1;
      if (this.state === "playing" && this.killsSinceReward >= KILL_REWARD_INTERVAL && (this.spawned < this.totalMonsters || this.monsters.countActive(true) > 0)) {
        this.killsSinceReward = 0;
        this.pendingKillReward = true;
        this.rewardHoldUntil = Math.max(this.rewardHoldUntil, this.time.now + 220);
      }
      return true;
    }
    this.playSfx("sfxHit", { throttle: 75, volume: 0.22 });
    monster.refresh();
    return false;
  }

  blast(x, y, radius, damage) {
    this.flashAt(x, y, 0xf08b4f, radius);
    this.monsters.getChildren().forEach((monster) => {
      if (Phaser.Math.Distance.Between(x, y, monster.x, monster.y) <= radius) {
        this.hitMonster(monster, damage);
      }
    });
  }

  flashAt(x, y, color, radius = 18) {
    const effect = this.add.circle(x, y, radius, color, 0.32);
    this.effects.add(effect);
    this.tweens.add({
      targets: effect,
      alpha: 0,
      scale: 1.8,
      duration: 220,
      onComplete: () => effect.destroy(),
    });
  }

  damageBarricade(amount) {
    this.barricadeHp = Math.max(0, this.barricadeHp - amount);
    this.playSfx("sfxBarrierHit", { throttle: 180, volume: 0.5 });
    this.cameras.main.shake(90, 0.004);
  }

  updateHud() {
    const info = this.currentStageInfo ?? this.getStageInfo();
    this.stageText.setText(`${this.stage}/${info.maxStage} ${info.map.title}-${info.enemyTier + 1}`);
    this.timerText.setText(`TIME ${Math.max(0, Math.ceil(this.stageClock))}`);
    this.monsterText.setText(`MON ${this.monsters.countActive(true)}`);
    this.pointText.setText(`PTS ${this.score}`);
    this.hpText.setText(`BARRICADE ${Math.ceil(this.barricadeHp)} / ${this.barricadeMaxHp}`);
    this.hpBar.width = 260 * Math.max(0, this.barricadeHp / this.barricadeMaxHp);
  }

  stageClear() {
    this.pendingKillReward = false;
    this.state = "reward";
    this.clearProjectilesAndEffects();
    if (this.stage >= this.activeMapSequence.length * STAGES_PER_MAP) {
      this.showEndingSequence();
      return;
    }
    this.showCardChoices({ stageComplete: true });
  }

  gameOver(reason) {
    this.pendingKillReward = false;
    this.state = "gameover";
    this.clearProjectilesAndEffects();
    this.playBgm("bgmTitle");
    this.showEndOverlay(reason);
  }

  clearProjectilesAndEffects() {
    this.destroyGroupObjects(this.bullets);
    this.destroyGroupObjects(this.effects);
    [this.defender, ...this.allies].filter(Boolean).forEach((combatant) => {
      combatant.meta.chatterBubble = null;
    });
  }

  showKillReward() {
    this.pendingKillReward = false;
    this.state = "reward";
    this.clearProjectilesAndEffects();
    this.showCardChoices({
      stageComplete: false,
      title: `${KILL_REWARD_INTERVAL} KILL 보상`,
      subtitle: "전투 보상 카드 1개 선택",
    });
  }

  showCardChoices(options = {}) {
    const stageComplete = options.stageComplete ?? true;
    this.overlay = this.add.group();
    const shade = this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, 0x070b09, 0.76);
    this.overlay.add(shade);
    this.overlay.add(
      this.add.text(GAME_WIDTH / 2, 176, options.title ?? `STAGE ${this.stage} CLEAR`, {
        fontSize: "24px",
        color: "#fff4c5",
        fontStyle: "800",
      }).setOrigin(0.5)
    );
    this.overlay.add(
      this.add.text(GAME_WIDTH / 2, 212, options.subtitle ?? "스킬 카드 1개 선택", {
        fontSize: "15px",
        color: "#cfe5bb",
        fontStyle: "700",
      }).setOrigin(0.5)
    );

    Phaser.Utils.Array.Shuffle(this.getRewardCards())
      .slice(0, 3)
      .forEach((card, index) => {
        const y = 302 + index * 126;
        const rect = this.add
          .rectangle(GAME_WIDTH / 2, y, 304, 92, 0xf2e3ba, 0.96)
          .setStrokeStyle(3, 0x5a3e25, 1)
          .setInteractive({ useHandCursor: true });
        const title = this.add.text(76, y - 29, card.title, {
          fontSize: "20px",
          color: "#302015",
          fontStyle: "800",
        });
        const desc = this.add.text(76, y + 8, card.desc, {
          fontSize: "15px",
          color: "#4c3826",
          fontStyle: "700",
        });
        rect.on("pointerdown", () => {
          this.playSfx("sfxClick", { volume: 0.5 });
          this.clearProjectilesAndEffects();
          card.apply(this);
          if (stageComplete) {
            this.stage += 1;
            this.startStage();
          } else {
            this.clearOverlay();
            this.state = "playing";
            this.spawnTimer = Math.min(this.spawnTimer, 180);
          }
        });
        this.overlay.add(rect);
        this.overlay.add(title);
        this.overlay.add(desc);
      });
  }

  getRewardCards() {
    const cards = cardPool.slice();
    [this.defender, ...this.allies]
      .filter((combatant) => combatant?.visible)
      .forEach((combatant) => {
        const vfx = vfxDefinitions[combatant.meta.id];
        [1, 2].forEach((skillNumber) => {
          if (this.isSkillUnlocked(combatant.meta.id, skillNumber)) {
            return;
          }
          cards.push({
            title: `${combatant.meta.name} ${skillNumber}`,
            desc: `${vfx.skillNames[skillNumber - 1]} 해금`,
            apply: (scene) => {
              scene.unlockSkill(combatant.meta.id, skillNumber);
            },
          });
        });
      });
    return cards;
  }

  showEndingSequence() {
    this.state = "ending";
    this.setBattleUiVisible(false);
    this.playBgm("bgmTitle");
    this.clearOverlay();
    this.showEndingScene(0);
  }

  showEndingScene(index) {
    const scenes = [
      {
        bgKey: "mapForest",
        imageKey: "cutsceneMage",
        side: "left",
        title: "균열의 끝",
        line: "마지막 적이 쓰러지자 숲과 도시를 잇던 균열이 천천히 닫히기 시작했다.",
      },
      {
        bgKey: "mapSchoolyard",
        imageKey: "cutsceneSchoolgirl",
        side: "right",
        title: "돌아온 일상",
        line: "무너졌던 길 위로 다시 빛이 들었다. 모두가 함께 버텼기에 두 세계는 살아남았다.",
      },
      {
        bgKey: "mapHanRiver",
        imageKey: "cutsceneSchoolboy",
        side: "left",
        title: "고마웠어",
        line: "도와줘서 고마워. 다음에 또 균열이 열린다면, 우리는 다시 같은 방어선에 설 거야.",
      },
    ];
    const scene = scenes[index];
    if (!scene) {
      this.showCredits();
      return;
    }

    this.clearOverlay();
    this.mapImage.setTexture(scene.bgKey);
    this.overlay = this.add.group();
    const shade = this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, 0x050706, 0.54).setDepth(70);
    const fromLeft = scene.side === "left";
    const art = this.add.image(fromLeft ? -110 : GAME_WIDTH + 110, 456, scene.imageKey).setDepth(72);
    art.setScale(590 / art.height);
    if (!fromLeft) {
      art.setFlipX(true);
    }
    const title = this.add.text(28, 120, scene.title, {
      fontSize: "28px",
      color: "#fff1bf",
      fontStyle: "900",
      stroke: "#15100b",
      strokeThickness: 6,
    }).setDepth(73);
    const captionBack = this.add.rectangle(GAME_WIDTH / 2, 688, GAME_WIDTH, 112, 0x050505, 0.52).setDepth(73);
    const line = this.add.text(30, 650, scene.line, {
      fontSize: "18px",
      color: "#fff4d0",
      fontStyle: "900",
      stroke: "#17120d",
      strokeThickness: 4,
      wordWrap: { width: 330, useAdvancedWrap: true },
      lineSpacing: 7,
    }).setDepth(74);
    const next = this.add
      .rectangle(GAME_WIDTH / 2, 772, 158, 42, 0xe3c06a, 0.96)
      .setStrokeStyle(2, 0x2c2117, 1)
      .setDepth(74);
    const nextText = this.add.text(GAME_WIDTH / 2, 772, index >= scenes.length - 1 ? "크레딧" : "다음", {
      fontSize: "16px",
      color: "#241a11",
      fontStyle: "900",
    }).setOrigin(0.5).setDepth(75);
    [shade, art, title, captionBack, line, next, nextText].forEach((object) => this.overlay.add(object));
    [title, captionBack, line, next, nextText].forEach((object) => object.setAlpha(0));
    this.tweens.add({ targets: art, x: fromLeft ? 112 : 278, duration: 360, ease: "Back.easeOut" });
    this.tweens.add({ targets: [title, captionBack, line, next, nextText], alpha: 1, duration: 220, delay: 180 });
    const enableNext = this.time.delayedCall(420, () => {
      next.setInteractive({ useHandCursor: true });
      next.on("pointerdown", () => {
        this.playSfx("sfxClick", { volume: 0.46 });
        this.showEndingScene(index + 1);
      });
    });
    this.pendingSkillEvents.push(enableNext);
  }

  showCredits() {
    this.clearOverlay();
    this.overlay = this.add.group();
    const shade = this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, 0x050706, 0.84).setDepth(80);
    const title = this.add.text(GAME_WIDTH / 2, 124, "THE END", {
      fontSize: "38px",
      color: "#fff1bf",
      fontStyle: "900",
      stroke: "#15100b",
      strokeThickness: 6,
    }).setOrigin(0.5).setDepth(81);
    const credits = this.add.text(GAME_WIDTH / 2, 262, "균열 방어선\n\n기획 / 개발 / 임시 아트 / 임시 사운드\nAI Prototype\n\n플레이해줘서 고마워.", {
      fontSize: "18px",
      color: "#f6ecd0",
      fontStyle: "800",
      align: "center",
      lineSpacing: 12,
    }).setOrigin(0.5, 0).setDepth(81);
    const restart = this.add
      .rectangle(GAME_WIDTH / 2, 706, 190, 52, 0xe3c06a, 0.96)
      .setStrokeStyle(2, 0x2c2117, 1)
      .setInteractive({ useHandCursor: true })
      .setDepth(81);
    const restartText = this.add.text(GAME_WIDTH / 2, 706, "처음으로", {
      fontSize: "18px",
      color: "#241a11",
      fontStyle: "900",
    }).setOrigin(0.5).setDepth(82);
    [shade, title, credits, restart, restartText].forEach((object) => this.overlay.add(object));
    restart.on("pointerdown", () => {
      this.playSfx("sfxClick", { volume: 0.5 });
      this.scene.restart();
    });
  }

  showEndOverlay(reason) {
    this.overlay = this.add.group();
    this.overlay.add(this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, 0x070b09, 0.78));
    this.overlay.add(
      this.add.text(GAME_WIDTH / 2, 304, "GAME OVER", {
        fontSize: "32px",
        color: "#ffcf9a",
        fontStyle: "900",
      }).setOrigin(0.5)
    );
    this.overlay.add(
      this.add.text(GAME_WIDTH / 2, 350, reason, {
        fontSize: "18px",
        color: "#f5ead4",
        fontStyle: "700",
      }).setOrigin(0.5)
    );
    const retry = this.add
      .rectangle(GAME_WIDTH / 2, 430, 190, 54, 0xe9d19f, 1)
      .setStrokeStyle(3, 0x4a3321, 1)
      .setInteractive({ useHandCursor: true });
    this.overlay.add(retry);
    this.overlay.add(
      this.add.text(GAME_WIDTH / 2, 430, "다시 시작", {
        fontSize: "18px",
        color: "#2c2119",
        fontStyle: "800",
      }).setOrigin(0.5)
    );
    retry.on("pointerdown", () => {
      this.playSfx("sfxClick", { volume: 0.5 });
      this.scene.restart();
    });
  }

  clearOverlay() {
    if (this.overlay) {
      this.overlay.destroy(true);
      this.overlay = null;
    }
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: "#101614",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: DefenseScene,
};

new Phaser.Game(config);
