"use client";

import React, { useState, useMemo } from "react";
import { individualServices, ServiceItem } from "@/data/individualServices";
import Button from "@/components/button/Button";
import { useModal } from "@/context/ModalContext";
import { Check, Minus, Plus, Trash2 } from "lucide-react";

export const PricingCalculator = () => {
  const { openMeetingModal } = useModal();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    Object.keys(individualServices)[0] || ""
  );
  
  // State to track quantities: { [serviceId]: quantity }
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  // Get available services for the selected category
  const categoryServices = useMemo(() => {
    if (!selectedCategory) return [];
    return individualServices[selectedCategory] || [];
  }, [selectedCategory]);

  const handleQuantityChange = (serviceId: string, delta: number) => {
    setQuantities((prev) => {
      const currentQty = prev[serviceId] || 0;
      const newQty = Math.max(0, currentQty + delta);
      
      if (newQty === 0) {
        const { [serviceId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [serviceId]: newQty };
    });
  };

  const calculateTotal = () => {
    let total = 0;
    Object.entries(individualServices).forEach(([category, services]) => {
      services.forEach((service) => {
        const qty = quantities[service.id] || 0;
        total += service.price * qty;
      });
    });
    return total;
  };

  const totalPrice = calculateTotal();

  // Get all selected services for summary
  const selectedServicesList = useMemo(() => {
    const selected: { service: ServiceItem; qty: number }[] = [];
    Object.values(individualServices).flat().forEach((service) => {
      if (quantities[service.id]) {
        selected.push({ service, qty: quantities[service.id] });
      }
    });
    return selected;
  }, [quantities]);

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Selection */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">
              1. Choose Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {Object.keys(individualServices).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    selectedCategory === category
                      ? "bg-black text-white border-black"
                      : "bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-4">
              2. Select Services
            </h3>
            <div className="space-y-4">
              {categoryServices.map((service) => {
                const qty = quantities[service.id] || 0;
                return (
                  <div
                    key={service.id}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      qty > 0
                        ? "border-yellow-500 bg-yellow-50/50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-black">{service.name}</h4>
                          {qty > 0 && <Check size={16} className="text-yellow-600" />}
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{service.description}</p>
                        <div className="text-sm font-semibold text-black">
                          ${service.price} <span className="text-gray-400 font-normal">/ {service.unit}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() => handleQuantityChange(service.id, -1)}
                          className={`p-1 rounded-md transition-colors ${
                            qty === 0 ? "text-gray-300 cursor-not-allowed" : "text-black hover:bg-white shadow-sm"
                          }`}
                          disabled={qty === 0}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-4 text-center font-bold text-black">{qty}</span>
                        <button
                          onClick={() => handleQuantityChange(service.id, 1)}
                          className="p-1 rounded-md text-black hover:bg-white shadow-sm transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Summary */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col h-full sticky top-8">
          <h3 className="text-2xl font-bold text-black mb-6">
            Estimated Cost
          </h3>
          
          {selectedServicesList.length > 0 ? (
            <div className="flex-grow flex flex-col">
              <div className="space-y-4 mb-6 flex-grow overflow-y-auto max-h-[400px] pr-2">
                {selectedServicesList.map(({ service, qty }) => (
                  <div key={service.id} className="flex justify-between items-start text-sm border-b border-gray-200 pb-3 last:border-0">
                    <div>
                      <div className="font-medium text-black">
                        {service.name} <span className="text-yellow-600">x{qty}</span>
                      </div>
                      <div className="text-gray-500 text-xs">{service.unit}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-black">${service.price * qty}</div>
                      <button 
                        onClick={() => handleQuantityChange(service.id, -qty)}
                        className="text-red-400 hover:text-red-600 text-xs mt-1 flex items-center justify-end gap-1 ml-auto"
                      >
                        <Trash2 size={12} /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 mt-auto border-t border-gray-200">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-gray-500 font-medium">Total Estimate</span>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-black">
                      ${totalPrice}
                    </span>
                  </div>
                </div>

                <Button
                  label="Schedule Consultation"
                  onClick={openMeetingModal}
                  className="w-full justify-center"
                  variant="primary"
                />
                <p className="text-center text-xs text-gray-400 mt-4">
                  *Final price may vary based on specific requirements.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <Plus size={32} className="text-gray-400" />
              </div>
              <p>Select services to see the estimate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
