import { useState, useEffect } from 'react';

export function useFetch(url) {
   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
      if (!url) return;
      setIsLoading(true);

      //Une variante async/await
      async function getData() {
         try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
         } catch (error) {
            console.log(error);
            setError(true);
         } finally {
            setIsLoading(false);
         }
      }

      getData();

      //Une variante avec then()
      /**
      fetch(url)
         .then((response) => response.json())
         .then(({ surveyData }) => {
            setData(surveyData);
            setIsLoading(false);
         })
         .catch((error) => {
            console.log(error);
            setError(true);
         });
       */
   }, [url]);

   return { data, isLoading, error };
}
export function useTheme() {
   const [theme, setTheme] = useState('light');
   const toogleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
   };
   return { theme, toogleTheme };
}
