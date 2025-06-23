// 全域變數
let isSoundEnabled = true;

// 籤詩資料庫
const fortunes = [
    {
        result: "大吉",
        advice: "你終於要時來運轉了！別擔心，這次不是在做夢。",
        luckyColor: "金色"
    },
    {
        result: "中吉",
        advice: "運氣還不錯，至少比昨天強。話說你記得昨天過得如何嗎？",
        luckyColor: "紫色"
    },
    {
        result: "小吉",
        advice: "慢慢來，反正你也急不來。最近保持平常心就好，太開心容易被打擊。",
        luckyColor: "綠色"
    },
    {
        result: "小凶",
        advice: "建議今天還是待在家，出門可能會看到前任攜新歡。",
        luckyColor: "灰色"
    },
    {
        result: "中凶",
        advice: "今天可能會踩到狗大便，而且還是穿新鞋的時候。建議換雙舊鞋出門。",
        luckyColor: "棕色"
    },
    {
        result: "大凶",
        advice: "這運勢糟到連算命的都想退費！建議今天待在被窩裡裝死。",
        luckyColor: "黑色"
    }
];

// 桃花籤資料庫
const loveFortunes = [
    {
        result: "大吉",
        advice: "桃花朵朵開！小心別被蜜蜂蟄到。單身的有機會脫單，已婚的要管好自己。",
        luckyColor: "粉紅色"
    },
    {
        result: "中吉",
        advice: "緣分快來了，但不確定是好緣還是孽緣。建議先存好分手費再說。",
        luckyColor: "橘色"
    },
    {
        result: "小吉",
        advice: "桃花運還行，但別打扮太帥太美，容易引起公司八卦。",
        luckyColor: "紫羅蘭色"
    },
    {
        result: "小凶",
        advice: "想脫單？先看看自己的銀行存款夠不夠。月老最近都在搞配對詐騙。",
        luckyColor: "淺藍色"
    },
    {
        result: "中凶",
        advice: "約會對象可能放你鴿子，而且還把你設為黑名單。建議先準備好Netflix追劇。",
        luckyColor: "深灰色"
    },
    {
        result: "大凶",
        advice: "你的桃花運比鐵達尼號還要沉，至少他們還能談場戀愛。",
        luckyColor: "黑色"
    }
];

// 彩虹籤資料庫
const rainbowFortunes = [
    {
        result: "大吉",
        advice: "今天適合表白！就算被拒絕了還可以說自己在演戲。",
        luckyColor: "彩虹色"
    },
    {
        result: "中吉",
        advice: "做自己沒錯，但也別太誇張。適度就好，畢竟還要混口飯吃。",
        luckyColor: "天藍色"
    },
    {
        result: "小吉",
        advice: "環境對你很友善，只是同事可能不是。記得多儲存一些假笑表情。",
        luckyColor: "靛藍色"
    },
    {
        result: "小凶",
        advice: "躲在衣櫃裡的日子快結束了！因為房東要來查水電。",
        luckyColor: "灰色"
    },
    {
        result: "中凶",
        advice: "今天可能會不小心在錯誤的場合出櫃。建議暫時把社群媒體關掉。",
        luckyColor: "深紫色"
    },
    {
        result: "大凶",
        advice: "所有人都知道你的秘密了！但沒關係，反正你也不是第一個。",
        luckyColor: "黑色"
    }
];

