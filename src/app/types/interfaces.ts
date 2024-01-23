import { Category, Environment, Exposure, Substrate } from './enums';

// HERO

export interface IBullet {
  id: number;
  text: string;
}

export interface IHeroContent {
  id: number | null;
  title: string;
  subtitle?: string;
  bullets?: IBullet[];
}

// LOGIN

export interface ILoginOutput {
  accessToken: string;
  id: string;
  name: string;
}

export type LoginResponse = {
  login: ILoginOutput;
};

export interface ISubscriptionOutput {
  id: string;
  name: string;
  email: string;
}

export interface ILoginMessage {
  type: 'success' | 'error';
  message: string;
}

// MODEL

export interface IUser {
  id: string;
  email: string;
  name: string;
  birthday: Date;
  image?: string;
  numberOfPlants?: number;
  numberOfLikes?: number;
}

export interface IMix {
  id: string;
  substrates: Substrate[];
}

export interface ILike {
  id: string;
  date: Date;
  authorId: string;
  userId?: string;
  userPlantId?: string;
  plantId?: string;
  observationId?: string;
  commentId?: string;
}

export interface IComment {
  id: string;
  text: string;
  date: Date;
  authorId: string;
  likes?: ILike[];
  observationId?: string;
  userPlantId?: string;
  plantId?: string;
}

// export interface IShortUser {
//   id: string
//   name: string
// }

// export interface IShortUserPlant {
//   id: string
//   name: string
// }

export interface IHelpCenterObservation {
  id: string;
  // user: IShortUser
  // userPlant: IShortUserPlant
  date: Date;
  description: string;
  image?: string;
  // numberOfComments: number
  // numberOfLikes: number
}

export interface IObservation {
  id: string;
  userId: string;
  userPlantId: string;
  date: Date;
  description: string;
  image?: string;
  comments?: IComment[];
  likes?: ILike[];
  helpCenter?: boolean;
  public?: boolean;
}

export interface ISize {
  id: string;
  trackingSheetId: string;
  date: Date;
  size: number;
}

export interface ITrackingSheet {
  id: string;
  userId: string;
  userPlantId: string;
  public: boolean;
  sizes: ISize[];
  watering: Date[];
  repotting: Date[];
  pruning: Date[];
}

export interface IUserPlant {
  id: string;
  category: Category;
  plantId?: string;
  userId: string;
  mixId?: string;
  image?: string;
  nickname?: string;
  birthday?: Date;
  watering?: number;
  exposure?: Exposure;
  repotting?: number;
  environment?: Environment;
  observations: IObservation[];
  trackingSheet?: ITrackingSheet;
  comments?: IComment[];
  likes?: ILike[];
}

export interface IPlant {
  id: string;
  name: string;
  category: Category;
  familyId: string;
  image: string;
  environment: Environment;
  exposure: Exposure;
  minTemperature: number;
  maxTemperature: number;
  repotting: number;
  watering: number;
  mixes: IMix[];
  comments?: IComment[];
  likes?: ILike[];
  userPlants?: IUserPlant[];
}
