
var deckId = 0;
var cardsLeft = 0;
var shuffleDialog = bootbox.dialog({
    message: '<p class="text-center mb-0"><i class="fa fa-spin fa-cog"></i> Shuffling the Deck...</p>',
    closeButton: false,
    show: false
});
var cardNames = []

function getDeckId(btn, event) {
    //https://deckofcardsapi.com/api/deck/new/
    $("#cards").html("");
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

var closeShuffleMessage = false;
function closeShuffleMessageCallback() {
    if(closeShuffleMessage) {
        shuffleDialog.modal('hide');
    } else {
        setTimeout('closeShuffleMessageCallback()',500)
    }
}

function shuffle(btn, event) {
    event.preventDefault();
    
    shuffleDialog.modal('show');
    setTimeout('closeShuffleMessageCallback()',500)
   
    $.ajax({
        method: "GET",
        url: "https://deckofcardsapi.com/api/deck/" + deckId + "/shuffle/",
        dataType: "json",
        data: {  } ,
        success: function(result,status) {
            closeShuffleMessage = true;
        }
    });//ajax
    
}

function drawCard(btn,event) {
    cardNames = []
    event.preventDefault();
    var numToPull = $("#nPull").val();
    if(numToPull > cardsLeft) {
        $("#pullError").html("There are only " + cardsLeft + " cards left in the deck. Please choose fewer.")
        $("#pullError").attr("class","alert alert-danger")
        return;
    }
    $("#pullError").html("");
    $("#pullError").attr("class","bg-primary text-white")
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
                cardName = result.cards[i].value + " of " + result.cards[i].suit
                if(i%5==0) {
                    if(needCloseDiv) {
                        cardsString += "<div class='col-sm-1'></div>";//Closing col
                        cardsString += "</div>";
                    }
                    cardsString += "<div class='row'>";
                    cardsString += "<div class='col-sm-1'></div>";
                    needCloseDiv = true;
                }
                
                //card image
                cardsString += "<div class='cardContainer col-sm-2'>" 
                cardsString += "<img class='cardImage' src='" + result.cards[i].image + "' alt='" + cardName + "'>";            
                cardsString += "<div class='cardOverlay'>";
                cardsString += "<div class='cardName'>";
                cardsString += cardName;
                //close for text
                cardsString +=  "</div>";
                //close for cardOverlay
                cardsString +=  "</div>";
                //close tag for cardContainer
                cardsString +=  "</div>";
                
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

