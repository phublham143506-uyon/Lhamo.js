// Problem 3.6 · Methods + this
// Trainee introduces themselves
// Create an object trainee with:
// • name (string) · vertical (string)
// • a method introduce() that returns a sentence using this.name and this.vertical.

// Then call trainee.introduce() and print the result.
// 3-6-introduce.js
// // Expected
// trainee.introduce();
// // → "Hi, I'm Karma, training in Dev."

const trainee = {
    name: "Karma",
    vertical: "Dev",
    introduce() {
        return `Hi, I'm ${this.name}, training in ${this.vertical}.`;
    }
};
console.log(trainee.introduce()); // → "Hi, I'm Karma, training in Dev."
