import type { NextConfig } from "next";
import nextra from 'nextra'

const withNextra = nextra({
})

export default withNextra({
  assetPrefix: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://docs.createwise.ai',
})

