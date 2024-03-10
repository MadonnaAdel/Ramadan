
let imges =
[
        {"url":"images/5.jpg"},
        {"url":"images/1.jpg"},
        {"url":"images/3.jpg"},
        {"url":"images/6.jpg"},
        {"url":"images/10.jpg"},
        {"url":"images/11.jpg"},
        {"url":"images/12.jpg"},
        {"url":"images/13.jpg"},
        {"url":"images/14.jpg"},
];
let wishes  =
[
        {"wish":"أعاده الله علينا وعليكم بالخير واليمن والبركات"},
        {"wish":"نتمنى لكم شهر رمضان مليئاً بالصحة والسعادة والتقرب إلى الله، كل عام وأنتم بخير"},
        {"wish":"⁠أهنئكم بقدوم شهر الصيام والقيام، أعاننا الله وإياكم على صيامه وقيامه، وتقبل الله منا ومنكم صالح الأعمال"},
        {"wish":" كل عام وأنتم بألف خير، تقبل الله منا ومنكم صالح الأعمال في هذا الشهر الفضيل."},
        {"wish":"أتمنى لكم شهر رمضان مبارك، ينعم عليكم بالرحمة والمغفرة، ويحقق لكم كل أمانيكم وطموحاتكم."},
        {"wish":` بمناسبة حلول شهر رمضان المبارك، أدعو الله أن يجعله شهر خير وبركة على الجميع.`},
        {"wish":" أسعد الله قلوبكم وبارك لكم في شهر رمضان، وجعله فرصة لتجديد العهد مع الله وتحقيق الأماني والطموحات"},
        {"wish":"أتمنى لكم دفءًا داخليًا، حيث يملأ الحب قلوبكم"},
        {"wish":"رمضان مبارك! أتمنى لك شهراً مليئاً بالبركات والسلام"},
        {"wish":"كل عام وأنتم بخير! أتمنى لكم شهر رمضان مليئاً بالإيمان والسعادة."},
        {"wish":"مضان مبارك وكل عام وأنتم بخير! أعاده الله علينا وعليكم باليمن والبركات"},
        { "wish":"رمضان مبارك عليكم وعلى عائلاتكم، أسأل الله أن يجعله شهر خير وسعادة وسلام على الجميع."},
];
let whishIndex = 0;
let imgeIndex = 0;
let nameInput = document.querySelector(".searchInput");
let btn = document.querySelector(".btn");
let text =document.querySelector(".text");



function getRandomWish() {
    let randomIndex = Math.floor(Math.random() * wishes.length);
    return wishes[randomIndex];
}


function Ramadan() {
    
    if (nameInput.value == "") {
        text.innerHTML = `<h4>وهو انا لو مش عايز اسمك هقولك اكتبه لييية اكتب اسمك ياعسل</h4>
            <div style="width: 50%; margin: auto;"><img src="images/WhatsApp Image 2024-03-10 at 13.30.53_bbeb5cbc.jpg" width="80" alt=""></div>
            <h3 class="wish"> </h3>
            <span> </span>
            <p>Madonna Adel (Web UI INTAKE 44 )</p>`;
    } else {
        if (whishIndex == wishes.length) {
            whishIndex = 0;
        }
        let randomWish = getRandomWish();
        text.innerHTML = `<h1>Ramadan Karem Ya ${nameInput.value}
            <img src="images/—Pngtree—3d golden cloud texture ramadan_6111288.png" width="80"></img>
            </h1>
            <h3 class="wish">${randomWish.wish}</h3>
            <span>مش عجباك دي في غيرها... دوس سيرش</span>
            <p>Madonna Adel (Web UI INTAKE 44 )</p>`;
        whishIndex = whishIndex + 1;
        var audio = document.getElementById('hiddenAudio');
        audio.play();
    }
}



function changImg(){
    if(imgeIndex == imges.length)
    {
        imgeIndex=0;
    }
    document.querySelector(".main").style.background = `no-repeat center url(${imges[imgeIndex].url})`;
    document.querySelector(".main").style.backgroundSize = `cover`;
    document.querySelector(".text").style.height = "fit-content";
    document.querySelector(".text").style.transition = "8s";
    document.querySelector(".text").style.margin = "5px";
    document.querySelector(".text").style.padding = "5px";
    imgeIndex = imgeIndex + 1 ;
};

function clear(){
    nameInput.value=" ";
}

btn.addEventListener("click",()=>{
    changImg();
    Ramadan(nameInput.value);
});

nameInput.addEventListener("keyup", function(e){
    if (e.key == "Enter") {
        Ramadan(nameInput.value);
        changImg();
        clear();
    }
});
