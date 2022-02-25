import { createContext, useState } from "react";
import { languages } from "./language";
const LanguageContext = createContext();
const LanguageProvider = ({children}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('tr');
  const language = languages[selectedLanguage]
  return ( 
    <LanguageContext.Provider value={{
      language,
      selectedLanguage,
      setSelectedLanguage
    }}>
      {children}
    </LanguageContext.Provider>
   );
}
 
export {LanguageProvider, LanguageContext};