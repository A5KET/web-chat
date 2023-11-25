import { Message } from '../models.js';

/**
 * A base class for chat events
 * 
 * @property {string} type
 * @property {Object} data
 */
class ChatEvent extends Event{
    constructor(type, data={}) {
        super(type);
        this.data = data;
    }
}

export { ChatEvent };