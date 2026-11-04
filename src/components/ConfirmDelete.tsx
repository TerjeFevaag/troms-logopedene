"use client";

export function ConfirmDelete() {
  return (
    <button
      className="rounded-full border border-red-200 px-4 py-2 font-semibold text-red-700 hover:bg-red-50"
      onClick={(e) => {
        if (!window.confirm("Slette artikkelen permanent?")) e.preventDefault();
      }}
    >
      Slett
    </button>
  );
}
