import { draftMode } from "next/headers";

let enableCaching: boolean = true;

export const setEnableCaching = (value: boolean): void => {
  enableCaching = value;
};

export const curryFetch = (
  ...[input, init]: Parameters<typeof fetch>
): ReturnType<typeof fetch> => {
  if (enableCaching) {
    const { isEnabled } = draftMode();
    return fetch(
      input,
      Object.assign({}, init, { cache: isEnabled ? "no-cache" : undefined })
    );
  } else {
    enableCaching = true;
    return fetch(input, init);
  }
};
