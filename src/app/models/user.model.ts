import { NewUser } from './new-user.model';

export class User {
  id: number;
  registrationDate: Date;
  lastActive: Date;
  jobsAvaliable: number;
  candidatesViewed: number;
  candidatesLiked: number;
  candidatesContacted: number;

  constructor(public firstName: string
    , public lastName: string
    , public company: string
    , public email: string) {
    const user: User = {
      id: null,
      firstName: firstName,
      lastName: lastName,
      company: company,
      email: email,
      registrationDate: new Date(),
      lastActive: new Date(),
      jobsAvaliable: 0,
      candidatesViewed: 0,
      candidatesLiked: 0,
      candidatesContacted: 0
    };
    return user;
  }
}
