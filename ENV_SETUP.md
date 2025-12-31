# Environment Variables Setup

Create a `.env` file in the root directory with the following variables:

```
VITE_USER_ID=<Your User Id>
VITE_API_KEY=<Your Api Key>
VITE_BASE_URL=https://json.astrologyapi.com/v1/
VITE_GOOGLE_MAPS_API_KEY=<Your Google Maps API Key>
```

## Required Variables:

### VITE_USER_ID
- **Description**: Your Astrology API User ID
- **Example**: `123456`
- **Required**: Yes
- **Where to get**: From your Astrology API account dashboard

### VITE_API_KEY
- **Description**: Your Astrology API Key
- **Example**: `abc123xyz789`
- **Required**: Yes
- **Where to get**: From your Astrology API account dashboard

### VITE_BASE_URL
- **Description**: Base URL for Astrology API
- **Default**: `https://json.astrologyapi.com/v1/`
- **Required**: Yes (but has default value)
- **Note**: Usually you don't need to change this

### VITE_GOOGLE_MAPS_API_KEY
- **Description**: Google Maps API Key for Places Autocomplete
- **Example**: `AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- **Required**: Yes (for automatic place search and coordinate fetching)
- **Where to get**: 
  1. Go to [Google Cloud Console](https://console.cloud.google.com/)
  2. Create a new project or select an existing one
  3. Enable "Places API" and "Maps JavaScript API"
  4. Create credentials (API Key)
  5. Copy the API key to your `.env` file
- **Note**: Without this key, users can still manually enter coordinates, but place autocomplete won't work

## Steps:

1. Create a new `.env` file in the root directory
2. Copy the template above
3. Replace `<Your User Id>` with your actual User ID
4. Replace `<Your Api Key>` with your actual API Key
5. Replace `<Your Google Maps API Key>` with your Google Maps API Key
6. The base URL is already set correctly (optional to change)

## Example .env file:

```
VITE_USER_ID=123456
VITE_API_KEY=abc123xyz789abcdef
VITE_BASE_URL=https://json.astrologyapi.com/v1/
VITE_GOOGLE_MAPS_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Important Notes:

- These variables are accessed via `import.meta.env.VITE_*` in the code
- **Never commit the `.env` file to version control** (it's in .gitignore)
- The `.env.example` file is safe to commit as it contains placeholder values
- After updating `.env`, restart your development server (`npm run dev`)
- All API calls use Basic Authentication with `userId:apiKey` encoded in base64
- Language support: All APIs support multiple languages via `Accept-Language` header
  - Supported: en, hi, ma, bn, ta, te, ml, kn
- Google Maps API: Used for automatic place search. If not provided, users can manually enter coordinates.

## Language Codes:

- `en` - English
- `hi` - Hindi
- `ma` - Marathi
- `bn` - Bengali
- `ta` - Tamil
- `te` - Telugu
- `ml` - Malayalam
- `kn` - Kannada
