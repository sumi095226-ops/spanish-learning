const DATA = {
  vowels: [
    {letter:"A", sound:"啊", example:"casa", zh:"家"},
    {letter:"E", sound:"欸", example:"mesa", zh:"桌子"},
    {letter:"I", sound:"衣", example:"vino", zh:"葡萄酒"},
    {letter:"O", sound:"喔", example:"hola", zh:"你好"},
    {letter:"U", sound:"烏", example:"uno", zh:"一"}
  ],
  vocab: [
    ["問候","hola","你好"],["問候","buenos días","早安"],["問候","buenas tardes","午安"],["問候","buenas noches","晚安"],
    ["問候","gracias","謝謝"],["問候","por favor","請"],["問候","perdón","不好意思／對不起"],["問候","adiós","再見"],
    ["基本","sí","是"],["基本","no","不是／不"],["基本","bien","好"],["基本","mal","不好"],
    ["基本","aquí","這裡"],["基本","allí","那裡"],["基本","hoy","今天"],["基本","mañana","明天／早上"],
    ["數字","uno","一"],["數字","dos","二"],["數字","tres","三"],["數字","cuatro","四"],
    ["數字","cinco","五"],["數字","diez","十"],["數字","veinte","二十"],["數字","cien","一百"],
    ["飲食","agua","水"],["飲食","café","咖啡"],["飲食","cerveza","啤酒"],["飲食","comida","食物／餐"],
    ["飲食","pan","麵包"],["飲食","pollo","雞肉"],["飲食","pescado","魚"],["飲食","cuenta","帳單"],
    ["旅行","hotel","飯店"],["旅行","aeropuerto","機場"],["旅行","estación","車站"],["旅行","billete","票"],
    ["旅行","baño","廁所"],["旅行","calle","街道"],["旅行","derecha","右邊"],["旅行","izquierda","左邊"],
    ["人物","amigo","男性朋友"],["人物","amiga","女性朋友"],["人物","hombre","男人"],["人物","mujer","女人"],
    ["時間","ahora","現在"],["時間","tarde","下午／晚"],["時間","noche","晚上"],["時間","hora","小時／時間"]
  ],
  grammar: [
    {
      title:"Ser：身分、特徵",
      formula:"ser = 是（較固定的身分／特徵）",
      rule:"最常見現在式：yo soy、tú eres、él/ella es、nosotros somos、ellos son。",
      examples:[["Soy de Taiwán.","我來自台灣。"],["Ella es médica.","她是醫生。"],["Somos amigos.","我們是朋友。"]]
    },
    {
      title:"Estar：狀態、位置",
      formula:"estar = 處於／在",
      rule:"用於當下狀態與位置。常見：estoy、estás、está、estamos、están。",
      examples:[["Estoy bien.","我很好。"],["El hotel está aquí.","飯店在這裡。"],["Estamos cansados.","我們累了。"]]
    },
    {
      title:"名詞有性別",
      formula:"el + 陽性名詞 ／ la + 陰性名詞",
      rule:"很多 -o 結尾是陽性、-a 結尾是陰性，但有例外。先連冠詞一起背最實用。",
      examples:[["el libro","書"],["la casa","家／房子"],["el problema","問題（例外：陽性）"]]
    },
    {
      title:"不定冠詞",
      formula:"un / una = 一個",
      rule:"un 通常搭陽性，una 通常搭陰性。",
      examples:[["un café","一杯咖啡"],["una cerveza","一杯啤酒"],["un hotel","一間飯店"]]
    },
    {
      title:"現在式：-ar 動詞",
      formula:"hablar → hablo / hablas / habla",
      rule:"規則 -ar 動詞去掉 -ar，再依主詞改變字尾。初期先熟 yo、tú、usted。",
      examples:[["Hablo español.","我說西班牙文。"],["¿Hablas inglés?","你會說英文嗎？"],["Ella trabaja aquí.","她在這裡工作。"]]
    },
    {
      title:"問句不用倒裝",
      formula:"¿ + 原句 + ?",
      rule:"語序常和直述句很接近，靠語調與問號表達。西班牙文問句開頭要有倒問號 ¿。",
      examples:[["¿Hablas inglés?","你會說英文嗎？"],["¿Dónde está el baño?","廁所在哪裡？"],["¿Cuánto cuesta?","多少錢？"]]
    }
  ],
  scenarios: {
    "初次見面":[
      ["A","Hola, ¿cómo te llamas?","你好，你叫什麼名字？"],
      ["B","Me llamo Sumi. ¿Y tú?","我叫 Sumi。你呢？"],
      ["A","Soy Ana. Mucho gusto.","我是 Ana。很高興認識你。"],
      ["B","Igualmente.","我也是。"]
    ],
    "餐廳":[
      ["A","Una mesa para una persona, por favor.","一人桌，謝謝。"],
      ["B","Claro. Por aquí.","當然，這邊請。"],
      ["A","Quiero un café y agua, por favor.","我要一杯咖啡和水，謝謝。"],
      ["A","La cuenta, por favor.","麻煩結帳。"]
    ],
    "問路":[
      ["A","Perdón, ¿dónde está la estación?","不好意思，車站在哪裡？"],
      ["B","Todo recto y luego a la derecha.","一直走，然後右轉。"],
      ["A","¿Está lejos?","很遠嗎？"],
      ["B","No, está muy cerca.","不，很近。"]
    ],
    "飯店":[
      ["A","Tengo una reserva.","我有預訂。"],
      ["B","¿A nombre de quién?","請問是什麼名字？"],
      ["A","A nombre de Sumi.","名字是 Sumi。"],
      ["A","¿A qué hora es el desayuno?","早餐幾點？"]
    ],
    "購物":[
      ["A","¿Cuánto cuesta esto?","這個多少錢？"],
      ["B","Cuesta veinte euros.","20 歐元。"],
      ["A","¿Puedo pagar con tarjeta?","可以刷卡嗎？"],
      ["B","Sí, claro.","可以，當然。"]
    ]
  }
};


