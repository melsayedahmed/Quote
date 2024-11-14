
const quotesOfDay = [
    {'author': 'الإمام الشافعي رضي الله عنه', 
     'quote': 'ضاقت فلما استحكمت حلقاتها ..... فرجت وكنت أظنها لا تفرج'
    },
    {'author': 'عمر بن الخطاب رضي الله عنه', 
     'quote': 'قل اذا علمت واصمت اذا جهلت'
    },
    {'author': 'عمر بن عبد العزيز رضي الله عنه', 
     'quote': 'لو أن الناس كلما استصعبوا أمرًا تركوه ما قام للناس دنيا ولا دين'
    },
    {'author': 'علي بن أبي طالب رضي الله عنه', 
     'quote': 'ما أضمر أحدٌ شيئاً إلا ظهر في فلتات لسانه وصفحات وجهه'
    },
    {'author': 'لقمان الحكيم رضي الله عنه', 
     'quote': 'إذا خفتَ لا تَقُلْ.. وإذا قلتَ لا تخَف'
    },
    {'author': 'صالح العصيمي رضي الله عنه', 
     'quote': 'من استطال الطريق ضَعُف مَشيُه'
    },
];


function MyQuote(){
    const random = Number.parseInt(Math.random()*quotesOfDay.length);
    document.getElementById("quote-day").textContent = ` " ${quotesOfDay[random].quote} " `;
    document.getElementById("quote-author").textContent = ` - ${quotesOfDay[random].author} - `;
    
}
console.log("Adham");