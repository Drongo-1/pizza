function delivering(){
    let checking=document.getElementById('deliver');
    let btn=document.getElementById('btn');
    btn.onclick = () => {
        const result = checking.value;
        let tot=cartLS.total();
    if(checking.checked != false){
        let location=prompt("enter your delivery location");
        
        function abc(){
            alert("Dear user, Your Orders of total Ksh "+tot+" is being  processed and will be delivered to "+location);            
        }
        abc();
    }
    else{
        alert("Dear user, your order of Ksh "+tot+" has been received and is being processed");
    }
    };
}

function renderCart(items) {
    const $cart = document.querySelector(".cart");
    const $total = document.querySelector(".total");
    

    $cart.innerHTML = items.map((item) => `
            <table classs="col-md-12 col-sm-6"> 
            
            <tr>
                <td class="col-sm-1">${item.id}</td>
                <td class="col-sm-2">${item.name}</td>
                <td class="col-sm-1">${item.quantity}</td>

                <td class="col-sm-1">	
                    <button type="button" class="btn btn-block btn-sm btn-outline-primary"
                        onClick="cartLS.quantity(${item.id},1)">+</button>
                </td>
                <td class="col-sm-1">	
                    <button type="button" class="btn btn-block btn-sm btn-outline-primary"
                        onClick="cartLS.quantity(${item.id},-1)">-</button>
                </td>
                <td class="text-right" class="col-sm-1">Ksh${item.price}</td>
                <td class="text-right"><Button class="btn btn-primary" class="col-sm-1" onClick="cartLS.remove(${item.id})">Delete</Button></td>
            </tr>
            </table>`
            
            ).join("");


`<div class="container col-md-12">
    <div class="k">`
    $total.innerHTML = "Ksh.:" + cartLS.total();`

    </div>
   
 </div>`    
}
function abcd(){
       
    
}
abcd();
renderCart(cartLS.list());
cartLS.onChange(renderCart);

