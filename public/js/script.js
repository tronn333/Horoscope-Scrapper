const forma = document.querySelector('#plohaya-forma')
const answer = document.querySelector('.answer-container')
const horoscope = document.querySelector('#constalation-description')
const headline = document.querySelector('#headline')
const main = document.querySelector('#main-container')
const babka = document.querySelector('#constalation-picture')
sign = (date) => {
    let znak
    // console.log(date);
    const month = date.getMonth()
    const den = date.getDay()
switch (month) {
    case 1:
        if (den <= 19)
            znak = 'Capricorn';
        else
            znak = 'Aquarius';
        break;
    case 2:
        if (den <= 18)
            znak = 'Aquarius';
        else
            znak = 'Pisces';
        break;
    case 3:
        if (den <= 20)
            znak = 'Pisces';
        else
            znak = 'Aries';
        break;
    case 4:
        if (den <= 19)
            znak = 'Aries';
        else
            znak = 'Taurus';
        break;
    case 5:
        if (den <= 20)
            znak = 'Taurus';
        else
            znak = 'Gemini';
        break;
    case 6:
        if (den <= 21)
            znak = 'Gemini';
        else
            znak = 'Cancer';
        break;
    case 7:
        if (den <= 22)
            znak = 'Cancer';
        else
            znak = 'Leo';
        break;
    case 8:
        if (den <= 22)
            znak = 'Leo';
        else
            znak = 'Virgo';
        break;
    case 9:
        if (den <= 22)
            znak = 'Virgo';
        else
            znak = 'Libra';
        break;
    case 10:
        if (den <= 22)
            znak = 'Libra';
        else
            znak = 'Scorpio';
        break;
    case 11:
        if (den <= 22)
            znak = 'Scorpio';
        else
            znak = 'Sagittarius';
        break;
    case 12:
        if (den <= 21)
            znak = 'Sagittarius';
        else
            znak = 'Carricorn';
        break;
}
return znak
}

console.log(forma);
forma.addEventListener('submit', async (event) =>{
    event.preventDefault()
     forma.remove()
      const date = new Date(forma.date.value)
    //   console.log(typeof date);
      const zodiacSign = sign(date)
      const response = await fetch('/homepage', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({zodiacSign})
    })
    const Serverresponse = await response.json()
    const horoscopeString= Serverresponse +'p>'
    headline.innerText = zodiacSign
    const newHeadline = headline
    babka.innerHTML= '<img height = 100px src="https://avatars.mds.yandex.net/get-zen_doc/1349008/pub_5be0378640910900aab9e68d_5be040736ff97800aa5289d9/scale_1200">'
    newHeadline.style.margin='0'
    headline.remove()
        main.prepend(newHeadline)
        console.log(horoscopeString);
        horoscope.innerHTML=horoscopeString
        answer.style.animation='3s slide-up'
})