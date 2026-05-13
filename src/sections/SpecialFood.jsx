import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { foodMenu } from '../data/dummyData';
import { Star } from 'lucide-react';

const SpecialFood = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('menu.categories.all') },
    { id: 'veg', name: t('menu.categories.veg') },
    { id: 'nonveg', name: t('menu.categories.nonveg') },
    { id: 'thali', name: t('menu.categories.thali') },
  ];

  const filteredMenu = activeCategory === 'all' 
    ? foodMenu 
    : foodMenu.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary">
              {t('menu.title')}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg">
              {t('menu.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Food Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item[language].name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                    <Star size={12} fill="currentColor" /> {t('menu.popular')}
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className={`w-4 h-4 rounded-full inline-block border-2 border-white shadow-sm ${
                    item.category === 'veg' || item.category === 'thali' && item.id === 3 ? 'bg-green-500' : 'bg-red-500'
                  }`}></span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-heading text-primary mb-2 group-hover:text-accent transition-colors">
                  {item[language].name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item[language].desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecialFood;
