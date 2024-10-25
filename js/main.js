$(function(){
    // $(".gnb_wrap>li").mouseenter(function(){
    //     let number = $(this).index();

    //     if($(".search_icon > a").hasClass("on")){
    //         $(".pc_bg>div").slideUp("fast");
    //         $(".pc_back").stop().hide();
    //         $(".gnb_wrap>li").css({"border-bottom" : "none"})
    //     }else{
    //         $(".pc_bg>div").eq(number).slideDown("fast");
    //         $(".pc_back").stop().show();
    //         $(".gnb_wrap>li").css({"border-bottom" : "none"})
    //         $(this).css({"border-bottom" : "2px solid #2fc241"})
    //     }
    // });

    $(".gnb_wrap>li").mouseenter(function(){
        $(this).css("border-bottom", "2px solid #2fc241");
    }).mouseleave(function(){
        $(this).css("border-bottom", "none");
    });

    $(".gnb_01").mouseenter(function(){
        $(".gnb_01").addClass("gnb01act");
        $(".pc_bg01").stop().show();
        $(".gnb_01").css("border-bottom" , "2px solid #2fc241");
        $(".pc_back").stop().show();
        $('body').css('overflow', 'hidden');
    }).mouseleave(function(){
        $(".gnb_01").removeClass("gnb01act");
        $(".pc_bg01").stop().hide();
        $(".pc_back").stop().hide();
        $(".gnb_01").css("border-bottom" , "none");
        $('body').css('overflow', 'auto');
    });
    $(".pc_menu01").mouseenter(function(){
        $(".gnb_01").addClass("gnb01act");
        $(".gnb_01").css("border-bottom" , "2px solid #2fc241");
        $(".pc_bg01").stop().show();
        $('body').css('overflow', 'hidden');
      }).mouseleave(function() {
        $(".gnb_01").removeClass("gnb01_active");
        $(".gnb_01").css("border-bottom" , "none");
        $(".pc_bg01").stop().hide();
        $('body').css('overflow', 'auto');
      });

      $(".gnb_02").mouseenter(function(){
        $(".gnb_02").addClass("gnb02act");
        $(".pc_back").stop().show();
        $(".pc_bg02").stop().show();
        $(".gnb_02").css("border-bottom" , "2px solid #2fc241");
        $('body').css('overflow', 'hidden');
    }).mouseleave(function(){
        $(".gnb_02").removeClass("gnb02act");
        $(".pc_back").stop().hide();
        $(".pc_bg02").stop().hide();
        $(".gnb_02").css("border-bottom" , "none");
        $('body').css('overflow', 'auto');
    });
    $(".pc_menu02").mouseenter(function(){
        $(".gnb_02").addClass("gnb02act");
        $(".gnb_02").css("border-bottom" , "2px solid #2fc241");
        $(".pc_bg02").stop().show();
        $('body').css('overflow', 'hidden');
      }).mouseleave(function() {
        $(".gnb_02").removeClass("gnb02act");
        $(".gnb_02").css("border-bottom" , "none");
        $(".pc_bg02").stop().hide();
        $('body').css('overflow', 'auto');
      });

      $(".gnb_03").mouseenter(function(){
        $(".gnb_03").addClass("gnb03act");
        $(".pc_back").stop().show();
        $(".pc_bg03").stop().show();
        $(".gnb_03").css("border-bottom" , "2px solid #2fc241");
        $('body').css('overflow', 'hidden');
    }).mouseleave(function(){
        $(".gnb_03").removeClass("gnb03act");
        $(".pc_back").stop().hide();
        $(".pc_bg03").stop().hide();
        $(".gnb_03").css("border-bottom" , "none");
        $('body').css('overflow', 'auto');
    });
    $(".pc_menu03").mouseenter(function(){
        $(".gnb_03").addClass("gnb03act");
        $(".gnb_03").css("border-bottom" , "2px solid #2fc241");
        $(".pc_bg03").stop().show();
        $('body').css('overflow', 'hidden');
      }).mouseleave(function() {
        $(".gnb_03").removeClass("gnb03act");
        $(".gnb_03").css("border-bottom" , "none");
        $(".pc_bg03").stop().hide();
        $('body').css('overflow', 'auto');
      });

      $(".gnb_04").mouseenter(function(){
        $(".gnb_04").addClass("gnb04act");
        $(".pc_back").stop().show();
        $(".pc_bg04").stop().show();
        $(".gnb_04").css("border-bottom" , "2px solid #2fc241");
        $('body').css('overflow', 'hidden');
    }).mouseleave(function(){
        $(".gnb_04").removeClass("gnb04act");
        $(".pc_back").stop().hide();
        $(".pc_bg04").stop().hide();
        $(".gnb_04").css("border-bottom" , "none");
        $('body').css('overflow', 'auto');
    });
    $(".pc_menu04").mouseenter(function(){
        $(".gnb_04").addClass("gnb04act");
        $(".gnb_04").css("border-bottom" , "2px solid #2fc241");
        $(".pc_bg04").stop().show();
        $('body').css('overflow', 'hidden');
      }).mouseleave(function() {
        $(".gnb_04").removeClass("gnb04act");
        $(".gnb_04").css("border-bottom" , "none");
        $(".pc_bg04").stop().hide();
        $('body').css('overflow', 'auto');
      });

      $(".gnb_05").mouseenter(function(){
        $(".gnb_05").addClass("gnb05act");
        $(".pc_back").stop().show();
        $(".pc_bg05").stop().show();
        $(".gnb_05").css("border-bottom" , "2px solid #2fc241");
        $('body').css('overflow', 'hidden');
    }).mouseleave(function(){
        $(".gnb_05").removeClass("gnb05act");
        $(".pc_back").stop().hide();
        $(".pc_bg05").stop().hide();
        $(".gnb_05").css("border-bottom" , "none");
        $('body').css('overflow', 'auto');
    });
    $(".pc_menu05").mouseenter(function(){
        $(".gnb_05").addClass("gnb05act");
        $(".gnb_05").css("border-bottom" , "2px solid #2fc241");
        $(".pc_bg05").stop().show();
        $('body').css('overflow', 'hidden');
      }).mouseleave(function() {
        $(".gnb_05").removeClass("gnb05act");
        $(".gnb_05").css("border-bottom" , "none");
        $('body, html').css('overflow', 'auto');
        $(".pc_bg05").stop().hide();
        $('body').css('overflow', 'auto');
      });

      $(".gnb_06").mouseenter(function(){
        $(".gnb_06").addClass("gnb06act");
        $(".pc_back").stop().show();
        $(".pc_bg06").stop().show();
        $(".gnb_06").css("border-bottom" , "2px solid #2fc241");
        $('body').css('overflow', 'hidden');
    }).mouseleave(function(){
        $(".gnb_06").removeClass("gnb06act");
        $(".pc_back").stop().hide();
        $(".pc_bg06").stop().hide();
        $(".gnb_06").css("border-bottom" , "none");
        $('body').css('overflow', 'auto');
    });
    $(".pc_menu06").mouseenter(function(){
        $(".gnb_06").addClass("gnb06act");
        $(".gnb_06").css("border-bottom" , "2px solid #2fc241");
        $(".pc_bg06").stop().show();
        $('body').css('overflow', 'hidden');
      }).mouseleave(function() {
        $(".gnb_06").removeClass("gnb06act");
        $(".gnb_06").css("border-bottom" , "none");
        $(".pc_bg06").stop().hide();
        $('body').css('overflow', 'auto');
      });





    $(".pc_bg>div").mouseleave(function(){
        $(".pc_bg>div").slideUp("fast");
        $(".pc_back").stop().hide();
        $(".gnb_wrap>li").css({"border-bottom" : "none"});
    });

    $(".pc_bg>div").mouseenter(function(){
        let num = $(this).index();
        $(".gnb_wrap>li").css({"border-bottom" : "none"});
        $(".gnb_wrap>li").eq(num).css({"border-bottom" : "2px solid #2fc241"});
        $(".pc_back").stop().show();
    });
    $(".gnb_wrap>li").mouseleave(function(){
        $(".gnb_wrap>li").css({"border-bottom" : "none"});
        // $(".pc_back").stop().hide();
    });

    $(".menu_list>li").mouseenter(function(){
        $(this).children("a").css({"background-color" : "#f9f9f9" , "color" : "#666" , "border" : "1px solid #0078c0"});
    });
    $(".menu_list>li").mouseleave(function(){
        $(this).children("a").css({"background-color" : "#0078c0" , "color" : "#fff" , "border" : "none"});
    });

    $(".menu_icon > a").click(function(){
        $(".all_menu").fadeIn('fast');
    });
    $(".all_menu_close").click(function(){
        $(".all_menu").fadeOut('fast');
    });
    const all_menu_wrap = $(".all_menu_wrap");
    const menu_icon = $(".menu_icon");
    const close_btn = $(".all_menu_close");

        if($(window).width() > 1250) {
            menu_icon.click(function(){
                all_menu_wrap.show();
                $('html, body').css('overflow', 'hidden');
            });

            close_btn.click(function(){
                $('html, body').css('overflow', 'auto');
                all_menu_wrap.hide();
            });
        }else {
            $('html, body').css('overflow', 'auto');
            all_menu_wrap.hide();
        }

        $(window).resize(function(){
            if($(window).width() < 1250) {
                all_menu_wrap.hide();
                $('html, body').css('overflow', 'auto');
            }
        });

    const search = $(".sear_box , .sear_bg");
    const search_btn = $(".search_icon a");
    const search_close_btn = $(".clickClose");
    // const body = document.querySelbector('body');

    search_btn.click(function() {
        // console.log("search_btn");
        $('.search').addClass('active');
        search.show();
        $('body, html').css('overflow', 'hidden');
    });

    search_close_btn.click(function() {
        $('body, html').css('overflow', 'auto');
        $('.search').removeClass('active');
        search.hide();
    });


    $(".btn").click(function(){
        $(".dropdown_menu").toggle();
    });




  


    var flag = true;

    $(".swiper_pause").on("click" , function(){
        if(flag){
            swiper.autoplay.stop();
            $(".swiper_pause").addClass("on");
            flag = false;
        }else{
            swiper.autoplay.start();
            $(".swiper_pause").removeClass("on");
            flag = true;
        }
    });

    $(".m_list_menu > div .m_list_tit").click(function(){

        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $(this).next().stop().slideUp();
        }else{
            $(".m_list_menu > div .m_list_tit").next().stop().slideUp();
            $(this).next().stop().slideDown();
            $(".m_list_menu > div .m_list_tit").removeClass("on");
            $(this).addClass("on");
        }
    });

    $(".m_menu_icon a").click(function(){
        console.log(".m_menu_icon a")
        $('html').css('overflow', 'hidden');
        $(".m_menu_group").show();
    });
    $(".m_menu_close").click(function(){
        $(".m_menu_group").hide();
        $('html').css('overflow', 'auto');
    });

    $(".play-icon").click(function(){
        const video = $(".video_wrap video").get(0);
        if (video.paused) {
            video.play();
            this.style.display = 'none';
        } else {
            video.pause();
            this.style.display = 'block';
        }
    });
    $(".video_wrap video").click(function() {
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    });

    $(".top_btn a").click(function(){
        $("html, body").animate({scrollTop: 0}, 300);
    });
})


