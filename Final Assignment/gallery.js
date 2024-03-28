function upDate(previewPic){
    x = document.getElementById('image') 
    x.innerHTML = previewPic.alt;
    console.log(previewPic.src);
    x.style.backgroundImage = 'url("'+previewPic.src+'")';
    x.style.backgroundSize = "100% 100%";
}
   
function unDo(){
    x = document.getElementById('image')
    x.innerHTML = "Hover over an image below to display here."
    x.style.backgroundImage = "url('')";
}

function Focus(previewPic){
    x = document.getElementById('image');
    x.innerHTML = previewPic.alt;
    x.style.backgroundImage = 'url("' + previewPic.src + '")';
    x.style.backgroundSize = "100% 100%";
}

function Blur(){
    x = document.getElementById('image')
    x.innerHTML = "Hover over an image below to display here."
    x.style.backgroundImage = "url('')";
}

function Tabs(){
    currentImages = document.querySelectorAll(".flex img");
    for(var i=0; i<currentImages.length; i++){
        console.log("Image " + i);
        currentImages[i].setAttribute("tabindex", i+1);
    }
}