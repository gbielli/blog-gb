/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    SERVER: process.env.SERVER,
  },
}