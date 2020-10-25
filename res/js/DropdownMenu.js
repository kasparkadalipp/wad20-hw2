const DropdownMenu = ({firstname, lastname, email, avatar}) => `
    <img src=${avatar} class="avatar" alt="Me">
    <div class = "dropdown-menu">
        <ul>
            <li>
                <p>${firstname + " " + lastname}</p>
                <p>${email}</p>
            </li>
            <li><a href="browse.html">Browse</a></li>
            <li><a href="login.html">Log Out</a></li>
        </ul>
    </div>`

export default DropdownMenu