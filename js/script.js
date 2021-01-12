function delivering(){
    let checking=document.getElementById('deliver');
    let btn=document.getElementById('btn');
    btn.onclick = () => {
        const result = checking.value;
    if(checking.checked != false){
        // alert(checking.checked);
        // alert("abc");
        let location=prompt("enter your delivery location");
        function abc(){
            // renderCart(items);
            alert("Dear user, Your Orders is being delivered to "+location);
            // prompt("Dear user, your ordde is being proccesed");

        }
        abc();
    }
    else{
        alert("Dear user, your order has been received and is being processed");
    }
    };
}

function renderCart(items) {
    const $cart = document.querySelector(".cart");
    const $total = document.querySelector(".total");
    

    $cart.innerHTML = items.map((item) => `
            <table classs="col-md-12 col-sm-6"> 
            <tr>
            <td>ID</td>
            <td>Name </td>
            <td> Quantity</td>
            <td> Add</td>
            <td>Reduce </td>
            <td class="text-right"> Amount
            </td>
            <td> </td>
            </tr>
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
            <tr>
            <td>   Delivery :<input type="checkbox" id="deliver"></td>
            <td> 
                <label>Select topping</label>
                <select name="" id="">
                    <option value="Peperoni">Peperoni</option>
                    <option value="mushroom">mushroom</option>
                    <option value="cripsy">cripsy</option>
                </select>
            </td>
            <td><button id="btn" class="btn btn-primary" class="col-sm-1" onclick="delivering()" >Checkout</button></td>
            <td>
                
            </td>
            </tr>        
            


            </table>`
            
            ).join("");


    `<div class="container col-md-12">
    <div class="k">`
    $total.innerHTML = "Ksh.:" + cartLS.total();`

    </div>
    <div class="k">`
    $total.innerHTML = "Ksh.:" + cartLS.total();`

    </div><div class="k">`
    $total.innerHTML = "Ksh.:" + cartLS.total();`

    </div><div class="k">`
    $total.innerHTML = "Ksh.:" + cartLS.total();`

    </div>
        
        <div class="k">
            
        </div>
    </div>`
    // 
    
}
renderCart(cartLS.list());
cartLS.onChange(renderCart);

