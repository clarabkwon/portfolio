const MENU_ITEMS = ['FILE', 'EDIT', 'VIEW', 'HARVEST', 'HELP'] as const

export function MenuBar() {
  return (
    <div className="bg-bg-cream border-b-2 border-sage border-dashed px-4 py-1 text-sm font-bold flex gap-6 text-sage-dark">
      {MENU_ITEMS.map((item) => (
        <div
          key={item}
          className="cursor-pointer hover:text-peri hover:underline underline-offset-4 decoration-2"
        >
          {item}
        </div>
      ))}
    </div>
  )
}
