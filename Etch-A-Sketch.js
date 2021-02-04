const body = document.querySelector("#body");
const container = document.querySelector("#container");
const button = document.querySelector(".btn");
window.addEventListener("load",setDefaultGrid())
button.addEventListener("click",changeSize);
body.appendChild(container);

function setGridsize(size)
{
    container.style.gridTemplateColumns = `repeat(${size},.5fr)`;
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
        gridItem.addEventListener("mouseover",colorChange);
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

function changeSize()
{
    let input = prompt("Enter the Size");
    let size = parseInt(input);
    if(size>64)
    {
        alert("Enter the size between 1 to 64");
        changeSize();
    }
    if(!isNaN(size))
    {
        reset();
        setGridsize(size);
        createElement(size);
    }
}

function colorChange(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }






