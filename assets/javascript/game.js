$(document).ready(function(){
    var playersNumber = 0;
    var randomNumber = randonNumGen();
    var wins = 0;
    var loses=0;
    var crystals;
    function randomNumCrystals(){
        return{
            red:{
                points:Math.floor(Math.random()*12)+1,
                imageUrl:""
            },
            blue:{
                points:Math.floor(Math.random()*12)+1,
                imageUrl:"assets\images\blueface.png"
            },
            yellow:{
                points:Math.floor(Math.random()*12)+1,
                imageUrl:""
            },
            green:{
                points:Math.floor(Math.random()*12)+1,
                imageUrl:""
            }
        };
    }
    function randomNumGen(){
        return Math.floor(Math.random()*102)+19;
    }
    function setGame(){
        yourMatchingNumber = 0;
        crystals = randomNumCrystals();
        randonNum = randomNumGen();
        $("#random-area").text(randomNum);
    }
    function updateDom(didUserWIn){
        $("#win-area").empty();
        if(didUserWIn === true) {
            $("#win-area").append($("<p>").text("You won!!"));
            setGame();
            renderMatchingNumber();
        }
        else if(didUserWIn === false){
            $("#win-area").append($("<p>").text("you lost!"));
            setGame();
            renderMatchingNumber();
        }
        var wSpan = $("<span>").text(wins);
        var lSpan = $("<span>").text(losses);
        var pWins = $("<p>").text("Wins: ");
        var pLosses = $("<p>").text("Losses: ");
        pWins.append(wSpan);
        pLosses.append(lSpan);
        $("#win-area").append(pWins);
        $("#win-area").append(pLosses);
    }
    function renderCrystals(){
        for (var key in crystals){
            var crystalDiv = $("div class = 'crystals-button' data-name ='"+ key +"'>");
            var crystalImg = $("img alt='image' class = crystal-img'>").attr("src",crystals[key].imageUrl);
            crystalDiv.append(crystalImg);
            $("#crystal-area").append(crystalDiv);
        }
    }
    function updateMatchingNumber(){
        var scoreNumDiv = $("div id = 'score-number'>").text(yourMatchingNumber);
        $("#score-area").html();
        $("#score-area").html(scoreNumDiv);
    }
    setGame();
    updateDom();
    renderCrystals();
    renderMatchingNumber();
    $("crystals-button").on("click", function(event){
        updateMatchingNumber($(this));
        renderMatchingNumber();

        if (yourMatchingNumber === randomNum){
            wins ++;
            setGame();
            updateDom(false);
        }
    });
});