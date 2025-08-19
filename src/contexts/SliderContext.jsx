import React, { createContext, useContext, useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
const SliderContext = createContext(undefined);


const SLIDES_COLLECTION = "slides";

const STORAGE_KEY = "slider-slides";

export const SliderProvider = ({ children }) => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSlides = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, SLIDES_COLLECTION));
      const fetchedSlides = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSlides(fetchedSlides);
    } catch (error) {
      console.error("Error fetching slides:", error);
    } finally {
      setLoading(false);
    }
  };

  const addSlide = async (slide) => {
    try {
      const docRef = await addDoc(collection(db, SLIDES_COLLECTION), slide);
      setSlides((prev) => [...prev, { id: docRef.id, ...slide }]);
    } catch (error) {
      console.error("Error adding slide:", error);
    }
  };

  const updateSlide = async (id, updatedSlide) => {
    try {
      const docRef = doc(db, SLIDES_COLLECTION, id);
      await updateDoc(docRef, updatedSlide);
      setSlides((prev) =>
        prev.map((s) => (s.id === id ? { ...s, ...updatedSlide } : s))
      );
    } catch (error) {
      console.error("Error updating slide:", error);
    }
  };

  const deleteSlide = async (id) => {
    try {
      const docRef = doc(db, SLIDES_COLLECTION, id);
      await deleteDoc(docRef);
      setSlides((prev) => prev.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Error deleting slide:", error);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  return (
    <SliderContext.Provider
      value={{
        slides,
        loading,
        addSlide,
        updateSlide,
        deleteSlide,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => {
  const context = useContext(SliderContext);
  if (context === undefined) {
    throw new Error("useSlider must be used within a SliderProvider");
  }
  return context;
};


