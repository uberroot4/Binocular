import { DataPluginUser, DataPluginUsers } from '../../../interfaces/dataPluginInterfaces/dataPluginUsers.ts';

export default class Users implements DataPluginUsers {
  constructor() {}

  public async getAll() {
    console.log(`Getting Authors`);
    return new Promise<DataPluginUser[]>((resolve) => {
      const users: DataPluginUser[] = [
        {
          id: '1',
          gitSignature: 'tester@github.com',
          _id: 'users/1',
        },
        {
          id: '2',
          gitSignature: 'tester2@github.com',
          _id: 'users/2',
        },
        {
          _id: 'users/367',
          id: '367',
          gitSignature: 'tester367@github.com',
        },
        {
          _id: 'users/413',
          id: '413',
          gitSignature: 'tester413@github.com',
        },
        {
          _id: 'users/1169',
          id: '1169',
          gitSignature: 'tester1169@github.com',
        },
        {
          _id: 'users/2037',
          id: '2037',
          gitSignature: 'tester2037@github.com',
        },
        {
          _id: 'users/2091',
          id: '2091',
          gitSignature: 'tester2091@github.com',
        },
      ];
      resolve(users);
    });
  }
}
