var visible = 5;

const comments = [{
        order: 1,
        likes: 1,
        avatar: `../assets/images/1.jpg`,
        profile: `https://www.discountssphere.com/electric-bike/`,
        name: `William Charles`,
        text: `Just got my electric bike and it’s amazing! The ride is so smooth and effortless. Thank you, Green E-Bike Program!`,
        image: `../assets/images/test7.jpg`,
        age: `a week ago`,
        comments: []
    },
    {
        order: 2,
        likes: 1,
        avatar: `../assets/images/2.jpg`,
        profile: `https://www.discountssphere.com/electric-bike/`,
        name: `Charles J Peter`,
        text: `No luck for me this time.. congratulations to the others!`,
        image: null,
        age: `a week ago`,
        comments: []
    },
    {
        order: 3,
        likes: 3,
        avatar: `../assets/images/3.jpg`,
        profile: `https://www.discountssphere.com/electric-bike/`,
        name: `Payal Gupta`,
        text: `I love it! It's the first time I try an e-Bike. I would have tried to get one a long time ago if I knew how cool it is`,
        image: `../assets/images/test1.jpg`,
        age: `a week ago`,
        comments: [{
                likes: 16,
                avatar: `../assets/images/brand.jpg`,
                profile: `https://www.discountssphere.com/electric-bike/`,
                name: `Green E-Bike Program`,
                text: `We are happy for you! Enjoy!`,
                age: `a week ago`,
            },
            {
                likes: 3,
                avatar: `../assets/images/3.jpg`,
                profile: `https://www.discountssphere.com/electric-bike/`,
                name: `Payal Gupta`,
                text: `Thank you so much!`,
                age: `a week ago`,
            }
        ]
    },
    {
        order: 4,
        likes: 7,
        avatar: `../assets/images/4.jpg`,
        profile: `https://www.discountssphere.com/electric-bike/`,
        name: `Pamela Danebrock`,
        text: `Great initiative guys! A fun way of commuting and it's also eco-friendly.`,
        image: null,
        age: `two weeks ago`,
        comments: []
    },
    {
        order: 5,
        likes: 7,
        avatar: `../assets/images/5.jpg`,
        profile: `https://www.discountssphere.com/electric-bike/`,
        name: `Anthony Youlder`,
        text: `Can't wait to try it. Thank you guys, it has just arrived!`,
        image: `../assets/images/test6.jpg`,
        age: `two weeks ago`,
        comments: [{
            likes: 25,
            avatar: `../assets/images/brand.jpg`,
            profile: `https://www.discountssphere.com/electric-bike/`,
            name: `Green E-Bike Program`,
            text: `Thank you for joining our Program! Hope to hear from you again!`,
            age: `two weeks ago`,
        }]
    },
    {
        order: 6,
        likes: 8,
        avatar: `../assets/images/10.jpg`,
        profile: `https://www.discountssphere.com/electric-bike/`,
        name: `Steven Brynn`,
        text: `I wasn't accepted. But anyway, great Program! Have to think about nature too, most important`,
        image: null,
        age: `two weeks ago`,
        comments: []
    },
    {
        order: 7,
        likes: 3,
        avatar: `../assets/images/11.jpg`,
        profile: `https://www.discountssphere.com/electric-bike/`,
        name: `Jamia Bennett`,
        text: `So excited for my e-Bike! The design and functionality are top-notch. My husband will love it:`,
        image: `../assets/images/test2.jpg`,
        age: `two weeks ago`,
        comments: [{
            likes: 56,
            avatar: `../assets/images/brand.jpg`,
            profile: `https://www.discountssphere.com/electric-bike/`,
            name: `Green E-Bike Program`,
            text: `We are happy to have you in our Program! Enjoy!`,
            age: `two weeks ago`,
        }]
    },
    {
        order: 8,
        likes: 12,
        avatar: `../assets/images/12.jpg`,
        profile: `https://www.discountssphere.com/electric-bike/`,
        name: `John Kelvin`,
        text: `This e-Bike is perfect for my daily rides. Thank you!`,
        image: `../assets/images/test5.jpg`,
        age: `two weeks ago`,
        comments: []
    },
    {
        order: 9,
        likes: 3,
        avatar: `../assets/images/13.jpg`,
        profile: `https://www.discountssphere.com/electric-bike/`,
        name: `Ryan Mitchell`,
        text: `There should be more Programs like this! Everyone uses cars now, but we don't even think about how much this pollutes`,
        image: null,
        age: `two weeks ago`,
        comments: []
    },
    {
        order: 10,
        likes: 1,
        avatar: `../assets/images/14.jpg`,
        profile: `https://www.discountssphere.com/electric-bike/`,
        name: `Linda David`,
        text: `What is the deadline for the Program?`,
        image: null,
        age: `two weeks ago`,
        comments: []
    },
    {
        order: 11,
        likes: 1,
        avatar: `../assets/images/15.jpg`,
        profile: `https://www.discountssphere.com/electric-bike/`,
        name: `James Larry`,
        text: `I can't believe it! I always wanted one but the price was out of my budget. I am very grateful, thanks to the whole Green E-Bike Program team:`,
        image: `../assets/images/test3.jpg`,
        age: `two weeks ago`,
        comments: []
    },
    {
        order: 13,
        likes: 6,
        avatar: `../assets/images/20.jpg`,
        profile: `https://www.discountssphere.com/electric-bike/`,
        name: `Hugo Thomas`,
        text: `From now on I won't use the car to go to work, I save an hour every day since it arrived. And at least I can also help a bit to protect the environment:`,
        image: `../assets/images/test4.jpg`,
        age: `two weeks ago`,
        comments: []
    }
];

