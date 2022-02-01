const data = [
  {
    id: 1,
    memberName: 'Ayoub Chahir',
    profile: './img/profile.jpeg',
    about:
      'Ayoub Chahir have more than ten years experience in tech and he holds an Engineering Degree in Electrical Engineering',
    work: 'He also spent a year in Morocco, working for an agency doing community moderation, helping browsers and social media apps be clean.',
  },
  {
    id: 2,
    memberName: 'Mahmoud Ezzat',
    profile: 'img/profile_1.jpeg',
    about:
      'Mahmoud Holds a BS in Information Technology, he was always passionate about his field',
    work: 'Mahmoud worked for an Internet Service Provider for the last 6 years, providing maintenance services, he knows the market very well and he is able to put more efforts to make this company the best',
  },
  {
    id: 3,
    memberName: 'Salim Jaban',
    profile: 'img/profile_2.jpeg',
    about:
      'Salim holds a BS in graphic design, he is considered one of the best in his field',
    work: 'Salim has worked for the last 5 years for a digital marketing agency, doing the creatives for the ads, he helped them grow their revenue by 20%',
  },
  {
    id: 4,
    memberName: 'Ahmed Ezzat',
    profile: 'img/profile_3.jpeg',
    about:
      'Ahmed holds an Engineering degree in Computer Science, he has enthusiasm about Data Science',
    work: 'Ahmed helped three creative agencies before, taking the best from the data they have, and helped them grow their revenue by 20% ',
  },
];

const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const mainNavbar = document.querySelector('.main-navbar');
const memberlist = document.querySelector('.team-members');
const navLink = document.querySelectorAll('.nav-list .nav-link a');
Array.from(navLink).forEach((item) => {
  item.addEventListener('click', () => {
    mainNavbar.classList.remove('open');
    mainNavbar.classList.add('backg');
  });
});

menu.addEventListener('click', () => {
  mainNavbar.classList.add('open');
  mainNavbar.classList.remove('backg');
});

closeBtn.addEventListener('click', () => {
  mainNavbar.classList.remove('open');
  mainNavbar.classList.add('backg');
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    mainNavbar.classList.add('backg');
  } else {
    mainNavbar.classList.remove('backg');
  }
});

data.forEach((member) => {
  memberlist.innerHTML += `<li class="member">
  <div class="member-profile">
    <div class="img-profile">
    <img class="img_1" src=${member.profile} alt="" />
    </div>
    <img class="img_2" src="img/grid.jpg" alt="" />
  </div>
  <div class="about-member">
    <h2 class="name">${member.memberName}</h2>
    <i
      >${member.about}</i
    >
    <p class="member-detail">${member.work}</p>
  </div>
</li>`;
});

const memberList = document.querySelectorAll('.member');
const btn = document.querySelector('.see-more .btn');
let state = true;

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (state) {
    Array.from(memberList).forEach((member) => {
      member.classList.add('show');
      btn.innerHTML = '<span>Hide</span><span><i class="fa fa-chevron-up"></i></span>';
    });
    state = false;
  } else {
    state = false;
    Array.from(memberList).forEach((member) => {
      member.classList.remove('show');
      btn.innerHTML = '<span>More</span><span><i class="fa fa-chevron-down"></i></span>';
    });
    state = true;
  }
});
