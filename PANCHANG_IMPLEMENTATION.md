# Panchang APIs Implementation Guide

## Overview
All Panchang APIs have been implemented with language support and proper error handling.

## Implemented APIs

### 1. Advanced Panchang (`advanced_panchang`)
- **Endpoint**: `advanced_panchang`
- **View Component**: `AdvancedPanchangView.jsx`
- **Features**: Complete Panchang with tithi, nakshatra, yog, karan, timings

### 2. Advanced Panchang Sunrise (`advanced_panchang/sunrise`)
- **Endpoint**: `advanced_panchang/sunrise`
- **View Component**: `AdvancedPanchangView.jsx`
- **Features**: Panchang calculated for sunrise time

### 3. Chaughadiya Muhurta (`chaughadiya_muhurta`)
- **Endpoint**: `chaughadiya_muhurta`
- **View Component**: `ChaughadiyaView.jsx`
- **Features**: Day and night muhurta timings with color coding

### 4. Hora Muhurta (`hora_muhurta`)
- **Endpoint**: `hora_muhurta`
- **View Component**: `HoraView.jsx`
- **Features**: Planetary hours for day and night

### 5. Hora Muhurta Dinman (`hora_muhurta_dinman`)
- **Endpoint**: `hora_muhurta_dinman`
- **View Component**: `HoraView.jsx`
- **Features**: 24-hour Hora Muhurta system

### 6. Panchang Chart (`panchang_chart`)
- **Endpoint**: `panchang_chart`
- **View Component**: `PanchangChartView.jsx`
- **Features**: Astrological signs and planetary positions

### 7. Panchang Chart Sunrise (`panchang_chart/sunrise`)
- **Endpoint**: `panchang_chart/sunrise`
- **View Component**: `PanchangChartView.jsx`
- **Features**: Chart at sunrise time

### 8. Tamil Month Panchang (`tamil_month_panchang`)
- **Endpoint**: `tamil_month_panchang`
- **View Component**: `MonthlyPanchangView.jsx`
- **Features**: Monthly Tamil calendar data

### 9. Tamil Panchang (`tamil_panchang`)
- **Endpoint**: `tamil_panchang`
- **View Component**: `AdvancedPanchangView.jsx`
- **Features**: Complete Tamil Panchang

### 10. Panchang Lagna Table (`panchang_lagna_table`)
- **Endpoint**: `panchang_lagna_table`
- **View Component**: `LagnaTableView.jsx`
- **Features**: Lagna timings table

### 11. Monthly Panchang (`monthly_panchang`)
- **Endpoint**: `monthly_panchang`
- **View Component**: `MonthlyPanchangView.jsx`
- **Features**: Complete month calendar

### 12. Panchang Festival (`panchang_festival`)
- **Endpoint**: `panchang_festival`
- **View Component**: `FestivalView.jsx`
- **Features**: Festival list for the period

## Language Support

All APIs support multiple languages via `Accept-Language` header:
- English (en)
- Hindi (hi)
- Marathi (ma)
- Bengali (bn)
- Tamil (ta)
- Telugu (te)
- Malayalam (ml)
- Kannada (kn)

## Components Structure

```
src/
├── services/
│   └── panchangApi.js          # API service functions
├── components/
│   └── panchang/
│       ├── PanchangForm.jsx    # Form with language selector
│       ├── AdvancedPanchangView.jsx
│       ├── ChaughadiyaView.jsx
│       ├── HoraView.jsx
│       ├── PanchangChartView.jsx
│       ├── MonthlyPanchangView.jsx
│       ├── FestivalView.jsx
│       └── LagnaTableView.jsx
├── pages/
│   └── Panchang.jsx            # Main Panchang page
└── data/
    └── panchangServices.js     # Service definitions
```

## Usage Flow

1. User visits `/panchang` page
2. Selects a Panchang service
3. Fills form with date, time, location
4. Selects language
5. Clicks "Get Panchang"
6. API call is made with proper authentication
7. Results displayed in appropriate view component

## API Authentication

All API calls use Basic Authentication:
- Header: `Authorization: Basic <base64(userId:apiKey)>`
- Language: `Accept-Language: <language_code>`
- Method: POST
- Content-Type: application/json

## Error Handling

- API errors are caught and displayed to user
- Checks for missing API credentials
- Validates form data before submission
- Shows loading states during API calls

## Navigation

- Home page → `/panchang` (via Panchang link)
- Kundli page → `/panchang` (for Panchang category services)
- Navbar → `/panchang` (direct link)


