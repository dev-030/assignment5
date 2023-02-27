let tw = 0;
let tl = 0;
let rw = 0;
let rl = 0;
let lol = 1;
let vb = 0;
let nnn = "";



// Main function

let output = document.getElementById("list2");

function three_numbers(w, l) {
    if (vb < 6) {
        let res = 0.5 * w * l;
        let items_list = document.createElement("li");
        items_list.innerHTML = `<p class = "how3">${lol}.  ${nnn}</p>  </p> <p class = "how3">${res}</p> <button class = 'bbttn'><p class ="how">convert to m <sup class ="how2">2</sup></p></button>`;
        output.appendChild(items_list);
        lol++;
        vb++;

        if (vb === 6) {
            document.getElementById("show").classList.remove("show");
            document.getElementById("show").addEventListener("click", remove);
        }
    }
}
function two_numbers(t, n) {
    if (vb < 6) {
        let res = t * n;
        console.log(res);
        let items_list = document.createElement("li");
        items_list.innerHTML = `<p class = "how3">${lol}.  ${nnn}</p> <p class = "how3">${res}</p> <button class = 'bbttn'><p class ="how">convert to m <sup class ="how2">2</sup></p></button>`;
        output.appendChild(items_list);
        lol++;
        vb++;

        if (vb === 6) {
            document.getElementById("show").classList.remove("show");
            document.getElementById("show").addEventListener("click", remove);
        }
    }
}

function remove() {
    output.innerHTML = "";
    document.getElementById("show").classList.add("show");
    vb = 0;
    lol = 1;
}







// Caller
document.getElementById("bott").addEventListener("click", () => {
    tw = document.getElementById("tw").value;
    tl = document.getElementById("tl").value;
    console.log(tw, tl);
    nnn = "Triangle";
    three_numbers(tw, tl);
    console.log(lol);
});

// Caller
document.getElementById("rbtn").addEventListener("click", () => {
    rw = document.getElementById("rw").value;
    rl = document.getElementById("rl").value;
    console.log(rw, rl);
    nnn = "Rectangle";
    two_numbers(rw, rl);
    console.log(lol);
});

// Caller
document.getElementById("pbtn").addEventListener("click", () => {
    a = 10;
    b = 12;
    nnn = "Parallelogram";
    two_numbers(a, b);
    console.log(lol);
});

// Caller
document.getElementById("rhbtn").addEventListener("click", () => {
    ra = 16;
    rb = 8;
    nnn = "Rhombus";
    three_numbers(ra, rb);
    console.log(lol);
});

// Caller
document.getElementById("pentagon").addEventListener("click", () => {
    pa = 6;
    pb = 10;
    nnn = "Pentagon";
    three_numbers(pa, pb);
    console.log(lol);
});

// Caller
document.getElementById("ebtn").addEventListener("click", () => {
    ea = 10;
    eb = 4;
    pi = 3.1416;
    tt = 10 * 4;
    nnn = "ellipse";
    two_numbers(pi, tt);
    console.log(lol);
});
