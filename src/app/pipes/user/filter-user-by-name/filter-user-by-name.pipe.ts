import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../../../models/User';

@Pipe({
  name: 'filterUserByName'
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(users: User[], username?: string): User[] {
    return users.filter(user => user.name === username);
  }

}
