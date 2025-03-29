'use client'

import { ToastContextType, ToastType } from "@/types/toast-types";
import { createContext, useContext } from "react";
import { toast, ToastContainer, ToastContainerProps, ToastOptions } from "react-toastify";

const NotificationContext = createContext<ToastContextType | null>(null);
export function NotificationContainerComponent({ children }: any) {
    const toastOptions: ToastContainerProps = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: false,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: "light",
    };

    const notify = (message: string, type: ToastType = "success", options?: ToastOptions) => { return toast[type](message, toastOptions) }
    return (<>
        <NotificationContext.Provider value={{ notify }}>
            {children}
            <ToastContainer {...toastOptions} />
        </NotificationContext.Provider>
    </>);
}
export const useNotify = () => {
    const context = useContext(NotificationContext);
    if (!context)
        throw new Error("useToast must be used within a ToastProvider");
    return context;
}