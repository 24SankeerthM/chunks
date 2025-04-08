// sendEmail.js
import emailjs from 'emailjs-com';

export const sendEmail = async (params) => {
  try {
    const response = await emailjs.send(
      'your_service_id',      // <-- Replace with your actual service ID
      'your_template_id',     // <-- Replace with your actual template ID
      {
        to_name: params.to_name,
        to_email: params.to_email,
        message: params.message,
        location_url: params.location_url,
      },
      'your_public_key'       // <-- Replace with your actual public key
    );
    console.log('✅ Email sent successfully:', response);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
};
