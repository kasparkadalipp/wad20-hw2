$(() => {
    $.get("https://private-anon-19b2331a1a-wad20postit.apiary-mock.com/users/1",
        data => $(".avatar-container")
            .append(Avatar(data))
            .on("click", () => $(".dropdown-menu").toggle()
            ));

    $.get("https://private-anon-af03cd5f74-wad20postit.apiary-mock.com/posts",
        data => {
            data.forEach(content => $(".main-container").append(Post(content)));
            $(".like-button").on("click",function () {
                $(this).toggleClass('liked');
            });
        });
});

const Avatar = ({firstname, lastname, email, avatar}) => `
    <img src=${avatar} class="avatar" alt="Me">
    <div class = "dropdown-menu">
        <ul>
            <li>
                <p>${firstname + ' ' + lastname}</p>
                <p>${email}</p>
            </li>
            <li><a href="browse.html">Browse</a></li>
            <li><a href="login.html">Log Out</a></li>
        </ul>
    </div>`

const Post = ({author, createTime, media, text, likes}) => `
    <div class="post">
        <div class="post-author">
            ${User(author)}
            <small>${createTime}</small>
        </div>
        ${media !== null ? Media(media) : ''}
        ${text !== null ? Text(text) : ''}
        <div class="post-actions">
            <button type="button" name="like" class="like-button">${likes}</button>
        </div>
    </div>
`

const Text = (text) => `
    <div class="post-title">
        <h3>${text}</h3>
    </div>`

const User = ({avatar, firstname, lastname}) => `
    <span class="post-author-info">
        <img src=${avatar} alt="Post author">
        <small>${firstname + ' ' + lastname}</small>
    </span>`

const Media = ({type, url}) =>
    type === 'video'
        ?
        `<div class="post-video">
            <video controls>
                <source src=${url} type=${'video/' + url.match(/[^.]+$/)[0]}>
            </video>
        </div>`
        :
        `<div class="post-image">
            <img src=${url} alt="">
        </div>`