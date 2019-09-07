function toCross() {
    const wrapperChild = document.getElementById('menu-cross').childNodes;
    for (let i = 0; i < wrapperChild.length; i++) {
        if (wrapperChild[i].classList) wrapperChild[i].classList.remove('no-animation');
    }
    const line1 = document.getElementsByClassName('line-1');
    const line2 = document.getElementsByClassName('line-2');
    const line3 = document.getElementsByClassName('line-3');
    line1[0].classList.toggle('cross-line-1');
    line1[0].classList.toggle('cross-line-1-rev');
    line2[0].classList.toggle('hide-line-2');
    line2[0].classList.toggle('hide-line-2-rev');
    line3[0].classList.toggle('cross-line-3');
    line3[0].classList.toggle('cross-line-3-rev');
}