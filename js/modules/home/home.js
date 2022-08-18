import { Base } from "../base.js";

export class Home extends Base {
  constructor(appJSON) {
    super();
    this.appJSON = appJSON;
  }

  getContactInfo() {
    return this.appJSON.staticTexts.map((item) => {
      return `<div class="header-contact">Call Us: xxxxx xxxxx</div>
                    <div class="header-email">Email Us: contact@mydomain.com</div>`;
    });
  }

  getNavButtons() {
    return this.appJSON.navBtnsList
      .map((item) => {
        return `<li class="nav-btn">
                        <a href="#"><span class="nav-btn-txt">${item.btn}</span><span class="nav-btn-sub-txt">${item.subTxt}</span></a>
                    </li>`;
      })
      .join(" ");
  }

  setBtnActive() {
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
  }

  getSliderImage() {
    return this.appJSON.staticTexts
      .map((item) => {
        return `<img src=${item.sliderImg} alt="">`;
      })
      .join(" ");
  }

  getShout() {
    return this.appJSON.staticTexts
      .map((item) => {
        return `<h2 class="shout-heading"><i>${item.shoutText}</i>
                  </h2>`;
      })
      .join(" ");
  }

  getWorks() {
    return this.appJSON.workItemsList
      .map((obj) => {
        return `<div class="works">
                                  <div class="works-img"></div>
                                  <article class="work-article">
                                      <h3 class="work-heading">${obj.heading}</h3>
                                      <div class="work-txt">${obj.text}</div>                            
                                  </article>
                              </div>`;
      })
      .join(" ");
  }

  getServiceHeadings() {
    return this.appJSON.staticTexts
      .map((item) => {
        return `<h3 class="service-heading">${item.serviceHeading}</h3>
                      <a href="#" class="service-view-more">${item.serviceLink}</a>`;
      })
      .join(" ");
  }

  getServiceArticles() {
    return this.appJSON.serviceArticleList
      .map((item) => {
        return `<article class="service-article-img">
                  <img class="article-img" src=${item.icon} alt="">
                  <div class="service-article">
                      <h4 class="service-article-heading">${item.heading}</h4>
                      <p class="service-paragraph">
                          ${item.paragraph}
                      </p>
                  </div>
              </article>`;
      })
      .join(" ");
  }

  getPersonProfiles() {
    return this.appJSON.profileList
      .map((item) => {
        return `<div class="person-name">
                          <div class="service-imgs-${item.img}" ></div>
                          <p class="person-full-name"><b>Name:</b> ${item.fullName}</p>
                          <a href="#" class="service-view-more">View Profile »</a>
                      </div>`;
      })
      .join(" ");
  }

  getAbouUs() {
    return this.appJSON.staticTexts[0].aboutUsList
      .map((item) => {
        return `<h4 class="footer-heading">${item.heading}</h4>
                      <img class="footer-image" src=${item.img}> 
                      <div class="footer-article-parent">
                          <p class="about-us-article">
                              ${item.article}
                          </p>
                      </div>
                      <div class="footer-read-more" id="aboutus-read-more">
                          <a href="#">${item.link}</a>
                      </div>`;
      })
      .join(" ");
  }

  getLinkHeading() {
    return this.appJSON.staticTexts
      .map((item) => {
        return `<h4 class="footer-heading">${item.linkBlockHeading}</h4>`;
      })
      .join(" ");
  }

  getLinkBlock() {
    return this.appJSON.linkBlockList
      .map((item) => {
        return `<li class="footer-ul-links">
                          <img src="${item.img}" /><a href="#"> ${item.link}</a>
                      </li>`;
      })
      .join(" ");
  }

  getBlogHeading() {
    return this.appJSON.staticTexts.map((item) => {
      return `<h4 class="footer-heading">${item.blogBlockHeading}</h4>`;
    });
  }

  getTheBlog() {
    return this.appJSON.blogTextList
      .map((item) => {
        return `<div class="footer-post">
                        <p class="post-title">${item.title}</p>
                        <p class="blog-text">${item.blogText}</p>
                        <p class="post-paragraph">${item.paragraph}</p>
                        <div class="footer-read-more" id="post-read-more"> 
                            <a href="#" >${item.link}</a>
                        </div>
                    </div>`;
      })
      .join(" ");
  }

  getContactUs() {
    return this.appJSON.staticTexts
      .map((item) => {
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
                      </form>`;
      })
      .join(" ");
  }

  render() {
    this.setContent("contact-info", this.getContactInfo());
    this.setContent("nav-btns", this.getNavButtons());
    this.setContent("slider-image", this.getSliderImage());
    this.setContent("shout-article", this.getShout());
    this.setContent("works-section", this.getWorks());
    this.setContent("serv-article-sec", this.getServiceHeadings());
    this.setContent("serv-img-sec", this.getServiceHeadings());
    this.setContent("services-articles", this.getServiceArticles());
    this.setContent("person-profile", this.getPersonProfiles());
    this.setContent("footer-about-us", this.getAbouUs());
    this.setContent("link-block-heading", this.getLinkHeading());
    this.setContent("link-block-list", this.getLinkBlock());
    this.setContent("blog-block-heading", this.getBlogHeading());
    this.setContent("blog-articles", this.getTheBlog());
    this.setContent("contact-us-sec", this.getContactUs());

    this.setBtnActive();
  }
}
