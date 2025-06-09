// 籤詩資料庫
const fortunes = [
    {
        result: "大吉",
        advice: "現在是個好時機，可以大膽向前。"
    },
    {
        result: "中吉",
        advice: "暫時的困難即將過去，保持希望。"
    },
    {
        result: "小吉",
        advice: "循序漸進，不要操之過急。"
    },
    {
        result: "平",
        advice: "保持謹慎，觀察局勢再行動。"
    },
    {
        result: "小凶",
        advice: "近期不宜冒進，以靜制動為宜。"
    }
];

// 桃花籤資料庫
const loveFortunes = [
    {
        result: "大吉",
        advice: "桃花運旺盛，易遇良緣。單身者將遇到心儀對象，有伴侶者感情更加甜蜜。"
    },
    {
        result: "中吉",
        advice: "桃花雖未盛開，但緣分即將到來。保持耐心與真誠，自有良緣。"
    },
    {
        result: "小吉",
        advice: "桃花運平穩，應多參與社交活動，增加緣分機會。"
    },
    {
        result: "平",
        advice: "目前桃花運較平淡，建議先充實自己，等待適合的緣分。"
    },
    {
        result: "小凶",
        advice: "近期桃花運較弱，不宜強求姻緣。建議多關注自我提升，等待時機成熟。"
    }
];

// 彩虹籤資料庫
const rainbowFortunes = [
    {
        result: "大吉",
        advice: "最適合表達心意的時機，勇敢做自己，真愛即將降臨。"
    },
    {
        result: "中吉",
        advice: "保持真誠與勇氣，值得的人會欣賞真實的你。"
    },
    {
        result: "小吉",
        advice: "繼續充實自己，保持開放心態，緣分自然降臨。"
    },
    {
        result: "平",
        advice: "維持平常心，關注生活，給自己和他人多一點時間。"
    },
    {
        result: "小凶",
        advice: "近期感情運較低，建議把重心放在自我提升上。"
    }
];

// 運勢分析資料
const aspects = ['事業', '感情', '健康', '財運'];
const loveAspects = ['緣分指數', '告白時機', '約會運勢', '異性緣份'];
const rainbowAspects = ['心靈契合度', '表達時機', '社交運勢', '自我認同'];
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
        result: fortune.result,
        advice: fortune.advice,
        analysis: analysis
    };
}

// 生成桃花運勢分析
function generateLoveFortune() {
    const fortune = loveFortunes[Math.floor(Math.random() * loveFortunes.length)];
    let analysis = loveAspects.map(aspect => `${aspect}：${getRandomRating()}`).join('\n');
    
    return {
        result: fortune.result,
        advice: fortune.advice,
        analysis: analysis
    };
}

// 生成彩虹運勢分析
function generateRainbowFortune() {
    const fortune = rainbowFortunes[Math.floor(Math.random() * rainbowFortunes.length)];
    let analysis = rainbowAspects.map(aspect => `${aspect}：${getRandomRating()}`).join('\n');
    
    return {
        result: fortune.result,
        advice: fortune.advice,
        analysis: analysis
    };
}

// DOM 元素
const container = document.querySelector('.container');
const drawButton = document.getElementById('draw-button');
const loveButton = document.getElementById('love-button');
const rainbowButton = document.getElementById('rainbow-button');
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

// 設定主題
function setTheme(theme) {
    container.classList.remove('fortune-theme', 'love-theme', 'rainbow-theme');
    container.classList.add(theme);
}

// 點擊抽籤按鈕的事件處理
drawButton.addEventListener('click', () => {
    drawButton.disabled = true;
    const fortune = generateFullFortune();
    
    setTimeout(() => {
        setTheme('fortune-theme');
        fortuneText.className = 'fortune-text';
        fortuneText.textContent = `${fortune.advice}\n\n【運勢分析】\n${fortune.analysis}`;
        fortuneResult.textContent = `【${fortune.result}】`;
        animateDrawing();
        drawButton.disabled = false;
    }, 500);
});

// 點擊桃花籤按鈕的事件處理
loveButton.addEventListener('click', () => {
    loveButton.disabled = true;
    drawButton.disabled = true;
    const fortune = generateLoveFortune();
    
    setTimeout(() => {
        setTheme('love-theme');
        fortuneText.className = 'fortune-text love';
        fortuneText.textContent = `${fortune.advice}\n\n【桃花運勢分析】\n${fortune.analysis}`;
        fortuneResult.textContent = `【${fortune.result}】`;
        animateDrawing();
        loveButton.disabled = false;
        drawButton.disabled = false;
    }, 500);
});

// 點擊彩虹籤按鈕的事件處理
rainbowButton.addEventListener('click', () => {
    rainbowButton.disabled = true;
    drawButton.disabled = true;
    loveButton.disabled = true;
    const fortune = generateRainbowFortune();
    
    setTimeout(() => {
        setTheme('rainbow-theme');
        fortuneText.className = 'fortune-text rainbow';
        fortuneText.textContent = `${fortune.advice}\n\n【彩虹運勢分析】\n${fortune.analysis}`;
        fortuneResult.textContent = `【${fortune.result}】`;
        animateDrawing();
        rainbowButton.disabled = false;
        drawButton.disabled = false;
        loveButton.disabled = false;
    }, 500);
});