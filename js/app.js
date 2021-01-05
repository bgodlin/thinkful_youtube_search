// var link = 'http://omdbapi.com/?s=Star%20Wars&r=json&apikey=1d59c75a'

// $('input').val()

$(function () {



    $("form").submit(function (event) {
        event.preventDefault();
        GetResults($('input').val())
    })
}
)

function GetResults(Search) {
    url = "https://www.googleapis.com/youtube/v3/search"
    params = {
        part: 'snippet',
        key: "AIzaSyDP4yDhOi-izSkDeJiPm-5kRxuuspjdi_E",
        q: Search
    }

    $.getJSON(url, params, function (data) {
        // var myData = data.Search;

        // $.each(data.items[0].snippet, function (index, value) {
        //     console.log(value)
        // })

        search_results(data)
    });
}

function search_results(data) {
    
    $.each(data.items, function (index, value){
        AppendUl(value)
    }) 
}

function AppendUl(video) {
    event.preventDefault();
    $("ul").prepend(


        "<li>" +
        '<span class="video-item">' + video.snippet.title + '</span>' +
        '<div class="video-item-controls">' +
        '<a href="https://www.youtube.com/watch?v=' + video.id.videoId + '">' +
        '<img src=' + video.snippet.thumbnails.medium.url + '>' + '</a>' +
        '</div>' +
        "</li>"
    );
    $('input').val('');
}