// 明星運勢資料庫
const characterFortunes = [
    {
        result: "大吉",
        character: "周杰倫",
        advice: "今天你就像周董一樣屌！音樂細胞大爆發，說不定隨便哼個調都能成為下一首神曲。不過要小心被狗仔跟拍。",
        luckyColor: "藍色"
    },
    {
        result: "大吉",
        character: "BTS V",
        advice: "今天你的魅力值爆表！走在路上都會被誤認為是韓團成員。別忘了戴口罩，以免引起騷動。",
        luckyColor: "紫色"
    },
    {
        result: "大吉",
        character: "李奧納多",
        advice: "今天魅力無人能擋！不過別太興奮，記得超過25歲的約會對象也要考慮。",
        luckyColor: "寶石藍"
    },
    {
        result: "中吉",
        character: "蔡依林",
        advice: "特別適合大膽嘗試新造型！就算穿得再誇張也會被說時尚，但要小心別把自己搞得太累。",
        luckyColor: "紫色"
    },
    {
        result: "中吉",
        character: "BLACKPINK LISA",
        advice: "今天走路都帶著舞步！但要小心別在捷運上不小心跳起來，會嚇到人。",
        luckyColor: "螢光粉"
    },
    {
        result: "中吉",
        character: "湯姆克魯斯",
        advice: "今天特別適合挑戰極限！不過請記得，在辦公室跑酷可能會被開除。",
        luckyColor: "深藍色"
    },
    {
        result: "小吉",
        character: "五月天阿信",
        advice: "創作靈感源源不絕，寫個臉書都能感動百萬人。今天特別適合熬夜，反正都習慣了。",
        luckyColor: "黑色"
    },
    {
        result: "小吉",
        character: "EXO KAI",
        advice: "今天跳舞特別有感覺！但要記得，在公司茶水間跳舞可能會被記上一筆。",
        luckyColor: "暗紅色"
    },
    {
        result: "小吉",
        character: "泰勒絲",
        advice: "今天特別適合寫歌！把前任都寫進歌詞裡，反正他們也看不懂中文。",
        luckyColor: "金色"
    },
    {
        result: "小凶",
        character: "林志玲",
        advice: "今天笑容魅力值超標！但說話要小心點，不然可能會被做成梗圖瘋傳。",
        luckyColor: "粉紅色"
    },
    {
        result: "小凶",
        character: "TWICE MOMO",
        advice: "今天跳舞可能會不小心撞到桌腳，建議先去拜拜。至少還有團員們可以扶你。",
        luckyColor: "蜜桃色"
    },
    {
        result: "小凶",
        character: "約翰尼戴普",
        advice: "今天可能會遇到一些小風波，但別擔心，你有超強的公關團隊（並沒有）。",
        luckyColor: "深棕色"
    },
    {
        result: "中凶",
        character: "羅志祥",
        advice: "精力旺盛到可以一次約會十個，但最好節制一點，不然可能會被爆料。今天還是乖乖跳舞好了。",
        luckyColor: "螢光綠"
    },
    {
        result: "中凶",
        character: "PSY",
        advice: "今天走路都是江南style，但要小心別在重要場合不小心騎馬舞。",
        luckyColor: "霓虹黃"
    },
    {
        result: "中凶",
        character: "威爾史密斯",
        advice: "今天脾氣可能有點暴躁，記得保持冷靜，別在頒獎典禮上衝動（並沒有要參加）。",
        luckyColor: "黑色"
    },
    {
        result: "大凶",
        character: "柯震東",
        advice: "今天特別容易誤入是非，連喝個手搖飲都可能上新聞。建議宅在家看Netflix比較安全。",
        luckyColor: "灰色"
    },
    {
        result: "大凶",
        character: "BIGBANG T.O.P",
        advice: "今天可能會特別想來點刺激的，但最好還是喝杯美式就好，別碰太特別的東西。",
        luckyColor: "靛藍色"
    },
    {
        result: "大凶",
        character: "艾賈諾克斯",
        advice: "今天不小心可能會變成大新聞，建議暫時關閉所有社群軟體，保持低調。",
        luckyColor: "漆黑色"
    }
];

// 節日運勢資料庫
const seasonFortunes = {
    newYear: [
        {
            result: "大吉",
            advice: "新年第一支開運籤！年底收入比年初翻好幾倍，但要小心荷包失守。",
            luckyColor: "大紅色"
        },
        {
            result: "中吉",
            advice: "豬年行大運！努力工作之餘別忘了發豬年限定貼圖。",
            luckyColor: "喜氣紅"
        }
        // ...其他新年籤詩
    ],
    valentine: [
        {
            result: "大吉",
            advice: "月老稱讚今年你很會！脫單機率比中樂透還高（但不確定是哪種樂透）。",
            luckyColor: "戀愛粉"
        },
        {
            result: "小凶",
            advice: "這個情人節還是乖乖追劇吧！至少不會被騙感情還損失荷包。",
            luckyColor: "寂寞藍"
        }
        // ...其他情人節籤詩
    ],
    halloween: [
        {
            result: "大吉",
            advice: "今年萬聖節你會遇到真的鬼！但別擔心，他們只是想要跟你玩躲貓貓。",
            luckyColor: "神秘紫"
        },
        {
            result: "大凶",
            advice: "今晚看到任何奇怪的東西都不要理它！就算他請你吃糖也不行。",
            luckyColor: "幽靈白"
        }
        // ...其他萬聖節籤詩
    ],
    christmas: [
        {
            result: "大吉",
            advice: "耶誕老人今年特別眷顧你！禮物堆成山，但要小心被砸到。",
            luckyColor: "聖誕紅"
        },
        {
            result: "中凶",
            advice: "不小心被馴鹿踩到腳趾！建議耶誕節戴防護鞋出門。",
            luckyColor: "馴鹿棕"
        }
        // ...其他聖誕節籤詩
    ]
};

