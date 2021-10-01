import React, { Component } from "react";

import NewsItem from "./NewsItem";

export class News extends Component {
   articles = {
      "status": "ok",
      "totalResults": 5440,
      "articles": [
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": null,
      "title": "New Zealand warned of 'specific and credible' threat in Pakistan",
      "description": "New Zealand Cricket said it took \"the only responsible course of action possible\" by pulling out of the tour of Pakistan this week.",
      "url": "https://www.bbc.co.uk/sport/cricket/58614287",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/149F7/production/_120617448_nz_getty.jpg",
      "publishedAt": "2021-09-19T07:57:23Z",
      "content": "Both sets of players had been escorted to the ground for practice by members of the Pakistan military\r\nNew Zealand were warned of a \"specific and credible threat\" against them before abandoning the P… [+1945 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "MCC changes 'batsman' to 'batter' in Laws of Cricket - Reuters",
      "description": "The term 'batsman' has been amended to the gender-neutral term 'batter' in the Laws of Cricket to stress the importance of women's cricket, the Marylebone Cricket Club said on Wednesday.",
      "url": "https://www.reuters.com/lifestyle/sports/mcc-changes-batsman-batter-laws-cricket-2021-09-22/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=53",
      "publishedAt": "2021-09-22T11:15:00Z",
      "content": "Sept 22 (Reuters) - The term 'batsman' has been amended to the gender-neutral term 'batter' in the Laws of Cricket to stress the importance of women's cricket, the Marylebone Cricket Club said on Wed… [+1329 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": "Reuters Editorial",
      "title": "Pitch-invading puppy fields cricket ball - Reuters",
      "description": "A cricket match was disrupted on Saturday (September 11) by an unlikely pitch invader - a Cocker Spaniel puppy named Dazzle.",
      "url": "https://www.reuters.com/video/watch/idOVEUK5LK1",
      "urlToImage": "https://static.reuters.com/resources/r/?d=20210913&i=OVEUK5LK1&r=OVEUK5LK1&t=2",
      "publishedAt": "2021-09-13T14:30:44Z",
      "content": "Posted \r\nA cricket match was disrupted on Saturday (September 11) by an unlikely pitch invader - a Cocker Spaniel puppy named Dazzle."
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Former UAE keeper Shabbir banned for four years - Reuters",
      "description": "Former United Arab Emirates (UAE) wicketkeeper Gulam Shabbir has been banned from all forms of cricket for four years after admitting breaching six counts of the International Cricket Council's (ICC) anti-corruption code, world cricket's governing body said o…",
      "url": "https://www.reuters.com/lifestyle/sports/former-uae-keeper-shabbir-banned-four-years-2021-09-06/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=50",
      "publishedAt": "2021-09-06T12:20:00Z",
      "content": "Sept 6 (Reuters) - Former United Arab Emirates (UAE) wicketkeeper Gulam Shabbir has been banned from all forms of cricket for four years after admitting breaching six counts of the International Cric… [+1190 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "NZ set to go home after security scare, leaving Pakistan in despair - Reuters",
      "description": "New Zealand's abrupt decision to pull out of their cricket tour of Pakistan has created \"an unfortunate scenario\" but the hosts know how to overcome such crises, the chairman of the country's cricket board Ramiz Raja said on Saturday.",
      "url": "https://www.reuters.com/lifestyle/sports/nz-set-go-home-after-security-scare-leaving-pakistan-despair-2021-09-18/",
      "urlToImage": "https://www.reuters.com/resizer/XZtN_vcqywkb1FhACum-aRw8Suo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2MLCNYDIKFJIRNCLNSFQTVCGVY.jpg",
      "publishedAt": "2021-09-18T13:21:00Z",
      "content": "ISLAMABAD, Sept 18 (Reuters) - New Zealand's abrupt decision to pull out of their cricket tour of Pakistan has created \"an unfortunate scenario\" but the hosts know how to overcome such crises, the ch… [+3052 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "England's Moeen set to retire from tests - reports - Reuters",
      "description": "England all-rounder Moeen Ali is set to announce his retirement from test cricket, British media reported.",
      "url": "https://www.reuters.com/lifestyle/sports/englands-moeen-set-retire-tests-reports-2021-09-27/",
      "urlToImage": "https://www.reuters.com/resizer/Tb2Qry5kes3ZUBTVBgtuj4emCuc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BZTKW6VSUZIBRKAJ7DRVLC6T6A.jpg",
      "publishedAt": "2021-09-27T00:40:00Z",
      "content": "Cricket - England Nets - Emirates Old Trafford, Manchester, Britain- September 9, 2021 England's Moeen Ali during nets Action Images via Reuters/Jason CairnduffSept 27 (Reuters) - England all-rounder… [+628 chars]"
      },
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Afghanistan: Women's youth soccer team escapes to Pakistan",
      "description": "Their departure comes as part of a wider exodus of female cultural and sporting stars.",
      "url": "https://www.bbc.co.uk/news/world-asia-58571183",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/46D9/production/_120573181_afghanwomen.jpg",
      "publishedAt": "2021-09-15T11:38:10Z",
      "content": "image source, Getty Images\r\nFemale players from Afghanistan's junior national soccer team have crossed the border into Pakistan. \r\nThe girls had spent the past month in hiding amid fears of a crackdo… [+2103 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "Don't isolate us, Afghan board pleads after Australia warning - Reuters",
      "description": "Afghanistan's cricket authorities on Friday pleaded with other national teams not to shun it over the country's new Taliban rulers' suggestion that they might ban women from the sport.",
      "url": "https://www.reuters.com/lifestyle/sports/dont-isolate-us-afghan-board-pleads-after-australia-warning-2021-09-10/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=52",
      "publishedAt": "2021-09-10T13:04:00Z",
      "content": "NEW DELHI, Sept 10 (Reuters) - Afghanistan's cricket authorities on Friday pleaded with other national teams not to shun it over the country's new Taliban rulers' suggestion that they might ban women… [+2402 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "Australia to postpone Afghanistan test this week - official - Reuters",
      "description": "Australia will postpone its test match against Afghanistan indefinitely this week to prompt the Asian nation to \"rethink\" their approach to women's sport, Cricket Tasmania boss Dominic Baker said on Wednesday.",
      "url": "https://www.reuters.com/world/asia-pacific/australia-postpone-afghanistan-test-this-week-official-2021-09-29/",
      "urlToImage": "https://www.reuters.com/resizer/dzY2zotC6tnhoZwWnxgICzDssN8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TEKXOAED7FL5DP4SAUFDKRSFDI.jpg",
      "publishedAt": "2021-09-29T07:27:00Z",
      "content": "Cricket - ICC Cricket World Cup - Afghanistan v West Indies - Headingley, Leeds, Britain - July 4, 2019 Afghanistan fans during the match Action Images via Reuters/Lee SmithMELBOURNE, Sept 29 (Reuter… [+1981 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Guardian"
      },
      "author": "Arnel Hecimovic",
      "title": "Melting ice and the Taliban watching cricket: Friday’s best photos",
      "description": "The Guardian’s picture editors select photo highlights from around the world Continue reading...",
      "url": "https://www.theguardian.com/news/gallery/2021/sep/03/melting-ice-and-the-taliban-watching-cricket-fridays-best-photos",
      "urlToImage": "https://i.guim.co.uk/img/media/25145bbbae231d66f7f43d1cd4472a936e721ed6/993_623_4262_2557/master/4262.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a66c9ce693b78031cc30a37e72a8a54e",
      "publishedAt": "2021-09-03T14:01:26Z",
      "content": "The Guardians picture editors select photo highlights from around the world"
      },
      {
      "source": {
      "id": null,
      "name": "The Guardian"
      },
      "author": "Raf Nicholson at The Spitfire Ground, Canterbury",
      "title": "Tammy Beaumont hits brilliant century as England beat New Zealand in last ODI",
      "description": "<ul><li>Fifth ODI: England 347-5; New Zealand 144</li><li>Beaumont’s eighth ODI century draws standing ovation</li></ul>The England and Wales Cricket Board may have had a troubled relationship with women’s county cricket in recent years – the Women’s County C…",
      "url": "https://amp.theguardian.com/sport/2021/sep/26/england-new-zealand-fifth-womens-one-day-international-match-report",
      "urlToImage": "https://i.guim.co.uk/img/media/69a886a6fb96a33dd4e068b066c70682cbf35d6b/116_186_3238_1943/master/3238.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e085862343407cb7f2f076db948a4342",
      "publishedAt": "2021-09-26T16:52:02Z",
      "content": "The England and Wales Cricket Board may have had a troubled relationship with womens county cricket in recent years the Womens County Championship was abolished in 2019 and the future of the County T… [+3390 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "New Zealand abandon series in Pakistan after security alert - Reuters",
      "description": "New Zealand on Friday abandoned their limited-overs series in Pakistan after receiving a security alert, the Pakistan Cricket Board (PCB) said.",
      "url": "https://www.reuters.com/lifestyle/sports/new-zealand-unilaterally-suspends-odi-series-pakistan-after-security-alert-2021-09-17/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=52",
      "publishedAt": "2021-09-17T10:36:00Z",
      "content": "ISLAMABAD, Sept 17 (Reuters) - New Zealand on Friday abandoned their limited-overs series in Pakistan after receiving a security alert, the Pakistan Cricket Board (PCB) said.\r\nNew Zealand officials h… [+1278 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "Security tightened around NZ women's team in England after threat - Reuters",
      "description": "Security has been tightened around New Zealand's women's cricket team after a threat was received ahead of a one-day international against England in Leicester on Tuesday.",
      "url": "https://www.reuters.com/lifestyle/sports/security-tightened-around-nz-womens-team-england-after-threat-2021-09-20/",
      "urlToImage": "https://www.reuters.com/resizer/edQWTMxBj2e8K6UGGNOI4BRvDug=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FRPC64FERRKONMGA7ZKYTOBWZU.jpg",
      "publishedAt": "2021-09-20T23:01:00Z",
      "content": "Cricket - Women's Second One Day International - England v New Zealand - County Ground, Worcester, Britain - September 19, 2021 New Zealand's Hannah Rowe and Amy Satterthwaite celebrate with teammate… [+1235 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Guardian"
      },
      "author": "PA Media",
      "title": "South Africa legend Dale Steyn announces retirement from cricket",
      "description": "<ul><li>Fast bowler took 439 wickets in 93 Test matches</li><li>‘It’s been an incredible journey,’ says Steyn of 18-year career</li></ul>The South Africa fast bowler Dale Steyn has announced his retirement. The 38-year-old, considered one of the finest bowler…",
      "url": "https://amp.theguardian.com/sport/2021/aug/31/south-africa-legend-dale-steyn-announces-retirement-from-cricket",
      "urlToImage": "https://i.guim.co.uk/img/media/21b462eee9d72263656be19f47d619a03ded3189/0_57_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7a19bfc49026eda1148dd4860f3da44f",
      "publishedAt": "2021-08-31T11:15:51Z",
      "content": "The South Africa fast bowler Dale Steyn has announced his retirement. The 38-year-old, considered one of the finest bowlers of his generation, made the announcement on social media, calling time on h… [+1082 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "Pakistan minister says threat to NZ cricket team originated in India - Reuters",
      "description": "A threat to New Zealand's cricket team that prompted them to call off a tour of Pakistan came in an email that originated in India, Pakistan's information Minister said on Wednesday.",
      "url": "https://www.reuters.com/world/asia-pacific/pakistan-minister-says-threat-nz-cricket-team-originated-india-2021-09-22/",
      "urlToImage": "https://www.reuters.com/resizer/SJ-fxnniVBFmWhJrj0m0M7ZVm7Y=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IMGO5LGYEFKWHCDNXNOMI3E6ZU.jpg",
      "publishedAt": "2021-09-22T09:28:00Z",
      "content": "A member of the Police Elite Force stands guard at the Rawalpindi Cricket Stadium, after the New Zealand cricket team pulled out of a Pakistan cricket tour over security concerns, in Rawalpindi, Paki… [+1529 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "Former West Indies all-rounder Samuels charged with alleged corruption - Reuters",
      "description": "Former West Indies all-rounder Marlon Samuels has been charged with breaching four counts of the International Cricket Council's (ICC) anti-corruption code, world cricket's governing body said on Wednesday.",
      "url": "https://www.reuters.com/lifestyle/sports/former-west-indies-all-rounder-samuels-charged-with-alleged-corruption-2021-09-22/",
      "urlToImage": "https://www.reuters.com/resizer/QX0k_jiaDLLOHmsTOPsOLTU3qPk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/47DQWIGKORIRLHDGYKULZ5K57I.jpg",
      "publishedAt": "2021-09-22T18:42:00Z",
      "content": "Cricket - South Africa v West Indies - World Twenty20 cricket tournament - Nagpur, India, 25/03/2016. West Indies Marlon Samuels plays a shot. REUTERS/Danish SiddiquiSept 22 (Reuters) - Former West I… [+1217 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Guardian"
      },
      "author": "Guardian sport and agencies",
      "title": "Australia’s Test against Afghanistan set to be cancelled over Taliban ban on women’s sport",
      "description": "<ul><li>Cricket Australia ‘no alternative’ but to cancel game</li><li>Calls for ICC to take stand against Taliban-led country</li></ul>Australia’s one-off men’s Test match against Afghanistan, scheduled to start in Hobart on 27 November, is set to be cancelle…",
      "url": "https://amp.theguardian.com/sport/2021/sep/09/australias-test-against-afghanistan-on-shaky-ground-after-taliban-ban-on-womens-sport",
      "urlToImage": "https://i.guim.co.uk/img/media/4141df8a928768d1fb2b68dd73bb74f84522c092/0_128_3000_1799/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7dea8851d122be6e58a10902ab7a8f45",
      "publishedAt": "2021-09-09T02:23:30Z",
      "content": "Australias one-off mens Test match against Afghanistan, scheduled to start in Hobart on 27 November, is set to be cancelled after the Taliban banned women from playing sport, including cricket.\r\nCric… [+2973 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "NZ players reach Dubai after 'specific, credible threat' derailed Pakistan tour - Reuters",
      "description": "New Zealand was warned of a \"specific, credible threat\" against its team, New Zealand Cricket (NZC) said, elaborating on the rationale for abruptly abandoning the tour of Pakistan as the squad reached Dubai on Sunday.",
      "url": "https://www.reuters.com/lifestyle/sports/nz-players-reach-dubai-after-specific-credible-threat-derailed-pakistan-tour-2021-09-19/",
      "urlToImage": "https://www.reuters.com/resizer/vxLW8hq2e4aZHV_MfH6Alj89Lzc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7ESVPVBPYJMPBD3T3TYWPLQBSI.jpg",
      "publishedAt": "2021-09-19T04:25:00Z",
      "content": "Police officers stand guard outside Rawalpindi Cricket Stadium after New Zealand cricket team pull out of a Pakistan cricket tour over security concerns, in Rawalpindi, Pakistan September 17, 2021. R… [+2310 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Guardian"
      },
      "author": "PA Media",
      "title": "Former West Indies all-rounder Marlon Samuels facing corruption charges",
      "description": "<ul><li>Charges relate to spell in Abu Dhabi-based T10 League</li><li>Samuels starred in 2016 T20 World Cup final against England</li></ul>The former West Indies all-rounder Marlon Samuels has been charged with four counts of breaching the Emirates Cricket Bo…",
      "url": "https://amp.theguardian.com/sport/2021/sep/22/former-west-indies-all-rounder-marlon-samuels-facing-corruption-charges",
      "urlToImage": "https://i.guim.co.uk/img/media/71b464862a4bbfc0e9ef98f1bacc587be137816e/222_670_2386_1430/master/2386.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5018e68f07f472b7ca057bed72e44efc",
      "publishedAt": "2021-09-22T13:19:43Z",
      "content": "The former West Indies all-rounder Marlon Samuels has been charged with four counts of breaching the Emirates Cricket Boards anti-corruption code.\r\nThe charges were laid by the world governing body, … [+1145 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "England call off Pakistan tour after New Zealand security scare - Reuters",
      "description": "England have withdrawn their men's and women's teams from next month's tour of Pakistan, the country's cricket board (ECB) said on Monday, three days after <a href=\"https://www.reuters.com/lifestyle/sports/new-zealand-unilaterally-suspends-odi-series-pakistan…",
      "url": "https://www.reuters.com/lifestyle/sports/england-call-off-pakistan-tour-after-new-zealand-security-scare-2021-09-20/",
      "urlToImage": "https://www.reuters.com/resizer/vlbhnqn2rTtf5HAEecE8OtKKvOo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N4KXBQOF6VJXJEIDUX7BSHMN6U.jpg",
      "publishedAt": "2021-09-20T15:59:00Z",
      "content": "Members of the Police Elite Force walk in an enclosure at the Rawalpindi Cricket Stadium after the New Zealand cricket team pulled out of a Pakistan cricket tour over security concerns, in Rawalpindi… [+2762 chars]"
      }
      ]
      }

   constructor(){
      super()
      console.log("Hello I am a Constructor From News Components");
      this.state = {
         articles: this.articles,
         loading: false
      }
   }
   
   render() {
    return (
      <>
        <div className="container my-3">
          <h2>NewsMonkey - Top Headlines</h2>

          <div className="row">
            <div className="col-md-4 my-4">
              <NewsItem
                title="Testing Title"
                description="Testing Description"
                imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/149F7/production/_120617448_nz_getty.jpg"
                newsUrl="TODO"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="Testing Title"
                description="Testing Description"
                imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/149F7/production/_120617448_nz_getty.jpg"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="Testing Title"
                description="Testing Description"
                imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/149F7/production/_120617448_nz_getty.jpg"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="Testing Title"
                description="Testing Description"
                imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/149F7/production/_120617448_nz_getty.jpg"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="Testing Title"
                description="Testing Description"
                imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/149F7/production/_120617448_nz_getty.jpg"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
