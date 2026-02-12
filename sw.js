const cards=document.querySelectorAll(".card");
window.addEventListener("scroll",()=>{
  cards.forEach(card=>{
    const pos=card.getBoundingClientRect().top;
    if(pos<window.innerHeight-50){
      card.style.opacity=1;
      card.style.transform="translateY(0)";
    }
  });
});
