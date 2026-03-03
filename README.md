# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript
with type-aware lint rules enabled. Check out the
[TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
for information on how to integrate TypeScript and
[`typescript-eslint`](https://typescript-eslint.io) in your project.

## GoIT React HW-04: Image Search Application

This project is a React-based image search application developed for the GoIT
React HW-04 assignment. Users can search for images by entering keywords, view
results in a gallery, and open images in a modal for a larger view.

### Features

- **Search Bar:** Allows users to enter keywords and start an image search.
- **Image Gallery:** Displays search results as image cards.
- **Modal:** Opens a larger version of the image when a card is clicked.
- **Loader:** Shows a loading animation while fetching data from the API.
- **Load More Button:** Loads more images if available (pagination).
- **Error Message:** Displays an error message if something goes wrong during
  the search.

### Tech Stack

- React
- Vite
- CSS Modules

### Folder Structure

```
src/
  components/
	 ErrorMessage/
	 ImageCard/
	 ImageGallery/
	 ImageModal/
	 Loader/
	 LoadMoreBtn/
	 SearchBar/
```

Each component is located in its own folder with corresponding JS and CSS files.

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

### Notes

- Images are fetched from an external API. An API key may be required.
- The project is built using React functional components and hooks.

---

GoIT React HW-04
