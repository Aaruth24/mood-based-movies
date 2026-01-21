// TMDb API Configuration
const API_KEY = 'AIzaSyCKWvfl2A5WAQQQzv28MJu5cScqEO8hF4A';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTdkYmQzYzMwNzQ2ZDY4NWIzNDJlMmQ2MmQ2M2QyNiIsIm5iZiI6MTc2NjY1NTI0MC44MzksInN1YiI6IjY5NGQwNTA4N2M2NmIyYjAwZGIxYmRlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WNOuu-aZQWdzzWHhVBIMhGc6gt5F0vsS2P9xXba0fms';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Fallback movie data for when API is unreachable
const FALLBACK_MOVIES = {
    happy: [
        { id: 508442, title: "Soul", vote_average: 8.1, release_date: "2020-12-25", overview: "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar.", poster_path: "/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg", popularity: 348.5 },
        { id: 508943, title: "Luca", vote_average: 7.8, release_date: "2021-06-17", overview: "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world.", poster_path: "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg", popularity: 298.4 },
        { id: 862552, title: "Elemental", vote_average: 7.7, release_date: "2023-06-14", overview: "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.", poster_path: "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg", popularity: 512.3 },
        { id: 550988, title: "Free Guy", vote_average: 7.5, release_date: "2021-08-11", overview: "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.", poster_path: "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg", popularity: 187.6 }
    ],
    sad: [
        { id: 278, title: "The Shawshank Redemption", vote_average: 8.7, release_date: "1994-09-23", overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison.", poster_path: "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg", popularity: 149.8 },
        { id: 324857, title: "Manchester by the Sea", vote_average: 7.6, release_date: "2016-11-18", overview: "After his older brother passes away, Lee Chandler is forced to return home to care for his 16-year-old nephew.", poster_path: "/e8daDzP0vFOnGyKmve95Yv0D0io.jpg", popularity: 42.3 },
        { id: 313369, title: "La La Land", vote_average: 7.9, release_date: "2016-11-29", overview: "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs.", poster_path: "/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", popularity: 98.7 }
    ],
    excited: [
        { id: 157336, title: "Interstellar", vote_average: 8.4, release_date: "2014-11-05", overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel.", poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", popularity: 287.6 },
        { id: 299536, title: "Avengers: Infinity War", vote_average: 8.3, release_date: "2018-04-25", overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged.", poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", popularity: 245.3 },
        { id: 27205, title: "Inception", vote_average: 8.4, release_date: "2010-07-15", overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life.", poster_path: "/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg", popularity: 198.4 },
        { id: 299534, title: "Avengers: Endgame", vote_average: 8.3, release_date: "2019-04-24", overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos.", poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg", popularity: 334.7 }
    ],
    relaxed: [
        { id: 129, title: "Spirited Away", vote_average: 8.5, release_date: "2001-07-20", overview: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.", poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", popularity: 142.8 },
        { id: 12477, title: "Grave of the Fireflies", vote_average: 8.5, release_date: "1988-04-16", overview: "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid.", poster_path: "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg", popularity: 0.053 },
        { id: 49521, title: "The Secret Life of Walter Mitty", vote_average: 7.6, release_date: "2013-12-18", overview: "A timid magazine photo manager who lives life vicariously through daydreams embarks on a true-life adventure when a negative goes missing.", poster_path: "/h1u8FJ6wz2ZaCvaH0kFDhQDukRo.jpg", popularity: 67.4 }
    ],
    romantic: [
        { id: 19404, title: "Dilwale Dulhania Le Jayenge", vote_average: 8.7, release_date: "1995-10-20", overview: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values.", poster_path: "/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg", popularity: 34.5 },
        { id: 11216, title: "Cinema Paradiso", vote_average: 8.4, release_date: "1988-11-17", overview: "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.", poster_path: "/gCI2AeMV4IHSewhJkzsur5MEp6R.jpg", popularity: 43.2 },
        { id: 194662, title: "Braveheart", vote_average: 7.9, release_date: "1995-05-24", overview: "Enraged at the slaughter of Murron, his new bride and childhood love, Scottish warrior William Wallace slays a platoon of the local English lord's soldiers.", poster_path: "/or1gBugydmjToAEq7OZY0owwFk.jpg", popularity: 89.4 }
    ],
    adventurous: [
        { id: 122, title: "The Lord of the Rings: The Return of the King", vote_average: 8.5, release_date: "2003-12-01", overview: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor.", poster_path: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg", popularity: 167.9 },
        { id: 120, title: "The Lord of the Rings: The Fellowship of the Ring", vote_average: 8.4, release_date: "2001-12-18", overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator.", poster_path: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", popularity: 198.5 },
        { id: 767, title: "Harry Potter and the Half-Blood Prince", vote_average: 7.7, release_date: "2009-07-07", overview: "As Lord Voldemort tightens his grip on both the Muggle and wizarding worlds, Hogwarts is no longer a safe haven.", poster_path: "/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg", popularity: 156.2 }
    ],
    scared: [
        { id: 694, title: "The Shining", vote_average: 8.2, release_date: "1980-05-23", overview: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter.", poster_path: "/xazWoLealQwEgqZ89MLZklLZD3k.jpg", popularity: 87.4 },
        { id: 539, title: "Psycho", vote_average: 8.4, release_date: "1960-06-22", overview: "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel.", poster_path: "/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg", popularity: 76.8 },
        { id: 346364, title: "It", vote_average: 7.2, release_date: "2017-09-05", overview: "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.", poster_path: "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg", popularity: 198.6 }
    ],
    thoughtful: [
        { id: 13, title: "Forrest Gump", vote_average: 8.5, release_date: "1994-06-23", overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do.", poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", popularity: 134.7 },
        { id: 680, title: "Pulp Fiction", vote_average: 8.5, release_date: "1994-09-10", overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper.", poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", popularity: 156.9 },
        { id: 424, title: "Schindler's List", vote_average: 8.6, release_date: "1993-12-15", overview: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.", poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg", popularity: 98.5 }
    ]
};

let USE_FALLBACK = false;

// Mood to Genre Mapping (TMDb Genre IDs)
const moodGenres = {
    happy: {
        genres: [35, 10751, 16], // Comedy, Family, Animation
        keywords: 'feel good|uplifting|heartwarming',
        sort: 'vote_average.desc',
        minVote: 7.0
    },
    sad: {
        genres: [18], // Drama
        keywords: 'emotional|tragedy|tear jerker|melancholy',
        sort: 'vote_average.desc',
        minVote: 7.5
    },
    excited: {
        genres: [28, 53, 12], // Action, Thriller, Adventure
        keywords: 'action packed|intense|adrenaline|explosive',
        sort: 'popularity.desc',
        minVote: 6.5
    },
    relaxed: {
        genres: [16, 14, 10751], // Animation, Fantasy, Family
        keywords: 'peaceful|calming|whimsical|magical',
        sort: 'vote_average.desc',
        minVote: 7.0
    },
    romantic: {
        genres: [10749, 18], // Romance, Drama
        keywords: 'love story|romance|relationship|heartfelt',
        sort: 'vote_average.desc',
        minVote: 7.0
    },
    adventurous: {
        genres: [12, 878, 14], // Adventure, Sci-Fi, Fantasy
        keywords: 'adventure|exploration|epic|journey',
        sort: 'popularity.desc',
        minVote: 7.0
    },
    scared: {
        genres: [27, 9648, 53], // Horror, Mystery, Thriller
        keywords: 'horror|scary|suspense|psychological',
        sort: 'vote_average.desc',
        minVote: 6.5
    },
    thoughtful: {
        genres: [99, 18, 36], // Documentary, Drama, History
        keywords: 'thought provoking|intellectual|philosophical|cerebral',
        sort: 'vote_average.desc',
        minVote: 7.5
    }
};

// Initialize Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const moodCards = document.querySelectorAll('.mood-card');
    
    moodCards.forEach(card => {
        card.addEventListener('click', () => {
            const mood = card.dataset.mood;
            handleMoodSelection(mood);
        });
    });
});

// Smooth scroll to mood section
function scrollToMoods() {
    document.getElementById('moods').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Handle mood selection
function handleMoodSelection(mood) {
    const moviesSection = document.getElementById('moviesSection');
    const loading = document.getElementById('loading');
    const moviesGrid = document.getElementById('moviesGrid');
    
    // Show movies section
    moviesSection.style.display = 'block';
    loading.style.display = 'block';
    moviesGrid.innerHTML = '';
    
    // Scroll to movies section
    moviesSection.scrollIntoView({ behavior: 'smooth' });
    
    // Fetch movies based on mood
    fetchMoviesByMood(mood);
}

// Fetch movies from TMDb API using Bearer Token
async function fetchMoviesByMood(mood) {
    const moodConfig = moodGenres[mood];
    let movies = [];
    
    // If already using fallback, skip API call
    if (USE_FALLBACK) {
        console.log('📦 Using offline movie database');
        displayMovies(FALLBACK_MOVIES[mood] || FALLBACK_MOVIES.happy);
        return;
    }
    
    try {
        // Try to fetch from API with short timeout
        const genreString = moodConfig.genres.join(',');
        const discoverUrl = `${BASE_URL}/discover/movie?with_genres=${genreString}&sort_by=${moodConfig.sort}&page=1&include_adult=false&language=en-US&with_original_language=ta|en`;
        
        console.log('🌐 Attempting API fetch...');
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const response = await fetch(discoverUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`API returned status ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ API fetch successful!');
        
        if (data.results && data.results.length > 0) {
            movies = data.results.filter(movie => 
                movie.poster_path && 
                movie.vote_average >= (moodConfig.minVote - 1.5) && 
                movie.vote_count >= 20
            );
            
            // Try to fetch page 2
            try {
                const page2Url = `${BASE_URL}/discover/movie?with_genres=${genreString}&sort_by=${moodConfig.sort}&page=2&include_adult=false&language=en-US&with_original_language=ta|en`;
                const page2Response = await fetch(page2Url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${API_TOKEN}`,
                        'Content-Type': 'application/json'
                    }
                });
                
                if (page2Response.ok) {
                    const page2Data = await page2Response.json();
                    if (page2Data.results) {
                        const additionalMovies = page2Data.results.filter(movie => 
                            movie.poster_path && 
                            movie.vote_average >= (moodConfig.minVote - 1.5) &&
                            movie.vote_count >= 20
                        );
                        movies = [...movies, ...additionalMovies];
                    }
                }
            } catch (err) {
                console.log('Page 2 skipped');
            }
        }
        
        if (movies.length === 0) {
            throw new Error('No movies found');
        }
        
        // Remove duplicates and sort
        const uniqueMovies = [];
        const seenIds = new Set();
        movies.forEach(movie => {
            if (!seenIds.has(movie.id)) {
                seenIds.add(movie.id);
                uniqueMovies.push(movie);
            }
        });
        
        uniqueMovies.sort((a, b) => {
            const scoreA = (a.vote_average * 0.6) + (Math.log(a.popularity + 1) * 0.4);
            const scoreB = (b.vote_average * 0.6) + (Math.log(b.popularity + 1) * 0.4);
            return scoreB - scoreA;
        });
        
        console.log(`✅ Displaying ${uniqueMovies.length} movies`);
        displayMovies(uniqueMovies);
        
    } catch (error) {
        console.log('❌ API failed:', error.message);
        console.log('📦 Switching to offline mode...');
        
        // Switch to fallback mode
        USE_FALLBACK = true;
        
        // Show notification
        const loading = document.getElementById('loading');
        loading.innerHTML = `
            <div style="color: var(--text-secondary); padding: 2rem; text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📦</div>
                <h3 style="color: #43e97b; margin-bottom: 1rem;">Loading Offline Movie Database...</h3>
                <p style="color: #888;">Using cached movie data</p>
            </div>
        `;
        
        // Display fallback movies after short delay
        setTimeout(() => {
            const fallbackMovies = FALLBACK_MOVIES[mood] || FALLBACK_MOVIES.happy;
            displayMovies(fallbackMovies);
            
            // Show offline indicator
            showOfflineNotification();
        }, 800);
    }
}

