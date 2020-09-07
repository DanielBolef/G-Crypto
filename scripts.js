let submitLogin = function()
{
    //validate form
    let isValid = true;

    //validate email
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    let email = $("#email").val().trim();
    if (!emailPattern.test(email))
    {
        $("#email").next().text("Email is required");
        isValid = false;
    }
    else
    {
        $("#email").next().text("");
    }
    $("#email").val(email);

    //validate password
    let password = $("#password").val().trim();
    if (password == "")
    {
        $("#password").next().text("Password is required");
        isValid = false;
    }
    else
    {
        $("#password").next().text("");
    }
    $("#password").val(password);

    //login
    if (isValid)
    {
        if (email == "admin@gcrypto.com" && password == "P@ssw0rd")
        {
            window.location.href = "faq.html";
        }
        else
        {
            $("#password").next().text("Invalid Email or Password");
            $(".form").effect("shake");
        }
    }
    else
    {
        $(".form").effect("shake");
    }
};

let submitBuy = function() {
    //validate form
    let isValid = true;

    //validate currency
    let currency = $("#currency").val();
    if (currency == "")
    {
        $("#currency").next().text("Currency is required");
        isValid = false;
    }
    else
    {
        $("#currency").next().text("");
    }

    //validate quantity
    let quantity = $("#quantity").val().trim()
    if (quantity == "" || quantity == 0)
    {
        $("#quantity").next().text("Quantity is required");
        isValid = false;
    }
    else if (isNaN(quantity))
    {
        $("#quantity").next().text("Quantity must be a number");
        isValid = false;
    }
    else
    {
        $("#quantity").next().text("");
    }

    $("#quantity").val(quantity);

    if (isValid)
    {
        if (quantity == 1)
        {
            $("#celebrate").prev().text(quantity + " " + currency + " Purchased!");
        }
        else
        {
            $("#celebrate").prev().text(quantity + " " + currency + "s Purchased!");
        }
        $("#popup").css("display", "block");
    }
    else
    {
        $("#popup").css("display", "none");
    }
};

let celebrate = function() {
    $("#popup").toggle("bounce", { distance: 100, times: 3 }, 1000);
    $("#popup").show("drop", { direction: "up" }, 100);
}