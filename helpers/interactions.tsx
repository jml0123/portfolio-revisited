export const fetchRandomArtwork = async (setStateCallback: (data: any) => void) => {
    try {
      const response = await fetch('/api/getRandomArtwork');
      const data = await response.json();
      setStateCallback(data);
    } catch (error) {
      console.error('Error fetching random artwork:', error);
    }
  };
  