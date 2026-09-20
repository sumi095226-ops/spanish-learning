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
    if(v.localService === false) s += 8;
    return s;
  };

  return spanish.sort((a,b) => score(b) - score(a))[0];
}

function refreshSpanishVoice(){
  spanishVoice = pickNaturalSpanishVoice();
}
refreshSpanishVoice();
if("speechSynthesis" in window){
  speechSynthesis.onvoiceschanged = refreshSpanishVoice;
}

function speak(text){
  if(!("speechSynthesis" in window)){ alert("此瀏覽器不支援語音播放"); return; }
  speechSynthesis.cancel();
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
    state.completed=[];state.known=[];state.best=null;state.streak=1;state.lastVisit=new Date().toISOString().slice(0,10);save();
    renderVocab();updateProgress();
  }
};

renderVowels();renderVocabFilters();renderVocab();renderGrammar();renderScenarios();renderConversation();updateProgress();
