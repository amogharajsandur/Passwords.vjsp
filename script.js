const body = document.querySelector("body");
const newPasswordButton = document.getElementById("new-password");

newPasswordButton.addEventListener("click", popup);

function popup() {
    body.innerHTML += `
    <div class="popup-container">
        <h2 class="popup-heading"></h2>
        <!-- There will be a close/esc button here -->
        <form action="">
            <label for="username">Username: </label>
            <input type="text" name="username" id="username" placeholder="Enter Username">
            <br>
            <label for="email">Email: </label>
            <input type="email" name="email" id="email" placeholder="Enter Email">
            <br>
            <label for="password">Password: </label>
            <input type="password" name="password" id="password" placeholder="Enter Password">
            <br>
            <label for="website">Website Link:</label>
            <input type="url" name="website" id="website" placeholder="Enter Website Link">
            <br>
            <label for="note">Note:</label>
            <input type="text" name="note" id="note" placeholder="Add a note...">
            <br>
            <!-- There will be two buttons: "Save" & "Reset" -->
            <button type="button">Save</button>
            <button type="reset">Reset</button>
        </form>
    </div>`;
}