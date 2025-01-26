import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <section className="text-center mb-8">
          <h2 className="text-3xl text-pink-600 font-bold mb-4">Welcome to SexEd</h2>
          <p className="text-gray-700">Your one-stop solution for all sexual queries and exploring things you may never know.</p>
        </section>
        <section className="cards-container">
          <motion.div 
            className="card-wrapper"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <Card 
              title="Educational Articles"
              description="Explore our collection of well-researched articles on various sex education topics."
              link="/articles"
            />
          </motion.div>
          <motion.div 
            className="card-wrapper"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <Card 
              title="FAQs"
              description="Get answers to frequently asked questions about sex and relationships."
              link="/faq"
            />
          </motion.div>
          <motion.div 
            className="card-wrapper"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <Card 
              title="Expert Advice"
              description="Submit your queries and get answers from certified sex educators."
              link="/contact"
            />
          </motion.div>
          <motion.div 
            className="card-wrapper"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <Card 
              title="Pad Selector"
              description="Find the right type and size of pad for your needs."
              link="/pad-selector"
            />
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
