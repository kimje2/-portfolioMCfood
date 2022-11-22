$(document).ready(function(){
    $(".submenu").hide();

    $(".submenu li a").hover(function() { //mouseover
        $(this).css({"color":"#fff","background-color":"gold"});
    },function(){  //mouseout
        $(this).css({"color":"","background-color":""});
    });

    //이벤트
    $("#menu1 li").hover(function(){
        $(this).children("ul").stop().slideDown(100,"easeOutBounce");
    },function(){
        $(this).children("ul").stop().slideUp(0);
    })

    /* 탭메뉴 */
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
    
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
    
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
      })

      /* 테블릿/모바일 메뉴 */
      // menu
    $(".gnb_bar").click(function(){
        $("#m_gnb").animate({"left":"0"},"fast");
    });

    $(".close").click(function(){
        $("#m_gnb").animate({"left":"-100%"},"fast");
    });

    $(".gnb_bar").click(function(){
        $(".close").animate({"left":"2%"},"fast");
    });

    $(".close").click(function(){
        $(".close").animate({"left":"-20%"},"fast");
    });

    /* 테블릿/모바일 메뉴 */
    /* submenu2 */
      $("#menu2 > li").click(function(){
        $("#menu2 > li").css("color",""); //모든 메뉴색 초기화
        $(this).css("color","#ef426f"); // 클릭메뉴색만 변경
        $(this).children("ul").slideToggle();

    });


});

