import Promise from "promise";
import * as api from "../middleware/stakepoolapi";

export const getPurchaseInfo = (poolHost, apiKey) =>
  new Promise((resolve, reject) =>
    api.getPurchaseInfo(poolHost, apiKey, (response, error, poolHost) =>
      error ? reject(error) : resolve({ response, poolHost })));

export const setStakePoolAddress = (poolHost, apiKey, addressPubKey) =>
  new Promise((resolve, reject) =>
    api.setStakePoolAddress(
      poolHost, apiKey, addressPubKey,
      (response, error) => error ? reject(error) : resolve(response)
    ));

export const setVoteChoices = (poolHost, apiKey, voteBits) =>
  new Promise((resolve, reject) =>
    api.setVoteChoices(
      poolHost, apiKey, voteBits,
      (response, error) => error ? reject(error) : resolve(response)
    ));
