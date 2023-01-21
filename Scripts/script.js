document.getElementById("gelap").style.display = "none";

// Mode Dark
const gelap = (id, nilai) => {
    document.getElementById("gelap").style.display = "none";

    document.getElementById(id).style.display = nilai;

    document.body.style.backgroundColor = "unset";
    document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    
    const nodeList = document.querySelectorAll("#navigasi-atas a, #navigasi-atas i, a, h1, h2, h3, p, figcaption, footer i");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "#212";
    }
}

const terang = (id, nilai) => {
    document.getElementById("terang").style.display = "none";

    document.getElementById(id).style.display = nilai;

    document.body.style.backgroundColor = "#1e1e1e";
    document.getElementById("header").style.backgroundColor = "rgba(30, 30, 30, 0.9)";
    
    const nodeList = document.querySelectorAll("#navigasi-atas a,#navigasi-atas i, a, h1, h2, h3, p, figcaption, footer i");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "#f5f5f5";
    }

}