const PLACEMENT_LEVELS = ["A1","A2","B1","B2"];

const PLACEMENT_QUESTIONS = [
  {level:0,q:"¿Cómo te llamas? 是什麼意思？",correct:"你叫什麼名字？",options:["你叫什麼名字？","你住在哪裡？","你幾歲？","你要去哪裡？"]},
  {level:0,q:"Yo ___ estudiante.",correct:"soy",options:["soy","eres","está","son"]},
  {level:0,q:"「兩杯咖啡」是哪一個？",correct:"dos cafés",options:["dos cafés","tres cafés","un café","cinco cafés"]},
  {level:0,q:"¿Dónde está el baño? 是什麼意思？",correct:"廁所在哪裡？",options:["廁所在哪裡？","飯店多少錢？","幾點吃早餐？","車站遠嗎？"]},
  {level:0,q:"Ella ___ de México.",correct:"es",options:["es","soy","eres","estoy"]},
  {level:0,q:"「謝謝」的西班牙文是？",correct:"gracias",options:["gracias","perdón","hola","adiós"]},

  {level:1,q:"Ayer ___ al cine.",correct:"fui",options:["fui","voy","iba","iré"]},
  {level:1,q:"Vivo aquí ___ 2024.",correct:"desde",options:["desde","por","para","hasta"]},
  {level:1,q:"Mi hermano es ___ alto que yo.",correct:"más",options:["más","muy","tan","mucho"]},
  {level:1,q:"¿Qué significa «todavía»?",correct:"仍然／還",options:["仍然／還","從不","立刻","也許"]},
  {level:1,q:"Esta mochila es ___ pesada que esa.",correct:"menos",options:["menos","muy","mucho","tan"]},
  {level:1,q:"¿Has ___ alguna vez en España?",correct:"estado",options:["estado","estás","estar","estuve"]},

  {level:2,q:"Cuando era niño, ___ al fútbol todos los días.",correct:"jugaba",options:["jugaba","jugué","jugaré","jugaría"]},
  {level:2,q:"Espero que ___ mañana.",correct:"vengas",options:["vengas","vienes","vendrás","venir"]},
  {level:2,q:"Este regalo es ___ ti.",correct:"para",options:["para","por","de","a"]},
  {level:2,q:"Si tengo tiempo esta noche, te ___.",correct:"llamaré",options:["llamaré","llamara","llamaba","llamé"]},
  {level:2,q:"No salí porque ___ lloviendo.",correct:"estaba",options:["estaba","era","fue","sea"]},
  {level:2,q:"Busco un piso que ___ cerca del centro.",correct:"esté",options:["esté","está","estuvo","estará"]},

  {level:3,q:"Si lo hubiera sabido, no ___.",correct:"habría ido",options:["habría ido","fui","iría","iba"]},
  {level:3,q:"No creo que ___ suficiente tiempo.",correct:"tengamos",options:["tengamos","tenemos","tendremos","tuvimos"]},
  {level:3,q:"Lleva tres años ___ español.",correct:"estudiando",options:["estudiando","estudiado","estudiar","estudia"]},
  {level:3,q:"Por mucho que lo ___, no consigo entenderlo.",correct:"lea",options:["lea","leo","leeré","leí"]},
  {level:3,q:"De haberlo sabido, te ___ antes.",correct:"habría avisado",options:["habría avisado","avisaba","avisé","avisaré"]},
  {level:3,q:"Me sorprendió que no me ___.",correct:"hubieras llamado",options:["hubieras llamado","has llamado","llamarás","llamabas"]}
];

