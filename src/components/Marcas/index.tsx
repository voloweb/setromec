
type Marcas = {
  id: number;
  alt: string;
  src: string;
}
const marcas: Marcas[] = [
  { id: 1, alt: 'Logo Bradesco', src: 'assets/marcas/bradesco.png' },
  { id: 2, alt: 'Logo Bradesco', src: 'assets/marcas/bradesco.png' },
  { id: 3, alt: 'Logo Bradesco', src: 'assets/marcas/bradesco.png' },
  { id: 4, alt: 'Logo Bradesco', src: 'assets/marcas/bradesco.png' },
  { id: 5, alt: 'Logo Bradesco', src: 'assets/marcas/bradesco.png' },
  { id: 6, alt: 'Logo Bradesco', src: 'assets/marcas/bradesco.png' },
]

const Marcas = () => {
  return (
    <div className={`bg-setromec-light-1`}>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5 p-5 mx-auto max-w-7xl">
        {marcas.map((item: Marcas) => (
          <div key={item.id} className="flex justify-center items-center">
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marcas;
