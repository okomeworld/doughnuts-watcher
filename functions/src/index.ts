import * as functions from 'firebase-functions';
import { expressReceiver } from './slack/app';

export const slack = functions.https.onRequest(expressReceiver.app);