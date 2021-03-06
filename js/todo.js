var Todo = angular.module('todo', []);

Todo.controller('TodoCtrl', function($scope){
    $scope.tasks = [
        'Study Javascript',
        'Study AngularJS',
        'Study CoffeeScript'
    ];
})

Todo.controller('EbooksCtrl', function($scope){
    $scope.ebooks = [
        {
            "ID": 947185260,
            "Title": "Head First PHP & MySQL",
            "Description": "If you're ready to create web pages more complex than what you can build with HTML and CSS, Head First PHP & MySQL is the ultimate learning guide to building dynamic, database-driven websites using PHP and MySQL. Packed with real-world examples, this ...",
            "Image": "http://s.it-ebooks-api.info/3/head_first_php__mysql.jpg",
            "isbn": "9780596006303"
        },
        {
            "ID": 1283537446,
            "Title": "Learning PHP, MySQL, and JavaScript",
            "SubTitle": "A Step-by-Step Guide to Creating Dynamic Websites",
            "Description": "If you know HTML, this guide will have you building interactive websites quickly. You'll learn how to create responsive, data-driven websites with PHP, MySQL, and JavaScript, regardless of whether you already know how to program. Discover how the pow ...",
            "Image": "http://s.it-ebooks-api.info/3/learning_php_mysql_and_javascript.jpg",
            "isbn": "9780596157135"
        },
        {
            "ID": 4061324578,
            "Title": "PHP & MySQL: Novice to Ninja, 5th Edition",
            "SubTitle": "The Easy Way to Build Your Own Database Driven Website",
            "Description": "PHP & MySQL: Novice to Ninja, 5th Edition is a hands-on guide that will help you build your first database driven website. In the fifth edition of this best-selling book, you'll learn how to use PHP (used on 20 million sites worldwide) to build your ...",
            "Image": "http://s.it-ebooks-api.info/7/php__mysql_novice_to_ninja_5th_edition.jpg",
            "isbn": "9780987153081"
        },
        {
            "ID": 1290301462,
            "Title": "Learning PHP, MySQL, JavaScript, and CSS, 2nd Edition",
            "SubTitle": "A Step-by-Step Guide to Creating Dynamic Websites",
            "Description": "Learn how to build interactive, data-driven websites - even if you don't have any previous programming experience. If you know how to build static sites with HTML, this popular guide will help you tackle dynamic web programming. You'll get a thorough ...",
            "Image": "http://s.it-ebooks-api.info/3/learning_php_mysql_javascript_and_css_2nd_edition.jpg",
            "isbn": "9781449319267"
        },
        {
            "ID": 2594711238,
            "Title": "Sams Teach Yourself PHP, MySQL and Apache All in One, 5th Edition",
            "Description": "In just a short time, you can learn how to use PHP, MySQL, and Apache together to create dynamic, interactive websites and applications using the three leading open-source web development technologies. Using a straightforward, step-by-step approach, ...",
            "Image": "http://s.it-ebooks-api.info/12/sams_teach_yourself_php_mysql_and_apache_all_in_one_5th_edition.jpg",
            "isbn": "9780672335433"
        },
        {
            "ID": 1967945201,
            "Title": "Learning PHP, MySQL, JavaScript, CSS & HTML5, 3rd Edition",
            "SubTitle": "A Step-by-Step Guide to Creating Dynamic Websites",
            "Description": "Build interactive, data-driven websites with the potent combination of open-source technologies and web standards, even if you only have basic HTML knowledge. With this popular hands-on guide, you'll tackle dynamic web programming with the help of to ...",
            "Image": "http://s.it-ebooks-api.info/3/learning_php_mysql_javascript_css__html5_3rd_edition.jpg",
            "isbn": "9781491949467"
        },
        {
            "ID": 2279690981,
            "Title": "PHP & MySQL: The Missing Manual",
            "Description": "If you can build websites with CSS and JavaScript, this book takes you to the next level-creating dynamic, database-driven websites with PHP and MySQL. Learn how to build a database, manage your content, and interact with users through queries and we ...",
            "Image": "http://s.it-ebooks-api.info/3/php__mysql_the_missing_manual.jpg",
            "isbn": "9780596515867"
        }
    ];
})
