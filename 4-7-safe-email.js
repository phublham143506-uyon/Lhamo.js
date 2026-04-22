// Problem 4.7 · Optional chaining ?.
// Safe email access
// Not every user has a contact field. Write getEmail(user) that returns user.contact.email if it exists, or undefined if contact is missing. Use ?. so it doesn't crash.
// 4-7-safe-email.js
// // Examples
// getEmail({ name: "Karma", contact: { email: "karma@selisegroup.com" } });
// // → "karma@selisegroup.com"

// getEmail({ name: "Dorji" });
// // → undefined (no crash)

const getEmail = (user) => {
    return user.contact?.email;
}
console.log(getEmail({ name: "Karma", contact: { email: "karma@selisegroup.com" } })); // → "karma@selisegroup.com"
console.log(getEmail({ name: "Dorji" })); // → undefined
