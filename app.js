document.addEventListener("DOMContentLoaded", function () {
    const colorArray = ['red', 'blue', 'green', 'orange'];
    let button = document.createElement('button');
    document.body.appendChild(button);
    button.textContent = "Add Square";

    let containerDiv = document.createElement('div');
    document.body.appendChild(containerDiv);
    containerDiv.classList.add('container');


    let squareCount = 1;
    button.addEventListener('click', addSquare);



    function addSquare() {
        let square = document.createElement('div')
        containerDiv.appendChild(square);
        square.classList.add('blackSquare');
        square.setAttribute('id', squareCount);
        square.addEventListener('mouseover', showID);
        square.addEventListener('mouseout', removeID);
        square.addEventListener('click', changeColor);
        square.addEventListener('dblclick', evenOdd);
        squareCount++;



    };



    function showID() {

        let square = document.getElementById(this.id);
        square.innerText = this.id;
    };

    function removeID() {

        let square = document.getElementById(this.id);
        square.innerText = "";
    };

    function changeColor() {
        document.getElementById(this.id);
        color = Math.floor(Math.random() * colorArray.length);
        this.style.background = colorArray[color];


    }

    function evenOdd() {
        let classArray = document.getElementsByClassName('blackSquare');
        let upNext = parseInt(this.id) + 1;
        let oneBefore = parseInt(this.id) - 1;

        if (this.id % 2 == 0) {
            if (upNext > classArray.length) {
                alert("Please don't do this.");
            } else if (this.id < classArray.length) {
                let evenRemoved = document.getElementById(upNext);
                evenRemoved.remove();
            }
        }
        else if (this.id % 2 == 1) {

            if (oneBefore < 1) {
                alert("Please don't do this.");
            } else if (this.id < classArray.length) {
                let oddRemoved = document.getElementById(oneBefore);
                oddRemoved.remove();
            }

        }
    }

    // The removal method here means that the removed box has to feature the clicked box's ID value +/- 1. If that box has already been removed, nothing happens. 
    // Sometimes nothing happens even outside those conditions, whereabout I have nothing to say for myself. 





});

