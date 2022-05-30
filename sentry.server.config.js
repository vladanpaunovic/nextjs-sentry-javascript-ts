// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://9e1798f5540a461bb8fcc59f7c0b1af2@o574491.ingest.sentry.io/6392564",
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  beforeSend(event) {
    console.log(event.exception.values);
    return event;
  },
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
