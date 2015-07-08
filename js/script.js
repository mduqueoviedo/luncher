$(document).ready(function(){
  PLACES = [
            "Belushi's",
            "Meat Place Under the Bridge",
            "Asian Place formerly know as Udon Mafia Place",
            "THE Vietnamese",
            "Austrian Nikolai Place",
            "Pizza a Posto",
            "Dolores",
            "Esra",
            "Pizza place next to Kaschk",
            "Makoto Japanese"
          ];

  //Show all places to pick which ones will be selected
  var items = [];
  $.each(PLACES, function(i, item) {
    items.push('<li><input class="place-checkbox" type="checkbox" value="' + i + '">&nbsp;' + item + '</li>');
  });
  $('#places_list').append( items.join('') );
  $("#result_window").val(Cookies.get("luncher_previous"));

  $("#luncher_button").click(function() {
    selected_places = $("input.place-checkbox:checked");
    result = shuffle(selected_places);
    $("#result_window").val();
    $("#result_window").val(PLACES[result.value]);
    Cookies.set("luncher_previous", result.value);
  });

});

// Shuffle array content
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array[0];
}