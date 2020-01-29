var songs = ["The Story of Mob", "Resonance of Despair", "Imagine Breaker"];
songs.forEach(function(song) {
    $("#songs").append("<p>" + song + "</p>");
});