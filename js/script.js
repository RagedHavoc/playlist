var images = ["https://i.ytimg.com/vi/fRNf2cTCPqs/maxresdefault.jpg", "https://i.ytimg.com/vi/R7GGKTb9d2M/maxresdefault.jpg", "https://i.ytimg.com/vi/QsRRDQ-6IJs/maxresdefault.jpg"];
images.forEach(function(image) {
    $("#images").append("<p>" + image + "</p>");
});

var songs = ["The Story of Mob", "Resonance of Despair", "Imagine Breaker"];
songs.forEach(function(song) {
    $("#songs").append("<p>" + song + "</p>");
});

var artists = ["Helblinde", "Helblinde", "Helblinde"];
artists.forEach(function(artist) {
    $("#artists").append("<p>" + artist + "</p>");
});

var lengths = ["6:35", "3:34", "3:31"];
lengths.forEach(function(length) {
    $("#lengths").append("<p>" + length + "</p>");
});

var links = ["https://youtu.be/fRNf2cTCPqs", "https://youtu.be/R7GGKTb9d2M", "https://youtu.be/QsRRDQ-6IJs"];
links.forEach(function(link) {
    $("#links").append("<p>" + link + "</p>");
});

    $("#Add").click(function() {
    $(images).push("https://i.ytimg.com/vi/rdGUvwdUzA4/maxresdefault.jpg");
    $(songs).push("Elysium");
    $(artists).push("S3rl");
    $(lengths).push("3:19");
    $(links).push("https://youtu.be/rdGUvwdUzA4");
});
 