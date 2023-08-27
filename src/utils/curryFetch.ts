import { draftMode } from "next/headers";

export const curryFetch = (
  ...[input, init]: Parameters<typeof fetch>
): ReturnType<typeof fetch> => {
  // TODO: This throws when searching for all
  // const { isEnabled } = draftMode();
  const isEnabled = true;
  console.log(
    `Using custom fetch with cache ${isEnabled ? "DISABLED" : "ENABLED"}`
  );
  return fetch(
    input,
    Object.assign({}, init, { cache: isEnabled ? "no-store" : "force-cache" })
  );
};
