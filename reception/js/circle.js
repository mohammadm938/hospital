let svgns = "http://www.w3.org/2000/svg";

function createSvgCircle(
  top,
  right,
  cx,
  cy,
  r,
  opacity = 0.3,
  fill = "E6F6FF",
  stroke = ""
) {
  let container = document.createElementNS(svgns, "svg");
  let circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", cx);
  circle.setAttributeNS(null, "cy", cy);
  circle.setAttributeNS(null, "r", r);
  circle.setAttributeNS(
    null,
    "style",
    `opacity:${opacity};fill: #${fill}; stroke: #${stroke} ; stroke-width: 1;`
  );
  container.classList.add("circle");
  container.setAttributeNS(
    null,
    "style",
    `position:absolute;top:${top}px;right:${right}px`
  );
  container.appendChild(circle);
  let body = document.querySelector("body");
  body.appendChild(container);
}

let coordinates = {
  0: {
    top: 0,
    right: 0,
    cx: 60,
    cy: 60,
    r: 60,
  },
  1: {
    top: 68,
    right: 415,
    cx: 50,
    cy: 50,
    r: 40,
  },
  2: {
    top: 252,
    right: 954,
    cx: 60,
    cy: 60,
    r: 60,
  },
  3: {
    top: 0,
    right: 972,
    cx: 50,
    cy: 50,
    r: 40,
  },
  4: {
    top: 550,
    right: 0,
    cx: 50,
    cy: 50,
    r: 40,
  },
  5: {
    top: 400,
    right: 400,
    cx: 60,
    cy: 60,
    r: 60,
  },
  6: {
    top: 658,
    right: -6,
    cx: 60,
    cy: 60,
    r: 60,
    opacity: 0.5,
    fill: "fff",
    stroke: "d2dae1",
  },
  7: {
    top: 668,
    right: 800,
    cx: 60,
    cy: 60,
    r: 60,
    opacity: 0.5,
    fill: "fff",
    stroke: "d2dae1",
  },
  8: {
    top: 830,
    right: 100,
    cx: 60,
    cy: 60,
    r: 60,
    opacity: 0.5,
    fill: "fff",
    stroke: "d2dae1",
  },
  9: {
    top: 900,
    right: 900,
    cx: 50,
    cy: 50,
    r: 40,
    opacity: 0.5,
    fill: "fff",
    stroke: "d2dae1",
  },
  10: {
    top: 780,
    right: 540,
    cx: 50,
    cy: 50,
    r: 40,
    opacity: 0.5,
    fill: "fff",
    stroke: "d2dae1",
  },
};

for (const i in coordinates) {
  if (i >= 6) {
    createSvgCircle(
      coordinates[i]["top"],
      coordinates[i]["right"],
      coordinates[i]["cx"],
      coordinates[i]["cy"],
      coordinates[i]["r"],
      coordinates[i]["opacity"],
      coordinates[i]["fill"],
      coordinates[i]["stroke"]
    );
  } else {
    createSvgCircle(
      coordinates[i]["top"],
      coordinates[i]["right"],
      coordinates[i]["cx"],
      coordinates[i]["cy"],
      coordinates[i]["r"]
    );
  }
}

function setCirculeTop(top, i) {
  // check for top number
  // if top number near other circle top number
  // return false for change number
  // if top number far other circle top number
  // return true for set top number to new circle
  for (let j = 0; j < i; j++) {
    if (
      coordinates[j]["top"] - top > 200 ||
      top - coordinates[j]["top"] < -200
    ) {
    } else {
      return false;
    }
  }
  return true;
}

function createTopOrRightNumber() {
  let topStyle = 0;
  let rightStyle = 0;
  for (let i = 0; i < 4; i++) {
    //top
    min = Math.ceil(0);
    max = Math.floor(600);
    let numberTop = Math.floor(Math.random() * (max - min + 1) + min); //generate random top number

    while (!setCirculeTop(numberTop, i)) {
      numberTop += 200;
    }
    topStyle = numberTop; // set number top of circle style

    // right
    min = Math.ceil(0);
    max = Math.floor(1050);
    let numberRight = Math.floor(Math.random() * (max - min + 1) + min); //generate random right number
    while (!setCirculeTop(numberRight, i)) {
      numberRight += 200;
    }
    rightStyle = numberRight; // set number right of circle style

    createSvgCircle(topStyle, rightStyle); // create svg circle
    console.log("created");
  }
}



