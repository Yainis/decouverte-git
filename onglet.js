// bouton 
document.querySelectorAll(".onglet button").forEach( function(){
    this.addEventListener("click", function(el){
        let index = el.target.dataset.index;
        console.log(el.target.dataset.titre);
       // console.log(el.target.dataset.index);
        document.querySelectorAll(".onglet div").forEach( function(el){
            el.classList.add("hide");
        })
        document.querySelectorAll(".onglet div")[index].classList.remove("hide");
    } );
})