const PLACEMENT_PATHS = {
  A1:{label:"A1 基礎",section:"pronunciation",path:"發音入門",button:"從發音入門開始",desc:"先建立發音、基本單字與最常用句型，之後再往文法與會話前進。"},
  A2:{label:"A2 初級",section:"grammar",path:"句型文法",button:"從句型文法開始",desc:"你的基礎單字已有一定程度，建議直接從核心文法開始，遇到不熟單字再回頭補。"},
  B1:{label:"B1 中級",section:"conversation",path:"情境會話",button:"從情境會話開始",desc:"你已經具備日常溝通基礎，建議跳過最前面的入門內容，直接進入情境應用與測驗。"},
  B2:{label:"B2 中高級",section:"conversation",path:"情境會話＋測驗",button:"直接進入應用練習",desc:"你的基礎已高於本站入門內容，系統會保留 B2 程度，建議直接使用情境會話與測驗做複習。"}
};

let placementAbility = 0;
let placementAsked = 0;
let placementCorrect = 0;
let placementCurrent = null;
let placementUsed = new Set();
let placementCanClose = false;
const PLACEMENT_TOTAL = 10;

function experienceSeed(value){
  return [0.05,0.45,1.15,1.95,2.7][Number(value)] ?? 0.05;
}

function openPlacement(canClose = true){
  placementCanClose = canClose;
  $("#placementOverlay").classList.remove("hidden");
  $("#placementCloseBtn").classList.toggle("hidden", !canClose);
  $("#placementIntro").classList.remove("hidden");
  $("#placementQuiz").classList.add("hidden");
  $("#placementResult").classList.add("hidden");
}

function closePlacement(){
  if(placementCanClose) $("#placementOverlay").classList.add("hidden");
}

function startPlacement(experience){
  placementAbility = experienceSeed(experience);
  placementAsked = 0;
  placementCorrect = 0;
  placementUsed = new Set();
  $("#placementIntro").classList.add("hidden");
  $("#placementResult").classList.add("hidden");
  $("#placementQuiz").classList.remove("hidden");
  renderPlacementQuestion();
}

