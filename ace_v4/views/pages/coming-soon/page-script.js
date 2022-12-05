jQuery(function ($) {

    // simple countdown timer on coming soon page
    var remainingTime = 0;
    var secondsPerDay = 24 * 3600;
    var secondsPerHour = 3600;
    var secondsPerMinute = 60;

    $(".timer")
        .each(function () {
            var type = $(this).attr("data-type");
            var value = 0;
            var start = new Date(),
                end = new Date("2023-01-20 00:00:00"),
                diff = new Date(end - start),
                days = diff / 1000 / 60 / 60 / 24;

            switch (type) {
                case "day":
                    //value = parseInt(Math.random() * 20 + 5);

                    value = days - (days % 1);
                    remainingTime += Math.round((value * secondsPerDay));

                    //value = days - (days % 1);
                    //remainingTime += (value);
                    break;

                case "hour":

                    //value = parseInt(Math.random() * 22 + 1);

                    var hour = (days % 1) * 24;
                    value = hour - (hour % 1);
                    remainingTime += Math.round((hour * secondsPerHour));

                    //value = (days % 1) * 24;
                    //value = value - (value % 1);
                    //remainingTime += (value);

                    break;

                case "minute":
                    //value = parseInt(Math.random() * 58 + 1);

                    var hour = ((days % 1) * 24);
                    var minute = (hour % 1) * 60;
                    value = minute - (minute % 1);
                    remainingTime += Math.round((value * secondsPerMinute));

                    //value = (((days % 1) * 24) % 1) * 60;
                    //value = value - (value % 1);
                    //remainingTime += (value);

                    break;

                case "second":
                    //value = parseInt(Math.random() * 58 + 1);
                    var hour = ((days % 1) * 24);
                    var minute = (hour % 1) * 60;
                    value = Math.round((minute % 1) * 60);

                    remainingTime += value;

                    //value = (((((days % 1) * 24) % 1) * 60) % 1) * 60;
                    //value = value - (value % 1);

                    if (value < 10) value = "0" + value;
                    break;
            }

            $(this).text(value);
        });


    var interval = setInterval(function () {
        remainingTime -= 1;
        if (remainingTime < 1) {
            clearInterval(interval);
            return;
        }

        var days = parseInt(remainingTime / secondsPerDay);
        var hours = parseInt((remainingTime - (days * secondsPerDay)) / secondsPerHour);
        var minutes = parseInt((remainingTime - (days * secondsPerDay) - (hours * secondsPerHour)) /
            secondsPerMinute);
        var seconds = remainingTime % 60;

        if (seconds < 10) seconds = "0" + seconds;
        $(".timer[data-type=second]").text(seconds);
        if (seconds == 59) {
            $(".timer[data-type=minute]").text(minutes);
            $(".timer[data-type=hour]").text(hours);
            $(".timer[data-type=day]").text(days);
        }

    },
        1000);

})