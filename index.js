function handleAnimation(type) {
  let order = 1;

  const span = type === 1 ? document.querySelectorAll('.text-animate1 span')
            : document.querySelectorAll('.text-animate2 span');

  for (let i = 0; i < span.length; i++) {
    if (span[i].textContent === " ") {
      span[i].innerHTML = "&nbsp;";
    }
    const newStyle = span[i].style;
    newStyle.setProperty("--i", `${order++ * 0.35}`);
  }
}

function generateSpanTags(text) {
  return text
    .split("")
    .map((letter, index) => `<span key="${index}">${letter}</span>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  const text1 = generateSpanTags("My baby love you so much forever you and I");
  document.querySelector(".item-1").innerHTML = text1;

  const text2 = generateSpanTags("I love you oh! I love you so much forever you and I");
  document.querySelector(".item-2").innerHTML = text2;

  const text3 = generateSpanTags("My baby love you so much forever you and I");
  document.querySelector(".item-3").innerHTML = text3;

  const text4 = generateSpanTags("I love you oh! I love you so much forever you and I");
  document.querySelector(".item-4").innerHTML = text4;

  document.querySelector('.music').addEventListener('play', function() {
    document.querySelectorAll('.box-text-1, .box-text-2').forEach(element => {
      element.style.display = 'none';
    });
    setTimeout(() => {
      document.querySelector('.box-text-1').style.display = 'block';
      handleAnimation(1);
    }, 1000);
    
    setTimeout(() => {
      document.querySelector('.box-text-2').style.display = 'block';
      handleAnimation(2);
    }, 12500);
  });
});
