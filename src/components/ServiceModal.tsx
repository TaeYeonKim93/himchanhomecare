import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    content: {
      description: string;
      pricing?: {
        title: string;
        basePrice?: string;
        details: Array<{
          time?: string;
          type?: string;
          price: string;
          copay?: string;
        }>;
        note: string;
      };
      details: string[];
      requirements?: string[];
      process?: string[];
    };
  };
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 leading-relaxed tracking-wide">
                  {service.content.description}
                </p>
              </div>

              {service.content.pricing && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.content.pricing.title}
                  </h4>
                  <div className="space-y-2">
                    {service.content.pricing.details.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">
                          {item.time || item.type}
                        </span>
                        <div className="text-right">
                          <span className="font-medium text-gray-900">{item.price}</span>
                          {item.copay && (
                            <span className="text-sm text-gray-500 ml-2">
                              (본인부담금: {item.copay})
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-gray-500 whitespace-pre-line">
                    {service.content.pricing.note}
                  </p>
                </div>
              )}

              {service.content.details && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">서비스 내용</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {service.content.details.map((detail, index) => (
                      <li key={index} className="text-gray-600">{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {service.content.process && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">신청 절차</h4>
                  <ul className="list-none space-y-2">
                    {service.content.process.map((step, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        <span className="mr-2 font-medium">{index + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.content.requirements && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">신청 자격</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {service.content.requirements.map((req, index) => (
                      <li key={index} className="text-gray-600">{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}