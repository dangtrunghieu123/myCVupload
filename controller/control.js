$(document).ready(function () {
    //about
    $('.about').click(function () {
        $('.edu').css(
            {
                " box-shadow": "0 1px 4px 0 rgba(0,0,0,.37)",
                "transform": "translate3d(23%,0,-250px)",
                "height":'430px',
                "top":'17%',
                "z-index":200
            }
        );
        $('.aboutMe').css(
            {
                " box-shadow": "0 1px 4px 0 rgba(0,0,0,.37)",
                "transform": "translate3d(0,0,0)",
                "z-index":300,
                "height":'530px',
                "top":'9%'
            }
        );
        $('.contactMe').css(
            {
                " box-shadow": "0 1px 4px 0 rgba(0,0,0,.37)",
                "transform": "translate3d(-24%,0,-250px)",
                "height":'430px',
                "top":'14%',
                "z-index":200
            }
        )

    })
    $('.education').click(function () {
        $('.contactMe').css(
            {
                " box-shadow": "0 1px 4px 0 rgba(0,0,0,.37)",
                "transform": "translate3d(2%,0,-250px)",
                "height":'430px',
                "top":'17%',
                "z-index":200
            }
        );
        $('.edu').css(
            {
                " box-shadow": "0 1px 4px 0 rgba(0,0,0,.37)",
                "transform": "translate3d(10%,0,0)",
                "z-index":300,
                "height":'530px',
                "top":'9%'
            }
        );
        $('.aboutMe').css(
            {
                " box-shadow": "0 1px 4px 0 rgba(0,0,0,.37)",
                "transform": "translate3d(-14%,0,-250px)",
                "height":'430px',
                "top":'14%',
                "z-index":200
            }
        )
    })
    $('.contact').click(function () {
        $('.aboutMe').css(
            {
                " box-shadow": "0 1px 4px 0 rgba(0,0,0,.37)",
                "transform": "translate3d(11%,0,-250px)",
                "height":'430px',
                "top":'17%',
                "z-index":200
            }
        );
        $('.edu').css(
            {
                " box-shadow": "0 1px 4px 0 rgba(0,0,0,.37)",
                "transform": "translate3d(-3%,0,0)",
                "z-index":300,
                "height":'430px',
                "top":'14%'
            }
        );
        $('.contactMe').css(
            {
                " box-shadow": "0 1px 4px 0 rgba(0,0,0,.37)",
                "transform": "translate3d(-12%,0,-250px)",
                "height":'530px',
                "top":'9%',
                "z-index":300
            }
        )
    })

    $('.name,.email').change(function(e){
        e.preventDefault();
        if($(this).val()){
            $(this).siblings('label').hide();
        }else{
            $(this).siblings('label').show()
        }
    })
    $('#formSubmit').submit(function(e){
        e.preventDefault();
        name = $('.name').val();
        email = $('.email').val();
        if(name && email){
            alert("send message successfully!");
        }
        else{
            alert("please, check again your full name or email!");
        }
    })
    $('.edu').on('scroll',function(){
        var positionTop = $(".edu").scrollTop();
        console.log(positionTop);
        if(positionTop > 300 && positionTop , 600){
            $('.pr1 img').addClass('animte1');
            $('.pr2 img').addClass('animte2');
          
        }
        if(positionTop > 600){
            $('.pr3 img').addClass('animated slideInUp');
        }
    })
})

