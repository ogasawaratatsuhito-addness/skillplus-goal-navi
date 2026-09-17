const LINKS = {
  sls: "https://student.success-learning.ai/login",
  values: "https://www.addness.com/diagnosis/values",
  coreValues: "https://www.addness.com/diagnosis/core-values",
  masterPlan: "https://www.addness.com/diagnosis/master-plan",
  todo: "https://www.addness.com/todo",
  support: "https://line.me/ti/p/%40900kxiwl",
};

const RESULTS = {
  setup: {
    phase: "setup", phaseName: "入口・利用の準備", marker: "入口", title: "まず利用の準備を整えよう",
    summary: "学ぶ場所と、困ったときの相談先を確認すると、安心して次へ進めます。",
    action: "SLSの学習画面を開き、スキルプラス入門コースが見えることを確認する。",
    done: "学習画面を開けて、困ったときにサポートLINEを使える。",
    service: "Success Learning System（SLS）", serviceNote: "コースやアクションを進める学習サービスです。ログインが必要です。",
    cta: "SLSを開く（ログイン）", url: LINKS.sls,
    support: "ログインや画面の開き方で困ったら、サポートLINEへ状況を伝えてください。",
  },
  goal: {
    phase: "goal", phaseName: "フェーズ1・目標", marker: "1", title: "3つの診断で目標の土台を作ろう",
    summary: "自分の価値観、人生の目的、実現したい未来を順番に言葉にする段階です。",
    action: "価値観診断、コアバリュー診断、マスタープラン診断の順に進める。",
    done: "3つの診断が完了し、目指す未来とその理由を自分の言葉で確認できる。",
    service: "Addnessの3つの診断", serviceNote: "価値観からマスタープランまで、順番に目標の土台を作ります。",
    cta: "価値観診断から始める", url: LINKS.values,
    support: "診断は途中で中断しても、続きから再開できます。",
    showDiagnoses: true,
  },
  route: {
    phase: "route", phaseName: "フェーズ2・道筋", marker: "2", title: "道筋と最初の一歩を決めよう",
    summary: "目標に向けて、どのコースの何から始めるかを決める段階です。",
    action: "SLSホームの「スキルプラスくんに相談する」を開き、「コースを選ぶ」を選択する。",
    done: "取り組むコースと、最初に行うアクションが一つ決まっている。",
    service: "SLSのスキルプラスくん", serviceNote: "SLSホームで相談画面を開き、「コースを選ぶ」から自分に合うコース診断を進めます。ログインが必要です。",
    cta: "SLSでコースを選ぶ（ログイン）", url: LINKS.sls,
    support: "SLSを開けない、または操作方法で困った場合はサポートLINEへ相談できます。",
  },
  action: {
    phase: "action", phaseName: "フェーズ3・行動", marker: "3", title: "最初のアクションを始めよう",
    summary: "道筋は決まっています。考え続けるより、次の一歩を完了させる段階です。",
    action: "SLSで次の未完了アクションを開き、説明と完了条件を確認して取り組む。",
    done: "選んだアクションを、書かれた完了条件に沿って終えられた。",
    service: "Success Learning System（SLS）", serviceNote: "コース、アクションマップ、講義を確認して実行します。ログインが必要です。",
    cta: "SLSでアクションを進める", url: LINKS.sls,
    support: "操作方法で困ったらサポートLINE、学習内容で困ったらスキルプラスくんを使います。",
  },
  stuck: {
    phase: "action", phaseName: "フェーズ3・行動中（サポート利用）", marker: "+", title: "止まりを解消しよう",
    summary: "現在地を戻す必要はありません。試したことと困っている点を整理して助けを使いましょう。",
    action: "取り組んでいるアクション、試したこと、困っている点を一つの質問にまとめる。",
    done: "次に試すことが一つ分かり、もう一度行動できる。",
    service: "SLSのスキルプラスくん・講師質問", serviceNote: "学習内容の疑問を相談します。まずSLSへログインしてください。",
    cta: "SLSで質問する（ログイン）", url: LINKS.sls,
    support: "解決しない場合は講師質問へ。ログインや利用方法の問題はサポートLINEへ相談します。",
  },
  review: {
    phase: "result", phaseName: "フェーズ4・結果確認", marker: "4", title: "結果を確認・振り返ろう",
    summary: "学習量ではなく、目標に対して何が変わったかを見る段階です。",
    action: "目標、取り組んだ行動、今の結果を並べ、続けることと変えることを決める。",
    done: "次に続けること、変えること、取り組む一歩が決まっている。",
    service: "Addness", serviceNote: "目標と今日の一手を見直し、次の行動へつなげます。ログインが必要です。",
    cta: "Addnessで今日の一手を見る", url: LINKS.todo,
    support: "判断に迷ったら、目標・行動・結果を添えてサポートLINEへ相談できます。",
  },
  achieved: {
    phase: "reflect", phaseName: "フェーズ5・振り返り", marker: "5", title: "Addnessで次のゴールを進めよう",
    summary: "結果を振り返ったら、次のゴールを作り、達成までの道筋を実行へ移します。",
    action: "Addnessでゴールと完了基準を作り、必要な子ゴールへ分解して、AIエージェントと進める。",
    done: "次のゴール、完了基準、最初に進める子ゴールまたは一手が決まり、実行が始まっている。",
    service: "Addnessのゴール", serviceNote: "ゴールを作成・分解し、AIエージェントと日々の実行を進めます。ログインが必要です。",
    cta: "Addnessでゴールを進める", url: LINKS.todo,
    support: "ゴールを開けば、AIエージェントへ文脈を渡しながら続きから進められます。",
  },
};

const QUESTIONS = [
  {
    title: "学習画面を開けて、困ったときの相談先も分かりますか？",
    answers: [
      { label: "はい、どちらも分かります", next: 1 },
      { label: "いいえ／まだ不安です", result: "setup" },
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

  checkSection.hidden = true;
  resultSection.hidden = false;
  scrollToElement(resultSection);
}

document.querySelectorAll("[data-start-check], [data-recheck]").forEach((button) => button.addEventListener("click", startCheck));
document.querySelectorAll("[data-result]").forEach((button) => button.addEventListener("click", () => showResult(button.dataset.result)));
document.querySelector("[data-reset-check]").addEventListener("click", startCheck);
document.querySelector("[data-back-map]").addEventListener("click", () => scrollToElement(document.querySelector(".map-section")));
