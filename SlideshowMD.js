window.onload = initlinks;
/*Slideshow pictures in an Array*/
var imgNum = 0;
var arrPictures = new Array(
  "https://images.unsplash.com/photo-1681459799489-18773715be7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1681459460114-0363cc96a61b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", 
  "https://images.unsplash.com/photo-1680371222158-1108f6bdd6b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1900&q=80", 
  "https://images.unsplash.com/photo-1680371564641-56c5d84178c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=998&q=80"
  )
/*Button functions*/
  function initlinks(){
    document.getElementById("linkPrevious").onclick = processPrevious;
    document.getElementById("linkNext").onclick = processNext;
  }

  function processPrevious(){
    if (imgNum == 0){
      imgNum = arrPictures.length;
    }
      imgNum--;
      document.getElementById("imgSlideshow").src = arrPictures[imgNum];
      return false;
  }

  function processNext(){
    imgNum++;
    if (imgNum == arrPictures.length){
      imgNum =0;
    }
    document.getElementById("imgSlideshow").src = arrPictures[imgNum];
  }