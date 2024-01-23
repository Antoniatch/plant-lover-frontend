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

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      email
      name
      birthday
    }
  }
`;

export const GET_ALL_HELP_CENTER_OBSERVATIONS = gql`
  query GetAllHelpCenterObservations {
    getAllHelpCenterObservations {
      id
      image
      description
      date
    }
  }
`;
