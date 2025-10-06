function canVote(age){
    return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}

canVote(21); // "Eligible to vote"
canVote(16); // "Not eligible to vote"