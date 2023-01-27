class FoodRd {
  constructor(id) {
    this.id = document.querySelectorAll(id);
  }

  // Method
  setAtribut(atribut, nilai) {
    for (let i = 0; i < this.id.length; i++) {

      if ( atribut == "style") {
      this.id[i].style = nilai;

      } else if (atribut == "title") {
        this.id[i].setAttribute("title", nilai = this.id[i].innerText);

      } else if (atribut == "target") {
        this.id[i].setAttribute("target", "_blank");

      } else if (atribut === "link") {

        if (!document.URL.includes("articles")) {
        this.id[i].setAttribute("href", nilai = "articles/" + this.id[i].innerText.replace(/\s+/g, '-').toLowerCase() + ".html");

        } else {
          this.id[i].setAttribute("href", nilai = this.id[i].innerText.replace(/\s+/g, '-').toLowerCase() + ".html");
        }

      } else if (atribut === "titleImgArtikel") {
        this.id[i].setAttribute("title", nilai = this.id[i].alt);

      } else if (atribut === "lazyImg") {
        this.id[i].setAttribute("loading", "lazy");

      } else if (atribut === "role") {
        const role = ["navigation", "button", "figure", "img", "main", "article"];
        this.id[i].setAttribute(atribut, role[nilai]);
      }

    }
  };

};

const setImgArtikel = new FoodRd("#gambarArtikel img");
setImgArtikel.setAtribut("style", "width: 100%");

setImgArtikel.setAtribut("titleImgArtikel");

const setTitle = new FoodRd("header a, main a, #bungkus-navBawah a");
setTitle.setAtribut("title");

const setTarget = new FoodRd("article a, #bungkus-medSos a");
setTarget.setAtribut("target");

const setLink = new FoodRd("article a, aside a");
setLink.setAtribut("link");

const lazyLoad = new FoodRd("main img");
lazyLoad.setAtribut("lazyImg");

let semantik = new FoodRd("nav, #bungkus-menuNM");
semantik.setAtribut("role", 0)
semantik = new FoodRd("button, #terangGelap-NavMob");
semantik.setAtribut("role", 1);
semantik = new FoodRd("figure");
semantik.setAtribut("role", 2);
semantik = new FoodRd("img");
semantik.setAtribut("role", 3);
semantik = new FoodRd("main");
semantik.setAtribut("role", 4)
semantik = new FoodRd("article");
semantik.setAtribut("role", 5)
// =========================================================

// Membuat navigasi breadcrumb diatas judul artikel.
const breadcrumb = () => {
  if (document.body.contains(document.querySelector("#bungkusArtikel"))) {
    let aBaru = document.createElement("p");
    aBaru.setAttribute("id", "breadcrumb");
    aBaru.innerHTML = "<a href='../' title='Beranda'>Beranda</a> &rarr; " + document.querySelector("#gambarArtikel img").alt;
    aBaru.style.marginBottom = "1em";

    document.querySelector("#bungkusArtikel").before(aBaru);
  }
}
breadcrumb();
// ===========================================================

// Tanggal dipublikasi pada halaman artikel dibawah judul
const tanggal = (isKueri, namaEBaru, eParent) => {
  if (document.body.contains(document.querySelector(isKueri))) {
    let eBaru = document.createElement(namaEBaru);
    document.querySelector(eParent).after(eBaru);

    if (namaEBaru === "time") {
      let lM = document.lastModified;
      eBaru.setAttribute("datetime", lM);
      eBaru.innerText = `Dipublikasi: ${lM}`;
    }

  }
}
tanggal("#judulArtikel", "time", "#judulArtikel h2");
// ===========================================================

// Menu navigasi mobile
const bar = (id, nilai) => {
  document.getElementById("silang").style.display = "none";
  document.getElementById("bungkus-menuNM").style.display = "none";
  document.getElementById(id).style.display = nilai;  
}

const silang = (id, nilai) => {
  document.getElementById("bar").style.display = "none";
  document.getElementById("bungkus-menuNM").style.display = "block";
  document.getElementById(id).style.display = nilai;
}
// ==========================================================


document.getElementById("gelap").style.display = "none";

// Kondisi ubah bakcground jika ada elemen id "artikelUtama"
let bgAS = (id, warnaBg) => {
  if (document.body.contains(document.querySelector("#mainArtikel"))) {
    document.querySelector(id).style.background = warnaBg;
  }
}

