document.onreadystatechange = (e) => {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".loading").style.visibility = "visible";
  } else {
    setTimeout(() => {
      document.querySelector(".loading").style.display = "none";
      document.querySelector("body").style.overflow = "visible";
      document.querySelector("body").style.visibility = "visible";
    }, 3000);
  }
};
onprogress;
