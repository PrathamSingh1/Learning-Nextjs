export default function Button({ title, onClick }) {
  return (
    <div
      onClick={onClick}
      className="px-3 py-1 bg-neutral-800 text-neutral-200 rounded-xl shadow-md cursor-pointer hover:bg-neutral-700 active:scale-[0.97]"
    >
      {title}
    </div>
  );
}
