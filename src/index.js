const dictionary = {
  ru: {
    firstParagraph:
      'Меня зовут Дониёр, я веб-разработчик из Узбекистана. Я занимаюсь дизайном и созданием адаптивных и кроссбраузерных сайтов, а также имею опыт разработки телеграм-ботов. Реализую эффективные и масштабируемые решения для бизнеса и инновационных проектов.',
    secondParagraph:
      'Моя цель — создавать продукты, которые объединяют современные технологии с реальными потребностями клиентов, помогая им достигать желаемого. Я открыт для новых возможностей и сотрудничества, где смогу применить свои знания и опыт.',
  },
  en: {
    firstParagraph:
      ' My name is Doniyor, and I am a web developer from Uzbekistan. I specialize in design and creating responsive and cross-browser websites, and I also have experience in developing Telegram bots. I deliver efficient and scalable solutions for businesses and creative projects.',
    secondParagraph:
      'My goal is to develop products that blend modern technologies with real client needs, empowering them to achieve their goals. I am open to new opportunities and collaborations where I can apply my skills and experience.',
  },
};

const state = {
  lng: 'en',
};

const render = (state, paragraph1, paragraph2, languageButton) => {
  const language = state.lng;
  paragraph1.textContent = dictionary[language].firstParagraph;
  paragraph2.textContent = dictionary[language].secondParagraph;

  if (language === 'en') {
    languageButton.innerHTML = '<strong class="selected-language">EN</strong> | RU';
  } else {
    languageButton.innerHTML = 'EN | <strong class="selected-language">RU</strong>';
  }
};

const firstParagraphEl = document.getElementById('descriptionFirstParagraph');
const secondParagraphEl = document.getElementById('descriptionSecondParagraph');
const languageButton = document.getElementById('languageButton');

languageButton.addEventListener('click', () => {
  state.lng = state.lng === 'en' ? 'ru' : 'en';
  render(state, firstParagraphEl, secondParagraphEl, languageButton);
});
