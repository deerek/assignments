// Calculate the percentages

function calculatePercentage (sub , total){
    return (sub / total) * 100;
}

// Include array with voter data

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted: true},
    {name:'Tami' , age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function filterVoters (voters) {
    return voters.filter(function (voter) {
        return voter.voted === true;
    })
}

// Sort voters into age groups

function printVoterTurnout (voters) {
   // Arrays for voters sorted by age
    var ageGroup1 = [];
    var ageGroup2 = [];
    var ageGroup3 = [];

// Loop through our voters and sort them into the array I just made
for (var i = 0; i < voters.length; i++) {
    var voter = voters[i];
    if (voter.age >= 18 && voter.age <= 25) {
        ageGroup1.push(voter);
    } else if (voter.age >= 26 && voter.age <= 35) {
        ageGroup2.push(voter);
    } else {
        ageGroup3.push(voter);
    }
}


var group1VotersVoted = filterVoters(ageGroup1).length;
var group1VotingPercentage = calculatePercentage(group1VotersVoted , ageGroup1.length);

var group2VotersVoted = filterVoters(ageGroup2).length;
var group2VotingPercentage = calculatePercentage(group2VotersVoted , ageGroup2.length);

var group3VotersVoted = filterVoters(ageGroup3).length;
var group3VotingPercentage = calculatePercentage(group3VotersVoted , ageGroup3.length);


console.log('18–25' + group1VotingPercentage + '%');
console.log('26–35' + group2VotingPercentage + '%');
console.log('36–55' + group3VotingPercentage + '%');

}