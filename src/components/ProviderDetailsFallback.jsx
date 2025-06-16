import React from "react";

const variantStyles = {
  info: "text-blue-600 bg-blue-50 border-blue-200",
  warning: "text-yellow-700 bg-yellow-50 border-yellow-200",
  error: "text-red-600 bg-red-50 border-red-200",
  success: "text-green-600 bg-green-50 border-green-200",
};

function ProviderDetailsFallback({
  icon,
  variant = "info",
  loading = false,
  message,
  actionText,
  onAction,
}) {
  const style = variantStyles[variant] || variantStyles.info;

  return (
    <div
      className={`p-6 text-center border rounded-xl ${style} flex flex-col items-center justify-center gap-2`}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-transparent border-current mb-2"></div>
      ) : (
        icon && <div className="text-3xl">{icon}</div>
      )}
      <p className="text-sm sm:text-base">{message}</p>
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="mt-2 text-blue-600 hover:underline text-sm"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}

export default ProviderDetailsFallback;
