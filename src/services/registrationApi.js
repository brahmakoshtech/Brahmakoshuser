// Use proxy in development, or full URL in production
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || (import.meta.env.DEV ? '' : 'http://localhost:3001');

export const getRegistrationCount = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/registrations/count`);
    if (!response.ok) {
      throw new Error('Failed to fetch count');
    }
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error('Error fetching count:', error);
    // Return default count if API fails
    return 12478;
  }
};

export const registerEmail = async (email, platform = 'web') => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/registrations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, platform }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Registration failed' }));
      const error = new Error(errorData.error || 'Registration failed');
      // Add status code to error for handling
      error.status = response.status;
      throw error;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering email:', error);
    throw error;
  }
};

