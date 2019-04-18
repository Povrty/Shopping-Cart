$(".one").click(function() {
    var list = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    var img = $(".a").val();
    var name = $(".b").val();
    var cost = $(".c").val();
    var div = $("<div class='row'></div>");
    var numItems = $('.row').length;
    if (img === "" || name === "" || cost === "") {
        alert("Inputs cannot be left blank.");
    } else {
        $(".products").append(div);
        list.push(img);
        (div).append("<img src=" + img + ">");
        list2.push(name);
        (div).append("<h1 class='title'>" + name + "</h1>");
        list3.push(cost);
        (div).append("<h1 class='total'>" + cost + "</h1>");
        (div).append("<div id='spce'></div>");
        (div).append("<div id='space'></div>");
        $(".numberofItems").text('(' + numItems + ')');
        
    }
});

$(".two").click(function() {
    var cost = $(".c").val();
    var Itotal = $('.total').length;
    alert("Thank you for shopping with Povrty! Your total is " + Itotal * cost + "!");    
});