// Mode Dark
const gelap = (id, nilai) => {
    document.getElementById("gelap").style.display = "none";

    document.getElementById(id).style.display = nilai;

    document.body.style.backgroundColor = "unset";
    document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    
    const nodeList = document.querySelectorAll("#navigasi-atas a, #navigasi-atas i, #navigasi-mobile i, #spanH2, #bungkus-menuNM i, a, h1, h2, h3, h4, p, ul, li, ol, time, main i, figcaption, #foodTntng, footer i");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "#212121";
    }

    document.getElementById("footer").style.background = "#f5f5f5";
    document.getElementById("bungkus-menuNM").style.backgroundColor = "rgba(255, 255, 255, 0.9)";

    bgAS("#artikelUtama", "rgba(245, 245, 245, 0.6)");
    bgAS("#aside", "rgba(245, 245, 245, 0.6)");
}

// ============================================================================
const terang = (id, nilai) => {
    document.getElementById("terang").style.display = "none";

    document.getElementById(id).style.display = nilai;

    document.body.style.backgroundColor = "#1e1e1e";
    document.getElementById("header").style.backgroundColor = "rgba(30, 30, 30, 0.9)";
    
    const nodeList = document.querySelectorAll("#navigasi-atas a, #navigasi-atas i, #navigasi-mobile i, #spanH2, #bungkus-menuNM i, a, h1, h2, h3, h4, p, ul, li, ol, time, main i, figcaption, #foodTntng, footer i");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "#f5f5f5";
    }

    document.getElementById("footer").style.backgroundColor = "rgba(48, 48, 48, 0.5)";

    // warna background menu mobile
    document.getElementById("bungkus-menuNM").style.backgroundColor = "rgba(30, 30, 30, 0.9)";

    bgAS("#artikelUtama", "rgba(48, 48, 48, 0.7)");
    bgAS("#aside", "rgba(48, 48, 48, 0.7)");
}


let otherElement = document.querySelector('#menu1');
let allElements = document.querySelector('.menu');
if (document.body.contains(allElements)) {
  otherElement.addEventListener('mouseover', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(2px)';
    });
  });

  otherElement.addEventListener('mouseleave', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(0)';
    });
  });

  otherElement = document.querySelector('#menu2');
  allElements = document.querySelectorAll('.menu');

  otherElement.addEventListener('mouseover', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(2px)';
    });
  });

  otherElement.addEventListener('mouseleave', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(0)';
    });
  });

  otherElement = document.querySelector('#menu3');
  allElements = document.querySelectorAll('.menu');

  otherElement.addEventListener('mouseover', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(2px)';
    });
  });

  otherElement.addEventListener('mouseleave', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(0)';
    });
  });

  otherElement = document.querySelector('#menu4');
  allElements = document.querySelectorAll('.menu');

  otherElement.addEventListener('mouseover', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(2px)';
    });
  });

  otherElement.addEventListener('mouseleave', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(0)';
    });
  });

  otherElement = document.querySelector('#menu5');
  allElements = document.querySelectorAll('.menu');

  otherElement.addEventListener('mouseover', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(2px)';
    });
  });

  otherElement.addEventListener('mouseleave', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(0)';
    });
  });

  otherElement = document.querySelector('#menu6');
  allElements = document.querySelectorAll('.menu');

  otherElement.addEventListener('mouseover', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(2px)';
    });
  });

  otherElement.addEventListener('mouseleave', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(0)';
    });
  });

  otherElement = document.querySelector('#menu7');
  allElements = document.querySelectorAll('.menu');

  otherElement.addEventListener('mouseover', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(2px)';
    });
  });

  otherElement.addEventListener('mouseleave', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(0)';
    });
  });

  otherElement = document.querySelector('#menu8');
  allElements = document.querySelectorAll('.menu');

  otherElement.addEventListener('mouseover', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(2px)';
    });
  });

  otherElement.addEventListener('mouseleave', () => {
    allElements.forEach(element => {
      element.style.filter = 'blur(0)';
    });
  });
}

// =================================================
// Fitur Mode terang atau gelap sesuai tema/pengaturan browser atau Sistem Operasi.
window.onload = window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (event.matches) {
    terang('gelap', 'block');

  } else {
    gelap('terang', 'block');
  }
})