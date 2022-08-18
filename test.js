
// object
let myApi = {
  contactList: [
    {
      tel: "xxxxx xxxxx",
      mail: "contact@mydomain.com"
    }
  ],
  navBtnsList: [
      {
        btn: "HOMEPAGE",
        subTxt: "test text here",
      },
      {
        btn: "STYLE DEMO",
        subTxt: "test text here",
      },
      {
        btn: "FULL WIDTH",
        subTxt: "test text here",
      },
      {
        btn: "PORTFOLIO",
        subTxt: "test text here",
      },
      {
        btn: "GALLERY",
        subTxt: "test text here",
      },
      {
        btn: "DROPDOWN",
        subTxt: "test text here",
      },
  ], 
  shoutList: [
    {
      shoutText: "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque „"
    }
  ],
  sliderImgList: [
    {
      img: "./imgs/Vector-New-York-Skyline.png" 
    }
  ],
  workItemsList: [
      {
          heading: "Indonectetus facilis",
          text: "Dignissimmorbi rhoncus sed netus ligula conseque netus nulla aliquat id dui fermentumnec."
      },
      {
          heading: "Indonectetus facilis",
          text: "Dignissimmorbi rhoncus sed netus ligula conseque netus nulla aliquat id dui fermentumnec."
      },
      {
          heading: "Indonectetus facilis",
          text: "Dignissimmorbi rhoncus sed netus ligula conseque netus nulla aliquat id dui fermentumnec."
      },
      {
          heading: "Indonectetus facilis",
          text: "Dignissimmorbi rhoncus sed netus ligula conseque netus nulla aliquat id dui fermentumnec."
      }
  ],
  servicesList: [
      {
          heading: "Lorem Ipsum Dolor",
          link: "View More »"
      }
  ],
  serviceArticleList: [
      {
          icon: "./imgs/message.png", 
          heading: "Indonectetus facilis", 
          paragraph: "Vestibulu maccumsan ege stibulum eu justo convallis aug ue estas aenean elit intes que sed. Facili spede estib ulum."
      },
      {
          icon: "./imgs/tag.png", 
          heading: "Indonectetus facilis", 
          paragraph: "Vestibulu maccumsan ege stibulum eu justo convallis aug ue estas aenean elit intes que sed. Facili spede estib ulum."
      },
      {
          icon: "./imgs/notes.png", 
          heading: "Indonectetus facilis", 
          paragraph: "Vestibulu maccumsan ege stibulum eu justo convallis aug ue estas aenean elit intes que sed. Facili spede estib ulum."
      },
      {
          icon: "./imgs/notif.jpg", 
          heading: "Indonectetus facilis", 
          paragraph: "Vestibulu maccumsan ege stibulum eu justo convallis aug ue estas aenean elit intes que sed. Facili spede estib ulum."
      }
  ],
  profileList: [
    {
      img: "man",
      fullName: "John Doe"
    },
    {
      img: "woman",
      fullName: "Jane Doe"
    }
  ],
  aboutUsList: [
      {
          heading: "ABOUT US",
          img: "./imgs/footer-image.png",
          article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque. Quisque non luctus sem.",
          link: "Read More »"
      }
  ],
  linkBlockHeading: [
    {
      heading: "LINK BLOCK"
    }
  ],
  linkBlockList: [
      {
          img: "./imgs/Composite Path.png",
          link: "Lorem ipsum dolor sit"
      },
      {
          img: "./imgs/Composite Path.png",
          link: "Amet consectetur"
      },
      {
          img: "./imgs/Composite Path.png",
          link: "Praesent vel sem id"
      },
      {
          img: "./imgs/Composite Path.png",
          link: "Curabitur hendrerit est"
      },
      {
          img: "./imgs/Composite Path.png",
          link: "Aliquam eget erat nec sapien"
      },
      {
          img: "./imgs/Composite Path.png",
          link: "Cras id augue nunc"
      },
      {
          img: "./imgs/Composite Path.png",
          link: "In nec justo non"
      },
      {
          img: "./imgs/Composite Path.png",
          link: "Vivamus mollis enim ut"
      },
      {
          img: "./imgs/Composite Path.png",
          link: "Curabitur hendrerit est"
      },
  ],
  blogBlockHeading: [
    {
      heading: "FROM THE BLOG"
    }
  ],
  blogTextList: [
      {
          title: "Post Title",
          blogText: "Friday, 6th April 2000",
          paragraph: "Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.",
          link: "Read More »"
      },
      {
        title: "Post Title",
        blogText: "Friday, 6th April 2000",
        paragraph: "Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.",
        link: "Read More »"
      }
  ],
  contactUsList: [
      {
          heading: "CONTACT US",
          tel: "xxxxx xxxxxxxxxx",
          fax: "xxxxx xxxxxxxxxx",
          mail: "@mydomain.com",
          heading2: "NEWSLETTER"
      }
  ],

};

// setting content
function setContent(id, value) {
  let elem = document.getElementById(id);
  elem.innerHTML = value;
}

// header - contact info
function getContactInfo(obj) {
  let contactInfo = obj.map(item => {
    return `<div class="header-contact">Call Us: xxxxx xxxxx</div>
            <div class="header-email">Email Us: contact@mydomain.com</div>`;
  });
  return contactInfo;
}

setContent('contact-info', getContactInfo(myApi.contactList));

// nav-btns 
function drawNavButtons(obj) {
  let navButtons = obj.map(item => {
    return `<li class="nav-btn">
                <a href="#"><span class="nav-btn-txt">${item.btn}</span><span class="nav-btn-sub-txt">${item.subTxt}</span></a>
            </li>`;
  });
  return navButtons.join(' ');
}