function choosePlacementQuestion(){
  let target = Math.max(0, Math.min(3, Math.round(placementAbility)));
  for(let distance=0; distance<4; distance++){
    for(const candidate of [target-distance,target+distance]){
      if(candidate < 0 || candidate > 3) continue;
      const available = PLACEMENT_QUESTIONS.filter((q,i)=>q.level===candidate && !placementUsed.has(i));
      if(available.length){
        const q = available[Math.floor(Math.random()*available.length)];
        const idx = PLACEMENT_QUESTIONS.indexOf(q);
        placementUsed.add(idx);
        return q;
      }
    }
  }
  return null;
}

function renderPlacementQuestion(){
  placementCurrent = choosePlacementQuestion();
  if(!placementCurrent){ finishPlacement(); return; }

  $("#placementCount").textContent = `${placementAsked+1} / ${PLACEMENT_TOTAL}`;
  $("#placementProgress").style.width = `${(placementAsked/PLACEMENT_TOTAL)*100}%`;
  $("#placementDifficulty").textContent = PLACEMENT_LEVELS[placementCurrent.level];
  $("#placementQuestion").textContent = placementCurrent.q;
  $("#placementFeedback").textContent = "";
  $("#placementNextBtn").classList.add("hidden");

  const options = shuffle(placementCurrent.options);
  $("#placementOptions").innerHTML = options.map(o =>
    `<button class="placement-option" data-placement-answer="${o.replaceAll('"','&quot;')}">${o}</button>`
  ).join("");

  $("#placementOptions .placement-option").forEach(btn=>{
    btn.onclick = ()=>answerPlacement(btn);
  });
}

function answerPlacement(btn){
  const answer = btn.dataset.placementAnswer;
  const isCorrect = answer === placementCurrent.correct;
  const difficulty = placementCurrent.level;

  // 簡化的自適應能力更新：答對較難題提升更多，答錯較簡單題下降更多。
  const expected = 1 / (1 + Math.exp((difficulty - placementAbility) * 1.55));
  placementAbility += 0.72 * ((isCorrect ? 1 : 0) - expected);
  placementAbility = Math.max(0, Math.min(3.25, placementAbility));

  placementAsked++;
  if(isCorrect) placementCorrect++;

  $("#placementOptions .placement-option").forEach(b=>{
    b.disabled = true;
    if(b.dataset.placementAnswer === placementCurrent.correct) b.classList.add("correct");
    else if(b === btn) b.classList.add("wrong");
  });

  $("#placementFeedback").textContent = isCorrect
    ? "✓ 正確"
    : `答案：${placementCurrent.correct}`;

  $("#placementProgress").style.width = `${(placementAsked/PLACEMENT_TOTAL)*100}%`;
  $("#placementNextBtn").textContent = placementAsked >= PLACEMENT_TOTAL ? "查看程度" : "下一題";
  $("#placementNextBtn").classList.remove("hidden");
}

function calculatedPlacementLevel(){
  if(placementAbility < 0.72) return "A1";
  if(placementAbility < 1.48) return "A2";
  if(placementAbility < 2.35) return "B1";
  return "B2";
}

function finishPlacement(){
  const level = calculatedPlacementLevel();
  const path = PLACEMENT_PATHS[level];

  state.placementLevel = level;
  state.placementScore = placementCorrect;
  state.placementAbility = Number(placementAbility.toFixed(2));
  save();
  applyPlacementLevel();

  $("#placementQuiz").classList.add("hidden");
  $("#placementResult").classList.remove("hidden");
  $("#placementCloseBtn").classList.remove("hidden");
  placementCanClose = true;
  $("#placementLevelBadge").textContent = level;
  $("#placementResultTitle").textContent = `建議程度：${path.label}`;
  $("#placementResultText").textContent = path.desc;
  $("#placementCorrect").textContent = `${placementCorrect} / ${PLACEMENT_TOTAL}`;
  $("#placementPath").textContent = path.path;
  $("#placementStartLearningBtn").textContent = path.button;
  $("#placementStartLearningBtn").dataset.targetSection = path.section;
}