// 運勢分析資料
const aspects = ['事業', '感情', '健康', '財運'];
const loveAspects = ['緣分指數', '告白時機', '約會運勢', '異性緣份'];
const rainbowAspects = ['心靈契合度', '表達時機', '社交運勢', '自我認同'];
const ratings = ['★★★★★', '★★★★☆', '★★★☆☆', '★★☆☆☆', '★☆☆☆☆'];

// 取得隨機星星數評分
function getRandomStars() {
    const starLevels = ['★★★★★', '★★★★☆', '★★★☆☆', '★★☆☆☆', '★☆☆☆☆', '☆☆☆☆☆'];
    return starLevels[Math.floor(Math.random() * starLevels.length)];
}

// 計算星星數量
function calculateStarCount(rating) {
    return (rating.match(/★/g) || []).length;
}

// 根據平均星星數決定運勢等級
function determineFortuneResult(averageStars) {
    if (averageStars >= 4.5) return "大吉";
    if (averageStars >= 3.5) return "中吉";
    if (averageStars >= 2.5) return "小吉";
    if (averageStars >= 1.5) return "小凶";
    if (averageStars >= 0.5) return "中凶";
    return "大凶";
}

// 生成運勢分析並計算整體運勢
function generateAnalysis(aspectsList) {
    const analysisResults = aspectsList.map(aspect => {
        const rating = getRandomStars();
        return {
            aspect: aspect,
            rating: rating,
            stars: calculateStarCount(rating)
        };
    });
    
    const averageStars = analysisResults.reduce((sum, item) => sum + item.stars, 0) / analysisResults.length;
    const result = determineFortuneResult(averageStars);
    
    return {
        analysis: analysisResults.map(item => `${item.aspect}：${item.rating}`).join('\n'),
        result: result
    };
}

// 生成完整運勢分析
function generateFullFortune() {
    const analysisResult = generateAnalysis(aspects);
    const fortune = fortunes.find(f => f.result === analysisResult.result);
    
    return {
        result: analysisResult.result,
        advice: fortune.advice,
        luckyColor: fortune.luckyColor,
        analysis: analysisResult.analysis
    };
}

// 生成桃花運勢分析
function generateLoveFortune() {
    const analysisResult = generateAnalysis(loveAspects);
    const fortune = loveFortunes.find(f => f.result === analysisResult.result);
    
    return {
        result: analysisResult.result,
        advice: fortune.advice,
        luckyColor: fortune.luckyColor,
        analysis: analysisResult.analysis
    };
}

// 生成彩虹運勢分析
function generateRainbowFortune() {
    const analysisResult = generateAnalysis(rainbowAspects);
    const fortune = rainbowFortunes.find(f => f.result === analysisResult.result);
    
    return {
        result: analysisResult.result,
        advice: fortune.advice,
        luckyColor: fortune.luckyColor,
        analysis: analysisResult.analysis
    };
}

// 生成角色運勢分析
function generateCharacterFortune() {
    const analysisResult = generateAnalysis(aspects);
    const fortune = characterFortunes.find(f => f.result === analysisResult.result);
    
    return {
        result: analysisResult.result,
        character: fortune.character,
        advice: fortune.advice,
        luckyColor: fortune.luckyColor,
        analysis: analysisResult.analysis
    };
}

// DOM 元素
const container = document.querySelector('.container');
const drawButton = document.getElementById('draw-button');
const loveButton = document.getElementById('love-button');
const rainbowButton = document.getElementById('rainbow-button');
const characterButton = document.getElementById('character-button');
const fortuneText = document.getElementById('fortune-text');
const fortuneResult = document.getElementById('fortune-result');
const drawSound = document.getElementById('draw-sound');
const resultSound = document.getElementById('result-sound');
const soundToggle = document.getElementById('sound-toggle');
const themeToggle = document.getElementById('theme-toggle');
const seasonButton = document.getElementById('season-button');
const seasonBanner = document.querySelector('.season-banner');

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
    container.classList.remove('fortune-theme', 'love-theme', 'rainbow-theme', 'character-theme');
    container.classList.add(theme);
}

// 播放音效
function playSound(sound) {
    if (isSoundEnabled) {
        sound.currentTime = 0;
        sound.play();
    }
}

// 修改原有的抽籤函數，加入動畫和音效
function performDraw(callback) {
    const fortuneBox = document.querySelector('.fortune-box');
    fortuneBox.classList.add('shaking');
    playSound(drawSound);
    
    setTimeout(() => {
        fortuneBox.classList.remove('shaking');
        const result = callback();
        playSound(resultSound);
        return result;
    }, 1000);
}