setContent('nav-btns', drawNavButtons(myApi.navBtnsList));

// set active class to nav btns
let navBtns = document.querySelectorAll(".nav-btn-txt");
for (let i = 0; i < navBtns.length; i++) {
  let btn = navBtns[i];
  btn.addEventListener("click", () => {
    for (let j = 0; j < navBtns.length; j++) {
      navBtns[j].classList.remove("active");
    }
    btn.classList.add("active");
  });
}

// slider section
function drawSliderImage(obj) {
  let sliderImg = obj.map(item => {
    return `<img src=${item.img} alt="">`
  });
  return sliderImg;
}

setContent('slider-image', drawSliderImage(myApi.sliderImgList));

// shout section
let temp = document.getElementById('shout-article');
function drawShout(obj) {
  let contactInfo = obj.map(item => {
    return `<h2 class="shout-heading"><i>${item.shoutText}</i>
            </h2>`;
  });
  return contactInfo;
}

setContent('shout-article', drawShout(myApi.shoutList));

// works-section
function drawWorkItems(obj) {
  let workItem =  obj.map( item => {
      return `<div class="works">
                  <div class="works-img"></div>
                  <article class="work-article">
                      <h3 class="work-heading">${item.heading}</h3>
                      <div class="work-txt">${item.text}</div>                            
                  </article>
              </div>`
  });
  return workItem.join(' ');
}

setContent('works-section', drawWorkItems(myApi.workItemsList));

// services section
function drawServiceHeadings(obj) {
  let servHead = obj.map( item => {
      return `<h3 class="service-heading">${item.heading}</h3>
              <a href="#" class="service-view-more">${item.heading}</a>`
  });
  return servHead.join(' ');
}

setContent('serv-article-sec', drawServiceHeadings(myApi.servicesList));
setContent('serv-img-sec', drawServiceHeadings(myApi.servicesList));

// service articles
function drawServiceArticles(obj) {
  let serviceArticles = obj.map( item => {
      return `<article class="service-article-img">
      <img class="article-img" src=${item.icon} alt="">
      <div class="service-article">
          <h4 class="service-article-heading">${item.heading}</h4>
          <p class="service-paragraph">                                
              ${item.paragraph}
          </p>
      </div>
  </article>`
  });
  return serviceArticles.join(' ');
}

setContent('services-articles', drawServiceArticles(myApi.serviceArticleList));

// service - person profiles
function drawPersonProfiles(obj) {
  let personProf = obj.map( item => {
      return `<div class="person-name">
                  <div class="service-imgs-${item.img}" ></div>
                  <p class="person-full-name"><b>Name:</b> ${item.fullName}</p>
                  <a href="#" class="service-view-more">View Profile »</a>
              </div>`
  });
  return personProf.join(' ');
}

setContent('person-profile', drawPersonProfiles(myApi.profileList));

// footer: about us
function drawAbouUs(obj) {
  let aboutUs = obj.map(item => {
      return `<h4 class="footer-heading">${item.heading}</h4>
              <img class="footer-image" src=${item.img}> 
              <div class="footer-article-parent">
                  <p class="about-us-article">
                      ${item.article}
                  </p>
              </div>
              <div class="footer-read-more" id="aboutus-read-more">
                  <a href="#">${item.link}</a>
              </div>`
  });
  return aboutUs;
}

setContent("footer-about-us", drawAbouUs(myApi.aboutUsList));

// 2. link block head
function drawLinkHeading(obj) {
  let linkHead = obj.map(item => {
      return `<h4 class="footer-heading">${item.heading}</h4>`
  });
  return linkHead;
}

setContent('link-block-heading', drawLinkHeading(myApi.linkBlockHeading));

// list
function drawLinkBlock(obj) {
  let linkBlock = obj.map(item => {
      return `<li class="footer-ul-links">
                  <img src="${item.img}" /><a href="#"> ${item.link}</a>
              </li>`
  });
  return linkBlock.join(' ');
}

setContent('link-block-list', drawLinkBlock(myApi.linkBlockList));

// 3. blog heading
function drawBlogHeading(obj) {
  let blogHead = obj.map(item => {
      return `<h4 class="footer-heading">${item.heading}</h4>`
  });
  return blogHead;
}

setContent('blog-block-heading', drawBlogHeading(myApi.blogBlockHeading));

// blog articles
function drawTheBlog(obj) {
  let fromTheBlog = obj.map(item => {
      return `<div class="footer-post">
                <p class="post-title">${item.title}</p>
                <p class="blog-text">${item.blogText}</p>
                <p class="post-paragraph">${item.paragraph}</p>
                <div class="footer-read-more" id="post-read-more"> 
                    <a href="#" >${item.link}</a>
                </div>
            </div>`
  });
  return fromTheBlog.join(' ');
}

setContent('blog-articles', drawTheBlog(myApi.blogTextList));

// 4. contact us section
function drawContactUs(obj) {
  let contactUs = obj.map(item => {
      return `<h4 class="footer-heading">${item.heading}</h4>
              <p class="contact-paragraph">Tel: ${item.tel}</p>
              <p class="contact-paragraph">Fax: ${item.fax}</p>
              <p class="contact-paragraph">Email: <span class="mail">${item.mail}</span></p>
              <form action="index.html" method="get" target="_blank"  class="footer-form">
                  <h4 class="footer-heading">${item.heading2}</h4>
                  <input type="text" class="text-field" placeholder="Name">
                  <input type="text" class="text-field" placeholder="Email">
                  <div>
                      <button type="submit" class="submit">SUBMIT</button>
                  </div>
              </form>`
  });
  return contactUs;
}

setContent('contact-us-sec', drawContactUs(myApi.contactUsList));