function applyPlacementLevel(){
  const level = state.placementLevel;
  if(!level){
    $("#currentLevel").textContent = "尚未測驗";
    $("#homeLevelLabel").textContent = "SPANISH · LEVEL CHECK";
    $("#recommendedStartBtn").textContent = "先測程度";
    $("#recommendedStartBtn").dataset.go = "";
    return;
  }

  const path = PLACEMENT_PATHS[level];
  $("#currentLevel").textContent = path.label;
  $("#homeLevelLabel").textContent = `SPANISH · ${level}`;
  $("#recommendedStartBtn").textContent = path.button;
  $("#recommendedStartBtn").dataset.go = path.section;
}

function resetPlacementOnly(){
  state.placementLevel = null;
  state.placementScore = null;
  state.placementAbility = null;
  save();
  applyPlacementLevel();
  openPlacement(true);
}

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const state = JSON.parse(localStorage.getItem("holaProgress") || '{"completed":[],"known":[],"best":null,"lastVisit":null,"streak":1}');
const save = () => localStorage.setItem("holaProgress", JSON.stringify(state));

function updateVisit(){
  const today = new Date().toISOString().slice(0,10);
  if(!state.lastVisit){ state.streak = 1; }
  else if(state.lastVisit !== today){
    const prev = new Date(state.lastVisit);
    const now = new Date(today);
    const diff = Math.round((now-prev)/86400000);
    state.streak = diff === 1 ? (state.streak||1)+1 : 1;
  }
  state.lastVisit = today; save();
}
updateVisit();

let spanishVoice = null;
let highQualityAudioManifest = null;
let highQualityManifestPromise = null;
let currentHighQualityAudio = null;

async function loadHighQualityAudioManifest(){
  if(highQualityAudioManifest) return highQualityAudioManifest;
  if(highQualityManifestPromise) return highQualityManifestPromise;

  highQualityManifestPromise = fetch("audio/manifest.json", {cache:"no-cache"})
    .then(r => r.ok ? r.json() : {})
    .catch(() => ({}))
    .then(data => {
      highQualityAudioManifest = data || {};
      return highQualityAudioManifest;
    });

  return highQualityManifestPromise;
}

function pickNaturalSpanishVoice(){
  const voices = speechSynthesis.getVoices();
  const spanish = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith("es"));
  if(!spanish.length) return null;

  const score = v => {
    const name = (v.name || "").toLowerCase();
    const lang = (v.lang || "").toLowerCase();
    let s = 0;
    if(name.includes("natural")) s += 100;
    if(name.includes("neural")) s += 95;
    if(name.includes("online")) s += 85;
    if(name.includes("google")) s += 75;
    if(name.includes("microsoft")) s += 65;
    if(lang === "es-mx") s += 18;
    if(lang === "es-us") s += 16;
    if(lang === "es-es") s += 14;
    return s;
  };

  return spanish.sort((a,b) => score(b) - score(a))[0];
}

function refreshSpanishVoice(){
  if("speechSynthesis" in window) spanishVoice = pickNaturalSpanishVoice();
}
refreshSpanishVoice();
if("speechSynthesis" in window){
  speechSynthesis.onvoiceschanged = refreshSpanishVoice;
}

async function speak(text){
  if(currentHighQualityAudio){
    currentHighQualityAudio.pause();
    currentHighQualityAudio.currentTime = 0;
    currentHighQualityAudio = null;
  }
  if("speechSynthesis" in window) speechSynthesis.cancel();

  try{
    const manifest = await loadHighQualityAudioManifest();
    const audioPath = manifest[text];
    if(audioPath){
      const audio = new Audio(audioPath);
      currentHighQualityAudio = audio;
      audio.addEventListener("ended", ()=>{ if(currentHighQualityAudio === audio) currentHighQualityAudio = null; }, {once:true});
      await audio.play();
      return;
    }
  }catch(e){
    console.warn("High-quality audio unavailable; using browser fallback.", e);
  }

  if(!("speechSynthesis" in window)){
    alert("目前無法播放語音");
    return;
  }

  const u = new SpeechSynthesisUtterance(text);
  if(!spanishVoice) refreshSpanishVoice();
  if(spanishVoice){
    u.voice = spanishVoice;
    u.lang = spanishVoice.lang;
  }else{
    u.lang = "es-ES";
  }
  u.rate = .92;
  u.pitch = 1.0;
  u.volume = 1.0;
  speechSynthesis.speak(u);
}
document.addEventListener("click", e=>{
  const s = e.target.closest("[data-speak]");
  if(s){ e.stopPropagation(); speak(s.dataset.speak); }
});

