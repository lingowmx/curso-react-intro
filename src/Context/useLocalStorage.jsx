import { useEffect, useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }, 2000);
  }, []);


  const savedItem = (newItem) => {
    localStorage.setItem(itemName, JSON.
      stringify(newItem))
    setItem(newItem)
  }
  return {
    item,
    savedItem,
    loading,
    error
  }
}