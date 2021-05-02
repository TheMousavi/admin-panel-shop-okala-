$(document).ready(function () {

    function removeAllSidebarToggleClass()
    {
        $('#sidebar-toggle-hide').removeClass('d-md-inline');
        $('#sidebar-toggle-hide').removeClass('d-none');
        $('#sidebar-toggle-show').removeClass('d-inline');
        $('#sidebar-toggle-show').removeClass('d-md-none');


    }

    $('#sidebar-toggle-hide').click(function () {
        $('#sidebar').fadeOut(300);
        $('#main-body').animate({width : "100%"} , 300);
        setTimeout(function () {
            removeAllSidebarToggleClass();
            $('#sidebar-toggle-hide').addClass('d-none');
            $('#sidebar-toggle-show').removeClass('d-none');

        }, 300)
    });


    $('#sidebar-toggle-show').click(function () {
        $('#sidebar').fadeIn(300);
        setTimeout(function () {
            removeAllSidebarToggleClass();
            $('#sidebar-toggle-hide').removeClass('d-none');
            $('#sidebar-toggle-show').addClass('d-none');

        }, 300)
    });

    $('#menu-toggle').click(function () {
        $('#body-header').toggle(300);
    });

    $('#search-toogle').click(function () {
        $('#search-toogle').removeClass('d-md-inline');
        $('#search-area').addClass('d-md-inline');
        $('#search-input').animate({width:"12rem"} , 300);

    });

    $('#search-area-hide').click(function () {
        $('#search-input').animate({width : "0"} , 300);
        setTimeout(function () {
            $('#search-toogle').addClass('d-md-inline');
            $('#search-area').removeClass('d-md-inline');
        },300);

    });

})
