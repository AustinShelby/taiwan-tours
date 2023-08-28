import { draftMode } from "next/headers";

let enableCaching: boolean = true;

export const setEnableCaching = (value: boolean): void => {
  enableCaching = value;
};

export const curryFetch = (
  ...[input, init]: Parameters<typeof fetch>
): ReturnType<typeof fetch> => {
  // TODO: This throws when searching for all
  if (enableCaching) {
    const { isEnabled } = draftMode();
    // const isEnabled = true;
    console.log(
      `Using custom fetch with cache ${isEnabled ? "DISABLED" : "ENABLED"}`
    );
    return fetch(
      input,
      Object.assign({}, init, { cache: isEnabled ? "no-store" : "force-cache" })
      // Object.assign({}, init, { cache: isEnabled ? "no-store" : "force-cache" })
    );
  } else {
    return fetch(input, init);
  }
};
