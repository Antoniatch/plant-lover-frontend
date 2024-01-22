import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { GET_ALL_PLANTS } from '../../graphql/queries';
import { IPlant } from '../../types/interfaces';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'routes-plants',
  standalone: true,
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.sass',
  imports: [CardComponent],
})
export class PlantComponent implements OnInit, OnDestroy {
  plants!: IPlant[];

  apollo = inject(Apollo);

  private getAllPlantsSubscription!: Subscription;

  ngOnInit(): void {
    this.getAllPlantsSubscription = this.apollo
      .watchQuery({
        query: GET_ALL_PLANTS,
      })
      .valueChanges.subscribe(({ data }: ApolloQueryResult<any>) => {
        if (data) this.plants = data.getAllPlants;
      });
  }

  ngOnDestroy(): void {
    this.getAllPlantsSubscription.unsubscribe();
  }
}
