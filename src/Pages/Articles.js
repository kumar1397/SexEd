import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';

const articles = [
  'Understanding Consent',
  'Safe Sex Practices',
  'Contraception Methods',
  'STD Awareness',
  'Healthy Relationships',
  'LGBTQ+ Education',
  'Mental Health and Sexuality',
  'Body Positivity',
  'Communication Skills',
  'Sexual Orientation',
  'Gender Identity',
  'Puberty and Changes',
  'Menstrual Health',
  'Sexual Rights',
  'Sexual Myths',
  'Adult Toys',
  'Sexual Wellbeing',
  'Pornography and Its Effects',
  'Fertility Awareness',
  'Intimacy and Connection'
];

const Articles = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <motion.section
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl text-pink-600 font-bold mb-4">Articles</h2>
          <p className="text-gray-700">
            Discover our comprehensive articles on various sex education topics.
          </p>
        </motion.section>
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-pink-600 mb-4">{article}</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          ))}
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
