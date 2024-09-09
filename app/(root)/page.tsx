import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
   const events = [
     {
      id: 1,
      name: "Event 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      posterLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTE51hDk-5aOVEQJvPDfBKT4SwuAc9HL7aw&s"
     },
      {
        id: 2,
        name: "Event 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
        posterLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTE51hDk-5aOVEQJvPDfBKT4SwuAc9HL7aw&s"
      },
      {
        id: 3,
        name: "Event 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
        posterLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTE51hDk-5aOVEQJvPDfBKT4SwuAc9HL7aw&s"
      }

   ]
  return (
    <>
      <section className="bg-blue-50 py-5 px-auto">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 ">
            <h1 className="h1-bold">Welcome to NISTU Events</h1>
            <p className="p-regular-20 md:p-regular-24">
              NISTU Events is a platform for students to find and register for
              events happening in the college.
            </p>
            <Button asChild size={"lg"} className="w-full bg-blue-500 ">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <img
            className="max-h-[70vh] object-contain object-center "
            style={{ mixBlendMode: "multiply" }}
            src="https://img.freepik.com/premium-vector/man-plays-guitar-while-another-man-sets-up-microphone-front-laptop-screen_657438-46669.jpg?w=740"
            alt=""
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper py-5 "
      >
        <h2 className="h2-bold" >Events</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {events.map((event) => (
           <div key={event.id} className="group md:h-[60vh] h-[30vh]  relative overflow-hidden rounded-lg shadow-lg shadow-blue-400">
           <img
             className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
             src={event.posterLink}
             alt=""
           />
           <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <h3 className="h3-bold text-white">{event.name}</h3>
             <p className="p-regular-16 text-white mt-2">{event.description}</p>
             <Button asChild size={"sm"} className="w-full bg-blue-500 mt-4">
               <Link href={`/events/${event.id}`}>View Details</Link>
             </Button>
           </div>
         </div>
         
          ))}
        </div>
      </section>
    </>
  );
}
