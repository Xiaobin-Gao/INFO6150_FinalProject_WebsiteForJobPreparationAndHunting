import { Component, OnInit } from '@angular/core';
import {CompanyPage} from './companiesPage.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies:CompanyPage[];


  constructor() { 
    this.companies=[
      new CompanyPage(
        'Google',
        '../../assets/companyList/1.png',
        'https://careers.google.com',
        '1600 Amphitheatre Parkway Mountain View, CA 94043',
        98,
        1000,
        30,
        'Do not be evil',
        "Google LLC[5] is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple and Facebook.<br>Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a privately held company on September 4, 1998. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet.<br>The company's rapid growth since incorporation has triggered a chain of products, acquisitions, and partnerships beyond Google's core search engine (Google Search). It offers services designed for work and productivity (Google Docs, Google Sheets, and Google Slides), email (Gmail/Inbox), scheduling and time management (Google Calendar), cloud storage (Google Drive), instant messaging and video chat (Google Allo, Duo, Hangouts), language translation (Google Translate), mapping and navigation (Google Maps, Waze, Google Earth, Street View), video sharing (YouTube), note-taking (Google Keep), and photo organizing and editing (Google Photos). The company leads the development of the Android mobile operating system, the Google Chrome web browser, and Chrome OS, a lightweight operating system based on the Chrome browser. Google has moved increasingly into hardware; from 2010 to 2015, it partnered with major electronics manufacturers in the production of its Nexus devices, and it released multiple hardware products in October 2016, including the Google Pixel smartphone, Google Home smart speaker, Google Wifi mesh wireless router, and Google Daydream virtual reality headset. Google has also experimented with becoming an Internet carrier (Google Fiber, Project Fi, and Google Station).[8]<br>Google.com is the most visited website in the world.[9] Several other Google services also figure in the top 100 most visited websites, including YouTube and Blogger. Google is the most valuable brand in the world as of 2017,[10] but has received significant criticism involving issues such as privacy concerns, tax avoidance, antitrust, censorship, and search neutrality. Google's mission statement is to organize the world's information and make it universally accessible and useful. The companies unofficial slogan Don't be evil was removed from the company's code of conduct around May 2018.[11][12]",
        82,
        ),
      new CompanyPage(
        'Amazon',
        '../../assets/companyList/2.png',
        'https://www.amazon.jobs/en-gb',
        'Seattle, Washington, U.S.',
        95,
        800,
        77,
        "Our vision is to be earth's most customer-centric company; to build a place where people can come to find and discover anything they might want to buy online.",
        "Amazon.com, Inc.[6] (/ˈæməˌzɒn/), is an American multinational technology company based in Seattle, Washington that focuses in e-commerce, cloud computing, and artificial intelligence.<br><br>Amazon is the largest e-commerce marketplace and cloud computing platform in the world as measured by revenue and market capitalization.[7] Amazon.com was founded by Jeff Bezos on July 5, 1994, and started as an online bookstore but later diversified to sell video downloads/streaming, MP3 downloads/streaming, audiobook downloads/streaming, software, video games, electronics, apparel, furniture, food, toys, and jewelry. The company also owns a publishing arm, Amazon Publishing, a film and television studio, Amazon Studios, produces consumer electronics lines including Kindle e-readers, Fire tablets, Fire TV, and Echo devices, and is the world's largest provider of cloud infrastructure services (IaaS and PaaS) through its AWS subsidiary.[8] Amazon has separate retail websites for some countries and also offers international shipping of some of its products to certain other countries.[9] 100 million people subscribe to Amazon Prime.[10][11]<br><br>Amazon is the largest Internet company by revenue in the world[12] and the second largest employer in the United States.[13] In 2015, Amazon surpassed Walmart as the most valuable retailer in the United States by market capitalization.[14] In 2017, Amazon acquired Whole Foods Market for $13.4 billion, which vastly increased Amazon's presence as a brick-and-mortar retailer.[15] The acquisition was interpreted by some[by whom?] as a direct attempt to challenge Walmart's traditional retail stores.[16]",
        65,
        ),
      new CompanyPage(
        'Twitter',
        '../../assets/companyList/3.png',
        'https://careers.twitter.com/en.html',
        'San Francisco, California, United States',
        96,
        1005,
        65,
        'Yours To Discover',
        "Twitter (/ˈtwɪtər/) is an American online news and social networking service on which users post and interact with messages known as tweets. Tweets were originally restricted to 140 characters, but on November 7, 2017, this limit was doubled for all languages except Chinese, Japanese, and Korean.[14] Registered users can post, like, and retweet tweets, but unregistered users can only read them. Users access Twitter through its website interface, through Short Message Service (SMS) or its mobile-device application software (app).[15] Twitter, Inc. is based in San Francisco, California, and has more than 25 offices around the world.[16]<br><br>>Twitter was created in March 2006 by Jack Dorsey, Noah Glass, Biz Stone, and Evan Williams and launched in July of that year. The service rapidly gained worldwide popularity. In 2012, more than 100 million users posted 340 million tweets a day,[17] and the service handled an average of 1.6 billion search queries per day.[18][19][20] In 2013, it was one of the ten most-visited websites and has been described as the SMS of the Internet.[21][22] As of 2018, Twitter had more than 321 million monthly active users.[10] Since 2015 Twitter has been a hotbed of debates and news covering politics of the United States. During the 2016 U.S. presidential election, Twitter was the largest source of breaking news on the day, with 40 million election-related tweets sent by 10:00 p.m. (Eastern Time) that day.[23] It was also a source of information on Brett Kavanaugh's Supreme Court nomination and the 2018 United States midterm elections.",
        66,
        ),
      new CompanyPage(
        'Facebook',
        '../../assets/companyList/4.png',
        'https://www.facebook.com/careers/',
        '1 Hacker Way(aka 1601 Willow Road)Menlo Park, California, U.S.',
        98,
        1010,
        30,
        "If you think we're not good for your business, leave' Facebook is famous for the mantra",
        "Facebook, Inc. is an American online social media and social networking service company. It is based in Menlo Park, California. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes. It is considered one of the Big Four technology companies along with Amazon, Apple, and Google.[8][9]The founders initially limited the website's membership to Harvard students and subsequently Columbia, Stanford, and Yale students. Membership was eventually expanded to the remaining Ivy League schools, MIT, and higher education institutions in the Boston area. Facebook gradually added support for students at various other universities, and eventually to high school students. Since 2006, anyone who claims to be at least 13 years old has been allowed to become a registered user of Facebook, though variations exist in this requirement, depending on local laws. The name comes from the face book directories often given to American university students. Facebook held its initial public offering (IPO) in February 2012, valuing the company at $104 billion, the largest valuation to date for a newly listed public company. It began selling stock to the public three months later. Facebook makes most of its revenue from advertisements that appear onscreen.The Facebook service can be accessed from devices with Internet connectivity, such as personal computers, tablets and smartphones. After registering, users can create a customized profile revealing information about themselves. Users can post text, photos and multimedia of their own devising and share it with other users as friends. Users can use various embedded apps, and receive notifications of their friends' activities. Users may join common-interest groups.Facebook had more than 2.3 billion monthly active users[10] as of December 2018. It receives prominent media coverage, including many controversies such as user privacy[11][12] and psychological effects. The company has faced intense pressure over censorship and over content that some users find objectionable.Facebook offers other products and services. It acquired Instagram, WhatsApp, Oculus Rift, and GrokStyle[13] and independently developed Facebook Messenger.",
        82,
        ),
    ]
  }



  ngOnInit() {
    
  }

  foo(company) {
    company.hot++;
  }

}