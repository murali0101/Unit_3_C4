async function apiCall(url) {
  //add api call logic here
  let res = await fetch(url);
  let data = await res.json();
  return data;
}

function appendArticles(articles, main) {
  //add append logic here
  main.innerHTML = "";

  if (articles.length == undefined) {
    let data = articles;
    articles = [];
    articles.push(data);
  }
  articles.map((ele) => {
    let div = document.createElement("div");
    let imageN = document.createElement("img");
    imageN.src = ele.urlToImage;
    let titleN = document.createElement("h4");
    titleN.innerHTML = ele.title;
    let descriptionN = document.createElement("p");
    descriptionN.innerHTML = ele.description;

    let contentN = document.createElement("p");
    contentN.innerHTML = ele.content;

    div.addEventListener("click", () => {
      localStorage.setItem("article", JSON.stringify(ele));
      window.location.href = "news.html";
    });

    div.append(imageN, titleN, descriptionN, contentN);

    main.append(div);
  });
}

export { apiCall, appendArticles };

// if (flag == true) {
//   let descriptionN = document.createElement("p");
//   descriptionN.innerHTML = ele.description;
//   div.append(imageN, titleN, descriptionN);
// } else if (flag == false) {
//   let descriptionN = document.createElement("p");
//   descriptionN.innerHTML = ele.description;
//   let contentN = document.createElement("p");
//   contentN.innerHTML = ele.content;
//   div.append(imageN, titleN, descriptionN, contentN);
// }
