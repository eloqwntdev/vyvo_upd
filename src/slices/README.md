# Prismic Slices

This directory contains all Slice components used in the Prismic CMS integration.

## What are Slices?

Slices are reusable content blocks that can be added to pages in Prismic CMS. They allow for flexible page composition by content editors.

## Structure

- `index.ts` - Exports all slice components
- `Sections/` - Contains the Sections slice which is used in News Posts

## Adding New Slices

When adding new slices:

1. Create a new directory for your slice
2. Implement your slice component
3. Export it in `index.ts`
4. Update the Prismic schema as needed

## Usage

Slices are used in page templates by mapping over the `slices` field from Prismic documents:

```jsx
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

const Page = ({ data }) => {
  return <SliceZone slices={data.slices} components={components} />;
};
```

## References

- [Prismic Slices Documentation](https://prismic.io/docs/slice)
