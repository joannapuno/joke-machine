
$(document).ready(function(e) {
    $('#mainBtn').click(function(event){
        event.preventDefault();

        $(document).ready(function() {
                $('.heading').css({'bottom':'0','font-size':'.9em'});
                $('.joke-holder, .button-holder').css({'position':'relative','bottom':'0'});
                $('.icon-container').css({'position':'relative','top':'0'});

                $('.heading').animate ({
                    bottom: '+=400',     
                }, 1000, 'swing', function() {
                });

                $('.joke-holder, .button-holder').animate ({
                    bottom: '+=60',  
                }, 1000, 'swing', function() {
                });

                $('.icon-container').animate ({
                    top: '+=60',      
                }, 1000, 'swing', function() {
                });
        });

        fetch('https://safe-falls-22549.herokuapp.com/random_joke')
        .then(function(response){
            return response.json();
        })
        .then(function(data){

        let setup = data.setup;
        let punchline = data.punchline;

        $('#setup span').text(setup);
        $('#punchline span').text(punchline);
        })

        $('#mainBtn').text('HAHA! Gimme another one!');
    })
});




