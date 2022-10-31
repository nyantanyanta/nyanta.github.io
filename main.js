$(function(){
    $('#slider').slick();

    $('#reservation').datepicker();

    $('.lesson').on('change', function(){
        let lesson = $('input[name=your-lesson]:checked').val();

        if(lesson == 'online'){
            $('.note-online').css('display', 'block');
            $('.note-venue').css('display', 'none');

        } else if (lesson == 'venue') {
            $('.note-online').css('display', 'none');
            $('.note-venue').css('display', 'block');
        }
    });

    $('#submit-button').on('click', function(){

        $('#name-error').text("");
        $('#tel-error').text("");
        $('#reservation-error').text("");
        $('#lesson-error').text("");

        if($('input[name="your-name"]').val() == "") {
            $("#name-error").text("名前は必須項目です。");
        }

        if(
            ($('input[name="your-tel1"]').val() == "") ||
            ($('input[name="your-tel2"]').val() == "") ||
            ($('input[name="your-tel1"]').val() == "") 
        ) {
                $("#tel-error").text("電話番号は必須項目です。");
        }
        if($('input[name="your-reservation"]').val() == "") {
            $("#reservation-error").text("予約日は必須項目です。");
        }
    });
});