function go(section){
  $$(".page").forEach(p=>p.classList.toggle("active", p.id===section));
  $$(".nav-item").forEach(n=>n.classList.toggle("active", n.dataset.section===section));
  window.scrollTo({top:0,behavior:"smooth"});
  $("#sidebar").classList.remove("open");
}
$$("[data-go]").forEach(x=>x.addEventListener("click",()=>go(x.dataset.go)));
$$(".nav-item").forEach(x=>x.addEventListener("click",()=>go(x.dataset.section)));
$("#menuBtn").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));

$(".experience-btn").forEach(b=>b.onclick=()=>startPlacement(b.dataset.experience));
$("#placementNextBtn").onclick=()=> placementAsked >= PLACEMENT_TOTAL ? finishPlacement() : renderPlacementQuestion();
$("#placementCloseBtn").onclick=closePlacement;
$("#placementBtn").onclick=()=>openPlacement(true);
$("#placementRetryBtn").onclick=()=>openPlacement(true);
$("#placementStartLearningBtn").onclick=()=>{
  const section = $("#placementStartLearningBtn").dataset.targetSection || "pronunciation";
  $("#placementOverlay").classList.add("hidden");
  go(section);
};
$("#recommendedStartBtn").onclick=(e)=>{
  e.preventDefault();
  if(!state.placementLevel) openPlacement(false);
  else go(PLACEMENT_PATHS[state.placementLevel].section);
};


function renderVowels(){
  $("#vowelGrid").innerHTML = DATA.vowels.map(v=>`
    <div class="vowel">
      <strong>${v.letter}</strong><span>${v.sound}</span><small>${v.example} · ${v.zh}</small>
      <button class="sound-btn" data-speak="${v.example}">▶</button>
    </div>`).join("");
}

let activeVocab="全部";
function renderVocabFilters(){
  const cats=["全部",...new Set(DATA.vocab.map(v=>v[0]))];
  $("#vocabFilters").innerHTML=cats.map(c=>`<button class="filter-btn ${c===activeVocab?"active":""}" data-cat="${c}">${c}</button>`).join("");
  $$("#vocabFilters .filter-btn").forEach(b=>b.onclick=()=>{activeVocab=b.dataset.cat;renderVocabFilters();renderVocab();});
}
function renderVocab(){
  const rows=DATA.vocab.filter(v=>activeVocab==="全部"||v[0]===activeVocab);
  $("#vocabGrid").innerHTML=rows.map(v=>{
    const known=state.known.includes(v[1]);
    return `<article class="vocab-card ${known?"known":""}">
      <div class="word">${v[1]}</div><div class="translation">${v[2]}</div>
      <div class="vocab-actions">
        <button class="tiny-btn" data-speak="${v[1]}">▶ 發音</button>
        <button class="tiny-btn known-btn" data-known="${v[1]}">${known?"✓ 已會":"標記已會"}</button>
      </div>
    </article>`;
  }).join("");
  $$("[data-known]").forEach(b=>b.onclick=()=>{
    const w=b.dataset.known;
    state.known=state.known.includes(w)?state.known.filter(x=>x!==w):[...state.known,w];
    save();renderVocab();updateProgress();
  });
}

