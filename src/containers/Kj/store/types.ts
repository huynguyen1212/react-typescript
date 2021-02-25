/*
*
* Kj types
* make by phamthainb
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface KjStore {}

export type ActionsKj = ActionType<typeof actions>;