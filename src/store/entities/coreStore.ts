import { WithHeaderState } from './header';
import { WithNewsState } from './news';

export interface StoreState extends WithHeaderState, WithNewsState {}
