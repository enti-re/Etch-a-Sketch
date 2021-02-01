const body = document.querySelector("#body");
const container = document.querySelector("#container");
const button = document.querySelector(".btn");

function setGridsize(size)
{
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
}

function createElement(size)
{
    let count =0;
    console.log(`Size is ${size}`);
    for(let i=0;i<size*size;i++)
    {
        count++;
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        container.appendChild(gridItem);
    }
}

function setDefaultGrid()
{
    setGridsize(16);
    createElement(16);
}

function reset() {
    document
      .querySelectorAll(".gridItem")
      .forEach((e) => e.parentNode.removeChild(e));
  }

window.addEventListener("load",setDefaultGrid())
body.appendChild(container);
button.addEventListener("click",function(){
    let input = prompt("Enter the Size");
    let size = parseInt(input);
    console.log(size);
    reset();
    setGridsize(size);
    createElement(size);
});





