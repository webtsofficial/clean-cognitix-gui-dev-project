import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../../../models/User';

@Pipe({
  name: 'filterUserByName'
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(users: User[], username?: string): User[] {
      if (!users) { return []; }
      if (!username) { return users; }
      username = username.toLowerCase();
      return users.filter(user => {
          return user.name.toLowerCase().includes(username);
      });
  }

}
