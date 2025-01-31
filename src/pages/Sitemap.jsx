import React, { useEffect, useState } from 'react';
import axios from 'axios';
import conf from '../../conf/conf'; // Make sure to configure this with the correct URL.

const SitemapComponent = () => {
  const [sitemapData, setSitemapData] = useState(""); // To store the raw XML data
  const [loading, setLoading] = useState(true); // For showing loading state
  const [error, setError] = useState(null); // To handle errors

  // Automatically fetch the sitemap data on component mount
  useEffect(() => {
    const fetchDynamicRoutes = async () => {
      try {
        // Fetch the sitemap XML data from your backend (Laravel server)
        const { data } = await axios.get(`${conf.laravelBaseUrl}/api/sitemap.xml`);
        console.log("Sitemap XML data:", data);
        
        // Set the raw XML data to state
        setSitemapData(data);
      } catch (err) {
        console.error("Error fetching sitemap:", err);
        setError("Failed to fetch sitemap data.");
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    // Run the fetchDynamicRoutes function on component mount
    fetchDynamicRoutes();
  }, []); // The empty dependency array ensures this only runs once when the component mounts

  return (
    <div>

      {loading && <p>Loading...</p>} {/* Show loading state */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error state */}

      {/* Display the raw XML content if not loading and no error */}
      {!loading && !error && (
        <div>
          <pre className=' text-blue-950'>{sitemapData}</pre> {/* Display the raw XML content in a preformatted tag */}
        </div>
      )}
    </div>
  );
};

export default SitemapComponent;
