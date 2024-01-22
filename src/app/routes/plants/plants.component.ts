import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

const GET_ALL_LIKES = gql`
  query getAllAuthorLikes($userId: String!, $authorId: String!) {
    getAllAuthorLikes(userId: $userId, authorId: $authorId) {
      id
      date
      authorId
      userId
    }
  }
`;
@Component({
  selector: 'routes-plants',
  standalone: true,
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.sass',
})
export class PlantComponent implements OnInit, OnDestroy {
  likes: any;

  private querySubscription!: Subscription;

  apollo = inject(Apollo);

  router = inject(Router);
  errorRedirection(message: string) {
    this.router.navigate(['/error', { message }]);
  }

  ngOnInit(): void {
    this.querySubscription = this.apollo
      .watchQuery({
        query: GET_ALL_LIKES,
        variables: {
          userId: '2595574b-0670-4528-b360-773663e28855',
          authorId: '2595574b-0670-4528-b360-773663e28855',
        },
      })
      .valueChanges.subscribe(({ data }: ApolloQueryResult<any>) => {
        if (data) this.likes = data.getAllAuthorLikes;
      });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
