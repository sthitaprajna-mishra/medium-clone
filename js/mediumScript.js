var browserWidth = $(window).width();

        if(browserWidth > 904) {
            console.log("inside if condition, browser width: ", browserWidth);
            var rightBody = $(".right-body"),
                navBar = $(".navbar"), 
                startPosition = rightBody.offset().top,
                navBarPosition = navBar.offset().top + navBar.height(),
                containerWidth = $(".content-body .container").innerWidth(),
                leftFlex = parseFloat($(".left-body").css("flex").split(" ")[0]),
                rightFlex = parseFloat(rightBody.css("flex").split(" ")[0]),
                totalFlex = leftFlex + rightFlex,
                leftBodyWidth = $(".left-body").innerWidth();

            $(window).resize(function() {
                containerWidth = $(".content-body .container").innerWidth();
            });


            $(document).scroll(function() {
                var y = $(this).scrollTop(),
                currNavPos = y + navBar.height();


                if(startPosition <= currNavPos) {
                    $(".left-body").css("flex", `0 0 ${leftBodyWidth}px`);
                    console.log("INNER IF condition, browser width: ", browserWidth);
                    rightBody.css("position", "fixed");
                    rightBody.css("top", 0);
                    rightBody.css("right",($("body").innerWidth() - containerWidth)/2);
                    rightBody.css("left", ($("body").innerWidth() - containerWidth)/2 +  (containerWidth*leftFlex)/totalFlex);
                    rightBody.css("transform", "translateY(75px)");
                    rightBody.css("padding-top", "40px");
                } else {
                    $(".left-body").css("flex", "1.5 1 0");
                    $(".right-body").css("flex", "1 1 0");

                    rightBody.css("position", "relative");
                    rightBody.css("top", "");
                    rightBody.css("transform", "");
                    rightBody.css("right", "");
                    rightBody.css("left", "");
                    rightBody.css("padding-top", "");
                }
            });
        }

        $(document).scroll(function() {
            var navBarCurrPos = $('.navbar').offset().top + $('.navbar').height();
            var btnPos = $('.btn-start-reading').offset().top + $('.btn-start-reading').height();

            if(navBarCurrPos >= btnPos) {
                $('.navbar').css('background-color', 'rgb(255, 255, 255');
                $('.navbar').css('transition', 'background-color 0.3s');
                $('.btn-get-started').css('background-color', 'rgb(26, 137, 23)');
                $('.btn-get-started').css('transition', 'background-color 0.3s');
            }
            else {
                $('.navbar').css('background-color', 'rgb(255, 192, 23)');
                $('.navbar').css('transition', 'background-color 0.3s');
                $('.btn-get-started').css('background-color', 'rgb(25, 25, 25)');
                $('.btn-get-started').css('transition', 'background-color 0.3s');
            }
        });