// Show offline mode notification
function showOfflineNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(67, 233, 123, 0.95);
        backdrop-filter: blur(10px);
        color: #000;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 1000;
        font-weight: 600;
        animation: slideIn 0.5s ease-out;
    `;
    notification.innerHTML = '📦 Offline Mode - Using cached movies';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Display movies in grid
function displayMovies(movies) {
    const loading = document.getElementById('loading');
    const moviesGrid = document.getElementById('moviesGrid');
    
    loading.style.display = 'none';
    
    if (movies.length === 0) {
        moviesGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No movies found.</p>';
        return;
    }
    
    // Display up to 10 movies
    movies.slice(0, 10).forEach((movie, index) => {
        const movieCard = createMovieCard(movie, index);
        moviesGrid.appendChild(movieCard);
    });
}

// Create individual movie card
function createMovieCard(movie, index) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.animationDelay = `${index * 0.05}s`;
    
    const posterPath = movie.poster_path 
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : 'https://via.placeholder.com/500x750/1a1a1a/666?text=No+Poster';
    
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
    const year = movie.release_date ? movie.release_date.split('-')[0] : 'TBA';
    const overview = movie.overview || 'No description available.';
    
    card.innerHTML = `
        <img src="${posterPath}" 
             alt="${movie.title}" 
             class="movie-poster"
             loading="lazy"
             onerror="this.src='https://via.placeholder.com/500x750/1a1a1a/666?text=No+Poster'">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span class="movie-rating">⭐ ${rating}</span>
                <span class="movie-year">${year}</span>
            </div>
            <p class="movie-overview">${overview}</p>
        </div>
    `;
    
    // Add click event for movie details
    card.addEventListener('click', () => {
        showMovieDetails(movie);
    });
    
    return card;
}

// Show movie details
function showMovieDetails(movie) {
    if (movie.id) {
        // Open TMDb movie page
        const tmdbUrl = `https://www.themoviedb.org/movie/${movie.id}`;
        window.open(tmdbUrl, '_blank');
    }
}

// Reset selection and go back to mood selection
function resetSelection() {
    const moviesSection = document.getElementById('moviesSection');
    moviesSection.style.display = 'none';
    
    document.getElementById('moods').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Add smooth scroll behavior for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
