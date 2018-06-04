var user = {
    name: "Derek",
    age: 31,
    location: "Salt Lake City",
    bio: "Hey everybody I love this social network so much I just had to tell you",
    groupsCount: 12,
    groupsList: [
        {
            groupName: "Trailer Gang",
            groupLocation: "Tooele, Utah",
            groupBio: "We love to do fun things here on earth",
            groupMembersCount: 27,
            groupMembersList: [
                {
                    name: "Karen",
                    age: 42,
                    location: "Earth",
                    bio: "Can I speak to your manager?",
                    groupsCount: 22,
                    groupsList: [
                        {
                            groupName: "Manager Beraters",
                            groupLocation: "Over Your Shoulder",
                            groupBio: "We've compiled a list of our complaints and demands. We're ready to present them to the manager.",
                            groupMembersCount: 2,
                            groupMembersList: []
                        }
                    ]

                }
            ]
        },
        {
            groupName: "Trailer Gang",
            groupLocation: "Tooele, Utah",
            groupBio: "We love to do fun things here on earth",
            groupMembersCount: 27,
            groupMembersList: []
        },
        {
            groupName: "Trailer Gang",
            groupLocation: "Tooele, Utah",
            groupBio: "We love to do fun things here on earth",
            groupMembersCount: 27,
            groupMembersList: []
        }
    ],
    eventsUpcoming: function (){
        console.log(this.name + "'s Upcoming Events");
    },
    eventsHistory: []
}

user.blockedUsers = "Karen";
user.interestsCount = 12;

user.eventsHistory.push("history 1" , "history 2");

console.log(user);