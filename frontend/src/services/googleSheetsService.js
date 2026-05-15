
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzXHmp7PyoUGbpPeKSxmn46e91adRkDKUPEqszf8mB642_YkticBQg2VHm9BW9JcuCu3Q/exec";

// Submit Review Form
export const submitReview = async (formData) => {
  const data = {
    type: 'review',
    name: formData.name,
    email: formData.email,
    company: formData.company || '',
    position: formData.position || '',
    rating: formData.rating,
    service: formData.service || 'General',
    review: formData.review
  };
  
  try {
    console.log('📤 Submitting review to Google Sheets...');
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    console.log('✅ Review submitted successfully!');
    console.log('📧 Check your email at rafayellmwong4325@gmail.com');
    console.log('📊 Check your Google Sheet for the new entry');
    
    return { success: true };
    
  } catch (error) {
    console.error('❌ Review submission error:', error);
    return { success: false, error: error.message };
  }
};



// Submit Contact Form
export const submitContact = async (formData) => {
  const data = {
    type: 'contact',
    fullname: formData.fullname,
    email: formData.email,
    phone: formData.phone || '',
    serviceInterest: formData.serviceInterest || 'General Inquiry',
    message: formData.message
  };
  
  try {
    console.log('📤 Submitting contact form to Google Sheets...');
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    console.log('✅ Contact form submitted successfully!');
    console.log('📧 Check your email at rafayellmwong4325@gmail.com');
    
    return { success: true };
    
  } catch (error) {
    console.error('❌ Contact submission error:', error);
    return { success: false, error: error.message };
  }
};

// Test function to verify connection
export const testConnection = async () => {
  console.log('🧪 Testing connection to Google Script...');
  console.log('📍 URL:', GOOGLE_SCRIPT_URL);
  
  const testData = {
    type: 'test',
    name: 'Connection Test',
    email: 'rafayellmwong4325@gmail.com',
    message: 'This is a test from the connection test function'
  };
  
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    console.log('✅ Connection test completed');
    return { success: true };
  } catch (error) {
    console.error('❌ Connection test failed:', error);
    return { success: false, error: error.message };
  }
};