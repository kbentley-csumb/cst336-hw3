
var deckId = 0;
var cardsLeft = 0;


function getDeckId(btn, event) {
    //https://deckofcardsapi.com/api/deck/new/
    event.preventDefault();
    $.ajax({
        method: "GET",
        url: "https://deckofcardsapi.com/api/deck/new/",
        dataType: "json",
        data: {  } ,
        success: function(result,status) {
            //alert(result);
            deckId = result.deck_id;
            cardsLeft = result.remaining;
            $("#remainingCount").html(cardsLeft + " cards are available.");
            $("#shuffleBtn").removeAttr("disabled");
            $("#drawBtn").removeAttr("disabled");
        }
    });//ajax
}

function shuffle(btn, event) {
    event.preventDefault();
    
    $.ajax({
        method: "GET",
        url: "https://deckofcardsapi.com/api/deck/" + deckId + "/shuffle/",
        dataType: "json",
        data: {  } ,
        success: function(result,status) {
            alert("Deck Shuffled");
        }
    });//ajax

}

function drawCard(btn,event) {
    event.preventDefault();
    var numToPull = $("#nPull").val();
    $("#cards").html("");
    $.ajax({
        method: "GET",
        url: "https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=" + numToPull,
        dataType: "json",
        data: {  } ,
        success: function(result,status) {
            var needCloseDiv = false;
            var cardsString = ""
            for(var i=0;i<result.cards.length;i++)
            {
                if(i%5==0) {
                    if(needCloseDiv) {
                        cardsString += "<div class='col-sm-1'></div>";//Closing col
                        cardsString += "</div>";
                    }
                    cardsString += "<div class='row'>";
                    cardsString += "<div class='col-sm-1'></div>";
                    needCloseDiv = true;
                }
                
                cardsString += "<div class='col-sm-2'>" + "<img src='" + result.cards[i].image + "'>" + "</div>";
                
            }
            if(needCloseDiv) {
                cardsString += "<div class='col-sm-1'></div>";//Closing col
                cardsString += "</div>";
            }
            cardsLeft = result.remaining;
            $("#cards").html(cardsString);
            $("#remainingCount").html(cardsLeft + " cards are available.");
        }
    });//ajax

}

