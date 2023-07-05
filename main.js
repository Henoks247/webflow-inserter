console.log("code link functionality check");

console.log($(".extraheading").text());

// For bedrooms

let bedroomx = 0;
// on button click
$(".plusdiv1").on("click", () => {
  console.log("get success");
  // increment & set new value
  $(".inputfield1.w-input").val(++bedroomx);

  $(".summaryhours").text(finalhour() + " hours");
  $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
  $(".summaryprice").text(finalprice() + " GBP");
});

$(".minusdiv1").on("click", () => {
  // decrement & set new value
  if (bedroomx > 0) {
    $(".inputfield1.w-input").val(--bedroomx);
  }
  $(".summaryhours").text(finalhour() + " hours");
  $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
  $(".summaryprice").text(finalprice() + " GBP");
});

/* This next part was added post-video recording added
  to make sure the plus and minus work with a manual entry of
  a number in the text input. If you type 5 into the input manually,
  and then press (+), it will count to 6 instead of starting to
  count at 1. Nice!!
  */

// on input value change
$(".inputfield1.w-input").change(function () {
  // convert input value to number
  const num = Number($(this).val());
  // if it's a number
  if (num) {
    // assign its value to x
    bedroomx = num;
  } else {
    console.log("Not a number");
  }
});

// For bathrooms

let bathroomx = 0;
// on button click
$(".plusdiv2").on("click", () => {
  console.log("get success");
  // increment & set new value
  $(".inputfield2.w-input").val(++bathroomx);

  $(".summaryhours").text(finalhour() + " hours");
  $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
  $(".summaryprice").text(finalprice() + " GBP");
});

$(".minusdiv2").on("click", () => {
  // decrement & set new value
  if (bathroomx > 0) {
    $(".inputfield2.w-input").val(--bathroomx);
  }
  $(".summaryhours").text(finalhour() + " hours");
  $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
  $(".summaryprice").text(finalprice() + " GBP");
});

/* This next part was added post-video recording added
  to make sure the plus and minus work with a manual entry of
  a number in the text input. If you type 5 into the input manually,
  and then press (+), it will count to 6 instead of starting to
  count at 1. Nice!!
  */

// on input value change
$(".inputfield2.w-input").change(function () {
  // convert input value to number
  const num = Number($(this).val());
  // if it's a number
  if (num) {
    // assign its value to x
    bathroomx = num;
  } else {
    console.log("Not a number");
  }
});
// Declarations

let extraboxIroningstate = true;
$("#ironingtag").hide();
let extraboxLaundrystate = true;
$("#laundrytag").hide();
let extraboxWindowsstate = true;
$("#windowstag").hide();
let extraboxFridgestate = true;
$("#fridgetag").hide();
let extraboxOvenstate = true;
$("#oventag").hide();

// calculator function
function bedbathhoursum() {
  return bathroomx + bedroomx;
}

function extrashoursum() {
  let x = 0;
  if (extraboxIroningstate) {
    console.log("not clicked");
  } else {
    ++x;
  }
  if (extraboxFridgestate) {
    console.log("not clicked");
  } else {
    ++x;
  }
  if (extraboxLaundrystate) {
    console.log("not clicked");
  } else {
    ++x;
  }
  if (extraboxOvenstate) {
    console.log("not clicked");
  } else {
    ++x;
  }
  if (extraboxWindowsstate) {
    console.log("not clicked");
  } else {
    ++x;
  }
  return x;
}

//  Final hour calculator

function finalhour() {
  return extrashoursum() / 2 + (bathroomx + bedroomx) * 0.75;
}
// Final price calculator

function finalprice() {
  return finalhour() * 18;
}

// Button 1
// Listen and log clicks
// declare state

$("#extraboxIroning").click(function () {
  // if here
  if (extraboxIroningstate) {
    extraboxIroningstate = false;
    console.log("made false");
    $(".summaryhours").text(finalhour() + " hours");
    $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
    $(".summaryprice").text(finalprice() + " GBP");
    // display tag
    $("#ironingtag").show();
    // activate border
    $("#extraboxIroning").style.border = "1px solid #1327ff";
    const app = document.querySelector(`#extraboxIroning`);

    // set each style property separately
    app.style.border = "1px solid red";
  } else {
    extraboxIroningstate = true;
    console.log("made true");
    $(".summaryhours").text(finalhour() + " hours");
    $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
    $(".summaryprice").text(finalprice() + " GBP");
    // hide tag
    $("#ironingtag").hide();
    // deactivate border
    $("#extraboxIroning").style.border = "1px solid #ececec";
  }
});

// Button 2
// Listen and log clicks
// declare state

$("#extraboxLaundry").click(function () {
  // if here
  if (extraboxLaundrystate) {
    extraboxLaundrystate = false;
    console.log("made false");
    $(".summaryhours").text(finalhour() + " hours");
    $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
    $(".summaryprice").text(finalprice() + " GBP");
    // display tag
    $("#laundrytag").show();
  } else {
    extraboxLaundrystate = true;
    console.log("made true");
    $(".summaryhours").text(finalhour() + " hours");
    $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
    $(".summaryprice").text(finalprice() + " GBP");
    // hide tag
    $("#laundrytag").hide();
  }
});

// Button 3
// Listen and log clicks
// declare state

$("#extraboxWindows").click(function () {
  // if here
  if (extraboxWindowsstate) {
    extraboxWindowsstate = false;
    console.log("made false");
    $(".summaryhours").text(finalhour() + " hours");
    $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
    $(".summaryprice").text(finalprice() + " GBP");
    // display tag
    $("#windowstag").show();
  } else {
    extraboxWindowsstate = true;
    console.log("made true");
    $(".summaryhours").text(finalhour() + " hours");
    $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
    $(".summaryprice").text(finalprice() + " GBP");
    // hide tag
    $("#windowstag").hide();
  }
});

// Button 4
// Listen and log clicks
// declare state

$("#extraboxFridge").click(function () {
  // if here
  if (extraboxFridgestate) {
    extraboxFridgestate = false;
    console.log("made false");
    $(".summaryhours").text(finalhour() + " hours");
    $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
    $(".summaryprice").text(finalprice() + " GBP");
    // display tag
    $("#fridgetag").show();
  } else {
    extraboxFridgestate = true;
    console.log("made true");
    $(".summaryhours").text(finalhour() + " hours");
    $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
    $(".summaryprice").text(finalprice() + " GBP");
    // hide tag
    $("#fridgetag").hide();
  }
});

// Button 5
// Listen and log clicks
// declare state

$("#extraboxOven").click(function () {
  // if here
  if (extraboxOvenstate) {
    extraboxOvenstate = false;
    console.log("made false");
    $(".summaryhours").text(finalhour() + " hours");
    $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
    $(".summaryprice").text(finalprice() + " GBP");
    // display tag
    $("#oventag").show();
  } else {
    extraboxOvenstate = true;
    console.log("made true");
    $(".summaryhours").text(finalhour() + " hours");
    $(".small-descriptive-quantity").text(finalhour() + " hours at 18GBP/hr");
    $(".summaryprice").text(finalprice() + " GBP");
    // hide tag
    $("#oventag").hide();
  }
});
