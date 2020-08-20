import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'patison',
      email: 'mes@couilles.com',
      drinkPreference: 'coca',
      hobbies: [
        'code',
        'cafe'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUser(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUser();
  }
}
