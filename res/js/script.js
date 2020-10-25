import Post from "./Post.js"
import DropdownMenu from "./DropdownMenu.js";
import Profile from "./Profile.js";

$(() => {
    $.get("https://private-anon-19b2331a1a-wad20postit.apiary-mock.com/users/1",
        userInfo => $(".avatar-container")
            .append(DropdownMenu(userInfo))
            .on("click", () => $(".dropdown-menu").toggle()));

    $.get("https://private-anon-af03cd5f74-wad20postit.apiary-mock.com/posts",
        posts => {
            posts.forEach(content => $(".main-container").append(Post(content)));
            $(".like-button").on("click", function () {
                $(this).toggleClass("liked");
            });
        });

    $.get("https://private-anon-af03cd5f74-wad20postit.apiary-mock.com/profiles",
        profiles => {
            profiles.forEach(data => $(".profile-container").append(Profile(data)));
            $(".follow-button").on("click", function () {
                $(this).toggleClass("followed");
                $(this).text($(this).hasClass("followed") ? "Followed" : "Follow");
            });
        });
});