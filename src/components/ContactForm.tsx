import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current!,
        'YOUR_PUBLIC_KEY'
      );

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
      {submitSuccess && (
        <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
          Your message was sent.
        </div>
      )}
      
      {submitError && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
          {submitError}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
          />
        </div>
      </div>
      
      <div className="mb-8">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
        />
      </div>
      
      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
        />
      </div>

      <input type="hidden" name="to_email" value="stephenlevin@gmail.com" />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center w-full px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors disabled:opacity-70"
      >
        {isSubmitting ? (
          <>Processing<span className="ml-2 animate-pulse">...</span></>
        ) : (
          <>Send Message <Send size={18} className="ml-2" /></>
        )}
      </button>
    </form>
  );
};

export default ContactForm;