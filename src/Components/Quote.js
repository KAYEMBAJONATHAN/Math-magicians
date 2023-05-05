import { useEffect, useState } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getError, setGetError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const request = await fetch('https://api.api-ninjas.com/v1/quotes?category=love', {
          method: 'GET',
          headers: {
            'X-Api-Key': '1KWp2HyydzOw2UERJZIuWQ==esZ4jzvS0LoNo7Ml',
            'Content-Type': 'application/json',
          },
        });

        const data = await request.json();
        setData(data[0].quote);
        setLoading(false);
      } catch (error) {
        setGetError(error);
      }
    };
    fetchData();
  }, [setData, setLoading]);

  if (getError) {
    return (
      <div className="quote-container">
        Error!!! Something went wrong
      </div>
    );
  }

  if (loading) return <div className="Data-container">Loading...</div>;

  return (
    <div className="Header-container">
      {data}
    </div>
  );
}

export default Quote;
