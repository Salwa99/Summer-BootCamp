/* eslint-disable no-unused-vars */
const homeLink = document.querySelector('#homeLink');
const aboutLink = document.querySelector('#aboutLink');
const speakersCards = document.querySelector('.speakers-elt')

function OpenMenu() {
    document.querySelector('.menuformobile').style.display = 'flex';
    document.querySelector('.closeicon').style.display = 'block';
    document.querySelector('header').style.filter = ' blur(6px)';
    document.querySelector('.headeline').style.filter = ' blur(6px)';
    document.querySelector('main').style.filter = ' blur(6px)';
    document.querySelector('footer').style.filter = ' blur(6px)';
    
  }

function CloseMenu() {
document.querySelector('.menuformobile').style.display = 'none';
document.querySelector('header').style.filter = ' blur(0)'; 
document.querySelector('main').style.filter = ' blur(0)';
document.querySelector('headeline').style.filter = ' blur(0)';
document.querySelector('footer').style.filter = ' blur(0)';
}

aboutLink.addEventListener('click', () => {
document.querySelector('.menuformobile').style.display = 'none';
document.querySelector('header').style.filter = ' blur(0)';
document.querySelector('.headeline').style.filter = ' blur(0)';
document.querySelector('main').style.filter = ' blur(0)';
document.querySelector('footer').style.filter = ' blur(0)';
});

homeLink.addEventListener('click', () => {
document.querySelector('.menuformobile').style.display = 'none';
document.querySelector('header').style.filter = ' blur(0)';
document.querySelector('.headeline').style.filter = ' blur(0)';
document.querySelector('main').style.filter = ' blur(0)';
document.querySelector('footer').style.filter = ' blur(0)';
});

/* eslint-disable no-unused-vars */
const SpeakersList = [
  {
    speakername: 'Satya Nadella',
    imagelink: 'style/images/speaker1.jpeg',
    desc1: 'Microsoft CEO ',
    desc2: 'Satya Nadella knows a thing or two about success in business. The technology executive reportedly earned over $16 million in pay last year and has been leading one of the world’s most widely recognized companies since 2014.'
  },
  {
    speakername: 'Bill Gates',
    imagelink: 'style/images/speaker2.jpeg',
    desc1: 'co-founder of Microsoft',
    desc2: 'William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft'
  },
  {
    speakername: 'Linus Torvalds',
    imagelink: 'style/images/speaker3.jpeg',
    desc1: 'Mathematician, Mars',
    desc2: 'Linus Benedict Torvalds is a Finnish-American software engineer who is the creator and, historically, the lead developer of the Linux kernel, used by Linux distributions and other operating systems such as Android. He also created the distributed version control system Git. '
  },
  {
    speakername: 'Mark Zuckerberg',
    imagelink: 'style/images/speaker4.jpeg',
    desc1: 'CEO of FaceBook',
    desc2: 'Mark Elliot Zuckerberg is an American business magnate, internet entrepreneur, and philanthropist. He is known for co-founding the social media website Facebook and its parent company Meta Platforms, of which he is the chairman, chief executive officer, and controlling shareholder. '
  },
  {
    speakername: 'Brian Chesky',
    imagelink: 'style/images/speaker5.jpeg',
    desc1: 'CEO of airbnb',
    desc2: 'Brian Joseph Chesky is an American businessman and industrial designer. He is the co-founder and CEO of the peer-to-peer lodging service Airbnb. Chesky was named one of Time\'s "100 Most Influential People of 2015'
  },
  {
    speakername: 'Sundar Pichai',
    imagelink: 'style/images/speaker6.jpeg',
    desc1: 'CEO of Google',
    desc2: 'Pichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google. Born in Madurai, India, Pichai earned his degree from IIT Kharagpur in metallurgical engineering.'
  },
]


for(let i=0;i<SpeakersList.length;i++){
  speakersCards.innerHTML +=   `
  <div class="speaker-wrap">
  <img src="${SpeakersList[i].imagelink}" alt="">
  <div class="presentation">
      <h4>${SpeakersList[i].speakername}</h4>
      <p class="desc">${SpeakersList[i].desc1}</p>
      <hr>
      <p>${SpeakersList[i].desc2}</p>
  </div>
</div>
  `
}