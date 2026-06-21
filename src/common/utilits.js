// Distance to keep between the fixed nav pill and the top of a scrolled-to section.
const ANCHOR_SCROLL_OFFSET = 110;

export const anchorSscroll = () => {
    // Smoothly slide to in-page anchor targets (e.g. "#publications" or "/#awards").
    const links = document.querySelectorAll('a[href*="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute('href');
        const hashIndex = href.indexOf('#');
        if (hashIndex === -1) return;

        const hash = href.slice(hashIndex);
        if (hash.length < 2) return;

        const pathPart = href.slice(0, hashIndex);
        const samePage = pathPart === '' || pathPart === window.location.pathname;
        if (!samePage) return; // let the browser navigate there, then jump to the anchor

        const target = document.querySelector(hash);
        if (!target) return;

        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - ANCHOR_SCROLL_OFFSET;
        window.scrollTo({
            top: Math.max(top, 0),
            behavior: "smooth"
        });
      });
    });
};

export const accordion = () => {
  var acc = document.getElementsByClassName("mil-accordion-menu");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("mil-active");
      var panel = this.nextElementSibling;
      if (panel.style.height) {
        panel.style.height = null;
      } else {
        panel.style.height = panel.scrollHeight + "px";
      }
    };
  }
};