const LINKS = {
  sls: "https://student.success-learning.ai/login",
  values: "https://www.addness.com/diagnosis/values",
  coreValues: "https://www.addness.com/diagnosis/core-values",
  masterPlan: "https://www.addness.com/diagnosis/master-plan",
  todo: "https://www.addness.com/todo",
  start: "https://addness.works/start",
  support: "https://line.me/ti/p/%40900kxiwl",
};

const RESULTS = {
  setup: {
    phase: "setup", phaseName: "Step 0・AIエージェントの準備", marker: "0", title: "AIエージェントとAddnessをつなごう",
    summary: "ゴール達成は、一人で抱え込まずAIエージェントと進めます。セットアップ後の作業は、必ずこのメイン作業場だけで続けます。",
    action: "セットアップガイドを開き、パソコンと使うAIアプリを選んで、表示される手順を最後まで進める。",
    done: "AIアプリ、Addness登録、メイン作業場のセットアップが完了し、その作業場でAIエージェントへ話しかけられる。",
    service: "AIと働く環境の立ち上げガイド", serviceNote: "AIアプリとAddnessを登録し、以後ずっと使うメイン作業場を一つだけセットアップします。",
    cta: "セットアップガイドを開く", url: LINKS.start,
    support: "AIエージェントやAddnessの準備で迷ったら、サポートLINEへ相談できます。",
    showAgentFlow: true,
  },
  goal: {
    phase: "goal", phaseName: "フェーズ1・目標", marker: "1", title: "3つの診断で目標の土台を作ろう",
    summary: "自分の価値観、人生の目的、実現したい未来を順番に言葉にする段階です。",
    action: "価値観診断、コアバリュー診断、マスタープラン診断の順に進める。",
    done: "3つの診断が完了し、目指す未来とその理由を自分の言葉で確認できる。",
    service: "Addnessの3つの診断", serviceNote: "価値観からマスタープランまで、順番に目標の土台を作ります。価値観診断は登録不要で始められ、コアバリュー診断とマスタープラン診断はAddnessへのログインが必要です。",
    cta: "価値観診断から始める", url: LINKS.values,
    support: "診断は途中で中断しても、続きから再開できます。",
    showDiagnoses: true,
  },
  route: {
    phase: "route", phaseName: "フェーズ2・道筋", marker: "2", title: "道筋と最初の一歩を決めよう",
    summary: "目標に向けて、どのコースの何から始めるかを決める段階です。",
    action: "サクセスラーニングのホーム右下にある「スキルプラスくんに相談する」を押し、表示されたメニューから「コースを選ぶ」を選択する。",
    done: "取り組むコースと、最初に行うアクションが一つ決まっている。",
    service: "サクセスラーニングのスキルプラスくん", serviceNote: "ホーム右下の「スキルプラスくんに相談する」を押し、「コースを選ぶ」から自分に合うコース診断を進めます。ログインが必要です。",
    cta: "サクセスラーニングでコースを選ぶ（ログイン）", url: LINKS.sls,
    support: "サクセスラーニングを開けない、または操作方法で困った場合はサポートLINEへ相談できます。",
  },
  action: {
    phase: "action", phaseName: "フェーズ3・行動", marker: "3", title: "Addnessのゴールを、AIエージェントと進めよう",
    summary: "Addnessをゴールと進捗の正本にして、セットアップしたメイン作業場で次の一手を進めます。必要な学習にはサクセスラーニングも使えます。",
    action: "Addnessで進行中のゴールを開き、メイン作業場のAIエージェントと次の一手を進める。必要ならサクセスラーニングのアクションマップで学ぶ。",
    done: "行動の成果と次の一手がAddnessのゴールへ戻り、同じメイン作業場から続けられる。",
    service: "Addness・メイン作業場（必要に応じてサクセスラーニング）", serviceNote: "Addnessを正本に、AIエージェントと実行します。知識や手順が必要なときはサクセスラーニングのアクションマップを使います。Addnessはログインが必要です。",
    cta: "Addnessでゴールを進める（ログイン）", url: LINKS.todo,
    support: "ゴール達成の作業はメイン作業場だけで進めます。学習内容はスキルプラスくんや講師質問も使えます。",
  },
  stuck: {
    phase: "action", phaseName: "フェーズ3・行動中（サポート利用）", marker: "+", title: "Addnessのゴールを開いて、止まりを解消しよう",
    summary: "現在地を戻す必要はありません。Addnessのゴールを起点に、同じメイン作業場でAIエージェントと詰まりを整理します。",
    action: "Addnessのゴールを開き、試したこと・困っている点・欲しい結果をAIエージェントへ伝える。必要ならサクセスラーニングで質問する。",
    done: "次に試すことが一つ決まり、Addnessのゴールからもう一度行動できる。",
    service: "Addness・AIエージェント（必要に応じてサクセスラーニング）", serviceNote: "ゴールの文脈を保ったままAIと整理し、学習内容はスキルプラスくんや講師質問も使います。Addnessはログインが必要です。",
    cta: "Addnessでゴールを開く（ログイン）", url: LINKS.todo,
    support: "ログインや利用方法の問題はサポートLINEへ相談できます。",
  },
  review: {
    phase: "result", phaseName: "フェーズ4・結果確認", marker: "4", title: "結果を確認・振り返ろう",
    summary: "学習量ではなく、目標に対して何が変わったかを見る段階です。",
    action: "Addnessのゴールで、目標・取り組んだ行動・今の結果を並べ、続けることと変えることを決める。",
    done: "次に続けること、変えること、取り組む一歩が決まっている。",
    service: "Addness・メイン作業場", serviceNote: "Addnessで目標と今日の一手を見直し、同じメイン作業場のAIエージェントと次の行動へつなげます。Addnessはログインが必要です。",
    cta: "Addnessで今日の一手を見る（ログイン）", url: LINKS.todo,
    support: "判断に迷ったら、目標・行動・結果を添えてサポートLINEへ相談できます。",
  },
  achieved: {
    phase: "reflect", phaseName: "フェーズ5・振り返り", marker: "5", title: "Addnessで次のゴールを進めよう",
    summary: "結果を振り返ったら、次のゴールを作り、達成までの道筋を実行へ移します。",
    action: "Addnessでゴールと完了基準を作り、必要な子ゴールへ分解して、AIエージェントと進める。",
    done: "次のゴール、完了基準、最初に進める子ゴールまたは一手が決まり、実行が始まっている。",
    service: "Addnessのゴール", serviceNote: "ゴールを作成・分解し、AIエージェントと日々の実行を進めます。ログインが必要です。",
    cta: "Addnessでゴールを進める（ログイン）", url: LINKS.todo,
    support: "ゴールを開けば、AIエージェントへ文脈を渡しながら続きから進められます。",
  },
};

