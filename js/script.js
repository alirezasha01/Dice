// alert("به بازی شانس خوش اومدی")
let photos=["عکس از صفحه اول گالری","عکس از صفحه اول تلگرام", "بدترین عکس گالریت","عکس قدی","عکس از کف پا"]
let question=["عمیق ترین ترس زندگی ات چیست؟","به نظرت جذاب ترین مرد / زن این جمع چه کسی است؟","بزرگ ترین حسرت زندگی ات چیست؟","آیا تا به حال تقلب یا کلاه برداری کرده ای؟ داستانش را تعریف کن.","بزرگ ترین دروغ زندگی ات چه بوده است؟","خجالت آورترین اتفاق زندگی ات را تعریف کن","بدترین کاری که در مقابل چشم مردم انجام داده ای چه بوده است؟","کدام مورد است که بیشتر اطرافیان فکر می کنند درباره تو صحت دارد اما این طور نیست؟","اگر به مدت یک ماه جنس مخالف خود بودی چه کارهایی می کردی؟","بچه گانه ترین کاری که تا به حال کرده ای چه بوده است؟"]
let six=0;
let lenque = question.length;
let lenpho = photos.length;
let result = [];
function questionBox(x,y,z){
    while((x)>0){
        let idx = parseInt(Math.ceil(Math.random()*z)) ;
        if(y[idx]){
          result=y[idx];
          let tag = document.createElement("p");
          tag.className="text-center"
          let text = document.createTextNode(result); 
          tag.appendChild(text); 
          let element = document.getElementById("questionBox");
          element.appendChild(tag);
          y[idx] = undefined;
          x-=1
       }
    }
}
function dice(){
    let numDice = Math.ceil(Math.random()*6);
    document.getElementById("dice").innerHTML=numDice;
    if (numDice==6){
        document.getElementById("question").innerHTML="دوباره تاس بریز";
        six+=3;
        if(six==6){
           document.getElementById("question").innerHTML="هر یک از اعضای بازی میتوانند یک چیز از شما درخواست کنند";
           document.getElementById("btn").disabled = true;
           document.getElementById("diceReload").disabled = false;
        }
    }
    else if((numDice==2 || numDice==4) && six==0){
        let a = numDice/2;
        document.getElementById("question").innerHTML=`شما باید به ${a} سوال زیر پاسخ دهید`;
        document.getElementById("btn").disabled = true;
        document.getElementById("diceReload").disabled = false;
        document.getElementById("diceReloadFalse").disabled = false;
        questionBox(a,question,lenque);
    }
    else if(numDice==1 && six==0){
        document.getElementById("question").innerHTML="شما معاف شدید";
        document.getElementById("btn").disabled = true;
        document.getElementById("diceReload").disabled = false;
    }
    else if((numDice==5 || numDice==3) && six==0){
        let a=Math.floor(numDice/2);
        document.getElementById("question").innerHTML= `شما باید ${a} عکس زیر را ارسال کنید`;
        document.getElementById("btn").disabled = true;
        document.getElementById("diceReload").disabled = false;
        document.getElementById("diceReloadFalse").disabled = false;
        questionBox(a,photos,lenpho);
    }
    else{
        if(numDice==2 || numDice==4){
            let a=(numDice/2)+six;
            document.getElementById("question").innerHTML=`شما باید به ${a} سوال زیر پاسخ دهید`;
            document.getElementById("btn").disabled = true;
            document.getElementById("diceReload").disabled = false;
            document.getElementById("diceReloadFalse").disabled = false;
            questionBox(a,question,lenque);
        }
        else if(numDice==1){
            let a=six;
            document.getElementById("question").innerHTML=`شما باید به ${six} سوال زیر پاسخ دهید`;
            document.getElementById("btn").disabled = true;
            document.getElementById("diceReload").disabled = false;
            document.getElementById("diceReloadFalse").disabled = false;
            questionBox(a,question,lenque);
        }
        else if(numDice==5 || numDice==3){
            let a=six;
            let b=Math.floor(numDice/2);
            document.getElementById("question").innerHTML= `شما باید به ${a} سوال پاسخ دهید و ${b} عکس زیر را ارسال کنید`;
            document.getElementById("btn").disabled = true;
            document.getElementById("diceReload").disabled = false;
            document.getElementById("diceReloadFalse").disabled = false;
            questionBox(a,question,lenque);
            questionBox(b,photos,lenpho);
        }
    }
}
function diceReload(){
    document.location.reload(true);
}
function diceReloadFalse(){
    document.getElementById("noAnswer").innerHTML="هر یک از اعضای بازی میتوانند یک چیز از شما درخواست کنند";
    document.getElementById("diceReloadFalse").disabled = true;
}