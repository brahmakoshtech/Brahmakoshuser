import { useState, useRef, useEffect } from 'react'
import { MapPin, Loader2 } from 'lucide-react'

function PlaceAutocomplete({ onPlaceSelect, value, onChange, placeholder = 'Enter place name' }) {
  const [suggestions, setSuggestions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef(null)
  const autocompleteService = useRef(null)
  const placesService = useRef(null)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    const initializeServices = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        try {
          if (!autocompleteService.current) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService()
          }
          if (!placesService.current) {
            placesService.current = new window.google.maps.places.PlacesService(
              document.createElement('div')
            )
          }
        } catch (error) {
          console.error('Error initializing Google Places services:', error)
        }
      }
    }

    // Try to initialize immediately if Google Maps is already loaded
    if (window.google && window.google.maps && window.google.maps.places) {
      initializeServices()
    } else if (apiKey) {
      // Check if script is already in the DOM
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]')
      
      if (existingScript) {
        // Script exists, check if it's loaded
        if (window.google && window.google.maps && window.google.maps.places) {
          // Already loaded, initialize
          initializeServices()
        } else {
          // Script is loading, wait for it
          const checkInterval = setInterval(() => {
            if (window.google && window.google.maps && window.google.maps.places) {
              clearInterval(checkInterval)
              initializeServices()
            }
          }, 100)
          
          // Clear interval after 10 seconds (timeout)
          setTimeout(() => {
            clearInterval(checkInterval)
          }, 10000)
        }
      } else {
        // Load Google Maps script
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
        script.async = true
        script.defer = true
        script.onload = () => {
          initializeServices()
        }
        script.onerror = () => {
          console.warn('Google Maps API failed to load. Place autocomplete will not work.')
        }
        document.head.appendChild(script)
      }
    } else {
      console.warn('Google Maps API Key not found. Place autocomplete will not work. Please add VITE_GOOGLE_MAPS_API_KEY to your .env file.')
    }

    // Also try to initialize on window load (in case script loads after component mounts)
    const handleWindowLoad = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        initializeServices()
      }
    }

    if (document.readyState === 'complete') {
      // Try after a small delay to ensure everything is ready
      setTimeout(handleWindowLoad, 100)
    } else {
      window.addEventListener('load', handleWindowLoad)
    }

    return () => {
      window.removeEventListener('load', handleWindowLoad)
    }
  }, [])

  const handleInputChange = async (e) => {
    const inputValue = e.target.value
    onChange(e)

    if (inputValue.length < 3) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    if (!autocompleteService.current) {
      return
    }

    setIsLoading(true)
    setShowSuggestions(true)

    try {
      autocompleteService.current.getPlacePredictions(
        {
          input: inputValue,
          types: ['(cities)'],
          componentRestrictions: { country: ['in', 'us', 'uk', 'au', 'ca'] }, // Common countries
        },
        (predictions, status) => {
          setIsLoading(false)
          if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
            setSuggestions(predictions)
          } else {
            setSuggestions([])
          }
        }
      )
    } catch (error) {
      console.error('Error fetching places:', error)
      setIsLoading(false)
      setSuggestions([])
    }
  }

  const handlePlaceSelect = (place) => {
    if (!placesService.current) return

    placesService.current.getDetails(
      {
        placeId: place.place_id,
        fields: ['geometry', 'formatted_address', 'name'],
      },
      (placeDetails, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && placeDetails) {
          const lat = placeDetails.geometry.location.lat()
          const lng = placeDetails.geometry.location.lng()
          
          onChange({
            target: {
              name: 'place',
              value: placeDetails.formatted_address || place.description,
            },
          })

          // Auto-fill coordinates
          if (onPlaceSelect) {
            onPlaceSelect({
              place: placeDetails.formatted_address || place.description,
              latitude: lat,
              longitude: lng,
            })
          }

          setShowSuggestions(false)
          setSuggestions([])
        }
      }
    )
  }

  const handleBlur = () => {
    // Delay to allow click on suggestion
    setTimeout(() => {
      setShowSuggestions(false)
    }, 200)
  }

  return (
    <div className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-600" size={16} />
        <input
          ref={inputRef}
          type="text"
          name="place"
          value={value}
          onChange={handleInputChange}
          onFocus={() => value.length >= 3 && setShowSuggestions(true)}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
          autoComplete="off"
        />
        {isLoading && (
          <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold-600 animate-spin" size={16} />
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-beige-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.place_id}
              type="button"
              onClick={() => handlePlaceSelect(suggestion)}
              className="w-full text-left px-4 py-3 hover:bg-beige-50 transition-colors border-b border-beige-100 last:border-b-0"
            >
              <div className="flex items-start space-x-2">
                <MapPin className="text-gold-600 flex-shrink-0 mt-0.5" size={16} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{suggestion.structured_formatting.main_text}</p>
                  <p className="text-sm text-gray-500 truncate">{suggestion.structured_formatting.secondary_text}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default PlaceAutocomplete

