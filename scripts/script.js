
let ticketCount = 0;
let totalPrice = 0;
const ticketPrice = 550;
let discountPrice = 0;
let grandTotalPrice = 0;


const tickets = document.getElementsByClassName('ticket');


for(let ticket of tickets){
    ticket.addEventListener('click', action);
}

document.getElementById("phone").addEventListener('keyup',checkNumber);

document.getElementById('next-btn').addEventListener('click',(e)=>{
    location.href = 'success.html';
})

function action(event){
    
    if(ticketCount < 4){
        ticketCount++;
        SetInnerText("seat-cnt", ticketCount);
        checkNumber();
        addSeatInfo(event);
        totalPrice += ticketPrice;
        grandTotalPrice = totalPrice;
        SetInnerText("total-price",totalPrice);
        SetInnerText("grand-total",grandTotalPrice);
        let seatLeft = parseInt(document.getElementById("seat-left").innerText);
        document.getElementById("seat-left").innerText = seatLeft-1;

        
        if(ticketCount==4){
            applyEnable(); // apply button enabling
            document.getElementById("apply").addEventListener('click',checkValidation);
        }
    }
    else{
        alert("No more than four tickets can be purchased at a time.")
    }
    
}

