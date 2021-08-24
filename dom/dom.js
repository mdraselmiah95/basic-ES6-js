document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '2px solid pink';
    container.style.padding = '25px';
});

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
        friend.style.padding = '15px';
        friend.style.borderRadius = '5px';
        friend.style.margin = '5px';
    }
};
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
     <h3 class = "friend-name">New Friend</h3> <p> They feel joyful when we are happy </p>
    `;
    container.appendChild(friendDiv);
})