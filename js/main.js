"use strict";
{
  const pointsA = document.getElementById("pointsA"); //
  const pointsB = document.getElementById("pointsB");
  const plusA = document.getElementById("plusA");
  const minusA = document.getElementById("minusA");
  const plusB = document.getElementById("plusB");
  const minusB = document.getElementById("minusB");

  const countsA = document.getElementById("countsA");
  const countsB = document.getElementById("countsB");

  let pointA = 0;
  let pointB = 0;
  let scoreA = 0;
  let scoreB = 0;

  function wine() {
    alert("nextGame");
    pointsA.innerHTML = 0;
    pointsB.innerHTML = 0;
    pointA = 0;
    pointB = 0;
  }

  plusA.addEventListener("click", () => {
    if (pointA >= 25 && pointA - pointB === 1) {
      pointA++;
      pointsA.innerHTML = pointA;
    } else if (pointA >= 25 && pointA - pointB > 1) {
      scoreA++;
      countsA.innerHTML = scoreA;
      wine();
    } else if (pointA === 25 && pointB <= 23) {
      scoreA++;
      countsA.innerHTML = scoreA;
      wine();
    } else {
      pointA++;
      pointsA.innerHTML = pointA;
    }
  });
  minusA.addEventListener("click", () => {
    if (pointA > 0) {
      pointA--;
      pointsA.innerHTML = pointA;
    } else {
      return;
    }
  });

  plusB.addEventListener("click", () => {
    if (pointB >= 25 && pointB - pointA === 1) {
      pointB++;
      pointsB.innerHTML = pointB;
    } else if (pointB >= 25 && pointB - pointA > 1) {
      scoreB++;
      countsB.innerHTML = scoreB;
      wine();
    } else if (pointB === 25 && pointA < 23) {
      scoreB++;
      countsB.innerHTML = scoreB;
      wine();
    } else {
      pointB++;
      pointsB.innerHTML = pointB;
    }
  });
  minusB.addEventListener("click", () => {
    if (pointB > 0) {
      pointB--;
      pointsB.innerHTML = pointB;
    } else {
      return;
    }
  });
}
