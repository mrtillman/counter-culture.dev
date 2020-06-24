import ImageShortageError from "../Domain/image-shortage.error";
import { NoImages, SingleImage } from "../Domain/error-code";
import { isJson } from "../Common/helpers";
import SERVERS from "../Common/servers";

export const signOut = () => {
  return new Promise((resolve, reject) => {
    fetch(`${SERVERS.APP}/home/sign-out`, {
      method: "post",
      mode: "cors",
      cache: "no-cache",
    }).then((res) => {
      if (res.ok) {
        const secureSignOutUri = `${
          SERVERS.SECURE
        }/account/logout?redirect_uri=${encodeURIComponent(SERVERS.APP)}`;
        resolve(secureSignOutUri);
      } else {
        reject(res.statusText);
      }
    });
  });
};
