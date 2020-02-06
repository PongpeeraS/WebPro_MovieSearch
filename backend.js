$(document).ready(function(){
    
    //Press Enter in searchbox
    $("#search-Box").keyup(function(event) {

        if(event.keyCode === 13) {
            $("#search-Button").click();
        }

    });

    $("#search-Button").click(function() {
        
    
        //FRONT-END PART, showing contents after click search//
        $("#Bigdiv").fadeIn(1000);
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);
        $("#div4").fadeIn(1000);
    
        $("#googleResult").fadeOut(1000);
        $("#divG").fadeOut(1000);
        $("#resultsGG").fadeOut(1000);
    
        $("#spotifyResult").fadeOut(1000);
        $("#divS").fadeOut(1000);
        $("#resultsSP").fadeOut(1000);
    
        $("#twitterResult").fadeOut(1000);
        $("#divT").fadeOut(1000);
        $("#resultsTW").fadeOut(1000);
    
        $("#youtubeResult").fadeOut(1000);
        $("#divY").fadeOut(1000);
        $("#resultsYT").fadeOut(1000);
    
    
    
        //BACK-END PART, getting data after click search//
        
        
        query = $('#search-Box').val();
       

    });


    
});
function showGoogle() {
    //Fadesout all and Fades in Google
    $('#spotifyResult, #divS, #resultsSP').fadeOut();
    $('#twitterResult, #divT, #resultsTW').fadeOut();
    $('#youtubeResult, #divY, #resultsYT').fadeOut();  
    $('#googleResult, #divG, #resultsGG').fadeIn(1000);
    getGG(query);
}

function showSpotify() {

    $("#twitterResult, #divT, #resultsTW").fadeOut();
    $("#youtubeResult, #divY, #resultsYT").fadeOut();
    $("#googleResult, #divG, #resultsGG").fadeOut();
    $("#spotifyResult, #divS, #resultsSP").fadeIn(1000);
    ajaxSP(query);
}

function showTwitter() {
    $("#spotifyResult, #divS, #resultsSP").fadeOut();
    $("#youtubeResult, #divY, #resultsYT").fadeOut();
    $("#googleResult, #divG, #resultsGG").fadeOut();
    $("#twitterResult, #divT, #resultsTW").fadeIn(1000);
    ajaxTW(query);
}

function showYouTube() {
    $("#spotifyResult, #divS, #resultsSP").fadeOut();
    $("#twitterResult, #divT, #resultsTW").fadeOut();
    $("#googleResult, #divG, #resultsGG").fadeOut();
    $("#youtubeResult, #divY, #resultsYT").fadeIn(1000);
    getYT(query);
}
/*
function getYT(q) {
    //Gets the list of videos by USING RESTful METHOD GET() with JQuery
    //Information sent is according to YOUTUBE DATA API
    $.get("https://www.googleapis.com/youtube/v3/search", {
            key: 'key1',
            q: q+" Trailer",   //Keyword here
            part: 'snippet',
            maxResults: 6,
            type: 'video'   //Set response to ONLY SEND VIDEOS (i.e. not channels)
        },

        function(response) {
            $('#resultsYT').empty(); //Empties the div for each search
            //console.log(response);
            
            var counterForTable = 0;
            var srchItems = response.items;   //Get the items from the object
            
            //Start by appending <div><table> first before starting loop
            $('#resultsYT').append('<div><table border="1px solid black">');

       

            $.each(srchItems, function(index, item) {    //Runs loop for each item in the list
                //Takes the title, thumbnail & url of each item and format them into HTML
                vidTitle = '<div style="font-size:115%;"><h4>' + item.snippet.title + '</h4></div>';               
                vidThumbimg = '<div><iframe width="420" height="315"src="https://www.youtube.com/embed/'+item.id.videoId+'"></iframe></div>';   
                vidUrl = '<div>URL: <a href="https://www.youtube.com/embed/'+item.id.videoId+'">https://www.youtube.com/embed/'+item.id.videoId+'</a></div>';
                vidDes = '<div>' + item.snippet.description + '</div>';                
                console.log(item);
                

                if(counterForTable%2 == 0) {
                    //$('#resultsYT').append('<h1>Hi</h1>');
                    $('#resultsYT').append('<tr><td>' + vidTitle + vidDes + vidUrl + vidThumbimg + '</td>');
                   
                } else {
                    //$('#resultsYT').append('<h1>Hello</h1>');                    
                    $('#resultsYT').append('<td>' + vidTitle + vidDes + vidUrl + vidThumbimg + '</td></tr>');
               
                }

                //Original, dont' lose this
                //$('#resultsYT').append('<div>' + vidTitle + vidDes + vidUrl + vidThumbimg + '</div><br>'); //Final OUTPUT in JQuery
                counterForTable = counterForTable+1;
            })
            
            //Closing the table
            $('#resultsYT').append('</table></div>');
        });
}
*/

