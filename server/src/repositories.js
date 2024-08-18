export class InMemoryRepository {
  chats = [
    {
      id: 1,
      title: 'Alex',
      messages: [
        {
          id: 1,
          peerId: 1,
          text: 'hello 2',
          date: new Date().getTime()
        },
        {
          id: 2,
          peerId: 3,
          text: 'hi 2',
          date: new Date().getTime()
        }
      ]
    },
    {
      id: 2,
      title: 'Bro',
      messages: [
        {
          id: 1,
          peerId: 2,
          text: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohelloasdasdaskldal;sd;kaskdl;askdlaks;dlaskldkaskfnsjnvnsdkvnsjdnvsjkdvknsjdvjksdkjv',
          date: new Date().getTime()
        },
        {
          id: 2,
          peerId: 3,
          text: 'hi',
          date: new Date().getTime()
        }
      ],
  
    }
  ]

  async getChats() {
    return this.chats
  }
}
