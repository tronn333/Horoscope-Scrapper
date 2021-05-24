const { Router } = require("express");
const fetch = require('node-fetch')
const request = require('request-promise');



const router = Router()
router.get('/homepage', (req,res)=>{
    res.render('homepage')
})
router.post('/homepage', async (req,res)=>{
         console.log(req.body);
        const URL = `https://horo.mail.ru/prediction/${req.body.zodiacSign.toLowerCase()}/today/`;
        let horoscope = null;
        await request(URL,function (err, res, body) {
            if (err) throw err;
            const regex =/(?<=<div class="article__item article__item_alignment_left article__item_html">)(.+)(?=p>\r\n)/gms
            horoscope = body.match(regex)
        });
        res.json(horoscope[0])
})

module.exports = router