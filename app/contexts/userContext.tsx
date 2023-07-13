import React, {createContext} from 'react';

// userContext.tsx
interface userContextData {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const UserContext = createContext<userContextData>({
  isActive: false,
  setIsActive: () => {},
});

export default UserContext;
