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

// Mode Dark
const gelap = (id, nilai) => {
    document.getElementById("gelap").style.display = "none";

    document.getElementById(id).style.display = nilai;

    document.body.style.backgroundColor = "unset";
    document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    
    const nodeList = document.querySelectorAll("#navigasi-atas a, #navigasi-atas i, a, h1, h2, h3, p, figcaption, footer i");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "#212121";
    }

    document.getElementById("footer").style.background = "#f5f5f5";
}

const terang = (id, nilai) => {
    document.getElementById("terang").style.display = "none";

    document.getElementById(id).style.display = nilai;

    document.body.style.backgroundColor = "#1e1e1e";
    document.getElementById("header").style.backgroundColor = "rgba(30, 30, 30, 0.9)";
    
    const nodeList = document.querySelectorAll("#navigasi-atas a, #navigasi-atas i, a, h1, h2, h3, p, figcaption, footer i");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "#f5f5f5";
    }

    document.getElementById("footer").style.backgroundColor = "rgba(48, 48, 48, 0.5)";
}


let otherElement = document.querySelector('#menu1');
let allElements = document.querySelectorAll('.menu');

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