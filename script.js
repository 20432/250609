// 籤詩資料庫
const fortunes = [
    {
        poem: "春風徐來，花開滿園\n靜待佳音，事事順遂",
        result: "大吉",
        advice: "現在是個好時機，可以大膽向前。"
    },
    {
        poem: "雲開見月，柳暗花明\n耐心等待，終見光明",
        result: "中吉",
        advice: "暫時的困難即將過去，保持希望。"
    },
    {
        poem: "山高水長，道阻且長\n穩健前行，終達彼岸",
        result: "小吉",
        advice: "循序漸進，不要操之過急。"
    },
    {
        poem: "秋風蕭瑟，葉落知時\n審時度勢，靜觀其變",
        result: "平",
        advice: "保持謹慎，觀察局勢再行動。"
    },
    {
        poem: "驚濤駭浪，雲遮月明\n暫且收斂，靜待春來",
        result: "小凶",
        advice: "近期不宜冒進，以靜制動為宜。"
    }
];

// 運勢分析資料
const aspects = ['事業', '感情', '健康', '財運'];
const ratings = ['很好', '不錯', '普通', '需要注意', '要多加油'];

// 取得隨機運勢評分
function getRandomRating() {
    return ratings[Math.floor(Math.random() * ratings.length)];
}

// 生成完整運勢分析
function generateFullFortune() {
    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    let analysis = aspects.map(aspect => `${aspect}：${getRandomRating()}`).join('\n');
    
    return {
        poem: fortune.poem,
        result: fortune.result,
        advice: fortune.advice,
        analysis: analysis
    };
}

// DOM 元素
const drawButton = document.getElementById('draw-button');
const fortuneText = document.getElementById('fortune-text');
const fortuneResult = document.getElementById('fortune-result');

// 抽籤動畫效果
function animateDrawing() {
    fortuneText.classList.remove('animate__animated', 'animate__fadeIn');
    fortuneResult.classList.remove('animate__animated', 'animate__fadeIn');
    
    // 重新觸發動畫
    void fortuneText.offsetWidth;
    void fortuneResult.offsetWidth;
    
    fortuneText.classList.add('animate__animated', 'animate__fadeIn');
    fortuneResult.classList.add('animate__animated', 'animate__fadeIn');
}

// 點擊抽籤按鈕的事件處理
drawButton.addEventListener('click', () => {
    drawButton.disabled = true;
    const fortune = generateFullFortune();
    
    setTimeout(() => {
        fortuneText.textContent = `${fortune.poem}\n\n${fortune.advice}\n\n【運勢分析】\n${fortune.analysis}`;
        fortuneResult.textContent = `【${fortune.result}】`;
        animateDrawing();
        drawButton.disabled = false;
    }, 500);
});