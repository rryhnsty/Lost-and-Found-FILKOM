import Button from './ui/Button'

interface CardProps{
  image: string;
  title: string;
  location: string;
  date: string;
  tipe: string;
}

export default function Card({image, title, location, date, tipe}: CardProps){
  return(
    <div className="rounded-xl w-50 p-2 bg-white transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img className="w-full object-cover rounded-xl justify-center" src={image} alt={title}/>
        <div className="p-2">
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-sm text-gray-700">{location}</p>
          <p className="text-sm text-gray-700">{date}</p>
        </div>

        <div className="mt-0.5">
          <Button className="bg-blue-600 text-white font-sans hover:bg-blue-500 rounded-md">
            {tipe}
          </Button>
        </div>
    </div>
  );
}