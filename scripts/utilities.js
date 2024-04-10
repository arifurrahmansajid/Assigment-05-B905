function SetInnerText(id, value) {
    document.getElementById(id).innerText = value;
  }

  function applyEnable() {
    document.getElementById("apply").removeAttribute("disabled");
  }
  
  function getValue(id) {
    return parseInt(document.getElementById(id).innerText);
  }
  
  function checkNumber(){
    let numberStr = document.getElementById("phone").value;
    let number = parseInt(numberStr);
    let ticket = getValue('seat-cnt');
    if(numberStr.length > 0 && ticket>0){
      let nextBtn = document.getElementById("next-btn");
      nextBtn.removeAttribute('disabled');
    }
    else{
      let nextBtn = document.getElementById('next-btn');
      nextBtn.setAttribute('disabled','');
    }
  }
  
  
  function checkValidation() {
    const coupon = document.getElementById("coupon-input");
    if (coupon.value === "NEW15") {
      let final = getValue("grand-total");
      let discountPrice = (final / 100) * 15;
      final = final - discountPrice;
      SetInnerText("discount-price", discountPrice);
      SetInnerText("grand-total", final);
      let applyDiv = document.getElementById("apply-div");
      applyDiv.classList.add("hidden");
      let discount = document.getElementById("discount");
      discount.classList.remove("hidden");
    } else if (coupon.value === "Couple 20") {
      let final = getValue("grand-total");
  
      let discountPrice = (final / 100) * 20;
      final = final - discountPrice;
      SetInnerText("discount-price", discountPrice);
      SetInnerText("grand-total", final);
      let applyDiv = document.getElementById("apply-div");
      applyDiv.classList.add("hidden");
      let discount = document.getElementById("discount");
      discount.classList.remove("hidden");
    } else {
      // alert("Wrong coupon code please check.");
      alert('your coupon code is not right.');
    }
  }
  
  function addSeatInfo(event) {
    const id = event.target.id;
    let ticketclassList = event.target.classList;
    ticketclassList.remove("bg-[#F7F8F8]");
    ticketclassList.add("bg-[#1DD100]", "text-white");
    event.target.setAttribute("disabled", "");
    //adding seat info to the select area
    let seatInfo = document.getElementById("seat-info");
    let div = document.createElement("div");
    div.classList.add("flex", "justify-between");
    let p1 = document.createElement("p");
    p1.innerText = id;
    let p2 = document.createElement("p");
    p2.innerText = "Economy";
    let p3 = document.createElement("p");
    p3.innerText = "550";
    div.append(p1, p2, p3);
    seatInfo.appendChild(div);
  }
  