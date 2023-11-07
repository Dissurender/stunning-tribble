import { extname, join, normalize, resolve } from "path";

export const sanatizeURL = (url) => {
  // check and save the extension of url
  // else find file
  const extension = extname(url).slice(1);
  const safeURL = url;

  return { safeURL, extension };
};

export const isSafeFile = (filePath, rootDir) => {
  return filePath.startsWith(rootDir);
};
