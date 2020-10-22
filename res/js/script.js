$(document).ready(function(){
    $(".avatar").click(function(){
        $(".dropdown-menu").toggle();
    });
    $.get("https://private-anon-19b2331a1a-wad20postit.apiary-mock.com/users/1", function(data) {
        $(".result" ).html(data);
        let firstname = data.firstname;
        let lastname = data.lastname;
        let email = data.email;
        let picture = data.avatar;
        $(".name").text(firstname.concat(" ", lastname));
        $(".email").text(email);
        $(".avatar").attr("src", picture);
    });
});