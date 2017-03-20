var Crawler = require("crawler");
var total_pages = -1;

function get_mooc_list_filter_page_url(page=0) {
    /*
    TO-DO Move this function to lib/course.js class
    Generates an URL to filter the list of courses to be crawled, also adds a starting date (today) and the page parameter.
    */
    var util = require("util");
    var userAgent = "Mozilla/5.0 (Windows NT 6.2; Win64; x64;) Gecko/20100101 Firefox/20.0";
    var url = "https://www.mooc-list.com/multiple-criteria?&field_university_entity_tid=&&&&&&&field_peer_assessments_value=All&field_team_projects_value=All&&&field_coupon_value=All&field_audio_lectures_value=All&field_video_lectures_value=All&field_tags_tid=&field_start_date_value_op=%3E%3D&field_start_date_value[value][date]=%s&field_start_date_value[min][date]=&field_start_date_value[max][date]=&sort_by=field_rating_rating&sort_order=DESC&page=%s";
    var date = new Date();

    return {
        userAgent: userAgent,
        uri:util.format(
            url,
            date.getFullYear() + '-' + date.getMonth() + 1 + '-' + date.getDate(),
            page)
        };
}

// Base crawler object
var crawler = new Crawler({
    maxConnections : 10,
    callback : function (error, res, done) {
        if(error){console.log(error);}
        done();
    }
});

// Log every request to control it better
crawler.on('request',function(options){
    console.log(options.uri.uri);
});


// Find out total pages we need to iterate
crawler.queue([{
    uri: get_url(),
    callback: function (error, res, done) {
        if(error){console.log(error);}
        else{
            var $ = res.$;
            // Create a CSS selector and EXTRACT total_pages
        }
        done();
    }
}]);

console.log('Getting total pages.');
// There is no sync/async way to do it, so we need to wait total_pages to be filled
while (total_pages == -1) { }

// Make a request to every page extracting courses links and creating its objects
for (var page = 0; page <= total_pages; page++) {
    crawler.queue([{
        uri: get_url(),
        callback: function (error, res, done) {
            if(error){console.log(error);}
            else{
                var $ = res.$;
                // After getting total pages we need to iterate over it requesting and extracting Courses links
                // console.log($('div a[href^="/course/"]')); // CSS selector to get all courses links
                // Create a object using require("Course") to persist it later
                // The idea is to create it with detail course URL at first, then we would have a secondary process to crawl over them and request its details.
            }
            done();
        }
    }]);
}

