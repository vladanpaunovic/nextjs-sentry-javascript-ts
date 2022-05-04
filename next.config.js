const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const sentryWebpackPluginOptions = {
  silent: true,
};

const allPlugins = withPlugins([withOffline], nextConfig);

module.exports = withSentryConfig(allPlugins, sentryWebpackPluginOptions);