const obj_comment = `
<div class="comment sort-coms start-coms" data-order="{{ORDER}}" data-likes="{{LIKES}}">
	<a class="comment-user-img" href="{{PROFILE_URL}}"
		target="_blank"><img src="{{AVATAR}}" width="48" height="48" alt="{{USERNAME}}" /></a>
	<a href="{{PROFILE_URL}}" target="_blank"
		class="comment-user-name"><span> {{USERNAME}} </span></a>
	<p class="comment-text">{{COMMENT_TEXT}}</p>
	{{COMMENT_IMG}}
	<div class="comment-meta">
		<button>Like</button><span> · </span>
		<button>Reply</button><span> · </span>
		<span class="total-likes">{{LIKES}}</span><span> · </span>
		<span class="comment-age">{{TIMEAGO}}</span>
	</div>
	{{SUB_COMMENTS}}
</div>
`;

const obj_sub_comment = `
<div class="comment">
	<a class="comment-user-img" href="{{PROFILE_URL}}"
		target="_blank"><img src="{{AVATAR}}" width="48" height="48" alt="{{USERNAME}}" /></a>
	<a href="{{PROFILE_URL}}" target="_blank"
		class="comment-user-name"><span> {{USERNAME}} </span></a>
	<p class="comment-text">{{COMMENT_TEXT}}</p>
	<div class="comment-meta">
		<button>Like</button><span> · </span>
		<button>Reply</button><span> · </span>
		<span class="total-likes">{{LIKES}}</span><span> · </span>
		<span class="comment-age">{{TIMEAGO}}</span>
	</div>
</div>
`;

const renderComments = () => {
    let html = ``;

    for (var comment of comments) {
        let sub_comments = ``;

        for (var scomment of comment.comments) {
            sub_comments += obj_sub_comment
                .replace(new RegExp('{{PROFILE_URL}}', 'g'), scomment.profile)
                .replace(new RegExp('{{AVATAR}}', 'g'), scomment.avatar)
                .replace(new RegExp('{{USERNAME}}', 'g'), scomment.name)
                .replace(new RegExp('{{COMMENT_TEXT}}', 'g'), scomment.text)
                .replace(new RegExp('{{LIKES}}', 'g'), scomment.likes)
                .replace(new RegExp('{{TIMEAGO}}', 'g'), scomment.age);
        };

        let img_html = comment.image ?
            `<img class="fb-img" src="${comment.image}" width="210" alt="${comment.name}"/>` :
            ``;

        html += obj_comment
            .replace(new RegExp('{{PROFILE_URL}}', 'g'), comment.profile)
            .replace(new RegExp('{{AVATAR}}', 'g'), comment.avatar)
            .replace(new RegExp('{{USERNAME}}', 'g'), comment.name)
            .replace(new RegExp('{{COMMENT_TEXT}}', 'g'), comment.text)
            .replace(new RegExp('{{COMMENT_IMG}}', 'g'), img_html)
            .replace(new RegExp('{{LIKES}}', 'g'), comment.likes)
            .replace(new RegExp('{{ORDER}}', 'g'), comment.order)
            .replace(new RegExp('{{TIMEAGO}}', 'g'), comment.age)
            .replace(new RegExp('{{SUB_COMMENTS}}', 'g'), sub_comments);
    };

    return html;
};

