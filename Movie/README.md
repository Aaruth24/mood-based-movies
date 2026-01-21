# MoodFlix - Movie Recommendation Website

A beautiful, aesthetic movie recommendation website that suggests movies based on your current mood.

## Features

- 🎭 Mood-based movie recommendations
- 🎬 Beautiful cinematic UI design
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🎨 Modern dark theme with gradient accents
- 🔍 Powered by TMDb API

## Setup Instructions

### 1. Get TMDb API Key

1. Visit [TMDb Website](https://www.themoviedb.org/)
2. Create a free account
3. Go to Settings → API
4. Request an API key (it's free!)
5. Copy your API key

### 2. Configure the Project

1. Open `script.js`
2. Replace `YOUR_TMDB_API_KEY` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

### 3. Run the Project

Simply open `index.html` in your web browser:
- Double-click `index.html`, or
- Right-click → Open with → Your preferred browser

## Project Structure

```
Movie/
├── index.html      # Main HTML structure
├── style.css       # All styling and animations
├── script.js       # JavaScript logic and API calls
└── README.md       # This file
```

## How It Works

1. User lands on a beautiful hero page
2. Clicks "Explore Now" or scrolls to mood selection
3. Selects their current mood (Happy, Sad, Excited, etc.)
4. JavaScript fetches relevant movies from TMDb API based on mood-to-genre mapping
5. Movies are displayed in an aesthetic grid with posters, ratings, and descriptions
6. Users can click on movies to view more details on TMDb

## Mood to Genre Mapping

- **Happy** → Comedy, Family, Animation
- **Sad** → Drama, Music
- **Excited** → Action, Thriller, Adventure
- **Relaxed** → Animation, Fantasy, Family
- **Romantic** → Romance, Drama
- **Adventurous** → Adventure, Sci-Fi, Fantasy
- **Thrill-Seeking** → Horror, Mystery, Thriller
- **Thoughtful** → Documentary, History

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript
- TMDb API
- Google Fonts (Poppins)

## Customization

You can easily customize:
- Colors in `style.css` (`:root` variables)
- Mood-to-genre mappings in `script.js`
- Hero background image in `style.css` (`.hero-section`)
- Number of movies displayed (change `slice(0, 20)` in `script.js`)

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

Enjoy discovering movies based on your mood! 🎬✨
