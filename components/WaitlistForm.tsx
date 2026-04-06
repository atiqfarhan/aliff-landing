'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';

interface WaitlistFormData {
  name: string;
  email: string;
  location: string;
  struggle: string;
  consent: boolean;
}

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>();

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // ConvertKit API integration
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
        >
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-playfair font-bold mb-2">You're on the list!</h3>
          <p className="text-gray-700 font-montserrat">
            Thank you for joining the ALIFF waitlist. We'll contact you soon with beta access details.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 border border-aliff-sand rounded-lg focus:ring-2 focus:ring-aliff-gold focus:border-transparent outline-none transition-all font-montserrat"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 font-montserrat">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-4 py-3 border border-aliff-sand rounded-lg focus:ring-2 focus:ring-aliff-gold focus:border-transparent outline-none transition-all font-montserrat"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 font-montserrat">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
              Where are you based? *
            </label>
            <input
              type="text"
              id="location"
              {...register('location', { required: 'Location helps us provide relevant styling' })}
              className="w-full px-4 py-3 border border-aliff-sand rounded-lg focus:ring-2 focus:ring-aliff-gold focus:border-transparent outline-none transition-all font-montserrat"
              placeholder="City, Country"
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600 font-montserrat">{errors.location.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="struggle" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
              What is your biggest style struggle as a modest woman? *
            </label>
            <textarea
              id="struggle"
              rows={3}
              {...register('struggle', { 
                required: 'This helps us understand your needs better',
                minLength: {
                  value: 10,
                  message: 'Please share a bit more about your struggle'
                }
              })}
              className="w-full px-4 py-3 border border-aliff-sand rounded-lg focus:ring-2 focus:ring-aliff-gold focus:border-transparent outline-none transition-all font-montserrat resize-none"
              placeholder="e.g., Finding work-appropriate outfits that are still modest, coordinating hijab with outfits, dealing with decision fatigue every morning..."
            />
            {errors.struggle && (
              <p className="mt-1 text-sm text-red-600 font-montserrat">{errors.struggle.message}</p>
            )}
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="consent"
              {...register('consent', { required: 'You must agree to continue' })}
              className="mt-1 h-5 w-5 text-aliff-gold rounded border-aliff-sand focus:ring-aliff-gold focus:ring-2"
            />
            <label htmlFor="consent" className="text-sm text-gray-700 font-montserrat">
              I agree to receive updates about ALIFF's beta launch and styling tips. 
              I understand I can unsubscribe at any time. Your information is protected by our{' '}
              <a href="#" className="text-aliff-gold hover:underline">Privacy Policy</a>.
            </label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-600 font-montserrat">{errors.consent.message}</p>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 font-montserrat">{error}</p>
            </div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-aliff-gold text-white py-4 px-6 rounded-lg font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Joining waitlist...
              </span>
            ) : (
              'Join the ALIFF waitlist'
            )}
          </motion.button>

          <p className="text-xs text-gray-500 text-center font-montserrat">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      )}
    </div>
  );
}