const coursesData = [
    {
        id: 1,
        user_id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 2,
        user_id: 1,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        user_id: 1,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    }
]

const users = [
    {
        id: 1,
        name: "saad butt",
        age: 24
    },
    {
        id: 2,
        name: "Boo Ali",
        age: 24
    },
]

const getCourse = function(args) { 
    var id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
}

const getCourseByUserId = function(user_id) { 
    const courses =  coursesData.filter(course => {
        return course.user_id == user_id;
    });
    if(courses.length > 0) {
        return courses
    }else{
        return []
    }
}

const getUsers = function() { 
    return users.map((item)=> {
        item.course = getCourseByUserId(item.id)
        return item
    })
}

const getCourses = function(args) {
    if (args.topic) {
        var topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    } else {
        return coursesData;
    }
}

const getLatestCourse = function(args) {
    if(coursesData.length) {
        if(args.type){
            return coursesData[coursesData.length - 1];
        }else{
            return coursesData[0];


        }

}    return "no courses found"
    return coursesData[coursesData.length - 1];
}

module.exports =  {coursesData, getCourse, getCourses, getLatestCourse, getUsers}