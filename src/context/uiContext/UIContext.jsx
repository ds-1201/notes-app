import { createContext, useContext, useReducer, useEffect } from "react";

const initialState = {
  isSidebarOpen: false,
  isModalOpen: false,
};

const UIContext = createContext(initialState);

export const useUI = () => {
  return useContext(UIContext);
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "OPEN_SIDEBAR":
        return {
          ...state,
          isSidebarOpen: true,
        };
      case "CLOSE_SIDEBAR":
        return {
          ...state,
          isSidebarOpen: false,
        };
      case "OPEN_MODAL":
        return {
          ...state,
          isModalOpen: true,
        };
      case "CLOSE_MODAL":
        return {
          ...state,
          isModalOpen: false,
        };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    localStorage.setItem("isSidebarOpen", state.isSidebarOpen);
    localStorage.setItem("isModalOpen", state.isModalOpen);
  }, [state.isSidebarOpen, state.isModalOpen]);

  return (
    <UIContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
