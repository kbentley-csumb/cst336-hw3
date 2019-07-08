<!DOCTYPE html>
<html>
    <head>
        <title>Homework 3</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link  href="css/styles.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <!-- bootbox code -->
        <script src="js/bootbox.min.js"></script>
        <script src="js/bootbox.locales.min.js"></script>
    </head>
    <body >
    <div id="container">
    <main>
    <h1>Deck of Cards Demo</h1>
    <h2>Powered by <a href="https://deckofcardsapi.com">https://deckofcardsapi.com</a></h2>
<p></p><br/>
    <form id="signupForm" method="post" action="#">

        <div class="row">
            <div class='col-sm-3'>
            </div>
            <div class='col-sm-3'>
                <div class="form-group">
                    <input id="dealBtn" type="submit" class="btn btn-primary" value="Deal New Deck" onclick="getDeckId(this,event)">
                </div>
            </div>
            <div class='col-sm-3'>
                <div class="form-group">
                    <input id="shuffleBtn" type="submit" class="btn btn-primary" value="Shuffle" disabled onclick="shuffle(this,event)">
                </div>
            </div>
            <div class='col-sm-3'>
            </div>
        </div>
        <div class="row">
            <div class='col-sm-2'>
            </div>
            <div class='col-sm-8'>
                <div class="form-group">
                    <label for="nPull">How many cards do you want to draw? <span id="remainingCount">0 cards are available.</span></label>
                    <input class="form-control" type="text" name="nPull" id="nPull" value="1" placeholder="1">
                    <small id="pullError"></small>
                </div>
            </div>
            <div class='col-sm-2'>
            </div>
        </div>
        <div class="row">
        <div class='col-sm-12'>
            <div class="form-group">
                <input id="drawBtn" type="submit" class="btn btn-primary" value="Draw" disabled onclick="drawCard(this,event)">
            </div>
        </div>
        </div>
    </form>

    <div id="cards"> </div>
    </main>

    <footer>
        <br/>
        <br/>
            <h3>CST336 Internet Programming.</h3> <br/>
            <details>
            <summary>CSS and API Information</summary>
            &nbsp;&nbsp;&nbsp;&nbsp;Powered by 
            <a href="http://deckofcardsapi.com/">http://deckofcardsapi.com/</a>  and with help from  
            <a href="https://www.w3schools.com/howto/howto_css_image_overlay_zoom.asp">https://www.w3schools.com/howto/howto_css_image_overlay_zoom.asp</a>
            </details>
            2019&copy; Kevin Bentley<br/>
            <strong>Disclaimer</strong> This information is only for academic purposes.
                <br/>
                <br/>
                <img src="img/otter-small.jpg" alt="Otter Logo" />
        </footer>

    <script src="js/cards.js"></script>
    </div> <!--container-->
    </body>
</html>