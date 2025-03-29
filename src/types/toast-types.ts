import { ToastOptions } from "react-toastify";

// Define toast types
export type ToastType = "success" | "error" | "info" | "warning";

// Define the context type
export interface ToastContextType {
    notify: (message: string, type?: ToastType, options?: ToastOptions) => void;
}
