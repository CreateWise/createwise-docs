import { useMDXComponents as mdxComponents } from 'nextra-theme-docs' // nextra-theme-blog or your-custom-theme

// Get the default MDX components
const myComponents = mdxComponents()

// Merge components
export function useMDXComponents(components) {
  return {
    ...myComponents,
    ...components
  }
}