function renderGrammar(){
  $("#grammarList").innerHTML=DATA.grammar.map((g,i)=>`
    <article class="grammar-card">
      <span class="tag">0${i+1}</span><h2>${g.title}</h2>
      <div class="formula">${g.formula}</div><div class="rule">${g.rule}</div>
      <div class="sentence-list">
        ${g.examples.map(x=>`<div class="sentence"><div><strong>${x[0]}</strong><small>${x[1]}</small></div><button class="sound-btn" data-speak="${x[0]}">▶</button></div>`).join("")}
      </div>
    </article>`).join("");
}

let currentScenario=Object.keys(DATA.scenarios)[0];
function renderScenarios(){
  $("#scenarioTabs").innerHTML=Object.keys(DATA.scenarios).map(s=>`<button class="scenario-btn ${s===currentScenario?"active":""}" data-scenario="${s}">${s}</button>`).join("");
  $$("#scenarioTabs .scenario-btn").forEach(b=>b.onclick=()=>{currentScenario=b.dataset.scenario;renderScenarios();renderConversation();});
}
function renderConversation(){
  const rows=DATA.scenarios[currentScenario];
  $("#conversationCard").innerHTML=`
    <div class="scenario-title"><h2>${currentScenario}</h2><span class="muted">跟著唸 2 次</span></div>
    <div class="dialogue">${rows.map((r,i)=>`
      <div class="bubble ${r[0]==="B"?"me":""}">
        <strong>${r[1]}</strong><span>${r[2]}</span><button class="sound-btn" data-speak="${r[1]}">▶</button>
      </div>`).join("")}</div>`;
}

function complete(section){
  if(!state.completed.includes(section)) state.completed.push(section);
  save(); updateProgress();
  const b=document.querySelector(`[data-complete="${section}"]`);
  if(b){ b.classList.add("done"); b.textContent="已完成 ✓"; }
}
$$("[data-complete]").forEach(b=>b.onclick=()=>complete(b.dataset.complete));

function updateProgress(){
  const lessonPart = state.completed.length / 4 * 70;
  const vocabPart = Math.min(state.known.length / DATA.vocab.length,1) * 20;
  const quizPart = state.best !== null ? 10 : 0;
  const pct=Math.round(Math.min(100,lessonPart+vocabPart+quizPart));
  $("#sidebarProgress").style.width=pct+"%";
  $("#progressText").textContent=`完成 ${pct}%`;
  $("#streakText").textContent=`${state.streak||1} 天`;
  $("#bestScore").textContent=state.best===null?"—":state.best+"/10";
  $("[data-complete='pronunciation']").classList.toggle("done",state.completed.includes("pronunciation"));
  $("[data-complete='vocabulary']").classList.toggle("done",state.completed.includes("vocabulary"));
  $("[data-complete='grammar']").classList.toggle("done",state.completed.includes("grammar"));
  $("[data-complete='conversation']").classList.toggle("done",state.completed.includes("conversation"));
  $$("[data-complete]").forEach(b=>{ if(b.classList.contains("done")) b.textContent="已完成 ✓"; });
}

function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function buildQuizPool(){
  const pool=[];
  DATA.vocab.forEach(v=>{
    const distract=shuffle(DATA.vocab.filter(x=>x[1]!==v[1])).slice(0,3).map(x=>x[2]);
    pool.push({q:`「${v[1]}」是什麼意思？`,audio:v[1],correct:v[2],options:shuffle([v[2],...distract])});
  });
  const extras=[
    ["「廁所在哪裡？」哪一句正確？","¿Dónde está el baño?",["¿Dónde está el baño?","¿Cuánto cuesta?","Tengo una reserva.","Me llamo Ana."]],
    ["ser 通常用來表達什麼？","較固定的身分或特徵",["較固定的身分或特徵","只有地點","只有時間","只用於未來式"]],
    ["estar 常用來表達什麼？","當下狀態或位置",["當下狀態或位置","國籍","職業名稱本身","數字"]],
    ["「麻煩結帳」是哪一句？","La cuenta, por favor.",["La cuenta, por favor.","Buenos días.","Está lejos.","Tengo una reserva."]],
    ["西班牙文 h 通常怎麼發音？","通常不發音",["通常不發音","像英文 j","一定顫舌","像中文 ㄏ 很重"]]
  ];
  extras.forEach(x=>pool.push({q:x[0],correct:x[1],options:x[2]}));
  return pool;
}

