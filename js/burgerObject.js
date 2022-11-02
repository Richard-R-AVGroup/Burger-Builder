const output = document.getElementById("outputP");
const button = document.getElementById("randButton");
const burgerImage = document.getElementById("burgerPic");

button.addEventListener("click", createRandomBurger);

function createBurger(bun = "", vegeGarnish = [""], cheeses = [""], sauces = [""], patty = "", numbOfPatties = 0, condiments = [""])
{
    let Burger = 
    {
        bun : bun,
        vegeGarnish : vegeGarnish,
        cheeses : cheeses,
        sauces : sauces,
        patty : patty,
        numbOfPatties : numbOfPatties,
        condiments : condiments,
        description : function ()
        {
            let descriptor = "";
            
            //Bun 
            if (bun !== "")
                descriptor += "This burger has a " + this.bun + " bun";
            else
                descriptor += "This burger doesnt have a bun";

            //VegeGarnish
            if (vegeGarnish.length >= 1 && vegeGarnish[0] !== '')
                for(let i = 0; i < vegeGarnish.length; i++)
                {
                    if (i < vegeGarnish.length-1)
                        descriptor += ", " + vegeGarnish[i];
                    else
                        descriptor += " and " + vegeGarnish[i];
                }
            else
                descriptor += ", no vegetable toppings";

            //Cheeses
            if (cheeses.length >= 1 && cheeses[0] !== '')
                for(let i = 0; i < cheeses.length; i++)
                {
                    if (i < cheeses.length-1)
                        descriptor += ", " + cheeses[i];
                    else
                        descriptor += ", " + cheeses[i];
                }
            else
                descriptor += ", no cheese toppings";

            //Sauces
            if (sauces.length >= 1 && sauces[0] !== '')
                for(let i = 0; i < sauces.length; i++)
                {
                    if (i < sauces.length-1)
                        descriptor += ", " + sauces[i];
                    else
                        descriptor += ", " + sauces[i];
                }
            else
                descriptor += ", and no sauce"

            //Patties
            if (numbOfPatties !== 0)
                if (numbOfPatties > 1)
                {
                    descriptor += ", " + numbOfPatties + " " + patty + " patties";
                }
                else
                    descriptor += ", a " + patty + " patty"
            else 
                descriptor += ", no patties";

            //Condiments
            if (condiments.length >= 1 && condiments[0] !== "")
                for(let i = 0; i < condiments.length; i++)
                {
                    if (i === 0)
                    {
                        if (condiments.length > 1)
                            descriptor += ', and ' + condiments[i];
                        if (condiments.length === 1)
                            descriptor += ", and " + condiments[i] + '.';
                    }
                    if (i + 1 === condiments.length && i !== 0)
                    {
                        descriptor += " and " + condiments[i] + '.';
                        console.log('condiments length: ' + condiments.length + '  i: ' + i );
                    }
                    if (i < condiments.length - 1 && i !== 0 && i !== condiments.length)
                    {
                        descriptor += ", " + condiments[i];
                    }
                }
            else
                descriptor += ", and no condiments."
                    
            return descriptor;
        }
    }
    return Burger;
}

function createRandomBurger()
{
    let rand = Math.floor(Math.random() * 3)
    let burger = "";

    switch(rand)
    {
        case 0:
            burger = createBurger('sesame',                         //bun
            ['leaf lettuce', 'pickles','tomato', 'fried onions'],   //veges
            ['camembert cheese'],                                   //cheese
            ['soy sauce', 'chipotle'],                              //sauces
            'wagyu and serrano',                                    //patty type
            1,                                                      //amount of patties
            ['ketchup']);                                           //condiments
            burgerImage.src = 'img/perfectBurger.jpg';
            break;
        case 1:
            burger = createBurger('lettuce',                        //bun
            [''],                                                   //veges
            ['american cheese'],                                    //cheese
            ['avacodo oil', 'pickle brine'],                        //sauces
            'beef',                                                 //patty type
            2,                                                      //amount of patties
            ['mustard', 'mayo', 'diced pickles']);                  //condiments
            burgerImage.src = 'img/ketoBeefBurger.jpg';
            break;
        case 2:
            burger = createBurger('wholemeal',                      //bun
            ['tomato', 'basil', 'gherkins', 'rosemary'],            //veges
            ['cheddar cheese'],                                     //cheese
            ['creamy basil dressing'],                              //sauces
            'tofu',                                                 //patty type
            1,                                                      //amount of patties
            ['marmite']);                                           //condiments
            burgerImage.src = 'img/veggieBurger.jpg';
            break;
    }
    output.textContent = burger.description();
}




