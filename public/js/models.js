/**
 * Represents a user.
 * @prop {string} username
 */
class User {
    /**
     * 
     * @param {string} username 
     */
    constructor(username) {
        this.username = username;
    } 
}

/**
 * Represents a message. 
 * @prop {User} sender
 * @prop {string} text
 */
class Message {
    /**
     * @param {User} sender
     * @param {string} text 
     */
    constructor(text, sender=null) {
        this.text = text;
        this.sender = sender;
    }
}

export { User, Message };