let quiz=[],qi=0,score=0,answered=false;
function startQuiz(){
  quiz=shuffle(buildQuizPool()).slice(0,10);qi=0;score=0;answered=false;
  $("#quizIntro").classList.add("hidden");$("#quizResult").classList.add("hidden");$("#quizPlay").classList.remove("hidden");
  renderQuestion();
}
function renderQuestion(){
  answered=false;
  const q=quiz[qi];
  $("#quizCount").textContent=`${qi+1} / 10`;$("#quizScore").textContent=`${score} 分`;
  $("#quizProgress").style.width=`${(qi+1)*10}%`;$("#quizQuestion").innerHTML=q.audio?`<span>${q.q}</span><button class="sound-btn quiz-listen-btn" data-speak="${q.audio}" aria-label="聽題目發音">🔊</button>`:`<span>${q.q}</span>`;
  $("#quizFeedback").textContent="";$("#nextQuestionBtn").classList.add("hidden");
  $("#answerGrid").innerHTML=q.options.map(o=>`<button class="answer-btn" data-answer="${o.replaceAll('"','&quot;')}">${o}</button>`).join("");
  $$("#answerGrid .answer-btn").forEach(b=>b.onclick=()=>answer(b));
}
function answer(btn){
  if(answered)return;answered=true;
  const q=quiz[qi]; const val=btn.dataset.answer;
  $$("#answerGrid .answer-btn").forEach(b=>{
    if(b.dataset.answer===q.correct)b.classList.add("correct");
    else if(b===btn)b.classList.add("wrong");
    b.disabled=true;
  });
  if(val===q.correct){score++;$("#quizFeedback").textContent="✓ 正確！";}
  else $("#quizFeedback").textContent=`正確答案：${q.correct}`;
  $("#quizScore").textContent=`${score} 分`;$("#nextQuestionBtn").classList.remove("hidden");
}
function nextQuestion(){
  qi++; if(qi>=quiz.length){finishQuiz();return;} renderQuestion();
}
function finishQuiz(){
  $("#quizPlay").classList.add("hidden");$("#quizResult").classList.remove("hidden");
  $("#resultScore").textContent=`${score} / 10`;
  $("#resultEmoji").textContent=score>=9?"🏆":score>=7?"🎉":score>=5?"👏":"🌱";
  $("#resultTitle").textContent=score>=9?"¡Excelente!":score>=7?"¡Muy bien!":score>=5?"不錯，繼續練！":"再複習一下就會更穩";
  $("#resultText").textContent=score>=8?"你的 A1 基礎已經很不錯。":score>=5?"把答錯的單字再聽一次發音。":"先回到單字與句型複習，再試一次。";
  if(state.best===null||score>state.best)state.best=score;
  save();updateProgress();
}
$("#startQuizBtn").onclick=startQuiz;$("#retryQuizBtn").onclick=startQuiz;$("#nextQuestionBtn").onclick=nextQuestion;

$("#resetBtn").onclick=()=>{
  if(confirm("確定要清除所有學習進度嗎？")){
    state.completed=[];state.known=[];state.best=null;state.streak=1;state.lastVisit=new Date().toISOString().slice(0,10);state.placementLevel=null;state.placementScore=null;state.placementAbility=null;save();
    renderVocab();updateProgress();applyPlacementLevel();openPlacement(false);
  }
};

renderVowels();renderVocabFilters();renderVocab();renderGrammar();renderScenarios();renderConversation();updateProgress();applyPlacementLevel();
if(!state.placementLevel) openPlacement(false);