//New getYTForFrontEnd
function getYT(q) {
    //Gets the list of videos by USING RESTful METHOD GET() with JQuery
    //Information sent is according to YOUTUBE DATA API
    $.get("https://www.googleapis.com/youtube/v3/search", {
            key: 'key1',
            q: q+" Trailer",   //Keyword here
            part: 'snippet',
            maxResults: 6,
            type: 'video'   //Set response to ONLY SEND VIDEOS (i.e. not channels)
        },

        function(response) {
            $('#resultsYT').empty(); //Empties the div for each search
            //console.log(response);
            var counter = 0;
            var srchItems = response.items;   //Get the items from the object

            

            $.each(srchItems, function(index, item) {    //Runs loop for each item in the list
                //Takes the title, thumbnail & url of each item and format them into HTML
                vidTitle = '<div style="font-size:115%;"><h4>' + item.snippet.title + '</h4></div>';               
                vidThumbimg = '<div><iframe width="420" height="315"src="https://www.youtube.com/embed/'+item.id.videoId+'"></iframe></div>';   
                vidUrl = '<div>URL: <a href="https://www.youtube.com/embed/'+item.id.videoId+'">https://www.youtube.com/embed/'+item.id.videoId+'</a></div>';
                vidDes = '<div>' + item.snippet.description + '</div>';                
                console.log(item);

                if(counter == 0) {
                    console.log("YAY");
                    $('#resultsYT').append('<div><table border="1px solid black">');    
                    $('#resultsYT').append('<tr><td>' + vidTitle + vidDes + vidUrl + vidThumbimg + '</td>'); //Final OUTPUT in JQuery
                    counter++;
                } else {
                    if(counter%2 == 0) {
                        console.log("YOSH");
                        $('#resultsYT').append('<tr><td>' + vidTitle + vidDes + vidUrl + vidThumbimg + '</td>'); //Final OUTPUT in JQuery                        
                        counter++;
                    } else {
                        console.log("YES");
                        $('#resultsYT').append('<td>' + vidTitle + vidDes + vidUrl + vidThumbimg + '</td></tr>');
                        counter++;
                    }
                }
           
            })

            $('#resultsYT').append('</table></div>');   //</table> นี้คือมันปิด <table> ไปเลยก่อนที่จะได้ append พวก video เข้าไปใน resultsYT --*
        });
}

function getGG(q) {

    $.get("https://www.googleapis.com/customsearch/v1", {
        //Gets the search results by USING RESTful METHOD GET() with JQuery
        //Information sent is according to GOOGLE CUSTOM SEARCH
            key: 'key1',
            cx: 'key2', //CSE id
            q: q+"+movie+imdb",   //Keyword here
            num: 10,  //if going for 20 results, (maybe) send 2 requests & append
            start: 1, //2nd request uses start: 11
        },
        function(response) {
            $('#resultsGG').empty();    //Empties the div for each search
            var srchItems = response.items; //Get the items from the object
            $.each(srchItems, function(index, item) { //Runs loop for each item in the list  
                   
                title = '<div style="font-size:115%;"><a href="'+item.link+'" style="color:#ffffff;">' + item.htmlTitle + '</a></div>';
                displayLink = '<div>' +item.displayLink+ '</div>';
                thumb = item.pagemap.cse_thumbnail[0].src;
                image = '<div><a href="'+item.link+'"><img src="'+ thumb +'" style="width: 100%; height: 100%"></a></div>';
                snippet = '<div>'+item.htmlSnippet+'</div>';  
                
                //Original without table layout
                //$('#resultsGG').append('<div>' + title + displayLink + image + snippet + '<hr style="background-color:white"></div><br>');
                
                $('#resultsGG').append('<div><table cellpadding="10" border="0px solid black" style="table-layout:auto;"><tr><td rowspan="3" style="width: 150px; white-space:nowrap;">' + image + '</td><td style="vertical-align: top;">' + title + '</td></tr><tr><td style="vertical-align: top;">' + displayLink + '</td></tr><tr><td style="vertical-align: top;">' + snippet + '</td></tr></table><hr style="background-color:white"></div>');

            })
        });
}

function ajaxSP(q){ 
//Sends an AJAX request to another php (*INSERT NAME HERE*.php) which will create a GET request for a JSON object from spotify.
        //The responseText will be the stringified JSON object, which will be parsed into an object for use.
        //The HTML result is a spotify iFrame with an album from JSON object.
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                var obj = JSON.parse(xmlhttp.responseText);
                console.log(obj);
                document.getElementById("resultsSP").innerHTML='<div><iframe src="https://open.spotify.com/embed?uri='+obj.albums.items[0].uri+'&theme=white" width="100%" height="380" frameborder="0" allowtransparency="true"></iframe></div>'
            }
        }
        xmlhttp.open("GET","spotify.php?query="+q,true);
        xmlhttp.send();

}

function ajaxTW(q){ 
   xmlhttp = new XMLHttpRequest();
   console.log(q);
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                document.getElementById("resultsTW").innerHTML=this.responseText;
            }
        }

        xmlhttp.open("GET","twitter.php?query="+q,true);
        xmlhttp.send();
}
