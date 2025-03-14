"use client";

import type React from "react";

// Adapted from shadcn/ui toast component
import { useState, useCallback } from "react";

type ToastProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  duration?: number;
};

type Toast = ToastProps & {
  id: string;
  visible: boolean;
};

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(
    ({ title, description, action, duration = 5000 }: ToastProps) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: Toast = {
        id,
        title,
        description,
        action,
        duration,
        visible: true,
      };

      setToasts((prevToasts) => [...prevToasts, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          setToasts((prevToasts) =>
            prevToasts.map((t) => (t.id === id ? { ...t, visible: false } : t))
          );

          // Remove from DOM after animation
          setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
          }, 300);
        }, duration);
      }

      return id;
    },
    []
  );

  const dismiss = useCallback((id: string) => {
    setToasts((prevToasts) =>
      prevToasts.map((t) => (t.id === id ? { ...t, visible: false } : t))
    );

    // Remove from DOM after animation
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    }, 300);
  }, []);

  // Component to render toasts
  const Toaster = useCallback(() => {
    return (
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`bg-background border rounded-md shadow-lg p-4 transition-all duration-300 ${
              t.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            {t.title && <div className="font-semibold">{t.title}</div>}
            {t.description && (
              <div className="text-sm text-muted-foreground">
                {t.description}
              </div>
            )}
            {t.action && <div className="mt-2">{t.action}</div>}
            <button
              onClick={() => dismiss(t.id)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              aria-label="Close toast"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    );
  }, [toasts, dismiss]);

  return { toast, dismiss, Toaster };
}