jQuery.fn.orderBy = function(keySelector, order) {
    return this.sort(function(a, b) {
        a = keySelector.apply(a);
        b = keySelector.apply(b);
        if (order == "newest") {
            if (a > b)
                return 1;
            if (a < b)
                return -1;
            return 0;
        } else if (order == "oldest" || order == "top") {
            if (a < b)
                return 1;
            if (a > b)
                return -1;
            return 0;
        }
    });
};

$(document).ready(function() {
    const html_comms = renderComments();

    $(".main-comments").html(html_comms);

    setTimeout(function() {
        $(".sorting-box > p").html("130 comments");
        $(".start-coms").removeClass("start-coms");
    }, 250);

    $(document).on('click', 'textarea', function() {
        $(".add-comment").addClass("active");
    });

    $(".comment-button-left [type=checkbox]").on('change', function() {
        if ($(this).is(":checked") && text_remaining > 0) {
            $(".comment-button-left p").show();
            $(".comment-button-right button").addClass("disabled").prop("disabled", true);
        } else {
            $(".comment-button-left p").hide();
            $(".comment-button-right button").removeClass("disabled").prop("disabled", false);
        }
    });

    $(document).on('click', '.sort > button', function() {
        var $this = $(this);
        $this.next().is(":visible") ? $this.next().hide() : $this.next().show();
    });

    $(document).on('click', '.dropdown-sort button', function() {
        var $this = $(this);
        var sort_by = $this.data("sort") == "top" ? "likes" : "order";
        $this.parent().hide();
        $this.parent().find(".selected").removeClass("selected");
        $this.addClass("selected");
        $(".sort > button span").html($this.find("span").html());
        $(".sort-coms").orderBy(function() {
            return +$(this).data(sort_by);
        }, $this.data("sort")).appendTo(".main-comments");
        $(".inner-sorting-box > svg").css({
            display: "inline-block"
        });
        setTimeout(function() {
            $(".inner-sorting-box > svg").hide();
        }, 200);
        $(".sort-coms").hide();
        for (var i = 0; i < visible; i++) {
            $(".main-comments > :hidden:first").show();
        }
    });

    $(document).on('click', '.load-more', function() {
        var elem = $(".main-comments > :hidden").length < 5 ? $(".main-comments > :hidden").length : 5;
        for (var i = 0; i < elem; i++) {
            $(".main-comments > :hidden:first").show();
        }
        visible = visible + elem;
        if (visible == $(".sort-coms").length) {
            $(this).addClass("end-coms").prop("disabled", true).find("span").html("Loading...");
        }
    });

    $("textarea").keyup(function() {
        var text_length = $(this).val().length;
        text_length <= 0 ? $(".comment-button-right button").addClass("disabled").prop("disabled", true) : $(".comment-button-right button").removeClass("disabled").prop("disabled", false);
        text_remaining = 6 - text_length;
        $(".comment-button-left p").html("Write " + text_remaining + " more characters to post to Facebook");
        if ($(".comment-button-left [type=checkbox]").is(":checked")) {
            if (text_remaining <= 0) {
                $(".comment-button-left p").hide();
                $(".comment-button-right button").removeClass("disabled").prop("disabled", false);
            } else {
                $(".comment-button-left p").show();
                $(".comment-button-right button").addClass("disabled").prop("disabled", true);
            }
        }
    });

    $(".comment-button-right button").on('click', function() {
        alert("Comments are disabled by the author.")
    });

    $(".comment-meta button").on('click', function() {
        alert("Action prohibited. You are not authenticated.");
    });
});