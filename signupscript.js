setInterval(() => {
    changeImage();
}, 2000);
function changeImage() {
    var images = document.getElementById('slide-content').getElementsByTagName('img');

    var i =0;
    for(i=0; i<images.length; i++){
        var image = images[i];
        if(image.classList.contains('active')){

            // remove active class from this image
            image.classList.remove('active');

            // if we are at the last image, then go back to the first image
            if(i == images.length - 1){
                var nextImage = images[0];
                nextImage.classList.add('active');
                break;
            }

            var nextImage = images[i+1];
            nextImage.classList.add('active');
            break;
        }
    }
}


function changeMode() {
    var body = document.getElementsByTagName('body')[0];
    var footerLinks = document.getElementById('links').getElementsByTagName('a');

    // if we are currently using dark mode
    if(body.classList.contains('dark')){
        body.classList.remove('dark');

        for(let i = 0; i<footerLinks.length; i++){
            footerLinks[i].classList.remove('dark-mode-link');
        }

    }else{
        // we are currently using the light mode
        body.classList.add('dark');
        for(let i = 0; i<footerLinks.length; i++){
            footerLinks[i].classList.add('dark-mode-link');
        }
    }
}


function verifyForm() {
    var password = document.getElementById('password').value;


    var error_message = document.getElementById('error_message');


    if(password.length < 6){
        error_message.innerHTML = 'Password is too short';
        return false;
   

    } 
    return true;
}


document.getElementById('dark-btn').addEventListener('click', (e) => {
    e.preventDefault();
    changeMode();
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    verifyForm();
})

