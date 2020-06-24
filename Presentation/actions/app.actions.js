import ACTION_TYPES from "./action-types";
import ShortId from "shortid";
import * as fetch from "../../Infrastructure/fetch.client";

export const bustCache = () => ({
  type: ACTION_TYPES.BUST_CACHE,
  cacheBuster: ShortId(),
});

export const updateUser = (user) => ({
  type: ACTION_TYPES.UPDATE_USER,
  user,
});