const QUESTIONS = [
  {
    title: "AIエージェントを使える状態にして、Addnessでゴールを開けますか？",
    answers: [
      { label: "はい、どちらもできています", next: 1 },
      { label: "いいえ／まだ準備していません", result: "setup" },
    ],
  },
  {
    title: "実現したいことと、何がどうなれば達成かを自分の言葉で言えますか？",
    answers: [
      { label: "はい、言えます", next: 2 },
      { label: "まだ曖昧です", result: "goal" },
    ],
  },
  {
    title: "次に取り組むコースと、最初のアクションは決まっていますか？",
    answers: [
      { label: "はい、決まっています", next: 3 },
      { label: "まだ決まっていません", result: "route" },
    ],
  },
  {
    title: "今の状態に一番近いものを選んでください。",
    answers: [
      { label: "まだ取り組み始めていない", result: "action" },
      { label: "取り組んでいるが、途中で止まっている", result: "stuck" },
      { label: "進めているが、目標に近づいているか分からない", result: "review" },
      { label: "目標を達成した", result: "achieved" },
    ],
  },
];

const checkSection = document.querySelector("#current-check");
const resultSection = document.querySelector("#result");
const questionArea = document.querySelector("[data-question-area]");
const progressLabel = document.querySelector("[data-progress-label]");
const progressBar = document.querySelector("[data-progress-bar]");
const resetButton = document.querySelector("[data-reset-check]");
let currentQuestion = 0;

function scrollToElement(element) {
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startCheck() {
  currentQuestion = 0;
  resultSection.hidden = true;
  checkSection.hidden = false;
  resetButton.hidden = true;
  renderQuestion();
  scrollToElement(checkSection);
}

function renderQuestion() {
  const question = QUESTIONS[currentQuestion];
  progressLabel.textContent = `質問 ${currentQuestion + 1} / ${QUESTIONS.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / QUESTIONS.length) * 100}%`;
  questionArea.replaceChildren();

  const title = document.createElement("h2");
  title.className = "question-title";
  title.textContent = question.title;

  const list = document.createElement("div");
  list.className = "answer-list";
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = answer.label;
    button.addEventListener("click", () => {
      if (answer.result) showResult(answer.result);
      if (Number.isInteger(answer.next)) {
        currentQuestion = answer.next;
        resetButton.hidden = false;
        renderQuestion();
      }
    });
    list.append(button);
  });
  questionArea.append(title, list);
}

function setText(selector, value) {
  document.querySelector(selector).textContent = value;
}

