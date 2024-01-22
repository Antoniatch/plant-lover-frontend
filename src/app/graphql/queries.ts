import { gql } from 'apollo-angular';

export const GET_ALL_PLANTS = gql`
  query GetAllPlants {
    getAllPlants {
      id
      name
      category
      familyId
      image
      environment
      exposure
      minTemperature
      maxTemperature
      repotting
      watering
      mixes {
        id
        substrates
      }
    }
  }
`;
