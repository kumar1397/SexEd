import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const PadSelector = () => {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState('');
  const [flowType, setFlowType] = useState('');
  const [preferences, setPreferences] = useState({
    wings: false,
    scented: false,
    reusable: false,
  });
  const [suggestedPad, setSuggestedPad] = useState('');

  const handleAgeChange = (e) => setAge(e.target.value);
  const handleFlowTypeChange = (e) => setFlowType(e.target.value);
  const handlePreferenceChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.checked,
    });
  };

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to suggest pad based on user input
    let suggestion = 'Regular Pad';
    if (flowType === 'heavy') suggestion = 'Maxi Pad';
    if (preferences.reusable) suggestion = 'Cloth Pad';

    setSuggestedPad(suggestion);
    handleNextStep();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <h2 className="text-3xl text-pink-600 font-bold mb-4 text-center">Pad Selector</h2>
        <p className="text-gray-700 text-center mb-8">Find the right type and size of pad for your needs.</p>
        
        {step === 1 && (
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Age</label>
              <input 
                type="number" 
                value={age} 
                onChange={handleAgeChange} 
                className="w-full px-3 py-2 border rounded-md" 
                required 
              />
            </div>
            <button onClick={handleNextStep} className="bg-pink-600 text-white px-4 py-2 rounded-md">Next</button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Flow Type</label>
              <select 
                value={flowType} 
                onChange={handleFlowTypeChange} 
                className="w-full px-3 py-2 border rounded-md" 
                required
              >
                <option value="">Select flow type</option>
                <option value="light">Light</option>
                <option value="moderate">Moderate</option>
                <option value="heavy">Heavy</option>
                <option value="veryHeavy">Very Heavy</option>
              </select>
            </div>
            <button onClick={handlePreviousStep} className="bg-gray-600 text-white px-4 py-2 rounded-md mr-2">Back</button>
            <button onClick={handleNextStep} className="bg-pink-600 text-white px-4 py-2 rounded-md">Next</button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Preferences</label>
              <div className="flex items-center mb-2">
                <input 
                  type="checkbox" 
                  name="wings" 
                  checked={preferences.wings} 
                  onChange={handlePreferenceChange} 
                  className="mr-2" 
                />
                <label>Wings</label>
              </div>
              <div className="flex items-center mb-2">
                <input 
                  type="checkbox" 
                  name="scented" 
                  checked={preferences.scented} 
                  onChange={handlePreferenceChange} 
                  className="mr-2" 
                />
                <label>Scented</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  name="reusable" 
                  checked={preferences.reusable} 
                  onChange={handlePreferenceChange} 
                  className="mr-2" 
                />
                <label>Reusable</label>
              </div>
            </div>
            <button onClick={handlePreviousStep} className="bg-gray-600 text-white px-4 py-2 rounded-md mr-2">Back</button>
            <button onClick={handleSubmit} className="bg-pink-600 text-white px-4 py-2 rounded-md">Submit</button>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">Suggested Pad</h3>
            <p className="text-gray-700">{suggestedPad}</p>
            <button onClick={() => setStep(1)} className="bg-pink-600 text-white px-4 py-2 rounded-md mt-4">Start Over</button>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PadSelector;
