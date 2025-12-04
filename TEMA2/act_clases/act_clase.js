"use strict"
{

  /**
   * H1
   *   h5
   *     div => background color:cyan
   *       p => parrafo1
   *       p => parrafo2
   *       img => insert a real img
   *     /div
   *   /h5
   * /h1
   */


  let h1 = document.createElement("h1");
  h1.textContent = "H1";
  let h5 = document.createElement("h5");
  h5.textContent = "h5";
  let div = document.createElement("div");
  div.setAttribute("style", "background-color: cyan; padding: 10px;");
  let p1 = document.createElement("p");
  p1.textContent = "parrafo1";
  let p2 = document.createElement("p");
  p2.textContent = "parrafo2";
  let img = document.createElement("img");
  img.setAttribute("src", "src/img.jpg");
img.setAttribute("style", "width: 100px; height: auto;");


  h1.appendChild(h5);
  h5.appendChild(div);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(img);


  document.body.appendChild(h1);

}