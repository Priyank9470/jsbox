let boxlimit;
let currentLimit;

function displayBoxes(boxlimit) {
  for (i = currentLimit; i <= boxlimit; i++) {
    document.getElementById(
      "displayNumber"
    ).innerHTML += `<div id=result${i} class="fw-semibold box"> ${i} </div>`;

    let no = document.getElementById(`result${i}`);

    let primeNumbers = isPrime(i);

    //prime number check
    if (primeNumbers === true) {
      no.style.background = "red";
    }
    //even number check
    else if (i % 2 === 0) {
      no.style.background = "#00a500bf";
    } else {
      no.style.background = "#ff8100";
    }
  }
}

function getBoxes() {
  const number = document.getElementById("userInput").value;

  boxlimit = 120;
  currentLimit = 0;

  document.getElementById("caption-container").style.display = "block";

  document.getElementById("displayNumber").innerHTML = "";

  if (number < 0) {
    alert("Please Enter number greater than 0");
  } else if (number < boxlimit) {
    displayBoxes(number);
  } else {
    displayBoxes(boxlimit);
  }

  $(window).scroll(function () {
    if (
      Math.floor($(window).scrollTop()) >=
      $(document).height() - $(window).height() - 20
    ) {
      currentLimit += boxlimit + 1;
      const number = document.getElementById("userInput").value;

      if (currentLimit + boxlimit < number) {
        displayBoxes(currentLimit + boxlimit);
      } else {
        displayBoxes(number);
      }
    }
  });

  document
    .getElementById("form-submit")
    .addEventListener("submit", (e) => e.preventDefault());
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
