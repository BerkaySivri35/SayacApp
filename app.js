//Sayacı kur
let count = 0;

// Değeri ve butonları belirleme

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//foreach ile butonlara ulaşalım
// function(buton) buton isteğe bağlı verilen isim istersek elma armut da yazabiliriz function(elma) gibi...
btns.forEach(function (buton){
    buton.addEventListener("click", function(event){
        //ilk yöntem
            //console.log(buton)
        //İkinci yöntem
        console.log(event.currentTarget)
        const styles = event.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        
        else if(styles.contains("reset")){
            count = 0;
        }
        else{
            count++;
        }
        if(count > 0){
            value.style.color = "green";
        }
        else if(count === 0){
            value.style.color = "purple";
        }
        else if(count< 0){
            value.style.color = "red";
        }
        value.textContent = count;
    });
})