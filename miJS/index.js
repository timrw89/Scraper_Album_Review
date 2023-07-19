
const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const fs = require('fs');

const app = express();

const url = 'https://metalinjection.net/category/reviews';

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const reviews = []

        

        $('article', html).each(function(){
            const image = $(this).find('img').attr('src');
            const reviewTitle = $(this).find('.zox-s-title2').text();
            const url = $(this).find('a').attr('href');
            
            reviews.push({
                image, 
                reviewTitle,
                url
            })

           
        });

        
      

        fs.writeFile('miJS/MIData.Json', JSON.stringify(reviews), (err) => {
            if (err) throw err;
            console.log('file successfully saved!')
        });
        
        

        console.log(reviews);
    }).catch(err => console.log(err));

  


    app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))