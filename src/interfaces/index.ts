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

export interface ISubscriptionOutput {
  id: string;
  name: string;
  email: string;
}

export interface ILoginMessage {
  type: 'success' | 'error';
  message: string;
}
