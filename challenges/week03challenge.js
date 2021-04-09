let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

//BRONZE
//Pick an episode to console.log and using dot notation walk through the Netflix object and print off both an episode number and an episode name

console.log(netflix.season1.seasonInfo.episodeInfo[1]);

//SILVER
// create an object using object constructor. Call it teacher and assign it properties of
// firstName, lastName, className, and isTenured with a boolean value

let teacher = new Object;
teacher.firstName = 'Paul'
teacher.lastName = 'Niemczyk'
teacher.className = 'WD83A Part-Time'
teacher.isTenured = true 

console.log(teacher);

//GOLD
//Utilize existing object constructor to add teacher .Kind property that uses a conditional statement
//to check if .isTenured is true or false
//if true print INSIDE THE OBJECT 'This teacher is tenured' otherwise print 'This teach is not tenured

// //my ATTEMPT teacher.Kind = function () {
//     if (this.isTenured === true){
//         return 'this teacher is tenured'
//     } else {
            //return 'this teacher is not tenured
//}

// teacher.Kind()
// console.log(teacher)
teacher.whatKind = function () {
    if (this.isTenured){
        this.Kind = 'Teacher is tenured'
    } else {
        this.Kind = 'Teacher is not tenured'

    }
}
teacher.whatKind()
console.log(teacher)

