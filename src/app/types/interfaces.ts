import { Category, Environment, Exposure, Substrate } from './enums';

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

export interface IObservation {
  id: string;
  userId: string;
  userPlantId: string;
  date: Date;
  description: string;
  image?: string;
  helpCenter: boolean;
  public: boolean;
  comments?: IComment[];
  likes?: ILike[];
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
