/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    let emailSet = new Set ();
    
    for (let i = 0; i < emails.length; i++) {
        let [local, domain] = emails[i].split("@");
        local = local.replace(/\./g, "").split("+");
        let uniqueEmail = local[0] + "@" + domain;
        emailSet.add(uniqueEmail);
    }
    return emailSet.size;
};

// 1. create emailSet
// 2. loop through emails
//     create a variable local and domain and sepaate them by @
//     delete "." from the local
//     split local from "+"
//     create a uniqueEmail variable to hold local + '@' + domain
//     add uniqueEmail to set
// 3. return the size the set