// 點擊抽籤按鈕的事件處理
drawButton.addEventListener('click', () => {
    drawButton.disabled = true;
    performDraw(() => {
        const fortune = generateFullFortune();
        setTheme('fortune-theme');
        fortuneText.className = 'fortune-text result-show';
        fortuneText.textContent = `${fortune.advice}\n\n【今日幸運色】\n${fortune.luckyColor}\n\n【運勢分析】\n${fortune.analysis}`;
        fortuneResult.textContent = `【${fortune.result}】`;
        drawButton.disabled = false;
    });
});

// 點擊桃花籤按鈕的事件處理
loveButton.addEventListener('click', () => {
    loveButton.disabled = true;
    drawButton.disabled = true;
    const fortune = generateLoveFortune();
    
    setTimeout(() => {
        setTheme('love-theme');
        fortuneText.className = 'fortune-text love';
        fortuneText.textContent = `${fortune.advice}\n\n【今日幸運色】\n${fortune.luckyColor}\n\n【桃花運勢分析】\n${fortune.analysis}`;
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
        fortuneText.textContent = `${fortune.advice}\n\n【今日幸運色】\n${fortune.luckyColor}\n\n【彩虹運勢分析】\n${fortune.analysis}`;
        fortuneResult.textContent = `【${fortune.result}】`;
        animateDrawing();
        rainbowButton.disabled = false;
        drawButton.disabled = false;
        loveButton.disabled = false;
    }, 500);
});

// 點擊角色籤按鈕的事件處理
characterButton.addEventListener('click', () => {
    characterButton.disabled = true;
    drawButton.disabled = true;
    loveButton.disabled = true;
    rainbowButton.disabled = true;
    const fortune = generateCharacterFortune();
    
    setTimeout(() => {
        setTheme('character-theme');
        fortuneText.className = 'fortune-text character';
        fortuneText.textContent = `今日你的命運之星是【${fortune.character}】\n${fortune.advice}\n\n【今日幸運色】\n${fortune.luckyColor}\n\n【運勢分析】\n${fortune.analysis}`;
        fortuneResult.textContent = `【${fortune.result}】`;
        animateDrawing();
        characterButton.disabled = false;
        drawButton.disabled = false;
        loveButton.disabled = false;
        rainbowButton.disabled = false;
    }, 500);
});

// 音效切換
soundToggle.addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled;
    soundToggle.textContent = isSoundEnabled ? '🔊' : '🔇';
});

// 深色模式切換
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// 節日特籤按鈕事件
seasonButton.addEventListener('click', () => {
    const season = checkCurrentSeason();
    if (!season) return;
    
    seasonButton.disabled = true;
    performDraw(() => {
        const fortune = season.fortunes[Math.floor(Math.random() * season.fortunes.length)];
        const analysis = generateAnalysis(aspects);
        
        setTheme('fortune-theme');
        fortuneText.className = 'fortune-text result-show';
        fortuneText.textContent = `${fortune.advice}\n\n【今日幸運色】\n${fortune.luckyColor}\n\n【運勢分析】\n${analysis.analysis}`;
        fortuneResult.textContent = `【${fortune.result}】`;
        seasonButton.disabled = false;
    });
});

// 檢查當前節日
function checkCurrentSeason() {
    const now = new Date();
    const month = now.getMonth();
    const date = now.getDate();
    
    if (month === 0 && date <= 15) {
        return {
            name: 'newYear',
            text: '🎊 新年特別運勢籤 🎊',
            fortunes: seasonFortunes.newYear
        };
    } else if (month === 1 && date === 14) {
        return {
            name: 'valentine',
            text: '💘 情人節限定籤詩 💘',
            fortunes: seasonFortunes.valentine
        };
    } else if (month === 9 && date === 31) {
        return {
            name: 'halloween',
            text: '👻 萬聖節特製籤詩 👻',
            fortunes: seasonFortunes.halloween
        };
    } else if (month === 11 && date === 25) {
        return {
            name: 'christmas',
            text: '🎄 聖誕節祝福籤 🎄',
            fortunes: seasonFortunes.christmas
        };
    }
    return null;
}

// 更新節日顯示
function updateSeasonalContent() {
    const season = checkCurrentSeason();
    if (season) {
        seasonBanner.textContent = season.text;
        seasonBanner.classList.add('visible');
        seasonButton.style.display = 'block';
        seasonButton.textContent = `抽${season.text}`;
    } else {
        seasonBanner.classList.remove('visible');
        seasonButton.style.display = 'none';
    }
}

// 初始化
updateSeasonalContent();
// 每天檢查一次是否有節日
setInterval(updateSeasonalContent, 24 * 60 * 60 * 1000);