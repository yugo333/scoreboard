"use strict";
{
  const pointsA = document.getElementById("pointsA");
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

  function reset() {
    pointsA.innerHTML = 0;
    pointsB.innerHTML = 0;
    countsA.innerHTML = 0;
    countsB.innerHTML = 0;
    pointA = 0;
    pointB = 0;
    scoreA = 0;
    scoreB = 0;
  }

  function wine() {
    if (scoreA >= 3 && scoreB <= 2) {
      alert("win!!! A Team");
      reset();
    } else if (scoreB >= 3 && scoreA <= 2) {
      alert("win!!! B Team");
      reset();
    } else {
      alert("nextGame");
      pointsA.innerHTML = 0;
      pointsB.innerHTML = 0;
      pointA = 0;
      pointB = 0;
    }
  }

  plusA.addEventListener("click", () => {
    if (scoreA === 2 && scoreB === 2) {
      if (pointA >= 14 && pointA - pointB >= 1) {
        alert("win!!! A Team");
        reset();
      } else if (pointA >= 14 && pointA - pointB === 1) {
        pointA++;
        pointsA.innerHTML = pointA;
      } else if (pointA === 14 && pointB <= 13) {
        alert("win!!! A Team");
        reset();
      } else {
        pointA++;
        pointsA.innerHTML = pointA;
      }
    } else if (pointA >= 24 && pointA - pointB >= 1) {
      scoreA++;
      countsA.innerHTML = scoreA;
      wine();
    } else if (pointA >= 24 && pointA - pointB === 1) {
      pointA++;
      pointsA.innerHTML = pointA;
    } else if (pointA === 24 && pointB <= 23) {
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
    if (scoreA === 2 && scoreB === 2) {
      if (pointB >= 14 && pointB - pointA >= 1) {
        alert("win!!! B Team");
        reset();
      } else if (pointB >= 14 && pointB - pointA === 1) {
        pointB++;
        pointsB.innerHTML = pointB;
      } else if (pointB === 14 && pointA <= 13) {
        alert("win!!! B Team");
        reset();
      } else {
        pointB++;
        pointsB.innerHTML = pointB;
      }
    } else if (pointB >= 24 && pointB - pointA >= 1) {
      scoreB++;
      countsB.innerHTML = scoreB;
      wine();
    } else if (pointB >= 24 && pointB - pointA === 1) {
      pointB++;
      pointsB.innerHTML = pointB;
    } else if (pointB === 24 && pointA < 23) {
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