function showResult(key) {
  const result = RESULTS[key];
  if (!result) return;

  document.querySelectorAll("[data-phase]").forEach((step) => {
    step.classList.toggle("is-active", step.dataset.phase === result.phase);
  });
  document.querySelector(".setup-gate").classList.toggle("is-active", result.phase === "setup");
  document.querySelector(".support-rail").classList.toggle("is-active", key === "stuck");
  document.querySelectorAll("[data-mini-phase]").forEach((step) => {
    step.classList.toggle("is-active", step.dataset.miniPhase === result.phase);
  });

  setText("[data-current-context]", result.phaseName);
  setText("[data-result-step]", result.marker);
  setText("[data-result-title]", result.title);
  setText("[data-result-summary]", result.summary);
  setText("[data-result-action]", result.action);
  setText("[data-result-done]", result.done);
  setText("[data-service-name]", result.service);
  setText("[data-service-note]", result.serviceNote);
  setText("[data-support-text]", result.support);

  const cta = document.querySelector("[data-primary-cta]");
  cta.textContent = result.cta;
  cta.href = result.url;

  document.querySelector("[data-diagnosis-flow]").hidden = !result.showDiagnoses;
  document.querySelector("[data-agent-flow]").hidden = !result.showAgentFlow;

  checkSection.hidden = true;
  resultSection.hidden = false;
  scrollToElement(resultSection);
}

document.querySelectorAll("[data-start-check], [data-recheck]").forEach((button) => button.addEventListener("click", startCheck));
document.querySelectorAll("[data-result]").forEach((button) => button.addEventListener("click", () => showResult(button.dataset.result)));
document.querySelector("[data-reset-check]").addEventListener("click", startCheck);
document.querySelector("[data-back-map]").addEventListener("click", () => scrollToElement(document.querySelector(".map-section")));

// 今週の予定（events.json）。読み込めない時は既定のフォールバック文を残す
async function renderWeekSchedule() {
  const container = document.querySelector("[data-week-days]");
  if (!container) return;

  let data;
  try {
    const res = await fetch("./events.json", { cache: "no-store" });
    if (!res.ok) return;
    data = await res.json();
  } catch (error) {
    return;
  }

  const today = new Date();
  const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const days = (data.days || []).filter((day) => day.date >= todayKey);

  if (!days.length) {
    container.innerHTML = '<p class="week-fallback">今週の予定は終了しました。次の予定はサポートLINEの「イベント情報」で確認できます。</p>';
  } else {
    container.innerHTML = days
      .map((day) => {
        const isToday = day.date === todayKey;
        const rows = (day.items || [])
          .map((item) => `<li><span class="week-time">${item.time}</span><span class="week-name">${item.name}</span>${item.room ? `<span class="week-room">${item.room}</span>` : ""}</li>`)
          .join("");
        return `<div class="week-day${isToday ? " is-today" : ""}"><p class="week-date">${day.label}${isToday ? '<span class="week-badge">今日</span>' : ""}</p><ul>${rows}</ul></div>`;
      })
      .join("");
  }

  if (data.note) {
    const note = document.querySelector("[data-week-note]");
    if (note) note.textContent = data.note;
  }

  const asOf = document.querySelector("[data-week-asof]");
  if (asOf && data.asOf) {
    asOf.textContent = `${data.weekLabel || ""}の予定（${data.asOf} 時点）。場所のA〜Dはアクションラウンジの部屋です。`;
  }

  const upcoming = document.querySelector("[data-week-upcoming]");
  const upcomingList = document.querySelector("[data-week-upcoming-list]");
  if (upcoming && upcomingList && Array.isArray(data.upcoming) && data.upcoming.length) {
    const week = ["日", "月", "火", "水", "木", "金", "土"];
    upcomingList.innerHTML = data.upcoming
      .filter((item) => item.date >= todayKey)
      .map((item) => {
        const [y, m, d] = item.date.split("-").map(Number);
        const label = `${m}/${d}(${week[new Date(y, m - 1, d).getDay()]})`;
        return `<li><span class="week-up-date">${label}</span><span class="week-time">${item.time}</span><span class="week-name">${item.name}</span></li>`;
      })
      .join("");
    upcoming.hidden = !upcomingList.children.length;
  }

  const catalog = document.querySelector("[data-week-catalog]");
  const list = document.querySelector("[data-week-catalog-list]");
  if (catalog && list && Array.isArray(data.catalog) && data.catalog.length) {
    list.innerHTML = data.catalog
      .map((item) => `<li><strong>${item.name}</strong><small>${item.when}</small><em>${item.phase}</em></li>`)
      .join("");
    catalog.hidden = false;
  }
}

renderWeekSchedule();
