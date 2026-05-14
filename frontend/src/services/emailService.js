// src/services/emailService.js
// Email handling is done through Google Apps Script
// This file serves as a bridge to trigger emails via your Google Sheets endpoint

// ============================================
// GOOGLE APPS SCRIPT CONFIGURATION
// Your Google Apps Script handles all email sending
// ============================================

// Use the same Google Script URL for both sheets and emails
// The Google Script automatically sends emails when data is received
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx2NThPlVL7QCNb5sx9v6I-W8KRwGeS-TJ3RqJOdl4tG5eF2Y38hBbr9736XaDge0tF/exec";

// Initialize (kept for compatibility)
export const initEmailJS = () => {
  console.log("📧 Email service ready - using Google Apps Script");
  console.log("📍 Google Script URL:", GOOGLE_SCRIPT_URL);
};

// Send email for contact form (via Google Apps Script)
export const sendContactEmail = async (formData) => {
  const data = {
    type: 'contact',
    fullname: formData.fullname,
    email: formData.email,
    phone: formData.phone || "Not provided",
    serviceInterest: formData.serviceInterest || "General inquiry",
    message: formData.message
  };
  
  try {
    // Send to Google Script which will handle email and sheet
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    console.log("✅ Contact form sent to Google Script");
    console.log("📧 Email will be sent to admin");
    return { success: true };
    
  } catch (error) {
    console.error("❌ Contact email error:", error);
    return { success: false, error };
  }
};

// Send email for review submission (via Google Apps Script)
export const sendReviewEmail = async (formData) => {
  const data = {
    type: 'review',
    name: formData.name,
    email: formData.email,
    company: formData.company || "Not provided",
    position: formData.position || "Not provided",
    rating: formData.rating,
    service: formData.service || "General",
    review: formData.review
  };
  
  try {
    // Send to Google Script which will handle email and sheet
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    console.log("✅ Review sent to Google Script");
    console.log("📧 Email will be sent to admin");
    return { success: true };
    
  } catch (error) {
    console.error("❌ Review email error:", error);
    return { success: false, error };
  }
};

// Send auto-reply to user (via Google Apps Script)
export const sendAutoReply = async (email, name, type = 'general') => {
  const data = {
    type: 'autoreply',
    to_email: email,
    to_name: name,
    form_type: type
  };
  
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    console.log(`✅ Auto-reply triggered for ${email}`);
    return { success: true };
    
  } catch (error) {
    console.log("⚠️ Auto-reply error (non-critical):", error);
    return { success: false, error };
  }
};