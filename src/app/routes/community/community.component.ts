import { Component, OnInit, inject } from '@angular/core';
import { IUser } from '../../types/interfaces';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { GET_ALL_USERS } from '../../graphql/queries';
import { ApolloQueryResult } from '@apollo/client';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-community',
  standalone: true,
  templateUrl: './community.component.html',
  styleUrl: './community.component.sass',
  imports: [CardComponent],
})
export class CommunityComponent implements OnInit {
  users!: IUser[];

  getAllUsersSubscription!: Subscription;

  apollo = inject(Apollo);

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_ALL_USERS,
      })
      .valueChanges.subscribe(({ data }: ApolloQueryResult<any>) => {
        if (data) this.users = data.getAllUsers;
      });
  }
}
