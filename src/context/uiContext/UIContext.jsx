import { createContext, useContext, useReducer, useEffect } from "react";

const initialState = {
  isSidebarOpen: false,
  isModalOpen: false,
  isMobile: false,
  isSmallDesktop: false,
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
      case "SET_IS_MOBILE":
        return {
          ...state,
          isMobile: action.payload,
        };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    localStorage.setItem("isSidebarOpen", state.isSidebarOpen);
    localStorage.setItem("isModalOpen", state.isModalOpen);
  }, [state.isSidebarOpen, state.isModalOpen]);

  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: "SET_IS_MOBILE", payload: window.innerWidth <= 768 });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
