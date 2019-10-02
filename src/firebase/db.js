import { App } from './app';
import 'firebase/firestore';

const database = App.firestore();


export const DB = database;
